import './HeroSection.css';
import Button from '../components/Button/Button';
import SectionLabel from '../components/SectionLabel/SectionLabel';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <SectionLabel>WEBDESIGN AUS BERN</SectionLabel>
        <h1>
          Deine Webseite soll<br />
          Kunden bringen.<br />
          <span className="hero__accent">Nicht nur gut aussehen.</span>
        </h1>
        <p className="hero__sub">
          Die meisten KMU-Webseiten sehen okay aus, bringen aber keine Anfragen.<br />
          Wir ändern das. Modern, schnell, für Google gebaut.
        </p>
        <div className="hero__buttons">
          <Button variant="primary" size="lg" href="#kontakt">Jetzt Anfrage stellen →</Button>
          <Button variant="ghost" size="lg" href="#leistungen">Unsere Arbeit ansehen</Button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">Bern</span>
            <span className="hero__stat-label">Schweiz</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">24h</span>
            <span className="hero__stat-label">Antwortzeit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
