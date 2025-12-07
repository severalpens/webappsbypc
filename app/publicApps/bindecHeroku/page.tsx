"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
  const timeoutSeconds = 20;
  const [progressValue, setProgressValue] = useState<number>(timeoutSeconds);
  const [responseInput, setResponseInput] = useState<string>("");
  const [submittedBinary, setSubmittedBinary] = useState<string>("");
  const [submittedDecimal, setSubmittedDecimal] = useState<number>(0);
  const [submittedResponse, setSubmittedResponse] = useState<string>("");
  const [submittedResult, setSubmittedResult] = useState<string>("");
  const [paused, setPaused] = useState<boolean>(false);
  const [restartCounter, setRestartCounter] = useState<boolean>(false);
  const [bits, setBits] = useState<string>("");
  const [decimal, setDecimal] = useState<number>(0);
  const [score, setScore] = useState({ correct: 0, attempts: 0 });
  const [difficultyLevel, setDifficultyLevel] = useState<number>(0);
  const [inputClass, setInputClass] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize and generate first question
  useEffect(() => {
    newQuestion();
  }, []);

  // Handle difficulty level change
  useEffect(() => {
    // Reset everything when difficulty changes
    setScore({ correct: 0, attempts: 0 });
    setProgressValue(timeoutSeconds);
    newQuestion();
  }, [difficultyLevel]);

  // Start countdown timer
  useEffect(() => {
    let secondsRemaining = timeoutSeconds;
    
    intervalRef.current = setInterval(() => {
      setProgressValue(secondsRemaining);
      secondsRemaining = paused ? secondsRemaining : secondsRemaining - 1;
      
      if (restartCounter) {
        secondsRemaining = timeoutSeconds;
        setRestartCounter(false);
      }
      
      if (secondsRemaining < 0) {
        secondsRemaining = timeoutSeconds;
        processAnswer(true);
        newQuestion();
        setRestartCounter(true);
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused, restartCounter, decimal, score]);

  function newQuestion() {
    let newDecimal = 0;
    
    switch (difficultyLevel) {
      case 0:
        newDecimal = Math.floor((Math.random() * 15) + 1);
        break;
      case 1:
        newDecimal = 16 * Math.floor((Math.random() * 15) + 1);
        break;
      case 2:
        newDecimal = Math.floor((Math.random() * 255) + 1);
        break;
      default:
        break;
    }

    if (score.attempts % 7 === 0) {
      newDecimal = 8; //168
    }

    if (score.attempts % 9 === 0) {
      newDecimal = 7; //192
    }

    const rawBits = "00000000" + newDecimal.toString(2);
    const newBits = rawBits.slice(-8);
    
    setDecimal(newDecimal);
    setBits(newBits);
  }

  function processAnswer(timedOut: boolean): number {
    setSubmittedBinary(bits);
    setSubmittedDecimal(decimal);
    
    if (timedOut) {
      setSubmittedResponse("Timeout");
      setSubmittedResult("Incorrect");
      updateScore(0);
      return 0;
    } else {
      const response = parseInt(responseInput);
      const result = response === decimal;
      setSubmittedResponse(response.toString());
      setSubmittedResult(result ? "Correct" : "Incorrect");
      updateScore(result ? 1 : 0);
      return result ? 1 : 0;
    }
  }

  function updateScore(result: number) {
    console.log("update Score: " + result);
    
    setScore(prev => ({
      correct: prev.correct + result,
      attempts: prev.attempts + 1
    }));
    
    if (result) {
      console.log("success");
      setInputClass("success");
    } else {
      console.log("fail");
      setInputClass("failure");
    }
  }

  function handlePauseClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPaused(!paused);
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    processAnswer(false);
    setResponseInput("");
    setPaused(false);
    setRestartCounter(true);
    newQuestion();
  }

  function handleDifficultyChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDifficultyLevel(e.target.selectedIndex);
  }

  return (
    <main className="min-h-screen  py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Binary to Decimal Skill Tester</h1>
          <a 
            href="/publicApps/bindecHeroku/instructions" 
            className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Instructions
          </a>
        </div>

    <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <form id="form" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="difficultyLevel" className="block text-sm font-semibold text-slate-700 mb-2">
              Difficulty Level
            </label>
            <select 
              id="difficultyLevel" 
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-700 font-medium transition-all"
              onChange={handleDifficultyChange}
            >
              <option value="Easy">🟢 Easy (1-15)</option>
              <option value="Medium">🟡 Medium (16-240)</option>
              <option value="Hard">🔴 Hard (1-255)</option>
            </select>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-700">Time Remaining</span>
              <span className="text-sm font-bold text-slate-600">{progressValue}s</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  progressValue > 10 ? 'bg-green-500' : 
                  progressValue > 5 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${(progressValue / timeoutSeconds) * 100}%` }}
              ></div>
            </div>
          </div>
          <button 
            type="button" 
            id="pause" 
            className="w-full px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 font-semibold transition-colors mb-6 shadow-md"
            onClick={handlePauseClick}
          >
            {paused ? "▶️ Resume" : "⏸️ Pause"}
          </button>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
            <label className="block text-sm font-semibold text-slate-600 mb-3 text-center">Convert this binary:</label>
            <h1 id="bits" className="text-3xl md:text-4xl font-mono font-bold text-center text-slate-800 tracking-wider">{bits}</h1>
          </div>
          <div className="mb-6">
            <label htmlFor="responseInput" className="block text-sm font-semibold text-slate-700 mb-2">
              Your Answer (Decimal)
            </label>
            <input 
              type="number" 
              id="responseInput" 
              className={`w-full px-4 py-4 text-2xl font-bold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${inputClass === 'success' ? 'border-green-500 bg-green-50' : inputClass === 'failure' ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'}`}
              autoFocus
              placeholder="Enter decimal value"
              value={responseInput}
              onChange={(e) => setResponseInput(e.target.value)}
            />
          </div>
          <button 
            id="responseSubmit" 
            className="w-full px-6 py-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]" 
            type="submit"
          >
            Submit Answer ✓
          </button>
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-center">
              <span className="text-sm font-semibold text-slate-600">Score: </span>
              <span className="text-2xl font-bold text-blue-600">{score.correct}</span>
              <span className="text-xl text-slate-400">/</span>
              <span className="text-2xl font-bold text-slate-700">{score.attempts}</span>
              {score.attempts > 0 && (
                <span className="ml-3 text-sm font-semibold text-slate-500">
                  ({Math.round((score.correct / score.attempts) * 100)}%)
                </span>
              )}
            </p>
          </div>
        </form>
        </div>
      </div>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Last Result</h2>
          <table id="resultsTable" className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-slate-200">
                <th scope="row" className="py-4 text-left font-semibold text-slate-600">Result</th>
                <td className="py-4 text-right">
                  <span id="submittedResult" className={`px-4 py-2 rounded-full font-bold ${
                    submittedResult === 'Correct' ? 'bg-green-100 text-green-700' : 
                    submittedResult === 'Incorrect' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {submittedResult}
                  </span>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <th scope="row" className="py-4 text-left font-semibold text-slate-600">Binary</th>
                <td className="py-4 text-right">
                  <p id="submittedBinary" className="font-mono text-lg font-bold text-slate-800">{submittedBinary}</p>
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <th scope="row" className="py-4 text-left font-semibold text-slate-600">Decimal</th>
                <td className="py-4 text-right">
                  <p id="submittedDecimal" className="text-lg font-bold text-blue-600">{submittedDecimal}</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="py-4 text-left font-semibold text-slate-600">Your Answer</th>
                <td className="py-4 text-right">
                  <p id="submittedResponse" className="text-lg font-bold text-slate-800">{submittedResponse}</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}