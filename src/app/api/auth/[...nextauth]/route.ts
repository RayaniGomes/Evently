import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { Usuario } from "@/interfaces";
import { Session } from 'next-auth';

interface Token {
  token: Usuario;
  user: Usuario;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Aqui você faria uma chamada para sua API para autenticar o usuário
        const res = await fetch(`${process.env.API_URL}/auth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            senha: credentials.password,
            
          }),
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: Token ) {
      if (user) {
        token.criador = user.criador
      }
      return token
    },
    async session({ session, token }: { session: Session, token: Token }) {
      if (session?.user) {
        session.user.criador = token.criador
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

