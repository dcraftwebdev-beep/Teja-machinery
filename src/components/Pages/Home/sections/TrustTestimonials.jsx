import { useState } from 'react';
import styles from './TrustTestimonials.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.401 8.169L12 18.896l-7.335 3.866 1.401-8.169L.132 9.21l8.2-1.192z" /></svg>
);
const Headset = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" /><path d="M20 14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2" /><path d="M18 20a6 6 0 0 1-4 2" />
  </svg>
);
const ArrowR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const testimonials = [
  { text: 'The team’s dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.', name: 'Emily Carter', role: 'Product Designer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
  { text: 'Teja Machinery retrofitted our ageing VMC line and it now runs like new — booked, delivered and commissioned without any fuss.', name: 'Rajesh M.', role: 'Plant Head, Auto Components', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  { text: 'We needed a complex automation cell integrated fast. The FANUC robotic solution was exactly what our production floor needed.', name: 'Bhaskar K.', role: 'Manufacturing Manager', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
  { text: 'From assessment to on-site support, the team was precise and reliable. Their precision machining quality is outstanding.', name: 'Lakshmi A.', role: 'Procurement Lead, Railways', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  { text: 'A true engineering partner — they re-engineered a machine with no documentation and delivered ahead of schedule.', name: 'Daniel O.', role: 'Operations Director', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
];

const midImg = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';

export default function TrustTestimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.tag}><span className={styles.tagDot} />Build on trust</span>
          <h2 className={styles.heading}>Trusted by <em>clients</em>, proven by results</h2>
        </div>

        <div className={styles.grid}>
          {/* avatar selector */}
          <div className={styles.selector}>
            {testimonials.map((tt, k) => (
              <button
                key={k}
                type="button"
                className={`${styles.avatarBtn} ${i === k ? styles.avatarActive : ''}`}
                onClick={() => setI(k)}
                aria-label={`Show testimonial from ${tt.name}`}
              >
                <img src={tt.avatar} alt="" loading="lazy" />
              </button>
            ))}
          </div>

          {/* quote */}
          <div className={styles.quoteCard}>
            <div className={styles.stars}><Star /><Star /><Star /><Star /><Star /></div>
            <p className={styles.quoteText}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role}</div>
            </div>
          </div>

          {/* middle stack */}
          <div className={styles.mid}>
            <div className={styles.midImg}>
              <img src={midImg} alt="Teja Machinery facility" loading="lazy" />
              <div className={styles.midOverlay}>
                <div className={styles.midRange}>// 2005-2K26 //</div>
                <div className={styles.midBrand}>TEJA MACHINERY<sup>®</sup></div>
              </div>
            </div>
            <div className={styles.midStat}>
              <div>
                <div className={styles.midStatNum}>26%</div>
                <div className={styles.midStatLabel}>On-Time delivery rate</div>
              </div>
              <div>
                <div className={styles.midStatNum}>13+</div>
                <div className={styles.midStatLabel}>Skilled professionals</div>
              </div>
            </div>
          </div>

          {/* help card */}
          <div className={styles.help}>
            <span className={styles.helpIcon}><Headset /></span>
            <h3 className={styles.helpTitle}>Need help choosing the right product?</h3>
            <p className={styles.helpDesc}>Always ready with guidance, product details, and after-sales support.</p>
            <div className={styles.helpAction}>
              <AnimButton to="/contact" label="Contact Support" variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
