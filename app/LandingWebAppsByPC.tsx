"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import Link from "next/link";


export default function LandingWebAppsByPC() {
  return (
<>
      <div className="text-center pt-20 md:pt-32 py-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mt-0 mb-6 text-slate-700">
          Web Apps by Paul Collins
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
          Custom built web applications for capturing and analyzing data 
        </h3>
      </div>
      <div className="text-center flex flex-wrap justify-center gap-4 m-2 px-4">
        <a
          href="https://github.com/severalpens"
          className="bg-white border-2 border-gray-300 hover:border-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-70"
        >
          Github
        </a>
        <a
          href="https://www.youtube.com/channel/UCuFhL_mEedCp4FDpIrSS9gA"
          className="bg-white border-2 border-gray-300 hover:border-gray-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-70"
        >
          Youtube
        </a>
        <a
          href="https://www.linkedin.com/in/paul-collins-541b2053/"
          className="bg-white border-2 border-gray-300 hover:border-gray-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-70"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-center flex flex-wrap justify-center gap-6 mt-20 md:mt-32 px-4">
        <Link href="https://www.credly.com/badges/e8758e08-f747-4d24-a081-e4dc4c3fef3d/public_url" target="_blank">
          <Image
            src="/Microsoft.png"
            alt="Badge for Microsoft Certified: Azure Data Engineer Associate"
            width={160}
            height={120}
            className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-white p-2"
          />
        </Link>
        <Link href="https://credentials.databricks.com/7c15e3a3-969b-40d8-965f-b3cf61680c4a#acc.PB8veSOL" target="_blank">
          <Image
            src="/Databricks.png"
            alt="Badge for Databricks Certified Data Engineer Associate"
            width={160}
            height={120}
            className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-white p-2"
          />
        </Link>
        <Link href="https://www.credly.com/badges/32e97c55-30d0-461a-92cd-087075a15155/public_url" target="_blank">
          <Image
            src="/AWSCertifiedCloudPractitionerFoundational.png"
            alt="Badge for AWS Certified Cloud Practitioner Foundational"
            width={160}
            height={120}
            className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-white p-2"
          />
        </Link>
      </div>
      <div className="text-center mt-32 md:mt-64 py-8 px-6">
        <a href="https://severalpens.com" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-lg font-medium">
          severalpens.com
        </a>
      </div>
    </>
  );
}
