import './ContactSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ContactForm from '../components/ContactForm/ContactForm';

export default function ContactSection() {
  return (
    <section className="section" id="kontakt">
      <div className="container">
        <SectionLabel>KONTAKT</SectionLabel>
        <h2>Schreib uns. Wir antworten in 24h.</h2>
        <div className="contact__layout">
          <div className="contact__info">
            <p className="contact__lead">
              Kein Telefonanruf, keine Terminbuchung. Einfach schreiben, wir melden uns.
            </p>
            <a href="mailto:baechlerenea@gmail.com" className="contact__email">baechlerenea@gmail.com</a>
            <p className="contact__note">
              Wir kommunizieren schriftlich, so haben beide Seiten alles schwarz auf weiss.
            </p>
            <p className="contact__location">Bern, Schweiz</p>
          </div>
          <div className="contact__form-wrap">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
