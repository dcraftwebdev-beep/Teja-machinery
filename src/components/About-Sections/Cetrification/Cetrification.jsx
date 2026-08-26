import { useEffect, useRef } from 'react';
import styles from './Certification.module.css';

/* ── Data ──────────────────────────────────────── */
const certs = [
  { code: 'ISO',   title: 'ISO 9001:2015',           sub: 'Quality Management System' },
  { code: 'IBR',   title: 'IBR Accredited',          sub: 'Indian Boiler Regulations' },
  { code: 'ISRO',  title: 'ISRO Partner',            sub: 'Space-Grade Precision' },
  { code: 'BRAH',  title: 'BrahMos Aerospace',       sub: 'Defence Manufacturing' },
  { code: 'FANUC', title: 'FANUC Authorised',        sub: 'CNC Commissioning' },
  { code: 'SIEM',  title: 'SIEMENS Partner',         sub: 'Drive & Control Systems' },
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
export default function CertificationsCTA() {
  const certRef = useReveal(`.${styles.certCard}`);
  const ctaRef = useReveal(`.${styles.ctaReveal}`);

  return (
    <main>
      {/* ══════════════════════════════════
          §4  CERTIFICATIONS
          ══════════════════════════════════ */}
      <section id="certifications" className={styles.certSection}>
        <div className="container" ref={certRef}>
          
          <div className={styles.certHeader}>
            <div className="section-tag">Credentials</div>
            <h2 className={styles.certTitle}>
              Certifications <span>&</span> Accreditations
            </h2>
            <p className={styles.certSub}>
              Every partnership and accreditation is a testament to our unwavering commitment to quality, safety, and sub-micron precision.
            </p>
          </div>

          <div className={styles.certGridWrapper}>
            <div className={styles.certGrid}>
              {certs.map((c, index) => (
                <div 
                  key={c.code} 
                  className={styles.certCard}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={styles.certAccent}></div>
                  <div className={styles.certTop}>
                    <div className={styles.certCode}>{c.code}</div>
                    <div className={styles.certBadge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.certInfo}>
                    <h3 className={styles.certTitle2}>{c.title}</h3>
                    <p className={styles.certSub2}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

     
    </main>
  );
}