import Head from "next/head";
import LightSwitch from "../components/light-switch";

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
        <section className="absolute top-0 left-0 right-0 bg-gray-900 dark:bg-gray-700 w-full h-2"></section>
        <LightSwitch></LightSwitch>

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

        <footer className="flex items-center justify-end pr-4 w-full h-16 text-2xl">
          <nav>
            <a
              href="https://www.linkedin.com/in/jessycormier/"
              target="_blank"
              className="px-1"
            >
              <i
                className="fab fa-fw fa-linkedin"
                title="Seem my LinkedIn profile"
              ></i>
            </a>
            <a
              href="https://github.com/jessycormier"
              target="_blank"
              className="px-1"
            >
              <i
                className="fab fa-fw fa-github"
                title="Check out some of my work on GitHub"
              ></i>
            </a>
            <a
              href="https://stackoverflow.com/users/396842/jessy"
              target="_blank"
              className="px-1"
            >
              <i
                className="fab fa-fw fa-stack-overflow"
                title="See my Stack Overflow profile"
              ></i>
            </a>
            <a
              href="https://twitter.com/jessycormier"
              target="_blank"
              className="px-1"
            >
              <i
                className="fab fa-fw fa-twitter"
                title="Chat with me on Twitter"
              ></i>
            </a>
            <a href="" onClick={displayDiscordName} className="px-1">
              <i
                className="fab fa-fw fa-discord"
                title="Chat with me on Discord!"
              ></i>
            </a>
            <a
              href="https://dev.to/jessycormier"
              target="_blank"
              className="px-1"
            >
              <i className="fab fa-fw fa-dev" title=""></i>
            </a>
          </nav>
          
        </footer>
      </div>
    </>
  );
}

function displayDiscordName(e) {
  e.preventDefault();
  alert("My discord name is: Jessy#5436");
}
