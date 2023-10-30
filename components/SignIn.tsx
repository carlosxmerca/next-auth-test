"use client";

import React from "react";
import { signIn } from "next-auth/react";

interface Props {
  email: string;
  password: string;
  value: string;
}

const SignInButton: React.FC<Props> = ({ email, password, value }) => (
  <button
    className="bg-[#84cc16] btn btn-primary rounded p-3 text-white"
    onClick={() =>
      signIn("credentials", { callbackUrl: "/protected", email, password })
    }
  >
    {value}
  </button>
);

export default SignInButton;