"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export default function ClientSideRoot(): any {
  const { data: session } = useSession();

  console.log("Client: ");
  console.log(session);

  const [shown, setShown] = useState<boolean>(false);
  const clickHandler = (): void => {
    setShown(!shown);
  };

  return (
    <div className="bg-black h-[100vh] flex flex-col text-white p-4 text-black items-center justify-center">
      <div>
        <h1 className="leading-loose text-[6rem] font-extrabold text-accent">
          Hi {session?.user?.name}!
        </h1>
      </div>
      <div>
        <p>Protected client page</p>
        <button className="bg-[#84cc16] btn btn-primary rounded p-3" onClick={clickHandler}>
          Toggle
        </button>
        {shown ? <pre>{JSON.stringify(session, null, 2)}</pre> : null}
      </div>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
