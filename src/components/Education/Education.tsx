import { FaAward } from 'react-icons/fa';
import styles from './Education.module.css';

const certificates = [
  {
    id: 'ccna',
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    hasCredlyBadge: true,
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    hasCredlyBadge: false,
  },
  {
    id: 'discover',
    name: "Discover's Path",
    issuer: 'Rocketseat',
    hasCredlyBadge: false,
  },
];

function Education() {
  return (
    <section className={styles.education} id="education">
      <span className="section-label">// EDUCATION</span>
      <h2 className="section-heading">
        The Foundations
        <br />
        <span className="section-heading-green">Keep Growing</span>
      </h2>

      <div className={styles.highlightCard}>
        <span className={styles.status}>
          <span className={styles.dot} />
          Starting Fall 2026
        </span>
        <h3 className={styles.degree}>M.S. Computer Science</h3>
        <p className={styles.school}>University of South Florida</p>
        <p className={styles.location}>Tampa, Florida</p>
        <span className={styles.watermark}>USF</span>
      </div>

      <div className={styles.card}>
        <span className={styles.completedLabel}>COMPLETED · 2026</span>
        <h3 className={styles.degree}>B.S. Computer Science</h3>
        <p className={styles.school}>University of South Florida</p>
        <p className={styles.location}>Tampa, Florida</p>
        <span className={styles.watermarkLight}>USF</span>
      </div>

      <div className={styles.certGrid}>
        {certificates.map((cert) => (
          <div key={cert.id} className={styles.certCard}>
            {cert.hasCredlyBadge ? (
              <span className={styles.credlyBadge}>
                <FaAward size={12} /> Credly Badge
              </span>
            ) : (
              <FaAward className={styles.certIcon} size={16} />
            )}
            <h4 className={styles.certName}>{cert.name}</h4>
            <p className={styles.certIssuer}>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
