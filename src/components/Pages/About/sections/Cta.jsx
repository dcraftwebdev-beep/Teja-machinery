import { Link } from 'react-router-dom';
import styles from '../About.module.css';

const BtnArrow = () => (
  <span className={styles.btnArrow}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </span>
);

export default function Cta() {
  return (
    <section className={`${styles.ctaBand} ${styles.reveal}`}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready to modernise your machines?</h2>
        <p className={styles.ctaText}>Let&rsquo;s talk about your retrofit, automation or fabrication project.</p>
        <Link to="/contact" className={`${styles.btn} ${styles.btnSolid}`}>
          Get a Quote
          <BtnArrow />
        </Link>
      </div>
    </section>
  );
}
