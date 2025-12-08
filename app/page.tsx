"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import Link from "next/link";

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
      <div className="text-center flex justify-center mt-32">
        <Link href="https://www.credly.com/badges/e8758e08-f747-4d24-a081-e4dc4c3fef3d/public_url" target="_blank">
          <Image
            src="/Microsoft.png"
            alt="Badge for Microsoft Certified: Azure Data Engineer Associate"
            width={160}
            height={120}
            className="mx-4 rounded-lg shadow-lg"
          />
        </Link>
        <Link href="https://credentials.databricks.com/7c15e3a3-969b-40d8-965f-b3cf61680c4a#acc.PB8veSOL" target="_blank">
          <Image
            src="/Databricks.png"
            alt="Badge for Databricks Certified Data Engineer Associate"
            width={160}
            height={120}
            className="mx-4 rounded-lg shadow-lg"
          />
        </Link>
        <Link href="https://www.credly.com/badges/32e97c55-30d0-461a-92cd-087075a15155/public_url" target="_blank">
          <Image
            src="/AWSCertifiedCloudPractitionerFoundational.png"
            alt="Badge for AWS Certified Cloud Practitioner Foundational"
            width={160}
            height={120}
            className="mx-4 rounded-lg shadow-lg"
          />
        </Link>
      </div>
      <div className="text-center mt-64 py-2 px-6">
        <a href="https://severalpens.com" className="text-gray-500">
          severalpens.com
        </a>
      </div>
    </main>
  );
}
