import s from './TrainingInfra.module.css';

const gallery = [
  { src: '/Assests/traing/doublecolumnsvmc.jpg', cls: 'wide' },
  { src: '/Assests/traing/fanuc.jpg', cls: 'tall' },
  { src: '/Assests/traing/vmc.jpg', cls: '' },
  { src: '/Assests/traing/4fanuclatheljpg.jpg', cls: '' },
  { src: '/Assests/traing/classroom.jpg', cls: 'wide' },
  { src: '/Assests/traing/fanuc.jpg', cls: '' },
];

export default function TrainingInfra() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.head}>
          <span className={s.pill}><span className={s.pillDot} />TTTI infrastructure</span>
          <h2 className={s.heading}>A state-of-the-art practical lab</h2>
          <p className={s.desc}>
            Our machine shop and laboratory replicate a real production floor, live FANUC CNC
            controls, industrial robots and Mechatronics rigs, so learning happens on the exact
            equipment used across the machining and machine-tool industries.
          </p>
        </div>

        <div className={s.gallery}>
          {gallery.map((g, i) => (
            <div key={i} className={`${s.cell} ${s[g.cls] || ''}`}>
              <img src={g.src} alt="TTTI facility" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
