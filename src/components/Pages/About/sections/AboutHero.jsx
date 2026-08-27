import s from './AboutHero.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M5 21h14" />
  </svg>
);

const avatars = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
];

export default function AboutHero() {
  return (
    <section className={s.hero}>
      <div className={s.heroGuides}><span /><span /><span /><span /></div>
      <div className={s.heroGlow} />

      <div className={s.heroTop}>
        <span className={s.pill}><span className={s.pillDot} />Who we are</span>
        <h1 className={s.heroTitle}>About us</h1>
      </div>

      <div className={s.heroMeta}>
        <div className={s.metaTeam}>
          <div className={s.avatars}>
            {avatars.map((a, i) => <img key={i} src={a} alt="Team Member" loading="lazy" />)}
            <span className={s.count}>10+</span>
          </div>
          <span className={s.metaTeamNote}>Team of <br/> passionate professionals</span>
        </div>
        <span className={s.metaCoords}>13.0827° N, 80.2707° E</span>
      </div>

      <div className={s.heroBanner}>
        <div className={s.heroBannerImg}>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Manufacturing facility" />
        </div>
        <div className={s.heroCard}>
          <p className={s.heroCardText}>
            Founded in 2006 by S. Muthu, Teja Machinery grew from machine
            retrofitting into a one-stop partner for CNC automation, robotics,
            precision fabrication and technical training, trusted by ISRO,
            BRAHMOS Aerospace and industry leaders across India and abroad.
          </p>
          <div className={s.heroCardActions}>
            <AnimButton to="/contact" label="Meet our team" variant="dark" />
            <a href="/brochure.pdf" className={s.brochure}>
              Download brochure <Download />
            </a>
          </div>
          <div className={s.since}>CE - 2006 SINC</div>
        </div>
      </div>
    </section>
  );
}