import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // ShadCN Switch component
import { useTheme } from "../providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Sun Icon */}
      <Sun className={`h-5 w-5 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`} />
      {/* Switch */}
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700"
      >
        <span className="sr-only">Toggle theme</span>
      </Switch>
      {/* Moon Icon */}
      <Moon className={`h-5 w-5 ${isDarkMode ? "text-blue-500" : "text-gray-400"}`} />
    </div>
  );
}

