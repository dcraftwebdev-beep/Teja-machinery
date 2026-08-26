import { Link } from 'react-router-dom';
import styles from './AnimButton.module.css';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * Shared pill button used across every section.
 * Hover: label slides up while a duplicate rises from the bottom, and the
 * arrow swaps (current exits right, next enters from the left).
 *
 * Props:
 *  - to:      route path
 *  - label:   button text
 *  - variant: 'dark' (black) | 'orange' — the only two button colors
 */
export default function AnimButton({ to, href, label, variant = 'dark', className = '' }) {
  const inner = (
    <>
      <span className={styles.label}>
        <span className={styles.text}>{label}</span>
        <span className={styles.textHover} aria-hidden="true">{label}</span>
      </span>
      <span className={styles.sq}>
        <span className={styles.iconWrap}>
          <span className={styles.iconMain}><Arrow /></span>
          <span className={styles.iconHover} aria-hidden="true"><Arrow /></span>
        </span>
      </span>
    </>
  );
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  // external link (e.g. WhatsApp / tel)
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
    );
  }
  return <Link to={to} className={cls}>{inner}</Link>;
}
