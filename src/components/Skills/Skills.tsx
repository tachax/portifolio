import { skillGroups } from '../../data/skills';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <span className="section-label">// 03 — SKILLS</span>
      <h2 className="section-heading">
        Tools of
        <br />
        <span className="section-heading-green">My Trade</span>
      </h2>

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <SkillCard key={group.id} title={group.title} items={group.items}/>
        ))}
      </div>
    </section>
  );
}

export default Skills;
