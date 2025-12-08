"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {

  return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <div className="flex  mb-8">
                <div></div>
                <h3 className="text-2xl font-normal">
                   BinDec Instructions
                </h3>
            </div>
       
            <div className="mb-8">
                <dl className="mb-4">
                    <dd>
                        Add up the corresponding values of the binary index based on their position from right to left  eg:
                    </dd>
                </dl>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">
                                Binary
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Decimal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2">00000001</td><td className="border border-gray-300 px-4 py-2">1</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000010</td><td className="border border-gray-300 px-4 py-2">2</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000011</td><td className="border border-gray-300 px-4 py-2">3</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000100</td><td className="border border-gray-300 px-4 py-2">4</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000101</td><td className="border border-gray-300 px-4 py-2">5</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000110</td><td className="border border-gray-300 px-4 py-2">6</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00000111</td><td className="border border-gray-300 px-4 py-2">7</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">00001000</td><td className="border border-gray-300 px-4 py-2">8</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">etc..</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-8">
                <dl className="mb-4">
                    <dt className="font-semibold">
                        Lookup Table:
                    </dt>
                </dl>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr><th className="border border-gray-300 px-4 py-2">Index (x)</th><th className="border border-gray-300 px-4 py-2">Value (2<sup>x</sup>)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2">0</td><td className="border border-gray-300 px-4 py-2">1</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">2</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">4</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">8</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">16</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">32</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">64</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">128</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">256</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}