import { experiences } from '../../data/experience';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.experience} id="#experience">
      <span className={styles.label}>// 02 — EXPERIENCE</span>
      <h2 className={styles.heading}>
        Where I've
        <br />
        <span className={styles.headingGreen}>Made an Impact</span>
      </h2>

      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.dotColumn}>
              <span className={styles.dot} />
              <span className={styles.line} />
            </div>
            <ExperienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;