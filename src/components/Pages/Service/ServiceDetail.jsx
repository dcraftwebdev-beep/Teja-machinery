import { useParams, Navigate } from 'react-router-dom';
import s from './ServiceDetail.module.css';
import { servicesData } from '../../../data/servicesData';
import { toSlug } from '../../../data/serviceSlug';
import AnimButton from '../../Button/AnimButton.jsx';
import ServiceFaq from './sections/ServiceFaq.jsx';
import ServiceContact from './sections/ServiceContact.jsx';

const workflow = [
  { t: 'Assessment', d: 'On-site study of the machine, requirement and scope — with a clear, costed proposal.' },
  { t: 'Engineering', d: 'Mechanical, controls and automation design tailored to your production goals.' },
  { t: 'Execution', d: 'Precision build, retrofit or fabrication by our skilled in-house team.' },
  { t: 'Commissioning', d: 'On-site installation, testing and hand-over — with ongoing support.' },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((x) => toSlug(x.title) === slug);
  if (!service) return <Navigate to="/services" replace />;

  return (
    <main className={s.page}>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.pill}><span className={s.pillDot} />{service.subtitle}</span>
          <h1 className={s.heroTitle}>{service.title}</h1>
          <p className={s.heroDesc}>{service.shortDesc}</p>
          <div className={s.heroBtn}>
            <AnimButton to="/contact" label="Get free quote" variant="orange" />
          </div>
        </div>
        <div className={s.heroImage}>
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className={s.overview}>
        <div className={s.wrap}>
          <div className={s.overviewGrid}>
            <div>
              <div className={s.eyebrow}>Service overview</div>
              <h2 className={s.overviewTitle}>{service.title}</h2>
            </div>
            <p className={s.overviewText}>{service.fullDesc}</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES (dark table) */}
      <section className={s.caps}>
        {/* dashed vertical grid overlay */}
        <div className={s.capGuides} aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className={s.capsInner}>
          <div className={s.capsHead}>
            <span className={`${s.pill} ${s.pillDark}`}><span className={s.pillDot} />Capabilities &amp; Features</span>
            <h2 className={s.capsTitle}>{service.title}</h2>
          </div>

          <div className={s.capTable}>
            <div className={s.capHeadRow}>
              <div className={s.capHeadCell}>Category</div>
              <div className={s.capHeadCell}>Details</div>
            </div>
            {(service.capabilities || []).map((row) => (
              <div key={row.category} className={s.capRow}>
                <div className={s.capCat}>{row.category}</div>
                <ul className={s.capDetails}>
                  {row.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className={s.workflow}>
        <div className={s.workflowHead}>
          <span className={s.pill}><span className={s.pillDot} />Scope &amp; touchpoints</span>
          <h2 className={s.workflowTitle}>Our <em>proven</em> workflow</h2>
        </div>
        <div className={s.steps}>
          {workflow.map((w, i) => (
            <div key={w.t} className={s.step}>
              <div className={s.stepNum}>{String(i + 1).padStart(2, '0')}</div>
              <div className={s.stepTitle}>{w.t}</div>
              <div className={s.stepDesc}>{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceFaq />
      <ServiceContact />
    </main>
  );
}
