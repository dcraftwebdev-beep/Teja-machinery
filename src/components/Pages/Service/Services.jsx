import styles from './Services.module.css';

import ServiceHero from './sections/ServiceHero.jsx';
import ServiceGrid from './sections/ServiceGrid.jsx';
import CtaBanner from '../Home/sections/CtaBanner.jsx';
import ServiceFaq from './sections/ServiceFaq.jsx';
import ServiceContact from './sections/ServiceContact.jsx';

export default function Services() {
  return (
    <main className={styles.page}>
      <ServiceHero />
      <ServiceGrid />
      <CtaBanner />
      <ServiceFaq />
      <ServiceContact />
    </main>
  );
}
