import Head from "next/head";
import LayoutFooter from "../components/layout/footer";
import LayoutHeader from "../components/layout/header";

export default function NowPage() {
  return (
    <>
      <Head>
        <title>Jessy.Co - Now</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/brands.css"
          integrity="sha384-S5yUroXKhsCryF2hYGm7i8RQ/ThL96qmmWD+lF5AZTdOdsxChQktVW+cKP/s4eav"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
          integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <LayoutHeader></LayoutHeader>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center max-w-lg">
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800">Now</h1>
          <ul className="mt-16">
            <li>Developing this website</li>
            <li>Self improvement</li>
            <li>Planning for building a house</li>
            <li>Playing a few games: Forger, Mass Effect, No Mans Sky</li>
          </ul>
        </main>
      </div>
    </>
  );
}
