import styles from '../About.module.css';

const leaders = [
  { name: 'A. Teja Kumar', role: 'Founder & Managing Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { name: 'S. Ramesh', role: 'Head of Automation', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { name: 'K. Priya', role: 'Quality & Certifications', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
];

export default function Leadership() {
  return (
    <section className={styles.leadSection}>
      <div className={`${styles.headCenter} ${styles.reveal}`}>
        <span className={styles.pill}>Leadership</span>
        <h2 className={styles.sectionTitle}>The people<br /><span>behind the precision.</span></h2>
      </div>
      <div className={styles.leadGrid}>
        {leaders.map((l, i) => (
          <div key={l.name} className={`${styles.leadCard} ${styles.reveal} ${styles['delay' + (i + 1)]}`}>
            <div className={styles.leadImg}>
              <img src={l.img} alt={l.name} loading="lazy" />
            </div>
            <div className={styles.leadInfo}>
              <h3 className={styles.leadName}>{l.name}</h3>
              <p className={styles.leadRole}>{l.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
