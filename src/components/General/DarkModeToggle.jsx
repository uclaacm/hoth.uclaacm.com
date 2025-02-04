import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import '../../styles/DarkModeToggle.css';
import { Sun, Moon } from '@geist-ui/icons';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark' || false);

  const toggleTheme = checked => {
    setIsDark(checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  }

  useEffect(() => {
    const updateThemeFromStorage = () => {
      if (localStorage.getItem('theme') === 'dark') setIsDark(true);
      else setIsDark(false);
    }

    updateThemeFromStorage();
    window.addEventListener('storage', updateThemeFromStorage);

    return () => {
      window.removeEventListener('storage', updateThemeFromStorage);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className='toggle'>
      <Switch
        onChange={toggleTheme}
        checked={isDark}
        aria-label='Dark mode toggle'
        handleDiameter={32}
        // offColor="#FAE9B1"
        // onColor="#092E40"
        // offHandleColor="#F3C136"
        // onHandleColor="#2BADE7"
        offColor="#faddff"
        onColor="#3e2961"
        offHandleColor="#fca3fc"
        onHandleColor="#9c52b5"
        uncheckedIcon={false}
        uncheckedHandleIcon={<Sun size={24} className='theme-icon' />}
        checkedIcon={false}
        checkedHandleIcon={<Moon size={24} className='theme-icon' />}
      />
    </div>
  );
};
