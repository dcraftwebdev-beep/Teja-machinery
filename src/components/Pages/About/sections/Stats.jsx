import styles from '../About.module.css';

const stats = [
  { num: '20+', label: 'Years of Excellence' },
  { num: '60+', label: 'Machine Brands Retrofitted' },
  { num: '500+', label: 'Projects Delivered' },
  { num: '100%', label: 'On-site Support' },
];

export default function Stats() {
  return (
    <section className={`${styles.statsBand} ${styles.reveal}`}>
      {stats.map((s, i) => (
        <div key={s.label} className={`${styles.stat} ${styles.reveal} ${styles['delay' + (i + 1)]}`}>
          <span className={styles.statNum}>{s.num}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
