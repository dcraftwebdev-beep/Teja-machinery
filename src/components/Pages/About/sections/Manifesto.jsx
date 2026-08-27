import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../About.module.css';

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO = ['We', 'retrofit,', 'automate', 'and', 'fabricate', ', ', 'machines', 'built', 'to', 'outlast', 'the', 'decade.'];

export default function Manifesto() {
  const root = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const words = gsap.utils.toArray(`.${styles.manifestoWord}`);
        gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: `+=${words.length * 110}`, scrub: true, pin: true, invalidateOnRefresh: true },
        })
          .fromTo(`.${styles.manifestoBg}`, { scale: 1.25, yPercent: -6 }, { scale: 1, yPercent: 6, ease: 'none' }, 0)
          .fromTo(words, { opacity: 0.12, filter: 'blur(4px)' }, { opacity: 1, filter: 'blur(0px)', stagger: 0.5, ease: 'none' }, 0);
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className={styles.manifesto} ref={root}>
      <div className={styles.manifestoBg} aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=2400&q=80" alt="" />
      </div>
      <p className={styles.manifestoText}>
        {MANIFESTO.map((word, i) => (
          <span className={styles.manifestoWord} key={i}>{word}</span>
        ))}
      </p>
    </section>
  );
}
