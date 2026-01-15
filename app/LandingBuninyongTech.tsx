"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function LandingBuninyongTech() {
  
  return (
    <>
      <div className="text-center pt-10 md:pt-22 py-10">

        <h1 className="text-5xl md:text-6xl font-bold mt-0 mb-6 text-slate-700">
          Buninyong Tech
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-0 mb-5 text-slate-700">
          Web Apps
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700 italic">
          Data | Cloud | Automation
        </h3>
      </div>
      <div className="text-center flex flex-wrap justify-center gap-8 m-2 px-4">
        <div className="flex items-center">
          <Image
            src="/Amazon_Web_Services_Logo.svg"
            alt="Amazon Web Services"
            width={120}
            height={120}
            className="h-20 w-auto mr-20"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/Microsoft_Azure.svg"
            alt="Microsoft Azure"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </div>
      </div>
            <div className="text-center  py-10 ">
                <svg
          width="300"
          height="100"
          viewBox="0 0 190 60"
          className="mx-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top plateau */}
          <line
            x1="105"
            y1="20"
            x2="140"
            y2="20"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left slope down from plateau */}
          <line
            x1="100"
            y1="22"
            x2="85"
            y2="35"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* 2nd Left slope down from plateau */}
          <line
            x1="80"
            y1="40"
            x2="65"
            y2="55"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* 2nd Left slope down from plateau */}
          <line
            x1="15"
            y1="55"
            x2="35"
            y2="55"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="55"
            x2="60"
            y2="55"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right slope down from plateau */}
          <line
            x1="145"
            y1="22"
            x2="160"
            y2="35"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right plateau */}
          <line
            x1="165"
            y1="35"
            x2="180"
            y2="35"
            stroke="#334155"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
              <h5 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
          Contact: paul@buninyongtech.com
        </h5>
      </div>

      <div className="flex flex-col text-center justify-center gap-6 mt-20 md:mt-32 px-4">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Demo: Task Timer
          </h3>
          <img
            src="/TaskTimerGif.gif"
            alt="Task Timer App Demo"
            width={700}
            height={700}
            className="mx-auto"
            onMouseOver={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/TaskTimerGif.gif";
            }}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">
            Demo: Race Times
          </h3>
          <img
            src="/RaceTimesGif.gif"
            alt="Race Times App Demo"
            width={700}
            height={700}
            className="mx-auto"
            onMouseOver={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/RaceTimesGif.gif";
            }}
          />
        </div>

        <div className="text-center mt-32 md:mt-64 py-8 px-6">
          <a
            href="https://webappsbypc.com"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-lg font-medium"
          >
            webappsbypc.com
          </a>
        </div>
      </div>
    </>
  );
}
