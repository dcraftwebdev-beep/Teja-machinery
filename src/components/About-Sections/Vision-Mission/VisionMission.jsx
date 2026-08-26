import { useEffect, useRef } from 'react';
import styles from './VisionMission.module.css';

/* ── Data ──────────────────────────────────────── */
const missionData = {
  mission: 'To deliver precision-engineered retrofitting and manufacturing solutions that maximise machine uptime, reduce total cost of ownership, and empower India\'s industrial sector to compete on a global stage.',
  vision: 'To be India\'s most trusted integrated manufacturing solutions partner — recognised for technical excellence, on-time delivery, and the courage to take on complex challenges no one else will.',
};

/* ── Hook: staggered reveal on scroll ──────────── */
function useReveal(selector) {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(selector);
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add(styles.vis); 
          io.unobserve(e.target); 
        } 
      }),
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
  return ref;
}

/* ── Component ──────────────────────────────────── */
export default function VisionMission() {
  const mvRef = useReveal(`.${styles.revealItem}`);

  return (
    <section id="mission" className={styles.mvSection} ref={mvRef}>
      
      {/* Cinematic Background Elements */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className="container">
        
        {/* Header */}
        <div className={`${styles.mvHeader} ${styles.revealItem}`}>
          <div className={styles.sectionTag}>
            <span className={styles.tagDot}></span>
            Strategic Direction
          </div>
          <h2 className={styles.mvTitle}>
            Mission <span>&</span> Vision
          </h2>
          <p className={styles.mvSubtitle}>
            Engineering the future of Indian manufacturing through precision, automation, and unyielding quality.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.mvGrid}>
          
          {/* Mission Card */}
          <div className={`${styles.mvCard} ${styles.revealItem}`} style={{ transitionDelay: '100ms' }}>
            <div className={styles.cardAccentLine}></div>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg className={styles.mvIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {/* Target / Precision Icon */}
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                  <line x1="12" y1="2" x2="12" y2="6" strokeWidth="1.5" />
                  <line x1="12" y1="18" x2="12" y2="22" strokeWidth="1.5" />
                  <line x1="2" y1="12" x2="6" y2="12" strokeWidth="1.5" />
                  <line x1="18" y1="12" x2="22" y2="12" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
            </div>
            <p className={styles.mvText}>{missionData.mission}</p>
            <div className={styles.cardFooter}>
              <span className={styles.statLabel}>Focus:</span>
              <span className={styles.statValue}>Precision & Uptime</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`${styles.mvCard} ${styles.revealItem}`} style={{ transitionDelay: '300ms' }}>
            <div className={styles.cardAccentLine}></div>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg className={styles.mvIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {/* Eye / Future / Perspective Icon */}
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                  <line x1="12" y1="4" x2="12" y2="2" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1="12" y1="20" x2="12" y2="22" strokeWidth="1.5" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
            </div>
            <p className={styles.mvText}>{missionData.vision}</p>
            <div className={styles.cardFooter}>
              <span className={styles.statLabel}>Goal:</span>
              <span className={styles.statValue}>Global Trust</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}