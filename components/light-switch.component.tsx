import { useTheme } from 'next-themes';
import moonIcon from "./moon-icon";
import sunIcon from "./sun-icon";

export default function LightSwitch() {
  
  const { theme, setTheme } = useTheme();
      
  return (
    <button
      className="cursor-pointer w-10 h-10 p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === "light" ? sunIcon() : moonIcon()}
    </button>
  );
}
