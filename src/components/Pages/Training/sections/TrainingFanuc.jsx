import s from './TrainingFanuc.module.css';

const stats = [
  { num: '1972', label: 'FANUC founded, inventor of NC technology' },
  { num: '#2', label: 'Largest company in Japan' },
  { num: '75%+', label: 'Global CNC & robotics market share' },
  { num: '350,000+', label: 'Industrial robots installed worldwide' },
];

export default function TrainingFanuc() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.top}>
          <div>
            <span className={s.pill}><span className={s.pillDot} />In partnership with FANUC</span>
            <h2 className={s.heading}>Certified with the world leader in <em>CNC &amp; robotics</em></h2>
            <p className={s.para}>
              FANUC invented NC technology and revolutionized factory automation worldwide. Its
              CNC systems deliver high-speed, high-precision, highly efficient machining, powered
              by patented SERVO motor technology for precision and reliability.
            </p>
            <p className={s.para}>
              Building on that CNC and servo foundation, FANUC is the world&rsquo;s largest maker of
              industrial robots, used for material handling, welding, foundry, assembly, cutting
              and painting, and the current market leader in India.
            </p>
          </div>
          <div className={s.stats}>
            {stats.map((st) => (
              <div key={st.num} className={s.stat}>
                <div className={s.statNum}>{st.num}</div>
                <div className={s.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
