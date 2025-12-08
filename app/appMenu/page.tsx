"use client";

import Link from "next/link";


export default function Page() {

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Apps</h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">App Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/userApps/raceTimes" className="block font-medium text-blue-600 hover:text-blue-800">
                    Race Times
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/raceTimes" className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/raceTimes" className="block text-gray-600">
                    Track your race times over various distances.
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" className="block font-medium text-blue-600 hover:text-blue-800">
                    Task Tracker
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" className="block text-gray-600">
                    Track your tasks and to-dos.
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" className="block font-medium text-blue-600 hover:text-blue-800">
                    Binary to Decimal
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" className="block text-gray-700">
                    Public app (no log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" className="block text-gray-600">
                    Convert binary numbers to decimal.
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </main>
  );
}
