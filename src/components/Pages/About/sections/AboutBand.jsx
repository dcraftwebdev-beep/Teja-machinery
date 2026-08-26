import { useRef, useState } from 'react';
import s from './AboutBand.module.css';
import bandVideo from '../../../Assests/bg-video/robatic.mp4';

export default function AboutBand() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const toggle = () => {
    const v = videoRef.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <section className={s.band}>
      <video ref={videoRef} className={s.bandVideo} src={bandVideo} autoPlay muted loop playsInline />
      <div className={s.bandOverlay} />
      <div className={s.bandInner}>
        <h2 className={s.bandTitle}>Delivering quality across industries and borders.</h2>
      </div>
      <div className={s.bandStat}>
        <div className={s.bandStatNum}>₹50M+</div>
        <div className={s.bandStatLabel}>Invested in precision machines &amp; a one-stop facility for end-to-end execution.</div>
      </div>
      <button type="button" className={s.bandPause} onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? '❚❚' : '►'}
      </button>
    </section>
  );
}
