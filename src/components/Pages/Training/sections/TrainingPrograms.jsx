import { Link } from 'react-router-dom';
import styles from '../../Home/sections/CoreServices.module.css'; // reuse the Home "What we do" sticky-stack design
import AnimButton from '../../../Button/AnimButton.jsx';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const IconChip = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>
);
const IconRobot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="9" width="14" height="10" rx="2" /><path d="M12 9V5" /><circle cx="12" cy="4" r="1.4" /><path d="M9 13h.01M15 13h.01" /><path d="M2 13h3M19 13h3" /></svg>
);
const IconGear = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
);

const programs = [
  {
    id: '01', title: 'CNC Programming', icon: <IconCode />,
    image: '/Assests/core-programns/CNC%20Programming.jpg',
    features: ['Live FANUC controls', 'Part program writing & editing', 'Toolpath optimization', 'G-code fundamentals'],
  },
  {
    id: '02', title: 'CNC Interfacing', icon: <IconChip />,
    image: '/Assests/core-programns/CNC%20Interfacing.jpg',
    features: ['Machine parameters & I/O', 'Control integration', 'Servo & spindle setup', 'Alarm diagnostics'],
  },
  {
    id: '03', title: 'Robot Programming', icon: <IconRobot />,
    image: '/Assests/core-programns/Robot%20Programming.jpg',
    features: ['FANUC robot teaching', 'Path & motion planning', 'Gripper & tool setup', 'Robot cell operation'],
  },
  {
    id: '04', title: 'Mechatronics', icon: <IconGear />,
    image: '/Assests/core-programns/Mechatronics.jpg',
    features: ['Mechanical + electronics', 'Sensors & actuators', 'PLC & controls', 'Automation systems'],
  },
];

export default function TrainingPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.headText}>
            <span className={styles.tag}>
              <span className={styles.tagDot} />
              What we teach
            </span>
            <h2 className={styles.heading}>
              Our core <em>programs</em>
            </h2>
          </div>
          <AnimButton to="/contact" label="Enquire now" variant="dark" />
        </div>

        <div className={styles.stack}>
          {programs.map((p) => (
            <article key={p.id} className={styles.row}>
              <span className={styles.icon}>{p.icon}</span>
              <img className={styles.thumb} src={p.image} alt={p.title} loading="lazy" />
              <h3 className={styles.title}>{p.title}</h3>
              <div className={styles.features}>
                <div className={styles.featLabel}>You'll learn</div>
                <ul className={styles.featList}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.featItem}><Check /> {f}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className={styles.rowArrow} aria-label={`${p.title} — enquire`}>
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
