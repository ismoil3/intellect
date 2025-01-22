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
                moonColor='dark'
                sunColor='black'
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                size={25}
                
                
            />
        </div>
    );
};

export default ThemeSwitcher;
