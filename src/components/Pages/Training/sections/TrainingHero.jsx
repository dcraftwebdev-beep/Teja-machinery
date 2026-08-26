import s from './TrainingHero.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

export default function TrainingHero() {
  return (
    <section className={s.hero}>
      <div className={s.guides}><span /><span /><span /></div>
      <div className={s.glow} />
      <div className={s.inner}>
        <span className={s.pill}><span className={s.pillDot} />Skill development</span>
        <h1 className={s.title}>Teja Technical<br />Training <em>Institute</em></h1>
        <p className={s.desc}>
          Hands-on skill development in CNC, Robotics and Mechatronics — delivered in a
          state-of-the-art lab and jointly certified with FANUC, so students and professionals
          are productive from day one of employment.
        </p>
        <div className={s.btn}>
          <AnimButton to="/contact" label="Enquire now" variant="orange" />
        </div>
      </div>
      <div className={s.image}>
        <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop" alt="TTTI training lab" />
      </div>
    </section>
  );
}
