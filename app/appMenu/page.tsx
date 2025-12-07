"use client";

import Link from "next/link";


export default function Page() {

  return (
    <main className="container mx-auto p-4">
        <h1 className="text-2xl">Apps</h1>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">App Name</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <Link href="/userApps/raceTimes">Race Times</Link>
              </td>
                <td className="border px-4 py-2">User app (log in required)</td>
                <td className="border px-4 py-2">Track your race times over various distances.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <Link href="/userApps/ttTasks">Task Tracker</Link>
              </td>
                <td className="border px-4 py-2">User app (log in required)</td>
                <td className="border px-4 py-2">Track your tasks and to-dos.</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">
                    <Link href="/publicApps/bindecHeroku">Binary to Decimal</Link>
                </td>
                <td className="border px-4 py-2">Public app (no log in required)</td>
                <td className="border px-4 py-2">Convert binary numbers to decimal.</td>
            </tr>
          </tbody>
        </table>
    </main>
  );
}
