import { useState } from 'react';
import './ContactForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_LABELS = {
  new: 'Neue Webseite',
  redesign: 'Redesign',
  shop: 'Online-Shop',
  other: 'Anderes',
};

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Vorname ist erforderlich.';
    if (!form.lastName.trim()) e.lastName = 'Nachname ist erforderlich.';
    if (!form.email.trim()) e.email = 'E-Mail ist erforderlich.';
    else if (!EMAIL_RE.test(form.email)) e.email = 'Bitte eine gültige E-Mail eingeben.';
    if (!form.project) e.project = 'Bitte wähle eine Option.';
    if (!form.message.trim()) e.message = 'Nachricht ist erforderlich.';
    else if (form.message.trim().length < 20) e.message = 'Mindestens 20 Zeichen.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(ev => ({ ...ev, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    setSending(true);
    setSendError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, name: `${form.firstName} ${form.lastName}` }),
      });

      if (!res.ok) throw new Error('Senden fehlgeschlagen');
      setSubmitted(true);
    } catch {
      setSendError('Etwas ist schiefgelaufen. Schreib uns direkt an baechlerenea@gmail.com.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3>Nachricht gesendet!</h3>
        <p>Danke! Wir melden uns in der Regel innerhalb von 24 Stunden per E-Mail.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-firstName">Vorname</label>
          <input
            id="cf-firstName"
            name="firstName"
            type="text"
            placeholder="Dein Vorname"
            value={form.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-lastName">Nachname</label>
          <input
            id="cf-lastName"
            name="lastName"
            type="text"
            placeholder="Dein Nachname"
            value={form.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="cf-email">E-Mail</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="deine@email.ch"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>
      <div className="contact-form__field">
        <label htmlFor="cf-project">Was brauchst du?</label>
        <select
          id="cf-project"
          name="project"
          value={form.project}
          onChange={handleChange}
          className={errors.project ? 'error' : ''}
        >
          <option value="">Bitte wählen…</option>
          <option value="new">Neue Webseite</option>
          <option value="redesign">Redesign</option>
          <option value="shop">Online-Shop</option>
          <option value="other">Anderes</option>
        </select>
        {errors.project && <span className="contact-form__error">{errors.project}</span>}
      </div>
      <div className="contact-form__field">
        <label htmlFor="cf-message">Beschreibung</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Erzähl uns kurz worum es geht…"
          value={form.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>
      {sendError && <p className="contact-form__error">{sendError}</p>}
      <button type="submit" className="contact-form__submit" disabled={sending}>
        {sending ? 'Wird gesendet…' : 'Anfrage absenden →'}
      </button>
    </form>
  );
}
