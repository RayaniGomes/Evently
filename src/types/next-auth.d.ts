import type { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      criador: boolean
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    criador: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    criador: boolean
  }
}

