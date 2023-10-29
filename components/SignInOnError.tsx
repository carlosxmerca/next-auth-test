"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

// This works from client side but it can also work from server side
export default function SignInOnError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return error == "CredentialsSignin" ? <p className="text-red-600">Credentials are not valid</p> : "";
}
