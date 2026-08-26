import { useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Pages
import About from './components/Pages/About/About.jsx';
import Services from './components/Pages/Service/Services.jsx';
import ServiceDetail from './components/Pages/Service/ServiceDetail.jsx';
import Training from './components/Pages/Training/Training.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Clients from './components/Clients/Clients.jsx';
import Contact from './components/Contact/Contact.jsx';
import Careers from './components/Pages/Careers/Careers.jsx';
import Home from './components/Pages/Home/Home.jsx';

function AppContent() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  // site-wide smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
    lenisRef.current = lenis;
    window.lenis = lenis; // used for in-page smooth anchor scrolling
    // keep ScrollTrigger in sync with Lenis' smoothed scroll position
    lenis.on('scroll', ScrollTrigger.update);
    let rafId;
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.off('scroll', ScrollTrigger.update); lenis.destroy(); lenisRef.current = null; delete window.lenis; };
  }, []);

  // jump to top on route change
  useEffect(() => { lenisRef.current?.scrollTo(0, { immediate: true }); }, [pathname]);

  // AOS scroll animations. We auto-tag every content element (so components
  // don't need hand-annotation), tagging BEFORE the first AOS.init so the hero
  // is known to AOS on its initial on-load pass and animates in.
  const aosReady = useRef(false);
  useEffect(() => {
    const SEL = [
      'section h3', 'section h4', 'section h5', 'section h6',
      'section p', 'section img', 'section li',
      'section a[class*="btn"]', 'section a[class*="Btn"]', 'section button[class*="btn"]',
      'section [class*="pill"]', 'section [class*="tag"]',
      'section [class*="stat"]', 'section [class*="Big"]', 'section [class*="Num"]',
      'section [class*="brochure"]', 'section [class*="download"]', 'section [class*="eyebrow"]',
    ].join(',');
    const found = [...document.querySelectorAll(SEL)];
    const set = new Set(found);
    const els = found.filter((el) => {
      const cs = getComputedStyle(el);
      if (cs.position === 'sticky' || cs.position === 'fixed') return false;
      // skip auto-scrolling / decorative / self-animating areas + the nav sidebar
      if (el.closest('[class*="marquee"], [class*="guides"], [class*="Guides"], [class*="scatter"], [class*="stack"], header')) return false;
      // sections that animate their own containers opt their inner content out
      if (el.closest('[data-aos-manual]')) return false;
      // keep leaves only (don't animate a wrapper AND its inner targets)
      for (const other of set) { if (other !== el && el.contains(other)) return false; }
      return true;
    });

    els.forEach((el) => {
      if (el.hasAttribute('data-aos')) return;
      el.setAttribute('data-aos', 'fade');
    });

    if (!aosReady.current) {
      // first mount — init AFTER tagging so above-the-fold (hero) animates on load
      AOS.init({ duration: 800, easing: 'ease-out', once: true, offset: 40 });
      aosReady.current = true;
    } else {
      // route change — re-scan once the new page has laid out
      const id = setTimeout(() => AOS.refreshHard(), 60);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [pathname]);

  // GSAP SplitText — every section heading reveals character-by-character as it
  // scrolls into view. useLayoutEffect runs before paint so there's no flash of
  // the un-split heading.
  useLayoutEffect(() => {
    const heads = [...document.querySelectorAll('section h1, section h2')]
      .filter((h) => !h.closest('[class*="marquee"], header') && h.textContent.trim());
    if (!heads.length) return undefined;

    const ctx = gsap.context(() => {
      heads.forEach((h) => {
        const split = new SplitText(h, { type: 'words,chars', charsClass: 'stChar' });
        gsap.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          ease: 'power4.out',
          duration: 0.9,
          stagger: 0.02,
          scrollTrigger: { trigger: h, start: 'top 82%', once: true },
        });
      });
    });

    // recalc once web fonts finish loading (char widths change the layout)
    let done = false;
    const refresh = () => { if (!done) ScrollTrigger.refresh(); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

    return () => { done = true; ctx.revert(); };
  }, [pathname]);

  return (
    <>
      {/* One unified header on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/training" element={<Training />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer shown globally on all pages, including home */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;