import { useState } from "react";
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = project.icon;

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front} ${styles[project.variant]}`}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.icon}><Icon /></span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.org}>{project.org}</p>
          <p className={styles.date}>{project.date}</p>
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.date}>{project.date}</p>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag: any) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;