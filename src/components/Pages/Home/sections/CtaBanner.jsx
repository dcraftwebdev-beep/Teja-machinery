import styles from './CtaBanner.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <h2 className={styles.title}>Ready to start your next project?</h2>
        <div className={styles.action}>
          <AnimButton to="/contact" label="Schedule consultation" variant="light" />
        </div>
      </div>
    </section>
  );
}
