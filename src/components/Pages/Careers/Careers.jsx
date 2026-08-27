import { Link } from 'react-router-dom';
import s from './Careers.module.css';
import AnimButton from '../../Button/AnimButton.jsx';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const Wrench = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z" /></svg>);
const Cap = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>);
const Grow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>);
const Star = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .6l3.7 7.4 8.2 1.2-5.9 5.8 1.4 8.2L12 18.9l-7.3 3.9 1.4-8.2L.1 9.2l8.2-1.2z" /></svg>);

const benefits = [
  { icon: <Wrench />, title: 'Hands-on with the best', desc: 'Work on live FANUC CNC, robotics and Mechatronics equipment every day.' },
  { icon: <Cap />, title: 'Learn from experts', desc: 'Grow under FANUC-certified engineers and our TTTI trainers.' },
  { icon: <Grow />, title: 'Cross-division growth', desc: 'Move across retrofitting, automation, fabrication and training.' },
  { icon: <Star />, title: 'Landmark projects', desc: 'Contribute to work for ISRO, BRAHMOS Aerospace and industry leaders.' },
];

const positions = [
  { title: 'CNC Programmer', meta: 'Machining · Chennai · Full-time' },
  { title: 'Automation & Robotics Engineer', meta: 'Automation · Chennai · Full-time' },
  { title: 'Service & Commissioning Engineer', meta: 'Field · Pan-India · Full-time' },
  { title: 'CNC Trainer, TTTI', meta: 'Training · Chennai · Full-time' },
  { title: 'Precision Fabrication Technician', meta: 'Manufacturing · Chennai · Full-time' },
  { title: 'Project Engineer', meta: 'Projects · Chennai · Full-time' },
];

export default function Careers() {
  const scrollToOpenings = () => {
    const el = document.getElementById('openings');
    if (!el) return;
    // use Lenis for smooth in-page scroll; fall back to native
    if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={s.page}>
      {/* hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.pill}><span className={s.pillDot} />Careers at Teja</span>
          <h1 className={s.heroTitle}>Build the future of <em>precision</em> manufacturing</h1>
          <p className={s.heroDesc}>
            Join a team that retrofits, automates and fabricates the machines behind India&rsquo;s
            core industries, and trains the next generation of engineers along the way.
          </p>
          <AnimButton onClick={scrollToOpenings} label="View open roles" variant="orange" />
        </div>
        <div className={s.heroImage}>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Teja Machinery team" />
        </div>
      </section>

      {/* benefits */}
      <section className={s.benefits}>
        <div className={s.wrap}>
          <div className={s.head}>
            <span className={s.pill}><span className={s.pillDot} />Why join us</span>
            <h2 className={s.headTitle}>Grow where the <em>work is real</em></h2>
          </div>
          <div className={s.bGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={s.bCard}>
                <span className={s.bIcon}>{b.icon}</span>
                <div className={s.bTitle}>{b.title}</div>
                <p className={s.bDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* open positions */}
      <section id="openings" className={s.positions}>
        <div className={s.wrap}>
          <div className={s.head}>
            <span className={s.pill}><span className={s.pillDot} />Open positions</span>
            <h2 className={s.headTitle}>Current openings</h2>
          </div>
          <div className={s.posList}>
            {positions.map((p, i) => (
              <div key={p.title} className={s.posRow}>
                <span className={s.posNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={s.posTitle}>{p.title}</span>
                <span className={s.posMeta}>{p.meta}</span>
                <Link to="/contact" className={s.applyBtn}>
                  Apply now <span className={s.applySq}><Arrow /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* closing band */}
      <section className={s.wrap}>
        <div className={s.band}>
          <div className={s.bandText}>
            <div className={s.bandTitle}>Didn&rsquo;t find your role?</div>
            <div className={s.bandDesc}>Send us your resume, we&rsquo;re always looking for skilled people.</div>
          </div>
          <div className={s.bandAction}>
            <AnimButton to="/contact" label="Send your resume" variant="light" />
          </div>
        </div>
      </section>
    </main>
  );
}
