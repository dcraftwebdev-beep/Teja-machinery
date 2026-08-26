import { Link } from 'react-router-dom';
import styles from '../About.module.css';

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const cards = [
  {
    theme: 'Light',
    title: <>CNC Retrofit &amp;<br />reconditioning</>,
    copy: 'We bring ageing machines back to life — control upgrades, drives and full reconditioning.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="16" width="32" height="22" rx="3" />
        <path d="M18 16v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4" />
        <line x1="24" y1="23" x2="24" y2="31" /><line x1="20" y1="27" x2="28" y2="27" />
      </svg>
    ),
  },
  {
    theme: 'Accent',
    title: <>Robotics &amp;<br />automation</>,
    copy: 'FANUC robotic cells, welding automation and special purpose machines that raise output.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="5" />
        <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M10.5 37.5l4.2-4.2M33.3 14.7l4.2-4.2" />
      </svg>
    ),
  },
  {
    theme: 'Dark',
    title: <>Precision<br />fabrication</>,
    copy: 'Al, SS &amp; special-alloy fabrication for aerospace, railways and pressure vessels.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4 6 14v20l18 10 18-10V14L24 4z" /><path d="M6 14l18 10 18-10M24 24v20" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className={styles.driveSection}>
      <div className={`${styles.headCenter} ${styles.reveal}`}>
        <span className={styles.pill}>What Drives Us</span>
        <h2 className={styles.sectionTitle}>Built on values,<br /><span>proven by results.</span></h2>
      </div>

      <div className={styles.driveGrid}>
        {cards.map((c, i) => (
          <article
            key={c.theme}
            className={`${styles.driveCard} ${styles['drive' + c.theme]} ${styles.reveal} ${styles['delay' + (i + 1)]}`}
          >
            <div className={styles.driveIcon}>{c.icon}</div>
            <h3 className={styles.driveTitle}>{c.title}</h3>
            <p className={styles.driveDesc}>{c.copy}</p>
            <Link to="/services" className={styles.driveBtn}>
              Explore Now
              <Chevron />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
