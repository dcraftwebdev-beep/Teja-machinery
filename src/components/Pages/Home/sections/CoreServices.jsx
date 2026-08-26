import { Link } from 'react-router-dom';
import styles from './CoreServices.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* simple line icons per division */
const IconFab = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" /><path d="M6 21V9l6-4 6 4v12" /><path d="M10 21v-5h4v5" /><path d="M9 12h.01M15 12h.01" />
  </svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="9" width="14" height="10" rx="2" /><path d="M12 9V5" /><circle cx="12" cy="4" r="1.4" /><path d="M9 13h.01M15 13h.01" /><path d="M2 13h3M19 13h3" />
  </svg>
);
const IconCnc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);
const IconHandling = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 19h8" /><rect x="7" y="5" width="10" height="8" rx="1" /><path d="M12 5v8" />
  </svg>
);

const services = [
  {
    id: '01',
    title: 'Fabrication & Machining',
    image: '/Assests/services/fabrication-and-machining.jpg',
    icon: <IconFab />,
    features: ['ROBODRILL, HMC & CNC machining', 'High-end welding facility', 'Heavy material handling', 'Upgraded quality management'],
  },
  {
    id: '02',
    title: 'Industrial Automation',
    image: '/Assests/services/industrial-automation.jpg',
    icon: <IconRobot />,
    features: ['Robotic welding & machine tending', 'Palletizing & foundry cells', 'Custom gripper solutions', 'Gantry-based tracking systems'],
  },
  {
    id: '03',
    title: 'CNC Retrofitting',
    image: '/Assests/services/cnc-retrofitting.jpg',
    icon: <IconCnc />,
    features: ['VTL, HBM & VMC retrofits', 'Conventional machine reconditioning', 'Machine tool re-engineering', 'PLC automation upgrades'],
  },
  {
    id: '04',
    title: 'Material Handling',
    image: '/Assests/services/material-handling.jpg',
    icon: <IconHandling />,
    features: ['High-speed pallet conveyors', 'Custom conveyor design', 'Assembly-line integration', 'Cost-effective automation'],
  },
];

export default function CoreServices() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.headText}>
            <span className={styles.tag}>
              <span className={styles.tagDot} />
              What we do
            </span>
            <h2 className={styles.heading}>
              Scalable <em>capabilities</em> for every challenge
            </h2>
          </div>
          <AnimButton to="/services" label="Explore all capabilities" variant="dark" />
        </div>

        <div className={styles.stack}>
          {services.map((s, idx) => (
            <article key={s.id} className={styles.row}>
              <span className={styles.icon}>{s.icon}</span>
              <img className={styles.thumb} src={s.image} alt={s.title} loading="lazy" />
              <h3 className={styles.title}>{s.title}</h3>
              <div className={styles.features}>
                <div className={styles.featLabel}>Features</div>
                <ul className={styles.featList}>
                  {s.features.map((f) => (
                    <li key={f} className={styles.featItem}><Check /> {f}</li>
                  ))}
                </ul>
              </div>
              <Link to="/services" className={styles.rowArrow} aria-label={`${s.title} — learn more`}>
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
