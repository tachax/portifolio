import { experiences } from '../../data/experience';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <span className="section-label">// EXPERIENCE</span>
      <h2 className="section-heading">
        Where I've
        <br />
        <span className="section-heading-green">Made an Impact</span>
      </h2>

      <div className={styles.timeline}>
        {experiences.map((item) => (
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