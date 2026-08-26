import styles from './AboutPage.module.css';

import AboutHero from './sections/AboutHero.jsx';
import AboutJourney from './sections/AboutJourney.jsx';
import AboutClients from './sections/AboutClients.jsx';
import AboutBand from './sections/AboutBand.jsx';
import AboutTeam from './sections/AboutTeam.jsx';

export default function About() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <AboutJourney />
      <AboutClients />
      <AboutBand />
      <AboutTeam />
    </main>
  );
}
