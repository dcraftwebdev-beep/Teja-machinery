import { useState } from 'react';
import s from './ServiceFaq.module.css';

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const Close = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
);

const faqs = [
  {
    q: 'What manufacturing & engineering services do you provide?',
    a: 'We offer end-to-end solutions — machine retrofitting and reconditioning, CNC automation and robotics, precision fabrication and special-purpose machines (SPM), plus technical training through our FANUC-partnered institute.',
  },
  {
    q: 'Which machines can you retrofit or recondition?',
    a: 'VTL, HBM, VMC, HMC, lathes, FBM and grinding machines ranging from 1m to 16m — including projects delivered without original documentation.',
  },
  {
    q: 'Do you work with SIEMENS and FANUC controls?',
    a: 'Yes. Our teams commission SIEMENS and FANUC systems across India and abroad — including installations in Singapore, Malaysia and Africa.',
  },
  {
    q: 'Can you manage low and high-volume production?',
    a: 'Yes — from one-off SPM builds to full manufacturing and fabrication runs for the aerospace, windmill, automobile and engineering industries at our in-house facility.',
  },
  {
    q: 'What industries and clients do you serve?',
    a: 'We are ISO-accredited and IBR-approved, working with ISRO, BRAHMOS Aerospace and other leading government and private-sector organisations.',
  },
];

export default function ServiceFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={s.section}>
      <div className={s.head}>
        <span className={s.pill}><span className={s.pillDot} />Common questions</span>
        <h2 className={s.title}>Frequently<br />asked questions</h2>
      </div>

      <div className={s.list}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={`${s.item} ${isOpen ? s.itemOpen : ''}`}>
              <button type="button" className={s.row} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                {f.q}
                <span className={s.icon}>{isOpen ? <Close /> : <Plus />}</span>
              </button>
              <div className={`${s.answerWrap} ${isOpen ? s.answerWrapOpen : ''}`}>
                <p className={s.answer}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
