import Head from "next/head";
import LayoutFooter from "../components/layout/footer";
import LayoutHeader from "../components/layout/header";

export default function Index() {
  return (
    <>
      <Head>
        <title>Jessy.Co</title>
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
          <img
            className="rounded-full border-8 border-gray-800 dark:border-gray-700 mt-16"
            src="/profile.jpg"
            width={200}
            height={200}
          />

          <p className="mt-8">
            Hey, thanks for visiting my website. My name is Jessy Cormier and I
            build front-end stuff.
          </p>
        </main>

        <LayoutFooter></LayoutFooter>
      </div>
    </>
  );
}