import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      creator: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    creator: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    creator: boolean;
  }
}
