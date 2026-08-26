import styles from '../Home.module.css';

const features = [
  { title: '20+ Years Active', desc: 'Established 2005, industry leaders.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
  { title: 'ISO 9001:2015', desc: 'Certified manufacturing excellence.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { title: 'FANUC Partner', desc: 'Authorized CNC systems integrator.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
  { title: 'ASME Section IX', desc: 'Certified welding & precision.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> },
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      {features.map((f, i) => (
        <div key={f.title} className={`${styles.featurePill} ${styles.reveal} ${styles['delay' + (i + 1)]}`}>
          <div className={styles.featureIcon}>{f.icon}</div>
          <div className={styles.featureText}>
            <div className={styles.fTitle}>{f.title}</div>
            <div className={styles.fDesc}>{f.desc}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
