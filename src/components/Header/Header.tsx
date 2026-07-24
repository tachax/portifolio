import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaRegFileAlt } from 'react-icons/fa';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          <GoMail size={18} />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaRegFileAlt size={18} />
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoCloseOutline size={22} /> : <IoMenuOutline size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;