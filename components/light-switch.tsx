import { Dispatch, useEffect, useState } from "react";


function useDarkMode() {
  const [theme, setTheme] = useState<string>(
    typeof window != "undefined" ? localStorage.theme as string ? "dark" : "dark" : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }

  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}

export default function LightSwitch() {
  const [colorTheme, setTheme] = useDarkMode() as [string, Dispatch<any>];
  const toggleTheme = () => setTheme(colorTheme === "light" ? "light" : "dark");

  function sunIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="w-4 h-4 text-gray-800 dark:text-gray-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    );
  }

  function moonIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="w-4 h-4 text-gray-800 dark:text-gray-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    );
  }

  return (
    <button
      className="absolute top-8 right-8 cursor-pointer w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-700"
      onClick={toggleTheme}
    >
      {colorTheme === "light" ? sunIcon() : moonIcon()}
    </button>
  );
}
