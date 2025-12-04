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

Amplify.configure(outputs);

const client = generateClient<Schema>();


function Page() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState<boolean>(false);

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
    <main>
      <h1 className="text-xl mb-4">Task Timer (Prototype)</h1>
      <div id="newTimeForm" className="mb-12">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-48"
        >
          {showForm ? 'Hide Form' : 'Add New'}
        </button>
        {showForm && <TtTaskCreateForm />}
      </div>
      <div className="overflow-x-auto">
        <table id="ttTasksTable" className="table-auto w-full" >
          <thead>
            <tr>
            <th className="border px-4 py-2">Projects</th>
            <th className="border px-4 py-2">Tasks</th>
            <th className="border px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {ttTasks
              .map((ttTask) => (
                <tr key={ttTask.id}>
                  <td className="border px-4 py-2">
                    {ttTask.ProjectName}
                  </td>
                  <td className="border px-4 py-2 ">
                    {ttTask.TaskName}
                  </td>
                  <td className="border px-4 py-2 flex justify-evenly">
                    <button id="StartStopTaskButton"
                      disabled={isButtonsDisabled}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => startStopTask(ttTask)}
                    >{ttTask.IsRunning ? 'Stop' : 'Start'}</button>
                    <button id="EditTaskButton"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                      onClick={() => deleteTask(ttTask)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <TtTaskTimeBlocks />
      <TtTasksChart1 ttTaskTimeBlocks={ttTaskTimeBlocks} ttTasks={ttTasks} />
    </main>
  );
}

export default Page;

