import s from './TrainingInfra.module.css';

const gallery = [
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=900&auto=format&fit=crop', cls: 'wide' },
  { src: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=700&auto=format&fit=crop', cls: 'tall' },
  { src: 'https://images.unsplash.com/photo-1537248384218-4a572a188f8d?q=80&w=700&auto=format&fit=crop', cls: '' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=700&auto=format&fit=crop', cls: '' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop', cls: 'wide' },
  { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=700&auto=format&fit=crop', cls: '' },
];

export default function TrainingInfra() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <div className={s.head}>
          <span className={s.pill}><span className={s.pillDot} />TTTI infrastructure</span>
          <h2 className={s.heading}>A state-of-the-art practical lab</h2>
          <p className={s.desc}>
            Our machine shop and laboratory replicate a real production floor — live FANUC CNC
            controls, industrial robots and Mechatronics rigs — so learning happens on the exact
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
