import { useRef, useState } from 'react';
import styles from './FounderShowcase.module.css';
import roboVideo from '../../../Assests/bg-video/robatic.mp4';

const founderImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop';

export default function FounderShowcase() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section className={styles.section}>
      <video
        ref={videoRef}
        className={styles.video}
        src={roboVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.grain} />

      <div className={styles.inner}>
        <div className={styles.card}>
          <img src={founderImg} alt="A. Teja Kumar" loading="lazy" />
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>A. Teja Kumar</div>
            <div className={styles.cardRole}>Founder &amp; Managing Director</div>
          </div>
        </div>

        <p className={styles.quote}>
          Great engineering isn&rsquo;t just about precision, it&rsquo;s about vision,
          commitment, and the relentless pursuit of excellence.
        </p>
      </div>

      <button type="button" className={styles.playBtn} onClick={toggle} aria-label={playing ? 'Pause video' : 'Play video'}>
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
    </section>
  );
}
