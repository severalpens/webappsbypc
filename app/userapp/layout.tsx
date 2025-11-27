import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import AuthenticatorWrapper from "../AuthenticatorWrapper"
import NavbarUser from "../components/NavbarUser";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
        <AuthenticatorWrapper>
        <NavbarUser />
          {children}
        </AuthenticatorWrapper>
  );
}