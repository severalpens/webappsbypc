"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useRef } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface ParsedRow {
  [key: string]: string;
}

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Page() {
  const [transactions, setTransactions] = useState<
    Array<Schema["Transaction"]["type"]>
  >([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const [selectedTransactionIDs, setSelectedTransactionIDs] = useState<
    Array<string>
  >([]);
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(true);
  const [csvData, setCsvData] = useState<ParsedRow[]>([]);
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const [showCsvTable, setShowCsvTable] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { signOut } = useAuthenticator();

  
client.queries.sayHello({
  name: "Amplify",
})

  const parseCSV = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split("\n").filter((line) => line.trim() !== "");

      if (lines.length === 0) return;

      // No header row - use fixed column names
      const headers = ["txDate", "amount", "description"];
      setCsvHeaders(headers);

      // Parse all lines as data
      const rows: ParsedRow[] = [];
      for (let i = 0; i < lines.length; i++) {
        const values = lines[i].split('","').map((value) => value.trim());
        const row: ParsedRow = {};

        // Parse txDate from DD/MM/YYYY to YYYY-MM-DD
        if (values[0]) {
          const dateParts = values[0].replace(/"/g, "").split("/");
          if (dateParts.length === 3) {
            const [day, month, year] = dateParts;
            // remove '"' if present
            row["txDate"] = `${year}-${month}-${day}`;
          } else {
            row["txDate"] = values[0].replace(/"/g, "");
          }
        }

        // Add amount
        row["amount"] = values[1].replace(/"/g, "") || "";

        // Remove quotes from description
        let description = values[2] || "";
        if (description.startsWith('"')) {
          description = description.slice(1);
        }
        if (description.endsWith('"')) {
          description = description.slice(0, -1);
        }
        row["description"] = description;

        rows.push(row);
      }

      setCsvData(rows);
      setShowCsvTable(true);
    };
    reader.readAsText(file);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if ((file && file.type === "text/csv") || file?.name.endsWith(".csv")) {
      parseCSV(file);
    } else {
      alert("Please select a valid CSV file");
    }
  };

  useEffect(() => {
    const sub = client.models.Transaction.observeQuery().subscribe({
      next: ({ items }) => {
        setTransactions([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  function deleteSelectedTransactions() {
    selectedTransactionIDs.forEach(async (id) => {
      await client.models.Transaction.delete({ id });
    });
  }

  function deleteAllTransactions() {
    selectedTransactionIDs.forEach(async (id) => {
      await client.models.Transaction.delete({ id });
    });
    setSelectedTransactionIDs([]);
    setIsAllSelected(false);
  }

  const toggleSortFunc = () => {
    setToggleSort(!toggleSort);
  };

  const clearPreview = () => {
    setCsvData([]);
    setShowCsvTable(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {isUploading && (
        <div className="fixed inset-0 bg-blue-500/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm mx-4">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-800">Uploading...</h2>
              <p className="text-gray-600 text-center mt-2">Please wait while your transactions are being saved.</p>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Transactions
          </h1>
          <div>
            <button
              onClick={() => setShowTable(!showTable)}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              {showTable ? "Hide Table" : "Show Table"}
            </button>
            <button
              onClick={signOut}
              className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              Sign out
            </button>
          </div>
        </div>
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Say Hello</h2>
          <button
            onClick={async () => {
              const response = await client.queries.sayHello({ name: "User" });
              alert(response);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Say Hello
          </button>

        </div>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Bank / Institution
            </h2>
            <input type="text" placeholder="Default" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-all duration-300" />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Import CSV
            </h2>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>
          {showCsvTable && csvData.length > 0 && (
            <div className="mb-8 bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                CSV Preview
              </h3>
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="table-auto w-full bg-white">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {csvData.slice(0,5).map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        {csvHeaders.map((header) => (
                          <td
                            key={`${index}-${header}`}
                            className="px-6 py-4 text-gray-800"
                          >
                            {row[header]}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-gray-600 italic">
                        ...and {csvData.length - 5} more rows
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => clearPreview()}
                className="mt-4 bg-slate-500 hover:bg-slate-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Clear Preview
              </button>
              <button
                onClick={async () => {
                  setIsUploading(true);
                  try {
                    let skippedCount = 0;
                    for (const row of csvData) {
                      // Check if transaction with same txDate, Amount, and Description already exists
                      const { data: existingTransactions } = await client.models.Transaction.list({
                        filter: {
                          and: [
                            { TxDate: { eq: row.txDate } },
                            { Amount: { eq: parseFloat(row.amount) } },
                            { Description: { eq: row.description } },
                          ],
                        },
                      });

                      // Skip if duplicate found
                      if (existingTransactions && existingTransactions.length > 0) {
                        skippedCount++;
                        continue;
                      }

                      await client.models.Transaction.create({
                        TxDate: row.txDate,
                        Amount: parseFloat(row.amount),
                        Description: row.description,
                      });
                    }
                    clearPreview();
                    if (skippedCount > 0) {
                      alert(`Upload complete! ${skippedCount} duplicate transaction(s) were skipped.`);
                    }
                  } finally {
                    setIsUploading(false);
                  }
                }}
                disabled={isUploading}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Upload Transactions
              </button>
            </div>
          )}


        </section>
      </div>
    </main>
  );
}
