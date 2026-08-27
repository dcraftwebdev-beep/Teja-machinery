import styles from './Services.module.css'

const services = [
  {
    id: '01',
    title: 'CNC Retrofitting & Reconditioning',
    body: 'Transform aging equipment into modern, efficient machines, control & drive upgrades, conventional-to-CNC conversion, and full reconditioning.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Advanced Control Systems',
    body: 'Industry-leading FANUC & Siemens CNC integration, servo & spindle drive upgrades, PLC programming, and remote diagnostics.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Robotics & Automation',
    body: 'FANUC robotic integration, welding automation, machine tending, material handling, and special purpose machines (SPM).',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Precision Machined Components',
    body: 'High-end fabrication in Al, SS & special alloys for aerospace, railways and pressure vessels, machined by TÜV-certified welders.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.bgDots} />

      <div className={styles.wrap}>
        {/* Centered header */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagLine} />
            What We Do
            <span className={styles.tagLine} />
          </div>
          <h2 className={styles.title}>
            Your Engineering Partner in the <span>Machinery Industry</span>
          </h2>
          <p className={styles.desc}>
            Teja Machinery is a one-stop solution for all machining, machine and
            automation requirements, delivering excellence from retrofit to full automation.
          </p>
        </div>

        {/* Icon cards */}
        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.id} className={styles.card}>
              <span className={styles.cardNum}>{svc.id}</span>
              <div className={styles.iconWrap}>{svc.icon}</div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardBody}>{svc.body}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className={styles.ctaBar}>
          <span className={styles.ctaText}>4 Core Service Divisions, All Under One Roof</span>
          <a href="#contact" className={styles.ctaBtn}>
            Request a Quote
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
