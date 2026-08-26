import styles from '../About.module.css';

const certs = ['ISO 9001:2015', 'FANUC Authorized Partner', 'ASME Section IX', 'TÜV-Certified Welders', 'Est. 2005 — Chennai'];

export default function Certifications() {
  return (
    <section className={`${styles.certSection} ${styles.reveal}`}>
      <h2 className={styles.certTitle}>Certified &amp; accredited</h2>
      <div className={styles.certRow}>
        {certs.map((c) => (
          <span key={c} className={styles.certBadge}>{c}</span>
        ))}
      </div>
    </section>
  );
}
