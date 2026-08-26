import { useEffect, useRef } from 'react';
import styles from './Leadership.module.css';

/* ── Data ──────────────────────────────────────── */
const team = [
  {
    name: 'S. Muthu',
    role: 'Founder & Managing Director',
    bio: '18+ years leading Teja Machinery from a CNC retrofitting start-up to a nationally recognised manufacturing solutions powerhouse.',
    initial: 'SM',
    color: 'var(--clr-accent)',
  },
  {
    name: 'Operations Lead',
    role: 'Head of Manufacturing',
    bio: 'Oversees the ₹50M facility and ensures every project meets ISO-certified quality benchmarks on schedule.',
    initial: 'OL',
    color: '#c9a84c',
  },
  {
    name: 'Technical Director',
    role: 'SIEMENS & FANUC Systems',
    bio: 'Specialist in large-scale CNC commissioning across lathes (1 m – 16 m), VTL, HBM, VMC, FBM & Grinding.',
    initial: 'TD',
    color: '#888880',
  },
];

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
export default function Leadership() {
  const teamRef = useReveal(`.${styles.memberCard}`);

  return (
    <section id="team" className={styles.teamSection} ref={teamRef}>
      <div className={`container ${styles.container}`}>
        
        {/* Header Section */}
        <div className={styles.teamHeader}>
          <div className="section-tag">
             Our People
          </div>
          <h2 className={styles.teamTitle}>
            Leadership <span>Team</span>
          </h2>
          <p className={styles.teamSub}>
            The minds behind two decades of precision engineering, technical excellence, and client success across India.
          </p>
        </div>

        {/* Grid Section (Fixed structure) */}
        <div className={styles.teamGrid}>
          {team.map((m, index) => (
            <div 
              key={m.name} 
              className={styles.memberCard}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Profile Top */}
              <div className={styles.memberTop}>
                <div className={styles.memberAvatar} style={{ '--av-clr': m.color }}>
                  {m.initial}
                </div>
                
                <div className={styles.memberMeta}>
                  <h3 className={styles.memberName}>{m.name}</h3>
                  <span className={styles.memberRole}>{m.role}</span>
                </div>

                {/* Optional Social/Contact Icon */}
                <div className={styles.memberLink}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Profile Bio */}
              <p className={styles.memberBio}>{m.bio}</p>

              {/* Aesthetic Border Effect */}
              <div className={styles.memberAccent} style={{ background: m.color }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}