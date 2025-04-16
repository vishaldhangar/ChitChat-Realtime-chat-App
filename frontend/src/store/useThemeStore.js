import { create } from "zustand";

export const useThemeStore = create((set) => {
  // lazy initialized
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("chat-theme") : null;

  return {
    theme: storedTheme || "coffee",
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    },
  };
});
