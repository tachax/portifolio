import { skillGroups } from '../../data/skills';
import SkillCard from './SkillCard';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <span className="section-label">// SKILLS</span>
      <h2 className="section-heading">
        My Tech
        <br />
        <span className="section-heading-green">Stack</span>
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
