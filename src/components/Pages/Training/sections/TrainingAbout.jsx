import { Link } from 'react-router-dom';
import styles from '../../Home/sections/WhoWeAre.module.css'; // reuse the Home "Who we are" design
import AnimButton from '../../../Button/AnimButton.jsx';

const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M5 21h14" />
  </svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.401 8.169L12 18.896l-7.335 3.866 1.401-8.169L.132 9.21l8.2-1.192z" /></svg>
);
const Cap = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 8l11 5 9-4.09V15h2V8L12 3zM5 13.18V17c0 1.1 3.13 3 7 3s7-1.9 7-3v-3.82l-7 3.18-7-3.18z" /></svg>
);

const avatars = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
];
const labImg = '/Assests/traing/classroom.jpg';

export default function TrainingAbout() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {/* Intro */}
        <div className={styles.top}>
          <div className={styles.aside}>
            <span className={styles.tag}>
              <span className={styles.tagDot} />
              About the institute
            </span>
            <div className={styles.avatars}>
              {avatars.map((a, i) => <img key={i} src={a} alt="" loading="lazy" />)}
              <span className={styles.count}>6+</span>
            </div>
            <p className={styles.teamNote}>Trained by FANUC-certified experts</p>
          </div>

          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Practical, hands-on training focused on <em>real</em> industry skills
            </h2>
            <p className={styles.desc}>
              TTTI offers technical skill development in CNC, Robotics and Mechatronics. With a
              state-of-the-art laboratory, we give hands-on practical training so students and
              employees are productive from day one of employment — jointly certified with FANUC
              and recognized across the machining and machine-tool industries.
            </p>
            <div className={styles.actions}>
              <AnimButton to="/contact" label="Enquire now" variant="dark" />
              <Link to="/contact" className={styles.brochure}>
                Download brochure <Download />
              </Link>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.cWhite}`}>
            <div className={styles.cBrand}>TTTI<sup>®</sup></div>
            <div className={styles.cBig}>50%+</div>
            <p>Time spent handling and operating advanced machinery, hands-on.</p>
            <div className={styles.rating}>
              <span className={styles.ratingNum}>FANUC<span> certified</span></span>
              <span className={styles.stars}><Star /><Star /><Star /><Star /><Star /></span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cImage}`}>
            <img src={labImg} alt="TTTI training lab" loading="lazy" />
          </div>

          <div className={`${styles.card} ${styles.cOrange}`}>
            <div className={styles.cRange}>// CNC · ROBOTICS · MECHATRONICS //</div>
            <div className={styles.cOrangeBig}>3</div>
            <p>Core skill streams taught on live, industry-grade equipment.</p>
            <span className={styles.robotIcon}><Cap /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
