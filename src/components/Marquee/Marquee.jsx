import styles from './Marquee.module.css'

const items = [
  'CNC Retrofitting',
  'FANUC Robotics',
  'Industrial Automation',
  'Precision Fabrication',
  'Machine Reconditioning',
  'Welding Solutions',
  'Special Purpose Machines',
  'Aerospace Components',
  'Railway Engineering',
  'Pressure Vessels',
  'Material Handling',
  'CNC Programming Training',
  'ISO 9001:2015 Certified',
  'TUV Certified Welders',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.section}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
