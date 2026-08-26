import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudies.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const ArrowL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);
const ArrowR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const cases = [
  {
    title: 'Lightweight castings for Industrial equipment',
    desc: 'Redesigned metal castings to reduce material use and maintain strength, optimizing cost and weight.',
    stat: '35%', label: 'Heavy-duty machinery',
    brand: 'oslo.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'CNC retrofit for an Automotive line',
    desc: 'Re-engineered ageing VMC machines with modern FANUC controls to restore precision and uptime.',
    stat: '40%', label: 'Cycle time reduced',
    brand: 'U-Turn',
    img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Robotic cell for Aerospace parts',
    desc: 'Integrated a robotic machine-tending cell that lifted throughput while safeguarding operators.',
    stat: '3×', label: 'Throughput increase',
    brand: 'Swiss',
    img: 'https://images.unsplash.com/photo-1537248384218-4a572a188f8d?q=80&w=900&auto=format&fit=crop',
  },
];

const avatarA = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop';
const avatarB = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop';

const logos = Array.from({ length: 17 }, (_, i) => `/Assests/Clients/${i + 1}.webp`);

export default function CaseStudies() {
  const [i, setI] = useState(0);
  const c = cases[i];
  const prev = () => setI((n) => (n - 1 + cases.length) % cases.length);
  const next = () => setI((n) => (n + 1) % cases.length);

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div>
            <span className={styles.tag}><span className={styles.tagDot} />Real-world success</span>
            <h2 className={styles.heading}>Real <em>results</em> from real projects</h2>
          </div>
          <div className={styles.navBtns}>
            <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous case"><ArrowL /></button>
            <button type="button" className={styles.navBtn} onClick={next} aria-label="Next case"><ArrowR /></button>
          </div>
        </div>

        <div className={styles.caseRow}>
          <div className={styles.caseCard}>
            <h3 className={styles.caseTitle}>{c.title}</h3>
            <p className={styles.caseDesc}>{c.desc}</p>
            <div className={styles.caseFoot}>
              <div className={styles.caseStat}>
                <div className={styles.caseStatNum}>{c.stat}</div>
                <div className={styles.caseStatLabel}>{c.label}</div>
              </div>
              <AnimButton to="/services" label="View case" variant="light" />
            </div>
          </div>
          <div className={styles.caseImage}>
            <img src={c.img} alt={c.title} />
            <span className={styles.caseBrand}>{c.brand}</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.convo}>
          <div className={styles.convoLeft}>
            <span className={styles.avatarPair}>
              <img src={avatarA} alt="" loading="lazy" />
              <img src={avatarB} alt="" loading="lazy" />
            </span>
            <div>
              <div className={styles.convoTitle}>Open a conversation</div>
              <div className={styles.convoDesc}>Contact us to explore solutions tailored to your needs.</div>
            </div>
          </div>
          <AnimButton to="/contact" label="Contact us now" variant="dark" />
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...logos, ...logos].map((src, k) => (
              <div key={k} className={styles.logoCell}>
                <img src={src} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
