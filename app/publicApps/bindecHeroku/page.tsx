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
    <main className="min-h-screen  pb-10 mx-32">
          <h1 className="text-2xl mb-3 font-normal">Binary to Decimal Skill Tester</h1>
          <div><a href="/publicApps/bindecHeroku/instructions" className="text-xl mb-4 font-normal text-blue-600 hover:text-blue-800">Instructions</a></div>

    <div className="flex  ">
      <div className="w-full max-w-sm px-4 mx-auto">
        <form id="form" onSubmit={handleFormSubmit}>
          <div className="my-4">
            Level: <select 
              id="difficultyLevel" 
              className="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleDifficultyChange}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <progress 
            id="progressBar" 
            className="w-full my-4"
            value={progressValue}
            max={timeoutSeconds}
          ></progress>
          <button 
            type="button" 
            id="pause" 
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 my-4"
            onClick={handlePauseClick}
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <h1 id="bits" className="text-2xl mb-3 font-normal">{bits}</h1>
          <label htmlFor="responseInput" className="sr-only">Decimal:</label>
          <input 
            type="number" 
            id="responseInput" 
            className={`w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 my-4 ${inputClass}`}
            autoFocus
            value={responseInput}
            onChange={(e) => setResponseInput(e.target.value)}
          />
          <button 
            id="responseSubmit" 
            className="w-full px-4 py-3 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 my-4" 
            type="submit"
          >
            Submit
          </button>
          <p id="score" className="my-4">Score: {score.correct}/{score.attempts}</p>
        </form>
      </div>
        <div className="w-full max-w-sm px-4 mx-auto text-center">
          <table id="resultsTable" className="w-full text-left border-collapse">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <th scope="row" className="py-2"><p>Result</p></th>
                <td className="py-2"><p id="submittedResult" className="text-right">{submittedResult}</p></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="py-2"><p>Binary</p></th>
                <td className="py-2"><p id="submittedBinary" className="text-right">{submittedBinary}</p></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="py-2"><p>Decimal</p></th>
                <td className="py-2"><p id="submittedDecimal" className="text-right">{submittedDecimal}</p></td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="py-2"><p>Response</p></th>
                <td className="py-2"><p id="submittedResponse" className="text-right">{submittedResponse}</p></td>
              </tr>
            </tbody>
          </table>

        </div>
        </div>
    </main>
  );
}