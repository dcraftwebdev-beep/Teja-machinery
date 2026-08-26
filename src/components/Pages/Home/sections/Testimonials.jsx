import React, { useState } from 'react';
import styles from './Testimonial.module.css';
import AnimButton from '../../../Button/AnimButton.jsx';
// Combined data for the interactive testimonials
const testimonialsData = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    quote: "The team's dedication and innovative approach transformed our ideas into reality. Every stage of the project was handled with care and expertise.",
    name: "Emily Carter",
    role: "Product Designer"
  },
  {
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    quote: "Outstanding service and impeccable attention to detail. They exceeded our expectations at every single milestone of the manufacturing process.",
    name: "Rajesh M.",
    role: "Plant Head"
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    quote: "Their precision machining quality is outstanding. A truly reliable partner for complex automation cells and robotic integration.",
    name: "David Chen",
    role: "Lead Engineer"
  },
  {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
    quote: "We needed a complex automation cell integrated fast, and their team delivered exactly what our production floor needed without any fuss.",
    name: "Sarah Jenkins",
    role: "Operations Manager"
  },
  {
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150',
    quote: "From assessment to on-site support, the team was precise and reliable. Highly recommend their services for heavy industrial applications.",
    name: "Bhaskar K.",
    role: "Procurement Lead"
  },
];

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#c8370b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default function Testimonials() {
  // State to track which testimonial is active
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = testimonialsData[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.pill}>
            <span className={styles.dot}></span> Build on trust
          </div>
          <h2 className={styles.heading}>
            Trusted by <span>clients</span>, proven by results
          </h2>
        </div>

        {/* Bento Grid Section */}
        <div className={styles.grid}>
          
          {/* Column 1: Avatars Sidebar */}
          <div className={styles.avatarSidebar}>
            {testimonialsData.map((item, index) => (
              <img 
                key={index} 
                src={item.avatar} 
                alt={`${item.name} avatar`} 
                className={`${styles.avatar} ${index === activeIndex ? styles.activeAvatar : ''}`} 
                onClick={() => setActiveIndex(index)}
                loading="lazy" 
              />
            ))}
          </div>

          {/* Column 2: Main Testimonial Card */}
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            
            {/* Added animation key to trigger a fade when switching */}
            <p key={activeIndex} className={styles.quote}>
              {activeData.quote}
            </p>
            
            <div className={styles.author}>
              <h4 className={styles.authorName}>{activeData.name}</h4>
              <p className={styles.authorRole}>{activeData.role}</p>
            </div>
          </div>

          {/* Column 3: Stacked Image & Stats */}
          <div className={styles.middleCol}>
            <div className={styles.imageCard}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" 
                alt="Industrial manufacturing" 
                className={styles.bgImage} 
              />
              <div className={styles.imageOverlay}>
                <p className={styles.imageTextSmall}>// 2005-2K26 //</p>
                <h3 className={styles.imageTextLarge}>MANUFACT&reg;</h3>
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>26%</span>
                <span className={styles.statLabel}>On-Time<br/>delivery rate</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>13+</span>
                <span className={styles.statLabel}>Skilled<br/>professionals</span>
              </div>
            </div>
          </div>

          {/* Column 4: CTA Support Card */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.supportIconWrapper}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c8370b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  <circle cx="12" cy="12" r="2" fill="#c8370b"></circle>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className={styles.ctaHeading}>Need help choosing the right product?</h3>
              <p className={styles.ctaText}>Always ready with guidance, product details, and after-sales support.</p>
            </div>
            
           <div className={styles.action}>
                     <AnimButton to="/contact" label="Contact Support" variant="light" />
                   </div>
          </div>

        </div>
      </div>
    </section>
  );
}