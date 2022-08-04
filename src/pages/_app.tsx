import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ProvideAuth } from "../lib/auth";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
};

export default MyApp;
