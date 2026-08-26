import styles from './Home.module.css';

// Shared icons used across the home sections
export const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Round arrow used inside every button
export const BtnArrow = () => (
  <span className={styles.btnArrow}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </span>
);

export const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.401 8.169L12 18.896l-7.335 3.866 1.401-8.169L.132 9.21l8.2-1.192z" />
  </svg>
);
