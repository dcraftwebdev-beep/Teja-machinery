import { useState } from 'react';
import styles from './Industries.module.css';

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13v5h-2v-2H7v2H5z" /><circle cx="7.5" cy="15.5" r="1" /><circle cx="16.5" cy="15.5" r="1" />
  </svg>
);
const IconMedical = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 12h18" /><rect x="3" y="3" width="18" height="18" rx="4" />
  </svg>
);
const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>
);
const IconGear = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const industries = [
  {
    tab: 'Aerospace industry', title: 'Aerospace', icon: <IconRocket />,
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop',
    desc: 'Certified aerospace components built for mission-critical performance and full traceability.',
    features: ['Full material traceability', 'NADCAP special process approval', 'Critical safety component expertise'],
  },
  {
    tab: 'Automotive', title: 'Automotive', icon: <IconCar />,
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=900&auto=format&fit=crop',
    desc: 'High-volume precision components and automation cells for demanding production lines.',
    features: ['IATF-ready processes', 'High-volume repeatability', 'Robotic assembly integration'],
  },
  {
    tab: 'Medical devices', title: 'Medical devices', icon: <IconMedical />,
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop',
    desc: 'Cleanroom-grade precision parts engineered to strict medical tolerances.',
    features: ['Cleanroom fabrication unit', 'Biocompatible material handling', 'Tight-tolerance machining'],
  },
  {
    tab: 'Energy & power', title: 'Energy & power', icon: <IconBolt />,
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=900&auto=format&fit=crop',
    desc: 'Rugged components for power generation, transmission and heavy energy plants.',
    features: ['Large-format fabrication', 'Pressure-vessel expertise', 'Corrosion-resistant finishes'],
  },
  {
    tab: 'Industrial equipment', title: 'Industrial equipment', icon: <IconGear />,
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop',
    desc: 'Custom machinery, retrofits and turnkey automation for heavy industrial equipment.',
    features: ['Special-purpose machines', 'CNC retrofitting', 'Turnkey automation cells'],
  },
];

const scatter = [
  'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&auto=format&fit=crop',
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const cur = industries[active];

  return (
    <section className={styles.section}>
      <img className={`${styles.scatter} ${styles.s1}`} src={scatter[0]} alt="" loading="lazy" />
      <img className={`${styles.scatter} ${styles.s2}`} src={scatter[1]} alt="" loading="lazy" />
      <img className={`${styles.scatter} ${styles.s3}`} src={scatter[2]} alt="" loading="lazy" />
      <img className={`${styles.scatter} ${styles.s4}`} src={scatter[3]} alt="" loading="lazy" />
      <img className={`${styles.scatter} ${styles.s5}`} src={scatter[4]} alt="" loading="lazy" />

      <div className={styles.header}>
        <span className={styles.pill}>
          <span className={styles.pillDot} />
          Build for every industry
        </span>
        <h2 className={styles.heading}>
          Manufacturing <em>solutions</em><br />for every industry
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.tabs}>
          {industries.map((it, i) => (
            <button
              key={it.tab}
              type="button"
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {it.tab}
            </button>
          ))}
        </div>

        <div className={styles.card}>
          <img className={styles.cardImg} src={cur.img} alt={cur.title} />
          <div className={styles.cardBody}>
            <span className={styles.cardIcon}>{cur.icon}</span>
            <h3 className={styles.cardTitle}>{cur.title}</h3>
            <p className={styles.cardDesc}>{cur.desc}</p>
            <ul className={styles.featList}>
              {cur.features.map((f) => (
                <li key={f} className={styles.featItem}><Check /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
