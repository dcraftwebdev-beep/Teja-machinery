import React from 'react';
import styles from './Clients.module.css';

const clients = [
  { name: 'Bharat Heavy Electricals', short: 'BHEL', logo: './Assests/Clients/1.webp' },
  { name: 'Larsen & Toubro', short: 'L&T', logo: './Assests/Clients/2.webp' },
  { name: 'Ashok Leyland', short: 'AL', logo: './Assests/Clients/3.webp' },
  { name: 'TVS Motor Company', short: 'TVS', logo: './Assests/Clients/4.webp' },
  { name: 'Titan Industries', short: 'TTN', logo: './Assests/Clients/5.webp' },
  { name: 'DRDO', short: 'DRD', logo: './Assests/Clients/6.webp' },
  { name: 'HAL', short: 'HAL', logo: './Assests/Clients/7.webp' },
  { name: 'Indian Railways', short: 'IR', logo: './Assests/Clients/8.webp' },
  { name: 'ISRO', short: 'ISR', logo: './Assests/Clients/9.webp' },
  { name: 'Caterpillar India', short: 'CAT', logo: './Assests/Clients/10.webp' },
];

export default function Clients() {
  // We duplicate the array to create a seamless infinite scrolling loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="clients" className={styles.section}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeClients.map((c, i) => (
            <div 
              key={`${c.short}-${i}`} 
              className={styles.clientCard}
              aria-hidden={i >= clients.length ? "true" : "false"}
            >
              <img
                src={c.logo}
                alt={c.name}
                className={styles.logoImg}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback styling in case the logo doesn't load */}
              <div className={styles.logoFallback} style={{ display: 'none' }}>
                {c.short}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}