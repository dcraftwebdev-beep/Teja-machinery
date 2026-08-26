import s from './TrainingCourses.module.css';

const courses = [
  { name: 'CNC Programming', desc: 'Write, edit and optimize part programs on live FANUC controls.', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=600&auto=format&fit=crop' },
  { name: 'CNC Interfacing', desc: 'Machine parameters, I/O and control integration for real machine tools.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop' },
  { name: 'Robot Programming', desc: 'Teach, path-plan and operate FANUC industrial robots hands-on.', img: 'https://images.unsplash.com/photo-1537248384218-4a572a188f8d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Mechatronics', desc: 'Blend mechanical, electronics and controls for automation systems.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
];

export default function TrainingCourses() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.intro}>
          <div>
            <span className={s.pill}><span className={s.pillDot} />About the institute</span>
            <h2 className={s.heading}>Practical skills that make you <em>industry-ready</em></h2>
            <p className={s.para}>
              TTTI offers technical skill development in CNC, Robotics and Mechatronics. Our
              teaching methodology puts practical learning first — every course is designed to
              impart the exact skills the industry needs, so graduates are immediately employable.
            </p>
            <div className={s.highlights}>
              <div className={s.hl}>
                <span className={s.hlNum}>50%+</span>
                <span className={s.hlLabel}>Time spent operating advanced machinery</span>
              </div>
              <div className={s.hl}>
                <span className={s.hlNum}>FANUC</span>
                <span className={s.hlLabel}>Jointly certified &amp; industry-recognized</span>
              </div>
            </div>
          </div>
          <div className={s.introImg}>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop" alt="Hands-on training" loading="lazy" />
          </div>
        </div>

        <div className={s.courseHead}>
          <span className={s.pill}><span className={s.pillDot} />What we teach</span>
          <h2 className={s.courseTitle}>Our core programs</h2>
        </div>
        <div className={s.grid}>
          {courses.map((c) => (
            <article key={c.name} className={s.card}>
              <img className={s.cardImg} src={c.img} alt={c.name} loading="lazy" />
              <div className={s.cardBody}>
                <div className={s.cardName}>{c.name}</div>
                <p className={s.cardDesc}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
