import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>NA</span>
      <span className={styles.text}>Built with React + Vite · 2026</span>
    </footer>
  );
}

export default Footer;