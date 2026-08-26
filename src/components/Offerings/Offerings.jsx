import { useEffect, useRef } from 'react';
import styles from './Offerings.module.css';

/* ── Data ──────────────────────────────────────── */
const offeringsList = [
  "HIGH END FABRICATION AND ASSEMBLY OF Al, SS & SPECIAL ALLOYS",
  "Conventional and CNC machines to produce parts as per your need",
  "ROBODRILL machine to produce PRECISE COMPONENTS",
  "Qualified Welders as per ASME section IX by TUV for MS, SS, Al",
  "Quality Management System approved by BUREAU VERITAS for ISO 9001:2015",
  "Retrofitting of CNC Machines & Applications (Gear Grinding, SPM, Laser Calibration)",
  "Industrial Automation and FANUC Robotics Solutions for Welding & Material Handling",
  "FANUC Authorized certified training (Robotics, CNC, Safety, Hydraulics)"
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
export default function Offerings() {
  const sectionRef = useReveal(`.${styles.revealItem}`);

  return (
    <section className={styles.offerSection} ref={sectionRef}>
      
      {/* Background Graphic */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow}></div>

      <div className={`container ${styles.container}`}>
        
        <div className={styles.layoutGrid}>
          
          {/* =========================================
              LEFT: TEXT & CAPABILITIES LIST
              ========================================= */}
          <div className={styles.contentLeft}>
            <div className={`${styles.header} ${styles.revealItem}`}>
              <div className="section-tag">
                <span className={styles.tagDot}></span>
                Capabilities Overview
              </div>
              <h2 className={styles.title}>
                What We <span>Offer</span>
              </h2>
              <p className={styles.introText}>
                We take pride in introducing TEJA MACHINERY PVT LTD, your one-stop 
                solution for all machining, machine tooling, and automation requirements.
              </p>
            </div>

            <div className={styles.offeringsList}>
              {offeringsList.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.offerCard} ${styles.revealItem}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={styles.offerIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className={`${styles.actionBlock} ${styles.revealItem}`}>
               <a href="#contact" className={styles.btnPrimary}>Discuss Your Requirements</a>
            </div>
          </div>

          {/* =========================================
              RIGHT: OFFSET IMAGE COMPOSITION
              ========================================= */}
          <div className={`${styles.visualRight} ${styles.revealItem}`}>
            <div className={styles.imageComposition}>
              
              {/* Product Image (Background) */}
              <div className={styles.productImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                  alt="Precision Machined Component" 
                  className={styles.productImg}
                />
                <div className={styles.imgOverlay}></div>
                <div className={styles.imgLabel}>01 // Precision Product</div>
              </div>

              {/* Certificate Image (Foreground Floating) */}
              <div className={styles.certImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" 
                  alt="Appreciation Certificate" 
                  className={styles.certImg}
                />
                <div className={styles.certGlow}></div>
                <div className={styles.imgLabel}>02 // Excellence Award</div>
              </div>

              {/* Decorative Crosshairs */}
              <div className={styles.crosshair} style={{ top: '-10px', left: '-10px' }}>+</div>
              <div className={styles.crosshair} style={{ bottom: '-10px', right: '-10px' }}>+</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}