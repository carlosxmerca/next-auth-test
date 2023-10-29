"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default ({ email, password, value }) => (
  <button
    className="bg-[#84cc16] btn btn-primary rounded p-3 text-white"
    onClick={() =>
      signIn("credentials", { callbackUrl: "/protected", email, password })
    }
  >
    {value}
  </button>
);
