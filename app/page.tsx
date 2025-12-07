"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <div className="text-center mt-32 py-10 px-6">
        <h1 className="text-4xl font-bold mt-0 mb-6">Paul Collins</h1>
        <h3 className="text-2xl font-bold mb-4">
          Data Engineering | Data Analytics | Web Development
        </h3>
      </div>
      <div className="text-center flex justify-center m-2">
        <a
          href="https://github.com/severalpens"
          className="border mx-6 px-6 py-2.5 border-black rounded-md"
        >
          Github
        </a>
        <a
          href="https://www.youtube.com/channel/UCuFhL_mEedCp4FDpIrSS9gA"
          className="border mx-6 px-6 py-2.5 border-black rounded-md"
        >
          Youtube
        </a>
        <a
          href="https://www.linkedin.com/in/paul-collins-541b2053/"
          className="border mx-6 px-6 py-2.5 border-black rounded-md"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-center mt-64 py-2 px-6">
        <a href="https://severalpens.com" className="text-gray-500">
          severalpens.com
        </a>
      </div>
    </main>
  );
}
