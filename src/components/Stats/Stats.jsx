import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { num: 20, suffix: '+', label: 'Years of Excellence' },
  { num: 500, suffix: '+', label: 'Projects Delivered' },
  { num: 50, suffix: '+', label: 'Industry Clients' },
  { num: 100, suffix: '%', label: 'Quality Assurance' },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.item}>
              <div className={styles.num}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
