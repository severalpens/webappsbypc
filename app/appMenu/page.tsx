"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-blue-500/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm mx-4">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
              <p className="text-gray-600 text-center mt-2">Please wait while the page loads.</p>
            </div>
          </div>
        </div>
      )}
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
                  <Link href="/userApps/raceTimes" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Race Times
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/raceTimes" onClick={handleLinkClick} className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/raceTimes" onClick={handleLinkClick} className="block text-gray-600">
                    Track your race times over various distances.
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Task Tracker
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" onClick={handleLinkClick} className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/ttTasks" onClick={handleLinkClick} className="block text-gray-600">
                    Track your tasks and to-dos.
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/userApps/todos" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Todo App
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/todos" onClick={handleLinkClick} className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/todos" onClick={handleLinkClick} className="block text-gray-600">
                    Track your tasks and to-dos.
                  </Link>
                </td>
              </tr>              
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/userApps/transactionLoader" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Transaction Loader
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/transactionLoader" onClick={handleLinkClick} className="block text-gray-700">
                    User app (log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/userApps/transactionLoader" onClick={handleLinkClick} className="block text-gray-600">
                    Load transactions from CSV files.
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Binary to Decimal
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" onClick={handleLinkClick} className="block text-gray-700">
                    Public app (no log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/bindecHeroku" onClick={handleLinkClick} className="block text-gray-600">
                    Convert binary numbers to decimal.
                  </Link>
                </td>
              </tr>              
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <Link href="/publicApps/route21" onClick={handleLinkClick} className="block font-medium text-blue-600 hover:text-blue-800">
                    Route 21
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/route21" onClick={handleLinkClick} className="block text-gray-700">
                    Public app (no log in required)
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/publicApps/route21" className="block text-gray-600">
                    Bus timetable for Ballarat Route 21.
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </main>
    </>
  );
}
