import { Link } from 'react-router-dom';
import s from './ServiceGrid.module.css';
import { servicesData } from '../../../../data/servicesData';
import { toSlug } from '../../../../data/serviceSlug';

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function ServiceGrid() {
  return (
    <section className={s.section}>
      <div className={s.grid}>
        {servicesData.map((service) => (
          <Link key={service.id} to={`/services/${toSlug(service.title)}`} className={s.card}>
            <span className={s.hoverArrow}><ArrowUpRight /></span>
            <img className={s.thumb} src={service.image} alt={service.title} loading="lazy" />
            <h2 className={s.title}>{service.title}</h2>
            <p className={s.desc}>{service.shortDesc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
