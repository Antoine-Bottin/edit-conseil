'use client';

import { IoMoon, IoSunny } from 'react-icons/io5';

import './styles.scss';

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';

  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

const ThemeToggle = () => {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Changer de thème clair/sombre"
      title="Changer de thème"
    >
      <IoSunny className="theme-toggle__icon theme-toggle__icon--sun" />
      <IoMoon className="theme-toggle__icon theme-toggle__icon--moon" />
    </button>
  );
};

export default ThemeToggle;
