import { authenticate } from "../../../services/authService";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          const res = await authenticate(
            credentials.email,
            credentials.password
          );
          if (typeof res !== "undefined") {
            return res;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  secret: "4X3O*;9piVM9",
  session: {
    strategy: "jwt",
    // maxAge: 1 * 60, // 1 Min
    maxAge: 1 * 60 * 60, // 1 Hora
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        // Add REST API token
        token.token = user.secret;
      }
      return token;
    },
    async session({ session, user, token }) {
      // Add Rest API token from token to session
      session.user.token = token.token as string;
      return session;
    },
  },
  // This is needed for custom login
  pages: {
    signIn: "/public/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
