import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/* Partner / client names shown as faded logos on the left,
   mirroring the reference (Analog Devices / Maxim / Seagate). */
const partners = ['BHEL', 'L & T', 'ISRO', 'HAL', 'DRDO'];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      {/* Background image + white fade (no video) */}
      <div className={styles.bgImage} />
      <div className={styles.whiteFade} />

      {/* Left: partner logos */}
      <div className={styles.partners}>
        {partners.map((p) => (
          <span key={p} className={styles.partner}>{p}</span>
        ))}
      </div>

      {/* Center content */}
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <span>Teja</span>
          <span className={styles.headingAccent}>Machinery</span>
          <span className={styles.headingSub}>Pvt Ltd</span>
        </h1>

        <p className={styles.subheading}>Your Engineering Partner</p>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.btnPrimary}>
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Mobile partner strip */}
      <div className={styles.partnersMobile}>
        {partners.map((p) => (
          <span key={p} className={styles.partner}>{p}</span>
        ))}
      </div>
    </section>
  );
}
