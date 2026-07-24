import styles from './SkillCard.module.css';

interface SkillCardProps {
  title: string;
  items: string[];
}

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tags}>
        {items.map((item) => (
          <span key={item} className={styles.tag}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;