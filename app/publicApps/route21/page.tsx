"use client";

import './App.css';
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
    <div className="App">
      <header className="App-header">
      <h2>Route 21 Arrival Countdown</h2>
        <p>Next Bus based on <a href="https://www.ptv.vic.gov.au/route/15169/21-ballarat-station-buninyong-via-federation-university/" target="_blank" rel="noreferrer">timetable</a></p>
        <table>
          <thead>
            <tr>
              <th className="c1">Bus Stop</th>
              <th className="c2">Direction</th>
              <th className="c3">Next</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="c1">Buninyong (terminus)</td>
              <td className="c2">Inbound</td>
              <td className="c3">
                  {buninyong}
              </td>
            </tr>
            <tr>
              <td className="c1">Fed Uni</td>
              <td className="c2">Inbound</td>
              <td className="c3">
                {fedUniInbound}
              </td>
            </tr>
            <tr>
              <td className="c1">Fed Uni</td>
              <td className="c2">Outbound</td>
              <td className="c3">
                {fedUniOutbound}
              </td>
            </tr>
            <tr>
              <td className="c1">Ballarat Interchange</td>
              <td className="c2">Outbound</td>
              <td className="c3">
                {ballarat}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
    <h5>Next Recycle Bin Day In:</h5>
    <div>
    {new NextRecycleBinDay().GetDaysToNextRecycleBinDay()} days
    </div>
    <div>
      ({new NextRecycleBinDay().GetNextRecycleBinDay()})
    </div>
        </div>
        <footer>
        <p>by <a href="https://webappsbypc.com">webappsbypc.com</a></p>
        </footer>
        <div className='source-code'>
          <p>Source code: <a href="https://github.com/severalpens/webappsbypc">GitHub</a></p>
        </div>
      </header>
    </div>
  );
}
