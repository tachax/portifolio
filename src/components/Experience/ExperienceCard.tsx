import type { ExperienceItem } from '../../data/experience';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  item: ExperienceItem;
}

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.location}>{item.location}</p>
        </div>

        <div className={styles.meta}>
          <span className={`${styles.badge} ${styles[item.badgeVariant]}`}>{item.badge}</span>
          <span className={styles.date}>{item.date}</span>
        </div>
      </div>

      <ul className={styles.bullets}>
        {item.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;