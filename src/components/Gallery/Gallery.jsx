import { Link } from 'react-router-dom';
import s from './Gallery.module.css';
import grid from '../Pages/Service/sections/ServiceGrid.module.css'; // reuse the Services card design
import CtaBanner from '../Pages/Home/sections/CtaBanner.jsx';

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const products = [
  {
    title: 'Robotic System',
    img: '/Assests/products/robotic-system.jpg',
    short: 'Roboguide software to design, prove and program robot systems in real time — cutting design and test time.',
  },
  {
    title: 'Simulation Software',
    img: '/Assests/products/simulation-software.jpg',
    short: 'Model real operations with math-based simulation to validate designs before costly in-process changes.',
  },
  {
    title: 'Direct Lubrication System',
    img: '/Assests/products/direct-lubrication-system.jpg',
    short: 'DLS lubrication for pinions, racks and open gears — greases, flexxpump units and tube connectors.',
  },
  {
    title: 'CNC Retrofitting',
    img: '/Assests/products/cnc-retrofitting.jpg',
    short: 'Upgrade CNC controls, drives and motors — turning old machines into high-productivity CNC machines.',
  },
];

export default function Gallery() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.pill}><span className={s.pillDot} />Product gallery</span>
          <h1 className={s.heroTitle}>Products &amp; <em>solutions</em></h1>
          <p className={s.heroDesc}>
            Software, systems and retrofits that keep your machines precise, productive and
            future-ready — engineered and supported end to end by Teja.
          </p>
        </div>
      </section>

      <section className={grid.section}>
        <div className={grid.grid}>
          {products.map((p) => (
            <Link key={p.title} to="/contact" className={grid.card}>
              <span className={grid.hoverArrow}><ArrowUpRight /></span>
              <img className={grid.thumb} src={p.img} alt={p.title} loading="lazy" />
              <h2 className={grid.title}>{p.title}</h2>
              <p className={grid.desc}>{p.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
