import { useCallback, useState } from "react";
import { FaPlay } from 'react-icons/fa';
import type { Project } from '../../data/projects'
import DemoModal from './DemoModal';
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);
  const Icon = project.icon;

  return (
    <>
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front} ${styles[project.variant]}`}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.icon}><Icon/></span>
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
          {project.demo && (
            <button
              className={styles.demoButton}
              onClick={(e) => {
                // On touch, the first tap should flip the card, not open the video
                if (!isFlipped) return;
                e.stopPropagation();
                setIsDemoOpen(true);
              }}
            >
              <FaPlay className={styles.demoIcon} />
              {project.demo.label}
            </button>
          )}
        </div>
      </div>
    </div>
    {project.demo && isDemoOpen && (
      <DemoModal
        title={`${project.title} · Demo`}
        src={project.demo.src}
        poster={project.demo.poster}
        onClose={closeDemo}
      />
    )}
    </>
  );
}

export default ProjectCard;