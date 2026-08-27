import s from './AboutClients.module.css';

const Award = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" /><path d="M8.2 12 7 22l5-3 5 3-1.2-10" />
  </svg>
);

const logos = Array.from({ length: 10 }, (_, i) => `/Assests/Clients/${i + 1}.webp`);
const certs = ['ISO', 'IBR', 'FANUC', 'ISRO'];

export default function AboutClients() {
  return (
    <section className={s.clients}>
      <div className={s.clientsHead}>
        <span className={s.pill}><span className={s.pillDot} />Our clients</span>
        <h2 className={s.clientsHeading}>Trusted by <em>industry</em> leaders</h2>
      </div>

      <div className={s.logoGrid}>
        {logos.map((src) => (
          <div key={src} className={s.logoCell}><img src={src} alt="Client logo" loading="lazy" /></div>
        ))}
      </div>

      <div className={s.certRow}>
        <div className={s.certLead}><b>Since 2006</b>, accredited, IBR-approved &amp; ISO-certified excellence</div>
        <div className={s.badges}>
          {certs.map((c) => (
            <div key={c} className={s.badge}><Award /><span className={s.badgeText}>{c}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
