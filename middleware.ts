import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("Middleware is being used!");
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // TODO: add request to Rest API to check if token is valid
        return token !== null;
      },
      // authorized: ({ token }) => token?.role === "admin",
    },
    secret: "4X3O*;9piVM9"
  }
)

export const config = { matcher: ["/protected"] }
