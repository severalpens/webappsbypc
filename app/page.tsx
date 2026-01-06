"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import LandingWebAppsByPC from "./LandingWebAppsByPC";
import LandingPaulCollins from "./LandingPaulCollins";
import LandingBuninyongTech from "./LandingBuninyongTech";


Amplify.configure(outputs);

export default function App() {
  const brand = process.env.NEXT_PUBLIC_BRAND?.toLowerCase() || "webappsbypc";
;
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {brand === "webappsbypc" && <LandingWebAppsByPC />}
      {brand === "paulcollins" && <LandingPaulCollins />}
      {brand === "buninyongtech" && <LandingBuninyongTech />}
    </main>
  );
}
