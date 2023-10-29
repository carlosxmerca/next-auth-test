import NextAuth, { DefaultSession } from "next-auth"

// This is still not working... :(
declare module "next-auth" {
  interface Session {
    user: {
      secret: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    secret?: string | null
  }
}