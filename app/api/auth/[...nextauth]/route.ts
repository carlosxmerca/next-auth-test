import { authenticate } from "../../../services/authService"
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials, req) {
        if (typeof credentials !== "undefined") {
          const res = await authenticate(credentials.email, credentials.password)
          if (typeof res !== "undefined") {
            return { ...res, api: "holaaaa" }
          } else {
            return null
          }
        } else {
          return null
        }
      }
    })
  ],
  secret: "4X3O*;9piVM9",
  session: { 
    strategy: "jwt",
    // maxAge: 1 * 60, // 1 Min
    maxAge: 1 * 60 * 60, // 1 Hora
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }