import { useTheme } from 'next-themes';
import moonIcon from "../app/moon-icon";
import sunIcon from "../app/sun-icon";

export default function LightSwitch() {
  // const [currentTheme, setTheme] = useState(
  //   typeof window !== "undefined" && localStorage.theme as string || "dark"
  // );
  
  // function toggleTheme() {
  //   console.log("toggleTheme");
  //   setTheme(theme => theme === "dark" ? "light" : "dark");
  // }

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove("light", "dark");
  //   root.classList.add(currentTheme);

  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("theme", currentTheme);
  //   }

  // }, [currentTheme]);

  const { theme, setTheme } = useTheme();
      
  return (
    <button
      className="absolute top-4 right-4 cursor-pointer w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-700"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === "light" ? sunIcon() : moonIcon()}
    </button>
  );
}
