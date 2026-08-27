import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative Background Glows */}
      <div className={styles.glowTopRight}></div>
      <div className={styles.glowBottomLeft}></div>

      {/* Giant Watermark Text */}
      <div className={styles.watermark}>TEJA&reg;</div>

      <div className={styles.container}>
        {/* Full-height vertical dashed lines overlay */}
        <div className={styles.gridLines}>
          <div className={styles.gridLine}></div>
          <div className={styles.gridLine}></div>
          <div className={styles.gridLine}></div>
          <div className={styles.gridLine}></div>
        </div>

        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <img src="/Assests/logo/teja.png" alt="Teja Machinery" className={styles.brandLogo} />
            <span className={styles.brandText}>Teja Machinery Pvt Ltd</span>
          </div>

          {/* Top Section - 4 Columns */}
          <div className={styles.topGrid}>
            
            {/* Column 1: Newsletter */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Stay connected</h3>
              <p className={styles.colText}>
                Join our newsletter for<br />
                tips, updates, and project<br />
                highlights, only the good stuff.
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={styles.input} 
                  required
                />
                <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>

            {/* Column 2: Links */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Links</h3>
              <div className={styles.linksGrid}>
                <ul className={styles.linkList}>
                  <li><a href="#home" className={styles.activeLink}>Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
                <ul className={styles.linkList}>
                  <li><a href="#cases">Case Studies</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#error">Error 404</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact info</h3>
              <ul className={styles.infoList}>
                <li>R 24, SIPCOT Industrial Estate,<br />Gummidipoondi &ndash; 601201,<br />India</li>
                <li>044-43538586</li>
                <li>admin@tejamachinery.in</li>
              </ul>
            </div>

            {/* Column 4: Working Hours */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Working hours</h3>
              <ul className={styles.infoList}>
                <li>Mon to Fri: 8:00am - 4:00pm</li>
                <li>Saturday: 8:00am - 1:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar Section */}
          <div className={styles.bottomBar}>
            <p className={styles.copyright}>
              &copy; 2026 <span>Teja Machinery Pvt Ltd</span>, All rights reserved
            </p>
            <div className={styles.socials}>
              <a href="#facebook" className={styles.socialLink}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
                Facebook
              </a>
              <a href="#instagram" className={styles.socialLink}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <a href="#twitter" className={styles.socialLink}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}