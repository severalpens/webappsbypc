"use client";

// import "./App.css";

import { useEffect, useState } from "react";
import TimeCalculator from "./TimeCalculator";
import NextRecycleBinDay from "./NextRecycleBinDay";

export default function Page() {
  const [buninyong, setBuninyong] = useState("");
  const [fedUniInbound, setFedUniInbound] = useState("");
  const [fedUniOutbound, setFedUniOutbound] = useState("");
  const [ballarat, setBallarat] = useState("");

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
    <div className="text-center">
      <header className="min-h-screen bg-slate-800 text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl m-8">Route 21</h2>
        <p className="mb-4">
          Next Bus based on{" "}
          <a
            href="https://www.ptv.vic.gov.au/route/15169/21-ballarat-station-buninyong-via-federation-university/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            timetable
          </a>
        </p>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="border border-gray-400">
              <th className="w-80 text-left p-5 border border-gray-400">Bus Stop</th>
              <th className="w-40 text-left p-5 border border-gray-400">Direction</th>
              <th className="w-24 text-right p-5 border border-gray-400">Next</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-400">
              <td className="w-80 text-left p-5 border border-gray-400">Buninyong (terminus)</td>
              <td className="w-40 text-left p-5 border border-gray-400">Inbound</td>
              <td className="w-24 text-right p-5 border border-gray-400">{buninyong}</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="w-80 text-left p-5 border border-gray-400">Fed Uni</td>
              <td className="w-40 text-left p-5 border border-gray-400">Inbound</td>
              <td className="w-24 text-right p-5 border border-gray-400">{fedUniInbound}</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="w-80 text-left p-5 border border-gray-400">Fed Uni</td>
              <td className="w-40 text-left p-5 border border-gray-400">Outbound</td>
              <td className="w-24 text-right p-5 border border-gray-400">{fedUniOutbound}</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="w-80 text-left p-5 border border-gray-400">Ballarat Interchange</td>
              <td className="w-40 text-left p-5 border border-gray-400">Outbound</td>
              <td className="w-24 text-right p-5 border border-gray-400">{ballarat}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-8">
          <h5>Next Recycle Bin Day In:</h5>
          <div>{new NextRecycleBinDay().GetDaysToNextRecycleBinDay()} days</div>
          <div>({new NextRecycleBinDay().GetNextRecycleBinDay()})</div>
        </div>
        <footer className="pt-24 text-sm">
          <p>
            by <a href="https://webappsbypc.com" className="inherit">webappsbypc.com</a>
          </p>
        </footer>
      </header>
    </div>
  );
}
