import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded bg-switch hover:bg-hover-switch text-text flex items-center gap-2 transition-all hover:cursor-pointer inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] shadow-md hover:shadow-lg"
    >
      {theme === "dark" ? (
        <>
          <Moon size={18} />
        </>
      ) : (
        <>
          <Sun size={18} />
        </>
      )}
    </button>
  );
};

export default DarkModeSwitch;
