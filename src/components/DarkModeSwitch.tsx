import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const DarkModeSwitch = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

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
      aria-label={theme === "dark" ? t("darkMode.switchToLight") : t("darkMode.switchToDark")}
      className="p-2 rounded bg-switch hover:bg-hover-switch text-text flex items-center gap-2 transition-all hover:cursor-pointer inset-shadow-card shadow-md hover:shadow-lg"
    >
      {theme === "dark" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} />
      )}
    </button>
  );
};

export default DarkModeSwitch;
