import s from './ServiceContact.module.css';

export default function ServiceContact() {
  return (
    <section className={s.section}>
      <div className={s.bg}>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop" alt="" />
      </div>

      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.pill}><span className={s.pillDot} />Get in touch</span>
          <h2 className={s.title}>Start your <em>precision</em><br />manufacturing journey</h2>
        </div>

        <form className={s.form} onSubmit={(e) => e.preventDefault()}>
          <div className={s.field}>
            <label className={s.label} htmlFor="name">Name*</label>
            <input id="name" className={s.input} type="text" placeholder="Enter your name" required />
          </div>
          <div className={s.field}>
            <label className={s.label} htmlFor="email">Email*</label>
            <input id="email" className={s.input} type="email" placeholder="Enter your email" required />
          </div>
          <div className={`${s.field} ${s.fieldFull}`}>
            <label className={s.label} htmlFor="inquiry">Inquiry</label>
            <input id="inquiry" className={s.input} type="text" placeholder="Enter inquiry details" />
          </div>
          <div className={`${s.field} ${s.fieldFull}`}>
            <label className={s.label} htmlFor="message">Message</label>
            <textarea id="message" className={s.textarea} placeholder="Tell us about your project" />
          </div>
          <div className={s.submitWrap}>
            <button type="submit" className={s.submit}>Send your details</button>
          </div>
        </form>
      </div>
    </section>
  );
}
