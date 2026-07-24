import { FaLinkedinIn, FaGithub, FaRegFileAlt } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
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
        <a href="https://www.linkedin.com/in/natachapangheben" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={18} />
        </a>
        <a href="https://github.com/tachax" target="_blank" rel="noopener noreferrer">
          <FaGithub size={18} />
        </a>
        <a href="mailto:npangheben@outlook.com" target="_blank" rel="noopener noreferrer">
          <GoMail  size={18} />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaRegFileAlt size={18} />
        </a>
      </div>
    </header>
  );
}

export default Header;