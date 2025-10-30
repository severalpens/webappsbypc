import { useEffect, useRef, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import RaceTimeCreateForm from '../ui-components/RaceTimeCreateForm';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import raceTimesSeedData from './raceTimesSeedData.json';
import { AuthUser } from "aws-amplify/auth";
import chart1Options from "./chart1Options";

const client = generateClient<Schema>();

function Page({ user }: { user: AuthUser }) {
  const [raceTimes, setRaceTimes] = useState<Array<Schema["RaceTime"]["type"]>>([]);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedRaceTimeIDs, setSelectedRaceTimeIDs] = useState<Array<string>>([]);
  const chartOptions = chart1Options(raceTimes);
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  
  useEffect(() => {
    const sub = client.models.RaceTime.observeQuery().subscribe({
      next: ({ items }) => {
        setRaceTimes([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const seedRaceTimes = async () => {
    const confirmSeedRaceTimes = window.confirm("Are you sure you want to seed race times?");
    if (confirmSeedRaceTimes) {
      raceTimesSeedData.forEach(async (raceTime: { RaceDistance: number; RaceDate: string; RaceMins: number; RaceSecs: number; }) => {
        await client.models.RaceTime.create(raceTime);
      });
    }
  }

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
        <main>
          {user && (
          <section>
          <h1 className="text-xl mb-4">Race Times (Prototype)</h1>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showForm ? 'Hide New Time Form' : 'Add New Time'}
            </button>
            {showForm && <RaceTimeCreateForm />}
          </div>
            <button
              onClick={toggleShowTable}
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showTable ? 'Hide Table' : 'Show Table'}
            </button>
            <div hidden={!showTable}>
              <div className="flex justify-end mb-4">
              <button id="sortTable" onClick={toggleSortFunc} className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm mr-4">
                  Sort
                </button>
                <button id="seedRaceTimes" onClick={seedRaceTimes} className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm mr-4">
                  Seed Race Times
                </button>
                <button id="deleteSelectedButton"
                  onClick={() => deleteAllRaceTimes()}
                  className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white  px-4 rounded text-sm"
                  disabled={selectedRaceTimeIDs.length === 0}
                >
                  Delete Selected
                </button>
              </div>
              <div className="overflow-x-auto">
                <table  id="raceTimesTable" className="table-auto w-full" >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Race Distance</th>
                      <th className="border px-4 py-2">Race Date</th>
                      <th className="border px-4 py-2">Race Time</th>
                      <th className="border px-4 py-2">
                        <input
                          className="mr-2"
                          type="checkbox"
                          checked={isAllSelected}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRaceTimeIDs(raceTimes.map(raceTime => raceTime.id));
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
                  <tbody>
                    {raceTimes
                      .sort((a, b) => {
                        const dateA = a.RaceDate ? new Date(a.RaceDate.toString()) : null;
                        const dateB = b.RaceDate ? new Date(b.RaceDate.toString()) : null;
                        return toggleSort ? dateA && dateB ? dateA.getTime() - dateB.getTime() : 0 : dateA && dateB ? dateB.getTime() - dateA.getTime() : 0;
                      })
                      .map((raceTime) => (
                        <tr key={raceTime.id}>
                          <td className="border px-4 py-2">{raceTime.RaceDistance}</td>
                          <td className="border px-4 py-2">{raceTime.RaceDate}</td>
                          <td className="border px-4 py-2">
                            {raceTime.RaceMins}:
                            {raceTime.RaceSecs != null
                              ? raceTime.RaceSecs < 10
                                ? `0${raceTime.RaceSecs}`
                                : raceTime.RaceSecs
                              : 0}
                          </td>
                          <td className="border px-4 py-2">
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedRaceTimeIDs([...selectedRaceTimeIDs, raceTime.id]);
                                } else {
                                  setSelectedRaceTimeIDs(selectedRaceTimeIDs.filter(id => id !== raceTime.id));
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
          <div className="mt-4" id="chart">
            <button
              onClick={toggleChart}
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
            >
              {showChart ? 'Hide Chart' : 'Show Chart'}
            </button>
            {showChart && (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                ref={chartComponentRef}
              />
            )}
          </div>
        </section>
      )}
        </main>

      );
}

export default Page;

