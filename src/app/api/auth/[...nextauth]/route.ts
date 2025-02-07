import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
import { MongoClient } from "mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { User } from "@prisma/client";

interface Session {
  user: {
    id: string;
    role: string;
  };
}

interface Account {
  provider: string;
}

interface Usuario {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

const client = new MongoClient(process.env.DATABASE_URL!);
const clientPromise = client.connect();

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const db = (await clientPromise).db();
        const user = await db
          .collection("Usuario")
          .findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        if (user.password) {
          const isValidPassword = await bcrypt.compare(
            credentials!.senha,
            user.senha
          );
          if (!isValidPassword) {
            throw new Error("Senha incorreta");
          }
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy, // Corrigido para evitar erro de tipagem
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async signIn({
      user,
      account,
    }: {
      user: Usuario;
      account: Account;
    }) {
      if (account?.provider === "google") {
        const db = (await clientPromise).db();
        const existingUser = await db
          .collection("User")
          .findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("User").insertOne({
            email: user.email,
            name: user.name,
            role: user.role,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
