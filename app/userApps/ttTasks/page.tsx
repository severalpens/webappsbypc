"use client";

import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';
import TtTaskCreateForm from '../../ui-components/TtTaskCreateForm';
import TtTaskTimeBlocks from "./TtTaskTimeBlocks";
import TtTasksChart1 from "./TtTasksChart1";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();


function Page() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState<boolean>(false);
  const { signOut } = useAuthenticator();

  useEffect(() => {
    client.models.TtTask.observeQuery().subscribe({
      next: (data) => setTtTasks([...data.items]),
    });
    client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: (data) => setTtTaskTimeBlocks([...data.items]),
    });
  }, []);


// deleteAllTaskTimeBlocks();

  const setAllIsRunningToFalse = async () => {
    const tasks = ttTasks.filter((task) => task.IsRunning);

    for await (const task of tasks) {
      await client.models.TtTask.update({ id: task.id, IsRunning: false });
      
    }
    const timeBlocks = ttTaskTimeBlocks.filter((timeBlock) =>  !timeBlock.EndTime);

    for await (const timeBlock of timeBlocks) {
      await client.models.TtTaskTimeBlock.update({ id: timeBlock.id, EndTime: new Date().toISOString() });
  }

  }

  const startStopTask = async (ttTask: Schema["TtTask"]["type"]) => {
    setIsButtonsDisabled(true);

    if (!ttTask.IsRunning) {
      await setAllIsRunningToFalse();
      await client.models.TtTask.update({ id: ttTask.id, IsRunning: true });
      await client.models.TtTaskTimeBlock.create({ TtTaskId: ttTask.id, StartTime: new Date().toISOString() });
    }

    else{
      await setAllIsRunningToFalse();
    }

    setIsButtonsDisabled(false);
  }

  const deleteTask = async (ttTask: Schema["TtTask"]["type"]) => {
    await client.models.TtTask.delete({ id: ttTask.id });
    const timeBlocks = ttTaskTimeBlocks.filter((timeBlock) => timeBlock.TtTaskId === ttTask.id);
    const deleteLogs = window.confirm("Delete related logs?");
    if (deleteLogs) {
    for await (const timeBlock of timeBlocks) {
      await client.models.TtTaskTimeBlock.delete({ id: timeBlock.id });
    }
  }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Task Timer
          </h1>
          <button
            onClick={signOut}
            className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Sign out
          </button>
        </div>
          <div id="newTimeForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              {showForm ? 'Hide Form' : 'Add New Task'}
            </button>
            {showForm && (
              <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
                <TtTaskCreateForm />
              </div>
            )}
          </div>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table id="ttTasksTable" className="table-auto w-full bg-white">
              <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Projects</th>
                  <th className="px-4 py-2 text-left font-semibold">Tasks</th>
                  <th className="px-4 py-2 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ttTasks
                  .map((ttTask) => (
                    <tr key={ttTask.id} className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="px-4 py-2 text-gray-800">
                        {ttTask.ProjectName}
                      </td>
                      <td className="px-4 py-2 text-gray-800">
                        {ttTask.TaskName}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center gap-2">
                          <button id="StartStopTaskButton"
                            disabled={isButtonsDisabled}
                            className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-1 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => startStopTask(ttTask)}
                          >{ttTask.IsRunning ? 'Stop' : 'Start'}</button>
                          <button id="EditTaskButton"
                            className="bg-white border-2 border-red-300 hover:border-red-400 hover:bg-red-50 text-red-700 font-medium py-1 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            onClick={() => deleteTask(ttTask)}
                          >Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <TtTaskTimeBlocks />
          </div>
          <div className="mt-8">
            <TtTasksChart1 ttTaskTimeBlocks={ttTaskTimeBlocks} ttTasks={ttTasks} />
          </div>
      </div>
    </main>
  );
}

export default Page;

