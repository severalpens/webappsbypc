import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import Navbar from "./Navbar";
import AuthenticatorWrapper from "../AuthenticatorWrapper"

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>      
        <AuthenticatorWrapper>
        <Navbar />
          {children}
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}