import React from "react";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Protected(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-black h-[100vh] flex flex-col text-white p-4 text-black items-center justify-center">
      <div className="my-10">
        {session !== null ? (
          <h1 className="leading-loose text-[6rem] font-extrabold text-accent">
            Hi {session?.user?.name}!
          </h1>
        ) : (
          <a className="bg-[#84cc16] btn btn-primary rounded p-3" href="/api/auth/signin">
            Sign in
          </a>
        )}
      </div>
      <Link href="/">Home</Link>
    </div>
  );
}
