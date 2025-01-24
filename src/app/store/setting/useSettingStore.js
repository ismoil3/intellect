import { create } from "zustand";


const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('theme') !== 'light';
  }
  return true;
};

export const useSettingStore = create((set) => ({
  darkMode: getInitialDarkMode(),
  setDarkMode: (theme) => set({ darkMode: theme }), 
}));