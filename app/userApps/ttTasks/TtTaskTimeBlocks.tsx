import { useEffect,  useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import '@aws-amplify/ui-react/styles.css';


const client = generateClient<Schema>();


function TtTaskTimeBlocks() {
  const [ttTaskTimeBlocks, setTtTaskTimeBlocks] = useState<Array<Schema["TtTaskTimeBlock"]["type"]>>([]);
  const [ttTasks, setTtTasks] = useState<Array<Schema["TtTask"]["type"]>>([]);
  useEffect(() => {
    client.models.TtTask.observeQuery().subscribe({
      next: (data) => setTtTasks([...data.items]),
    });
    client.models.TtTaskTimeBlock.observeQuery().subscribe({
      next: (data) => setTtTaskTimeBlocks([...data.items]),
    });
  }, []);

  const deleteAllTaskTimeBlocks = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete all logs?');
    if (!confirmDelete) {
      return;
    }
    for (const ttTaskTimeBlock of ttTaskTimeBlocks) {
      await client.models.TtTaskTimeBlock.delete({ id: ttTaskTimeBlock.id });
    }
  }

  
  return (
    <div id="ttTaskTimeBlockTableDiv" className="mt-8">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Activity Logs</h2>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table id="ttTaskTimeBlockTable" className="table-auto w-full bg-white">
          <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Task</th>
              <th className="px-4 py-2 text-left font-semibold">Start Time</th>
              <th className="px-4 py-2 text-left font-semibold">End Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ttTaskTimeBlocks
              .sort((a, b) => {
                const aStartTime = a.StartTime ? new Date(a.StartTime) : new Date();
                const bStartTime = b.StartTime ? new Date(b.StartTime) :  new Date();
                return bStartTime.getTime() - aStartTime.getTime();
                
              })
              .map((ttTaskTimeBlock) => (
                <tr key={ttTaskTimeBlock.id} className="hover:bg-slate-50 transition-colors duration-200">
                  <td className="px-4 py-2 text-gray-800">
                    {ttTasks.find((ttTask) => ttTask.id === ttTaskTimeBlock.TtTaskId)?.TaskName}
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {ttTaskTimeBlock.StartTime ? new Date(ttTaskTimeBlock.StartTime).toLocaleString('en-AU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }) : ''}
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {ttTaskTimeBlock.EndTime ? new Date(ttTaskTimeBlock.EndTime).toLocaleString('en-AU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }) : ''}
                  </td>
                </tr>
              ))} 
          </tbody>
        </table>
      </div>
      <button onClick={deleteAllTaskTimeBlocks} className="mt-6 bg-white border-2 border-red-300 hover:border-red-400 hover:bg-red-50 text-red-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">  
        Delete All Logs
      </button>
    </div>

  );
}

export default TtTaskTimeBlocks;

