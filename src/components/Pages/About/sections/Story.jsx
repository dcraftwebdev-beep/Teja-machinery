import styles from '../About.module.css';

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={`${styles.storyText} ${styles.reveal}`}>
        <span className={styles.pill}>Our Story</span>
        <h2 className={styles.sectionTitle}>
          Two decades of turning<br /><span>ageing machines into assets.</span>
        </h2>
        <p className={styles.para}>
          What began as a small retrofitting workshop in Chennai has grown into a complete
          industrial engineering partner. We have brought 60+ machine brands back to life —
          including projects delivered without original documentation.
        </p>
        <p className={styles.para}>
          From first assessment to on-site commissioning, our mechanical, controls and
          automation teams work as one — so every machine leaves precise, reliable and ready
          for the next decade of production.
        </p>
      </div>
      <div className={`${styles.storyImage} ${styles.reveal} ${styles.delay1}`}>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop" alt="Teja Machinery workshop" loading="lazy" />
      </div>
    </section>
  );
}
