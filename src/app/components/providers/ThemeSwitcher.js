// src/components/ThemeSwitcher.js
"use client"
import { useSettingStore } from '@/app/store/setting/useSettingStore';
import { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = ({ props }) => {
    const { darkMode, setDarkMode } = useSettingStore();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        console.log(darkMode);

        if (darkMode) {
            document.documentElement.classList.add('dark');
            console.log(document.documentElement.classList);

            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
    return (
        <div {...props} >

            <DarkModeSwitch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                size={25}
                moonIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Moon shape */}
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        {/* Add your design here, e.g., stars */}
                        <circle cx="12" cy="4" r="1" fill="white" />
                        <circle cx="18" cy="6" r="1" fill="white" />
                        <circle cx="20" cy="12" r="1" fill="white" />
                    </svg>
                }
                sunIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                }
            />
        </div>
    );
};

export default ThemeSwitcher;
