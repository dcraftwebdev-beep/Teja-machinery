import { useState, useEffect } from 'react';
import styles from '../Home.module.css';

const chooseItems = [
  { n: '01', t: 'Proven Track Record', d: '60+ machine brands retrofitted, including projects with no original documentation.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop' },
  { n: '02', t: 'Complete Solution Provider', d: 'From first assessment to on-site or factory-based support and custom solutions.', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=900&auto=format&fit=crop' },
  { n: '03', t: 'Advanced Technology', d: 'FANUC & Siemens CNC systems paired with full automation and robotics.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop' },
  { n: '04', t: 'Precision Machined Components', d: 'Al, SS & special-alloy fabrication for aerospace, railways and pressure vessels.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=900&auto=format&fit=crop' },
];

const ROTATE_MS = 3600;

export default function WhyChoose() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle through the points in order (pauses while hovering)
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % chooseItems.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <section className={styles.chooseSection}>
      <div className={`${styles.chooseHead} ${styles.reveal}`}>
        <span className={styles.choosePill}>Why Choose Us</span>
        <h2 className={styles.chooseHeading}>
          Built on precision,<br />
          <span>proven by results.</span>
        </h2>
      </div>

      <div
        className={`${styles.wcGrid} ${styles.reveal}`}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left, single image that changes with the active point */}
        <div className={styles.wcImageWrap}>
          {chooseItems.map((it, i) => (
            <img
              key={it.n}
              src={it.img}
              alt={it.t}
              className={`${styles.wcImage} ${active === i ? styles.wcImageActive : ''}`}
              loading="lazy"
            />
          ))}
          <div className={styles.wcBadge}>
            <span className={styles.wcBadgeNum}>{chooseItems[active].n}</span>
            <span className={styles.wcBadgeLabel}>{chooseItems[active].t}</span>
          </div>
          <div className={styles.wcDots}>
            {chooseItems.map((it, i) => (
              <span key={it.n} className={`${styles.wcDot} ${active === i ? styles.wcDotActive : ''}`} />
            ))}
          </div>
        </div>

        {/* Right, points with arrows */}
        <div className={styles.wcList}>
          {chooseItems.map((it, i) => (
            <button
              key={it.n}
              type="button"
              className={`${styles.wcItem} ${active === i ? styles.wcItemActive : ''}`}
              onMouseEnter={() => { setActive(i); setPaused(true); }}
              onFocus={() => { setActive(i); setPaused(true); }}
            >
              <span className={styles.wcNum}>{it.n}</span>
              <div className={styles.wcText}>
                <h3 className={styles.wcItemTitle}>{it.t}</h3>
                <p className={styles.wcItemDesc}>{it.d}</p>
              </div>
              <span className={styles.wcArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              {active === i && !paused && (
                <span key={active} className={styles.wcProgress} style={{ animationDuration: `${ROTATE_MS}ms` }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
