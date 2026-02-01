import { useState, useEffect } from "react";
import styles from "./ThemeMode.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";
import RadioOption from "@/ui/radioOption/RadioOption";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (mode) => {
      if (mode === "dark") {
        root.setAttribute("data-theme", "dark");
      } else {
        root.setAttribute("data-theme", "light");
      }
    };

    if (theme === "system") {
      applyTheme(mediaQuery.matches ? "dark" : "light");

      const handleChange = (e) => {
        applyTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    } else {
      applyTheme(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <RadioOption
        name="theme"
        value="light"
        title="Light"
        description="Bright mode for your app"
        checked={theme === "light"}
        onChange={() => setTheme("light")}
      />

      <RadioOption
        name="theme"
        value="dark"
        title="Dark"
        description="Dark mode for your app"
        checked={theme === "dark"}
        onChange={() => setTheme("dark")}
      />

      <ToggleOption
        title="Use system setting"
        description="Automatically match your device theme"
        checked={theme === "system"}
        onChange={(e) => setTheme(e.target.checked ? "system" : "dark")}
      />
    </div>
  );
};

export default ThemeMode;
