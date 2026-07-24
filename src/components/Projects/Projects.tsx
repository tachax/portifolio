import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <span className={styles.label}>// 01 — SELECTED WORK</span>
      <h2 className={styles.heading}>
        Things I've Built
        <br />
        <span className={styles.headingGreen}>& Shipped</span>
      </h2>
      <p className={styles.subtext}>Hover or tap a card to flip it and see the full story.</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;