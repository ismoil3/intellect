import {create} from "zustand";

export const useSettingStore = create((set) => ({
  darkMode: typeof window !== "undefined" 
    ? localStorage.getItem("theme") === "light"
      ? false
      : true
    : true,
  setDarkMode: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme ? "dark" : "light");
    }
    set(() => ({ darkMode: theme }));
  },
}));
