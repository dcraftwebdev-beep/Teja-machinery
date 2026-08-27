import { useEffect, useRef, useState } from 'react'
import styles from './Cta.module.css'

/* ── Hook: staggered reveal on scroll ──────────── */
function useReveal(selector) {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll(selector)
    if (!els) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.vis); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selector])
  return ref
}

/* ── Component ──────────────────────────────────── */
export default function About() {

  const ctaRef     = useReveal(`.${styles.ctaReveal}`)

  return (
    <main className={styles.page}>

  

      {/* ══════════════════════════════════
          CTA BANNER
          ══════════════════════════════════ */}
      <section className={styles.ctaSection} ref={ctaRef}>
        <div className={styles.ctaBg}>
          <div className={styles.ctaGrid} />
          <div className={styles.ctaGlow} />
        </div>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={`${styles.ctaReveal} ${styles.ctaLeft}`}>
              <p className={styles.ctaEyebrow}>Ready to elevate your operations?</p>
              <h2 className={styles.ctaHeading}>
                Let's Engineer<br />
                <span>Your Next</span><br />
                Breakthrough.
              </h2>
              <p className={styles.ctaBody}>
                From CNC retrofitting to full-scale manufacturing, our 40+ strong team delivers
                on time, every time. Trusted by ISRO, BrahMos Aerospace, and India's leading industries.
              </p>
              <div className={styles.ctaActions}>
                <a href="#contact" className={styles.ctaBtnPrimary}>Start a Project</a>
                <a href="#capabilities" className={styles.ctaBtnGhost}>Our Capabilities →</a>
              </div>
            </div>
            <div className={`${styles.ctaReveal} ${styles.ctaRight}`}>
              <div className={styles.ctaCards}>
                <div className={styles.ctaStatCard}>
                  <span className={styles.ctaStatNum}>18+</span>
                  <span className={styles.ctaStatLbl}>Years of precision</span>
                </div>
                <div className={styles.ctaStatCard}>
                  <span className={styles.ctaStatNum}>₹50M</span>
                  <span className={styles.ctaStatLbl}>Facility investment</span>
                </div>
                <div className={styles.ctaStatCard}>
                  <span className={styles.ctaStatNum}>3</span>
                  <span className={styles.ctaStatLbl}>Countries served</span>
                </div>
                <div className={styles.ctaStatCard}>
                  <span className={styles.ctaStatNum}>100%</span>
                  <span className={styles.ctaStatLbl}>On-time delivery</span>
                </div>
              </div>
              <div className={styles.ctaTrust}>
                {['ISRO', 'BrahMos', 'L&T', 'BHEL', 'DRDO'].map(name => (
                  <span key={name} className={styles.ctaTrustPill}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}