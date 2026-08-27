import styles from './Hero.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.guides}>
        <span /><span /><span /><span />
      </div>

      {/* Main */}
      <div className={styles.main}>
        <div className={styles.left}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Trusted manufacturing partner
          </span>
          <h1 className={styles.title}>
            From raw <em>materials</em><br />
            to finished products
          </h1>
        </div>

        <div className={styles.right}>
          <span className={styles.since}>// SINCE - 2005 //</span>
          <p className={styles.lead}>
            We deliver end-to-end machining and automation solutions from
            retrofit and fabrication to robotic integration and assembly , 
            engineered for quality, efficiency, and on-time delivery.
          </p>
          <AnimButton to="/services" label="Explore our capabilities" variant="dark" />
        </div>
      </div>

      {/* Footer row */}
      <div className={styles.footer}>
        <span className={styles.based}>Based in: chennai, India</span>
        <span className={styles.scroll}>SCROLL DOWN</span>
        <span className={styles.coords}>17.3850° N, 78.4867° E</span>
      </div>
    </section>
  );
}
