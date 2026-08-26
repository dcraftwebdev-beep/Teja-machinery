import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import AnimButton from '../Button/AnimButton.jsx';

// "Get a quote" opens a WhatsApp chat (044-43538586 → intl. digits only)
const WHATSAPP_URL = 'https://wa.me/914443538586';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training' },
  { to: '/gallery', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];
// Minimal set shown inline in the top bar
const PRIMARY = ['/', '/about', '/services', '/contact'];
const primaryItems = navItems.filter((n) => PRIMARY.includes(n.to));
// The "balance" links live only in the sidebar (not duplicated from the top bar)
const secondaryItems = navItems.filter((n) => !PRIMARY.includes(n.to));

// Pages whose hero is light — the nav needs dark text there
const LIGHT_NAV_ROUTES = ['/', '/about', '/services', '/training', '/gallery', '/careers', '/contact'];

export default function Navbar() {
  const { pathname } = useLocation();
  const light = LIGHT_NAV_ROUTES.includes(pathname) || pathname.startsWith('/services');
  const [open, setOpen] = useState(false);

  // close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // lock background scroll + close on Escape while the sidebar is open
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${light ? styles.light : ''}`}>
      <Link to="/" className={styles.brand}>
        <img src="/Assests/logo/teja.png" alt="Teja Machinery" className={styles.brandLogo} />
        <span className={styles.brandText}>Teja Machinery Pvt Ltd</span>
      </Link>

      <nav className={styles.menu}>
        {primaryItems.map((n) => (
          <NavLink
            key={n.label}
            to={n.to}
            end={n.end}
            className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.menuActive : ''}`}
          >
            {n.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <AnimButton href={WHATSAPP_URL} label="Get a quote" variant="orange" className={styles.quote} />
        <button
          type="button"
          className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* ===== Slide-in sidebar (opens right → left) ===== */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayShow : ''}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        aria-hidden={!open}
        data-lenis-prevent
      >
        <div className={styles.panelTop}>
          <span className={styles.panelKicker}>Navigation</span>
          <button
            type="button"
            className={styles.panelClose}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
        </div>

        <nav className={styles.panelNav}>
          {/* Primary links repeat here ONLY on small screens (inline menu hidden) */}
          {primaryItems.map((n, i) => (
            <NavLink
              key={n.label}
              to={n.to}
              end={n.end}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.16 + i * 0.05}s` : '0s' }}
              className={({ isActive }) => `${styles.panelLink} ${styles.panelLinkMobile} ${isActive ? styles.panelLinkActive : ''}`}
            >
              <span className={styles.panelLabel}>{n.label}</span>
              <span className={styles.panelArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </NavLink>
          ))}

          {/* Sidebar-only links (never shown inline in the top bar) */}
          {secondaryItems.map((n, i) => (
            <NavLink
              key={n.label}
              to={n.to}
              end={n.end}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.16 + i * 0.06}s` : '0s' }}
              className={({ isActive }) => `${styles.panelLink} ${isActive ? styles.panelLinkActive : ''}`}
            >
              <span className={styles.panelLabel}>{n.label}</span>
              <span className={styles.panelArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.panelFoot}>
          <div className={styles.panelContact}>
            <a href="tel:04443538586">044-43538586</a>
            <a href="mailto:admin@tejamachinery.in">admin@tejamachinery.in</a>
            <p>R 24, SIPCOT Industrial Estate, Gummidipoondi &ndash; 601201, India</p>
          </div>
          <AnimButton
            href={WHATSAPP_URL}
            label="Get a quote"
            variant="orange"
            className={styles.panelQuote}
          />
        </div>
      </aside>
    </header>
  );
}
