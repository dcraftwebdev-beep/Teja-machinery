import styles from './Home.module.css';

import Hero from './sections/Hero.jsx';
import FounderShowcase from './sections/FounderShowcase.jsx';
import WhoWeAre from './sections/WhoWeAre.jsx';
import CoreServices from './sections/CoreServices.jsx';
import CtaBanner from './sections/CtaBanner.jsx';
import WhatWeManufacture from './sections/WhatWeManufacture.jsx';
import Industries from './sections/Industries.jsx';
import CaseStudies from './sections/CaseStudies.jsx';
import TrustTestimonials from './sections/TrustTestimonials.jsx';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <FounderShowcase />
      <WhoWeAre />
      <CoreServices />
      <CtaBanner />
      <WhatWeManufacture />
      <Industries />
      <CaseStudies />
      <TrustTestimonials />
    </div>
  );
}
