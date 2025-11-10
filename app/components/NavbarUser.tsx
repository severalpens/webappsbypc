"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";



export default function NavbarUser() {

  const { signOut } = useAuthenticator();

  return (
    <>
      <div className="container flex justify-between mx-auto  border m-4 border-black px-4 rounded-3xl">
        <div className="p-6 columns-2  flex ">
          <div className="p-6 ">
            <Link className="font-bold" href="/">
              Home
            </Link>
          </div>
          <div className="p-6">
            <Link className="" href="/songList">
              Song List
            </Link>
          </div>
          <div className="p-6">
            <button onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
       );
}

