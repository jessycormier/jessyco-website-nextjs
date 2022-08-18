/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jessy.Co</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      </Head>
      <Script
        src="/scripts/init-theme.function.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
