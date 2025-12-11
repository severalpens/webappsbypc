"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useRef } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import TodoCreateForm from "@/app/ui-components/TodoCreateForm";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Page() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(true);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedTodoIDs, setSelectedTodoIDs] = useState<Array<string>>([]);
  const [toggleSort, setToggleSort] = useState<boolean>(false);

  const { signOut } = useAuthenticator();

  // useEffect(() => {
  //   const sub = client.models.Todo.observeQuery().subscribe({
  //     next: ({ items }) => {
  //       setTodos([...items]);
  //     },
  //   });
  //   return () => sub.unsubscribe();
  // }, []);

  function deleteAllTodos() {
    selectedTodoIDs.forEach(async (id) => {
      await client.models.Todo.delete({ id });
    });
    setSelectedTodoIDs([]);
    setIsAllSelected(false);
  }

  const toggleShowTable = () => {
    setShowTable(!showTable);
  };

  const toggleSortFunc = () => {
    setToggleSort(!toggleSort);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            To-Do List
          </h1>
          <div>
            <button
              onClick={toggleShowTable}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              {showTable ? "Hide Table" : "Show Table"}
            </button>
            <button
              onClick={signOut}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 ml-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              Sign out
            </button>
          </div>
        </div>
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div id="newTodoForm" className="mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              {showForm ? "Hide New Todo Form" : "Add New Todo"}
            </button>
            {showForm && (
              <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
                <TodoCreateForm />
              </div>
            )}
          </div>
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
                id="deleteSelectedButton"
                onClick={() => deleteAllTodos()}
                className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                disabled={selectedTodoIDs.length === 0}
              >
                Delete Selected
              </button>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table id="todosTable" className="table-auto w-full bg-white">
                <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Created At
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <input
                        className="mr-2 w-4 h-4 cursor-pointer"
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedTodoIDs(
                              todos.map((todo) => todo.id)
                            );
                            setIsAllSelected(true);
                          } else {
                            setSelectedTodoIDs([]);
                            setIsAllSelected(false);
                          }
                        }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {todos
                    .sort((a, b) => {
                      const dateA = a.createdAt
                        ? new Date(a.createdAt)
                        : null;
                      const dateB = b.createdAt
                        ? new Date(b.createdAt)
                        : null;
                      return toggleSort
                        ? dateA && dateB
                          ? dateA.getTime() - dateB.getTime()
                          : 0
                        : dateA && dateB
                        ? dateB.getTime() - dateA.getTime()
                        : 0;
                    })
                    .map((todo) => (
                      <tr
                        key={todo.id}
                        className="hover:bg-slate-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-gray-800">
                          {todo.Name}
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              todo.IsCompleted
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {todo.IsCompleted ? "Completed" : "Pending"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-800">
                          {todo.createdAt
                            ? new Date(todo.createdAt).toLocaleString()
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 cursor-pointer"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedTodoIDs([
                                  ...selectedTodoIDs,
                                  todo.id,
                                ]);
                              } else {
                                setSelectedTodoIDs(
                                  selectedTodoIDs.filter(
                                    (id) => id !== todo.id
                                  )
                                );
                              }
                            }}
                            checked={selectedTodoIDs.includes(todo.id)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
