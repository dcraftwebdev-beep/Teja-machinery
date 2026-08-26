import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const root = useRef(null);
  const title = useRef(null);
  const photo = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          gsap.utils.toArray(`.${styles.heroWord}`),
          { yPercent: 120 },
          { yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.15 }
        );
        gsap.fromTo(`.${styles.heroMeta}`, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.9, ease: 'power3.out' });

        gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: '+=110%', scrub: true, pin: true, invalidateOnRefresh: true },
        })
          .to(title.current, { scale: 0.42, yPercent: -18, ease: 'power2.inOut' }, 0)
          .fromTo(photo.current, { scale: 1.35, opacity: 0.18, filter: 'brightness(0.5)' }, { scale: 1, opacity: 1, filter: 'brightness(1)', ease: 'power2.inOut' }, 0)
          .to(`.${styles.heroMeta}`, { opacity: 0, ease: 'none' }, 0);
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className={styles.cinHero} ref={root}>
      <div className={styles.heroPhoto} ref={photo} aria-hidden="true">
        <img src="/Assests/hero/hero-image.jpg" alt="" />
        <div className={styles.heroPhotoVeil} />
      </div>
      <div className={styles.heroInner}>
        <h1 className={styles.cinHeroTitle} ref={title}>
          <span className={styles.heroMask}><span className={styles.heroWord}>Teja</span></span>
          <span className={styles.heroMask}><span className={styles.heroWord}>Machinery</span></span>
        </h1>
        <div className={styles.heroMeta}>
          <span>Est. 2005</span>
          <span className={styles.heroMetaLine} aria-hidden="true" />
          <span>Industrial Engineering</span>
        </div>
      </div>
    </section>
  );
}
