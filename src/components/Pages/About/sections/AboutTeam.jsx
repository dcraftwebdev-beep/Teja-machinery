import s from './AboutTeam.module.css';

const XIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.3l-7.2 8.26L22.85 21.75h-6.63l-5.2-6.8-5.94 6.8H1.77l7.72-8.83L1.15 2.25h6.8l4.7 6.22 5.6-6.22Zm-1.16 17.52h1.83L7.01 4.13H5.05Z" /></svg>);
const IgIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const InIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>);

const team = [
  { name: 'S. Muthu', role: 'Founder & Managing Director' },
  { name: 'Vivek', role: 'Director — CNC & Automation' },
  { name: 'Retrofit & Reconditioning', role: 'Machine Tool Division' },
  { name: 'Robotics & Automation', role: 'Industrial Systems' },
  { name: 'Teja Technical Training Institute', role: 'FANUC-Partnered Programs' },
  { name: 'Precision Manufacturing', role: 'Aerospace & Fabrication' },
];

export default function AboutTeam() {
  return (
    <section className={s.team}>
      <div className={s.wrap}>
        <div className={s.teamGrid}>
          <div className={s.teamLeft}>
            <span className={s.pill}><span className={s.pillDot} />Meet our experts</span>
            <h2 className={s.teamHeading}>Leaders in <em>precision</em> work</h2>
            <div className={s.teamPhoto}>
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=700&auto=format&fit=crop" alt="Teja Machinery engineer" loading="lazy" />
            </div>
          </div>

          <div className={s.teamList}>
            {team.map((m) => (
              <div key={m.name} className={s.memberRow}>
                <span className={s.memberName}>{m.name}</span>
                <span className={s.memberRole}>{m.role}</span>
                <span className={s.memberSocials}>
                  <a href="#" aria-label="X"><XIcon /></a>
                  <a href="#" aria-label="Instagram"><IgIcon /></a>
                  <a href="#" aria-label="LinkedIn"><InIcon /></a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
