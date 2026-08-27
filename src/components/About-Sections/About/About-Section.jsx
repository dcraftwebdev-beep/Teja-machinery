import { useEffect, useRef, useState } from 'react'
import styles from './About-Section.module.css'

/* ── Data ──────────────────────────────────────── */
const stats = [
  { num: '2006', label: 'Established' },
  { num: '40+',  label: 'Professionals' },
  { num: '18+',  label: 'Years Expertise' },
  { num: '₹50M', label: 'Facility Investment' },
]
const milestones = [
  { year: '2006', text: 'Founded by Mr. S. Muthu, began CNC retrofitting.' },
  { year: '2010', text: 'Expanded to VTL, HBM, VMC, HMC & Grinding Machines.' },
  { year: '2014', text: 'International presence: Singapore, Malaysia & Africa.' },
  { year: '2018', text: 'Commissioned major SIEMENS & FANUC systems nationwide.' },
  { year: '2020', text: 'Launched custom SPM machine design division.' },
  { year: '2023', text: 'ISO-certified, IBR-accredited. Partner to ISRO & BrahMos.' },
]


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
  const heroRef    = useReveal(`.${styles.statPill}`)
  const mileRef    = useReveal(`.${styles.mileCard}`)
  const mvRef      = useReveal(`.${styles.mvPanel}`)
  const teamRef    = useReveal(`.${styles.memberCard}`)
  const certRef    = useReveal(`.${styles.certCard}`)
  const ctaRef     = useReveal(`.${styles.ctaReveal}`)
 

  return (
    <main className={styles.page}>

      {/* ══════════════════════════════════
          §1  ABOUT, editorial split layout
          ══════════════════════════════════ */}
      <section id="about" className={styles.heroSection} ref={heroRef}>

        {/* LEFT, large sticky panel */}
        <div className={styles.heroLeft}>
          <div className={styles.heroImg}>
            <div className={styles.heroImgOverlay} />
            <div className={styles.heroImgContent}>
              <p className={styles.heroEst}>Est. 2006</p>
              <h1 className={styles.heroTitle}>
                Teja<br />
                <span className={styles.heroTitleAccent}>Machinery</span>
              </h1>
              <div className={styles.heroStatsRow}>
                {stats.map(s => (
                  <div key={s.label} className={styles.statPill}>
                    <span className={styles.statPillNum}>{s.num}</span>
                    <span className={styles.statPillLbl}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT, article cards feed */}
        <div className={styles.heroRight}>
          <div className={styles.heroRightInner}>

            <div className={styles.sectionTag}>About Us</div>
            <h2 className={styles.heroRightTitle}>
              India's Comprehensive<br />Manufacturing Solutions
            </h2>
            <p className={styles.heroRightLead}>
              Established in 2006 by Mr. S. Muthu, Teja Machinery has evolved from a specialised
              CNC retrofitting firm into India's comprehensive manufacturing solutions provider.
              With nearly two decades of expertise, we've successfully retrofitted machines
              ranging from 1 m to 16 m across VTL, HBM, VMC, HMC, Lathes, FBM, and Grinding
              Machines throughout India, and internationally in Singapore, Malaysia, and Africa.
            </p>
            <p className={styles.heroRightBody}>
              Our expansion includes commissioning major SIEMENS and FANUC systems, designing
              custom SPM machines, and establishing a state-of-the-art manufacturing facility
              with ₹50 million investment serving aerospace, wind energy, automotive, and
              engineering sectors. Today, as an ISO-certified and IBR-accredited organisation,
              we proudly partner with ISRO, BrahMos Aerospace, and leading industrial corporations.
            </p>

            {/* Milestone feed, mirrors article-card layout */}
            {/* <div className={styles.mileFeed} ref={mileRef}>
              {milestones.map((m) => (
                <div key={m.year} className={styles.mileCard}>
                  <div className={styles.mileImgWrap}>
                    <span className={styles.mileYear}>{m.year}</span>
                  </div>
                  <div className={styles.mileBody}>
                    <span className={styles.mileDot} />
                    <p className={styles.mileText}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div> */}

          </div>
        </div>
      </section>

    

    </main>
  )
}