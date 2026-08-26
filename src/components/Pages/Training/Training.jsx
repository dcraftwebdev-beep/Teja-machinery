import styles from './Training.module.css';

import TrainingHero from './sections/TrainingHero.jsx';
import TrainingAbout from './sections/TrainingAbout.jsx';
import TrainingPrograms from './sections/TrainingPrograms.jsx';
import TrainingFanuc from './sections/TrainingFanuc.jsx';
import TrainingInfra from './sections/TrainingInfra.jsx';
import CtaBanner from '../Home/sections/CtaBanner.jsx';

export default function Training() {
  return (
    <main className={styles.page}>
      <TrainingHero />
      <TrainingAbout />
      <TrainingPrograms />
      <TrainingFanuc />
      <TrainingInfra />
      <CtaBanner />
    </main>
  );
}
