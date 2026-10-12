import { useEffect, useRef, useState } from 'react';
import { FaSun, FaSnowflake } from 'react-icons/fa';
import styles from './ThermostatToggle.module.css';

type Theme = 'light' | 'dark';

const TEMPS: Record<Theme, number> = { light: 72, dark: 65 };

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function ThermostatToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [displayTemp, setDisplayTemp] = useState(TEMPS[theme]);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit
    }
  }, [theme]);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    const target = TEMPS[next];
    setTheme(next);

    // Tick the display one degree at a time, like a real thermostat
    window.clearInterval(intervalRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayTemp(target);
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setDisplayTemp((temp) => {
        if (temp === target) {
          window.clearInterval(intervalRef.current);
          return temp;
        }
        return temp + (temp < target ? 1 : -1);
      });
    }, 50);
  };

  const isDark = theme === 'dark';

  return (
    <button
      className={`${styles.thermostat} ${isDark ? styles.cool : styles.warm}`}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Warm it up to 72°F' : 'Cool it down to 65°F'}
    >
      <span className={styles.display}>
        {displayTemp}
        <span className={styles.unit}>°F</span>
      </span>
      <span className={styles.icon}>{isDark ? <FaSnowflake /> : <FaSun />}</span>
    </button>
  );
}

export default ThermostatToggle;
