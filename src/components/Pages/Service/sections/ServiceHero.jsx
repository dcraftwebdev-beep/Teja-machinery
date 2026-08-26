import s from './ServiceHero.module.css';

export default function ServiceHero() {
  return (
    <section className={s.hero}>
      <div className={s.guides}><span /><span /><span /></div>
      <div className={s.glow} />
      <div className={s.inner}>
        <span className={s.pill}><span className={s.pillDot} />What we offer</span>
        <h1 className={s.title}>Our services</h1>
      </div>
    </section>
  );
}
