import styles from './WhatWeManufacture.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M5 21h14" />
  </svg>
);

const products = [
  {
    title: 'Robotic System',
    img: '/Assests/products/robotic-system.jpg',
    specs: [['System', 'FANUC robotics'], ['Software', 'Roboguide offline'], ['Applications', 'Handling · welding · assembly']],
  },
  {
    title: 'Simulation Software',
    img: '/Assests/products/simulation-software.jpg',
    specs: [['Type', 'Real-time modeling'], ['Use', 'Design validation'], ['Scope', 'Process & equipment']],
  },
  {
    title: 'Direct Lubrication System',
    img: '/Assests/products/direct-lubrication-system.jpg',
    specs: [['Brand', 'DLS · flexxpump'], ['Function', 'Gear & rack lubrication'], ['Range', 'Open gears, all sizes']],
  },
  {
    title: 'CNC Retrofitting',
    img: '/Assests/products/cnc-retrofitting.jpg',
    specs: [['Upgrade', 'Controls, drives, motors'], ['Machines', 'VTL · HBM · VMC'], ['Size', '1m to 16m']],
  },
];

/* callout coordinates in the exploded SVG space (1106 x 486) */
const RING = (cx, cy) => (
  <g>
    <circle cx={cx} cy={cy} r="8" fill="none" stroke="#d64a14" strokeWidth="2.5" />
    <circle cx={cx} cy={cy} r="2.5" fill="#d64a14" />
  </g>
);

export default function WhatWeManufacture() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.guides}><span /><span /><span /></div>

        {/* Top row */}
        <div className={styles.topRow}>
          <span className={styles.tag}>
            <span className={styles.tagDot} />
            What we manufacture
          </span>
          <div className={styles.stat}>
            <div className={styles.statBig}>50,000<em>+</em></div>
            <p className={styles.statDesc}>Precision-built products delivered to clients across industries and continents.</p>
          </div>
        </div>

        {/* Exploded diagram with callouts */}
        <div className={styles.diagram}>
          <img className={styles.explodedImg} src="/Assests/manufacture/exploded.svg" alt="Exploded view of a precision assembly" />
          <svg className={styles.callouts} viewBox="0 0 1106 486" preserveAspectRatio="xMidYMid meet" fill="none">
            {/* Aluminum Gear Housing, top center */}
            <line x1="430" y1="205" x2="430" y2="110" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            {RING(430, 205)}
            {/* Plastic Enclosures, bottom left */}
            <line x1="105" y1="300" x2="105" y2="400" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            {RING(105, 300)}
            {/* Electrical Panels, bottom right */}
            <line x1="815" y1="300" x2="815" y2="400" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            {RING(815, 300)}
          </svg>
          <span className={styles.label} style={{ left: '38.9%', top: '14%' }}>Aluminum<br />Gear Housing</span>
          <span className={styles.label} style={{ left: '9.5%', top: '85%' }}>Plastic Enclosures</span>
          <span className={styles.label} style={{ left: '73.7%', top: '85%' }}>Electrical Panels</span>
        </div>

        {/* Product spec cards */}
        <div className={styles.cards}>
          {products.map((p) => (
            <div key={p.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <img className={styles.cardImg} src={p.img} alt={p.title} loading="lazy" />
              {p.specs.map(([label, val]) => (
                <div key={label} className={styles.spec}>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specVal}>{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <h2 className={styles.bottomHeading}>Explore our complete product range across industries.</h2>
          <div className={styles.bottomActions}>
            <a href="/contact" className={styles.download}>Download brochure <Download /></a>
            <AnimButton to="/gallery" label="View all products" variant="dark" className={styles.viewBtn} />
          </div>
        </div>
      </div>
    </section>
  );
}
