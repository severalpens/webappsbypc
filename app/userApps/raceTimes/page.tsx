"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useRef } from "react";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import chart1Options from "../raceTimes/chart1Options";
import RaceTimeCreateForm from "../../ui-components/RaceTimeCreateForm";
import raceTimesSeedData from "./raceTimesSeedData.json";
import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Page() {
  const [raceTimes, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>(
    []
  );
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(true);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedRaceTimeIDs, setSelectedRaceTimeIDs] = useState<Array<string>>(
    []
  );
  const chartOptions = chart1Options(raceTimes);
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const { signOut } = useAuthenticator();

  useEffect(() => {
    const sub = client.models.RaceTime.observeQuery().subscribe({
      next: ({ items }) => {
        setRaceTimes([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const seedRaceTimes = async () => {
    for (const raceTime of raceTimesSeedData) {
      const res = await client.models.RaceTime.create({
        RaceDate: raceTime.RaceDate,
        RaceDistance: raceTime.RaceDistance,
        RaceMins: raceTime.RaceMins,
        RaceSecs: raceTime.RaceSecs,
      });
      console.log(res);
    }
  };

  function deleteAllRaceTimes() {
    selectedRaceTimeIDs.forEach(async (id) => {
      await client.models.RaceTime.delete({ id });
    });
    setSelectedRaceTimeIDs([]);
    setIsAllSelected(false);
  }

  const toggleShowTable = () => {
    setShowTable(!showTable);
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const toggleSortFunc = () => {
    setToggleSort(!toggleSort);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Race Times
          </h1>
          <button
            onClick={signOut}
            className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Sign out
          </button>
        </div>
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-64"
            >
              {showForm ? "Hide New Time Form" : "Add New Time"}
            </button>
            {showForm && (
              <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
                <RaceTimeCreateForm />
              </div>
            )}
          </div>
          <button
            onClick={toggleShowTable}
            className="mb-6 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-64"
          >
            {showTable ? "Hide Table" : "Show Table"}
          </button>
          <div hidden={!showTable}>
            <div className="flex flex-wrap gap-3 justify-end mb-6">
              <button
                id="sortTable"
                onClick={toggleSortFunc}
                className="bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm"
              >
                Sort {toggleSort ? "↓" : "↑"}
              </button>
              <button
                id="seedRaceTimes"
                onClick={seedRaceTimes}
                className="bg-white border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm"
              >
                Seed Data
              </button>
              <button
                id="deleteSelectedButton"
                onClick={() => deleteAllRaceTimes()}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                disabled={selectedRaceTimeIDs.length === 0}
              >
                Delete Selected
              </button>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table id="raceTimesTable" className="table-auto w-full bg-white">
                <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Race Distance
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Race Date
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Race Time
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <input
                        className="mr-2 w-4 h-4 cursor-pointer"
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRaceTimeIDs(
                              raceTimes.map((raceTime) => raceTime.id)
                            );
                            setIsAllSelected(true);
                          } else {
                            setSelectedRaceTimeIDs([]);
                            setIsAllSelected(false);
                          }
                        }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {raceTimes
                    .sort((a, b) => {
                      const dateA = a.RaceDate
                        ? new Date(a.RaceDate.toString())
                        : null;
                      const dateB = b.RaceDate
                        ? new Date(b.RaceDate.toString())
                        : null;
                      return toggleSort
                        ? dateA && dateB
                          ? dateA.getTime() - dateB.getTime()
                          : 0
                        : dateA && dateB
                        ? dateB.getTime() - dateA.getTime()
                        : 0;
                    })
                    .map((raceTime) => (
                      <tr
                        key={raceTime.id}
                        className="hover:bg-slate-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-gray-800">
                          {raceTime.RaceDistance}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {raceTime.RaceDate}
                        </td>
                        <td className="px-6 py-4 text-gray-800 font-semibold">
                          {raceTime.RaceMins}:
                          {raceTime.RaceSecs != null
                            ? raceTime.RaceSecs < 10
                              ? `0${raceTime.RaceSecs}`
                              : raceTime.RaceSecs
                            : "00"}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedRaceTimeIDs([
                                  ...selectedRaceTimeIDs,
                                  raceTime.id,
                                ]);
                              } else {
                                setSelectedRaceTimeIDs(
                                  selectedRaceTimeIDs.filter(
                                    (id) => id !== raceTime.id
                                  )
                                );
                              }
                            }}
                            checked={selectedRaceTimeIDs.includes(raceTime.id)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8" id="chart">
            <button
              onClick={toggleChart}
              className="mb-6 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-64"
            >
              {showChart ? "Hide Chart" : "Show Chart"}
            </button>
            {showChart && (
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                  ref={chartComponentRef}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
