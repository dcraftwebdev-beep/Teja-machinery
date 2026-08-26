import { Link } from 'react-router-dom';
import styles from './WhoWeAre.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';

const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M5 21h14" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.401 8.169L12 18.896l-7.335 3.866 1.401-8.169L.132 9.21l8.2-1.192z" /></svg>
);

const RobotArm = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 2a2 2 0 0 0-1.9 2.63L6.3 9.9a2 2 0 1 0 1.2 1.6l4.9-4.9c.2.06.4.1.6.1.5 0 .96-.18 1.32-.48l3.06 3.06-1.7 1.7 1.42 1.4 3.1-3.1-4.46-4.46A2 2 0 0 0 13.5 2ZM4 16a3 3 0 0 0-1 5.83V22h12v-2H6.7A3 3 0 0 0 4 16Z" />
  </svg>
);

const avatars = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
];

const machineImg = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=700&auto=format&fit=crop';

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {/* Intro */}
        <div className={styles.top}>
          <div className={styles.aside}>
            <span className={styles.tag}>
              <span className={styles.tagDot} />
              Who we are
            </span>
            <div className={styles.avatars}>
              {avatars.map((a, i) => <img key={i} src={a} alt="" loading="lazy" />)}
              <span className={styles.count}>10+</span>
            </div>
            <p className={styles.teamNote}>Team of passionate professionals</p>
          </div>

          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Driven by technology, backed by experience, focused on <em>manufacturing</em> excellence
            </h2>
            <p className={styles.desc}>
              Backed by advanced technology, skilled craftsmanship, and a commitment to quality,
              we help businesses bring their ideas to life with confidence and speed. Whether it&rsquo;s
              prototyping or full-scale production, we&rsquo;re your trusted partner every step of the way.
            </p>
            <div className={styles.actions}>
              <AnimButton to="/about" label="Learn more about us" variant="dark" />
              <Link to="/contact" className={styles.brochure}>
                Download brochure <Download />
              </Link>
            </div>
          </div>
        </div>

        {/* Stat cards — only the three cards animate (inner text does not) */}
        <div className={styles.cards} data-aos-manual>
          <div className={`${styles.card} ${styles.cWhite}`} data-aos="fade" data-aos-delay="0">
            <div className={styles.cBrand}>TEJA MACHINERY<sup>®</sup></div>
            <div className={styles.cBig}>100+</div>
            <p>Trusted by businesses across multiple manufacturing industries worldwide</p>
            <div className={styles.rating}>
              <span className={styles.ratingNum}>4.9<span>/5.0</span></span>
              <span className={styles.stars}><Star /><Star /><Star /><Star /><Star /></span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cImage}`} data-aos="fade" data-aos-delay="100">
            <img src={machineImg} alt="CNC machining center" loading="lazy" />
          </div>

          <div className={`${styles.card} ${styles.cOrange}`} data-aos="fade" data-aos-delay="200">
            <div className={styles.cRange}>// 2005-2K26 //</div>
            <div className={styles.cOrangeBig}>20+</div>
            <p>Delivering consistent manufacturing excellence since day one.</p>
            <span className={styles.robotIcon}><RobotArm /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
