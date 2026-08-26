import s from './AboutJourney.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const ArrowR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const capabilities = [
  'Retrofitting & Reconditioning',
  'CNC Automation & Robotics',
  'Precision Fabrication & SPM',
  'Technical Training — TTTI',
];

export default function AboutJourney() {
  return (
    <section className={s.journey}>
      <div className={s.wrap}>
        <div className={s.journeyHead}>
          <div className={s.pillWrapper}>
            <span className={s.pill}><span className={s.pillDot} />Our journey</span>
          </div>
          <h2 className={s.journeyHeading}>
            Engineering trust and <em>quality</em> through years of manufacturing experience
          </h2>
        </div>

        <div className={s.journeyGrid}>
          <div className={s.founderCard}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" alt="S. Muthu" loading="lazy" />
            <div className={s.founderInfo}>
              <div className={s.founderName}>S. Muthu</div>
              <div className={s.founderRole}>Founder &amp; Managing Director</div>
            </div>
          </div>

          <div className={s.storyCol}>
            <h4 className={s.colTitle}>Our story</h4>
            <p className={s.storyPara}>
              Established in 2006, Teja Machinery began by retrofitting conventional
              and NC machines with upgraded CNC controls, PLC automation and tool
              refurbishment — delivering VTL, HBM, VMC and grinding projects from 1m
              to 16m, on time and cost-effectively, across India.
            </p>
            <p className={s.storyPara}>
              Commissioning SIEMENS and FANUC systems, our teams have proven their
              caliber in North India and abroad — Singapore, Malaysia and Africa.
              Today, with CNC automation, robotics, a FANUC-partnered training
              institute and a precision manufacturing facility, Teja is an
              ISO-accredited, one-stop engineering partner.
            </p>
          </div>

          <div className={s.capCol}>
            <h4 className={s.colTitle}>Our capabilities</h4>
            <div className={s.capList}>
              {capabilities.map((c) => (
                <div key={c} className={s.capItem}>{c}<ArrowR /></div>
              ))}
            </div>
            <div className={s.capBtn}>
              <AnimButton to="/services" label="View all capabilities" variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}