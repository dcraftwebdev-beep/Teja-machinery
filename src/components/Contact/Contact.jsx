import s from './Contact.module.css';
import AnimButton from '../Button/AnimButton.jsx';
import { WHATSAPP_URL } from '../../data/site';

const logos = Array.from({ length: 17 }, (_, i) => `/Assests/Clients/${i + 1}.webp`);

export default function Contact() {
  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.guides}><span /><span /><span /></div>

        <div className={s.grid}>
          {/* left */}
          <div className={s.left}>
            <h1 className={s.title}>Let&rsquo;s <em>work</em><br />together</h1>
            <p className={s.lead}>
              Got questions or need assistance? Reach out to us anytime, our team is ready to
              provide the support and guidance you need.
            </p>
            <div className={s.brochureBtn}>
              <AnimButton href={WHATSAPP_URL} label="Download Brochure" variant="dark" />
            </div>

            <div className={s.infoRow}>
              <div>
                <div className={s.infoLabel}>// Contact us on //</div>
                <div className={s.infoItem}><a href="tel:04443538586">044-43538586</a></div>
                <div className={s.infoItem}><a href="https://wa.me/914443538586" target="_blank" rel="noreferrer">WhatsApp us</a></div>
                <div className={s.infoItem}><a href="mailto:admin@tejamachinery.in">admin@tejamachinery.in</a></div>
              </div>
              <div>
                <div className={s.infoLabel}>// Find us //</div>
                <div className={s.infoItem}>R 24, SIPCOT Industrial Estate,<br />Gummidipoondi &ndash; 601201,<br />India</div>
              </div>
            </div>
          </div>

          {/* right, form */}
          <div className={s.formCard}>
            <form className={s.form} onSubmit={(e) => e.preventDefault()}>
              <div className={s.field}>
                <label className={s.label} htmlFor="fn">First name*</label>
                <input id="fn" className={s.input} type="text" placeholder="Enter your first name" required />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="ln">Last name*</label>
                <input id="ln" className={s.input} type="text" placeholder="Enter your last name" required />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="em">Email*</label>
                <input id="em" className={s.input} type="email" placeholder="Enter your email" required />
              </div>
              <div className={s.field}>
                <label className={s.label} htmlFor="ph">Phone*</label>
                <input id="ph" className={s.input} type="tel" placeholder="Enter your contact number" required />
              </div>
              <div className={`${s.field} ${s.full}`}>
                <label className={s.label} htmlFor="sub">Subject</label>
                <input id="sub" className={s.input} type="text" placeholder="Enter topic or subject" />
              </div>
              <div className={`${s.field} ${s.full}`}>
                <label className={s.label} htmlFor="msg">Message</label>
                <textarea id="msg" className={s.textarea} placeholder="Tell us about your project" />
              </div>
              <div className={s.submitWrap}>
                <button type="submit" className={s.submit}>Submit details</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* client logos marquee */}
      <div className={s.marquee}>
        <div className={s.marqueeTrack}>
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className={s.logoCard}><img src={src} alt="Client logo" loading="lazy" /></div>
          ))}
        </div>
      </div>
    </main>
  );
}
