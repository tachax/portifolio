import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NA</div>

      <nav className={styles.nav}>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </nav>

      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/natachapangheben" target="_blank" rel="noopener noreferrer">in</a>
        <a href="https://github.com/tachax" target="_blank" rel="noopener noreferrer">gh</a>
        <a href="mailto:npangheben@outlook.com" target="_blank" rel="noopener noreferrer">@</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">cv</a>
      </div>
    </header>
  );
}

export default Header;