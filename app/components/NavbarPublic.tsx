"use client";

import Link from "next/link";

export default function NavbarPublic() {

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
            <Link className="" href="/userApps/raceTimes">
              Race Times
            </Link>
          </div>
           <div className="p-6">
            <Link className="" href="/userApps/ttTasks">
              Task Tracker
            </Link>
          </div>
                     <div className="p-6">
            <Link className="" href="/publicApps/bindecHeroku">
              Binary to Decimal
            </Link>
          </div>

        </div>
      </div>
    </>
       );
}

