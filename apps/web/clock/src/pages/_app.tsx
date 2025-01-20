import "@clock/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <div className={robotoMono.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};
export default App;
