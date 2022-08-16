import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppType } from "next/dist/shared/lib/utils";
import { AuthProvider } from "../lib/auth";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
