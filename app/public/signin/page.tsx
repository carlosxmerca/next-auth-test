import React from "react";
import SignIn from "../../../components/SignIn";
import Link from "next/link";

// This form can be much more complex!
export default function SignInPage() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-5">
      <SignIn email={"123"} password={"123"} />
      <Link href="/">Home</Link>
    </div>
  );
}
