import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

function getSystemTheme(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      root.classList.remove("dark", "light");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("dark", "light");
      root.classList.add(theme);
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
