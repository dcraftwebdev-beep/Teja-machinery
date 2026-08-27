import styles from './WhyChoose.module.css'

const pillars = [
  {
    id: '01',
    tag: 'Track Record',
    title: 'Proven Track Record',
    desc: '60+ machine brands successfully retrofitted, including projects completed without original documentation.',
    features: [
      '60+ machine brands retrofitted',
      'Projects without original docs',
      'Consistent quality across categories',
    ],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    alt: 'Engineer working at precision machinery',
  },
  {
    id: '02',
    tag: 'Full Service',
    title: 'Complete Solution Provider',
    desc: 'From initial assessment to ongoing support, on-site or factory-based, with custom solutions for unique requirements.',
    features: [
      'Assessment to ongoing support',
      'On-site & factory-based service',
      'Custom solutions for unique needs',
    ],
    img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop',
    alt: 'Industrial automation floor',
  },
  {
    id: '03',
    tag: 'Technology',
    title: 'Advanced Technology Integration',
    desc: 'Modern CNC systems from FANUC and Siemens, paired with full automation and robotics for future-ready operations.',
    features: [
      'FANUC / Siemens CNC systems',
      'Automation & robotics integration',
      'Future-ready upgrades',
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    alt: 'Advanced control technology',
  },
]

const credentials = [
  {
    label: 'ISO 9001:2015 Certified',
    icon: (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Est. 2005, 20+ Years',
    icon: (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'FANUC Authorized Partner',
    icon: (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'ASME Section IX Welding',
    icon: (
      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className={styles.section}>
      <div className={styles.wrap}>

        {/* Header */}
        <div className={styles.top}>
          <div>
            <div className={styles.tag}>
              <span className={styles.tagLine} />
              Why Choose Us
            </div>
            <h2 className={styles.h2}>
              Built on <em>Precision.</em><br />
              Proven by <em>Results.</em>
            </h2>
          </div>
          <div className={styles.topRight}>
            <p className={styles.topDesc}>
              For over two decades, Teja Machinery has set the benchmark for industrial
              retrofitting and automation, trusted by manufacturers across India's most
              demanding sectors.
            </p>
            {/* <div className={styles.statRow}>
              <div className={styles.statPill}>
                <span className={styles.statNum}>60+</span>
                <span className={styles.statLbl}>Machine Brands</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLbl}>Years Active</span>
              </div>
              <div className={styles.statPill}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLbl}>On-site Support</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Pillars */}
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.id} className={styles.pillar}>
              <div className={styles.pillarHead}>
                <span className={styles.bigNum}>{p.id}</span>
                <span className={styles.pillarTag}>{p.tag}</span>
              </div>
              <div className={styles.pillarBody}>
                <div className={styles.pillarTitle}>{p.title}</div>
                <p className={styles.pillarDesc}>{p.desc}</p>
                <ul className={styles.feats}>
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className={styles.dot} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom credentials band */}
        <div className={styles.band}>
          <div className={styles.bandItems}>
            {credentials.map((c) => (
              <div key={c.label} className={styles.bandItem}>
                <div className={styles.bandIcon}>{c.icon}</div>
                <span className={styles.bandText}>{c.label}</span>
              </div>
            ))}
          </div>
          {/* <a href="#contact" className={styles.bandCta}>
            Start a Project
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>

      </div>
    </section>
  )
}