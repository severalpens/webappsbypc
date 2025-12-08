"use client";

import { useEffect, useState } from 'react';
import TimeCalculator from './TimeCalculator';
import NextRecycleBinDay from './NextRecycleBinDay';

export default function Page() {
  const [buninyong, setBuninyong] = useState('')
  const [fedUniInbound, setFedUniInbound] = useState('')
  const [fedUniOutbound, setFedUniOutbound] = useState('')
  const [ballarat, setBallarat] = useState('')

  useEffect(() => {
    setTimeout(async () => {
      let tc = new TimeCalculator();
      setBuninyong(tc.next(1, 1));
      setFedUniInbound(tc.next(0, 1));
      setFedUniOutbound(tc.next(0, 0));
      setBallarat(tc.next(2, 0));
    }, 1000);
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Route 21 Ballarat Bus Times
          </h1>
        </div>

        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <p className="text-gray-700 mb-6">
            Based on{' '}
            <a 
              href="https://www.ptv.vic.gov.au/route/15169/21-ballarat-station-buninyong-via-federation-university/" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              timetable
            </a>
          </p>

          <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
            <table className="table-auto w-full bg-white">
              <thead className="bg-gradient-to-r from-green-700 to-green-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Bus Stop</th>
                  <th className="px-6 py-4 text-left font-semibold">Direction</th>
                  <th className="px-6 py-4 text-right font-semibold">Next</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="hover:bg-green-50 transition-colors duration-200 border-white">
                  <td className="px-6 py-4 text-gray-800">Buninyong (terminus)</td>
                  <td className="px-6 py-4 text-gray-800">Inbound</td>
                  <td className="px-6 py-4 text-gray-800 text-right font-semibold">
                    {buninyong}
                  </td>
                </tr>
                <tr className="hover:bg-green-50 transition-colors duration-200 border-white">
                  <td className="px-6 py-4 text-gray-800">Fed Uni</td>
                  <td className="px-6 py-4 text-gray-800">Inbound</td>
                  <td className="px-6 py-4 text-gray-800 text-right font-semibold">
                    {fedUniInbound}
                  </td>
                </tr>
                <tr className="hover:bg-green-50 transition-colors duration-200 border-white">
                  <td className="px-6 py-4 text-gray-800">Fed Uni</td>
                  <td className="px-6 py-4 text-gray-800">Outbound</td>
                  <td className="px-6 py-4 text-gray-800 text-right font-semibold">
                    {fedUniOutbound}
                  </td>
                </tr>
                <tr className="hover:bg-green-50 transition-colors duration-200 border-white">
                  <td className="px-6 py-4 text-gray-800">Ballarat Interchange</td>
                  <td className="px-6 py-4 text-gray-800">Outbound</td>
                  <td className="px-6 py-4 text-gray-800 text-right font-semibold">
                    {ballarat}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h5 className="text-xl font-semibold text-gray-800 mb-3">Next Recycle Bin Day In:</h5>
            <div className="text-2xl font-bold text-green-700">
              {new NextRecycleBinDay().GetDaysToNextRecycleBinDay()} days
            </div>
            <div className="text-gray-600 mt-2">
              ({new NextRecycleBinDay().GetNextRecycleBinDay()})
            </div>
          </div>

          <footer className="mt-12 text-center text-gray-600">
            <p className="mb-2">
              by{' '}
              <a 
                href="https://webappsbypc.com"
                className="text-blue-600 hover:text-blue-800"
              >
                webappsbypc.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Source code:{' '}
              <a 
                href="https://github.com/severalpens/webappsbypc"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                GitHub
              </a>
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}
