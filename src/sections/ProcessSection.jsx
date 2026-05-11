import './ProcessSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import { steps } from '../data/content';

export default function ProcessSection() {
  return (
    <section className="section section--alt" id="ablauf">
      <div className="container">
        <SectionLabel>WIE ES LÄUFT</SectionLabel>
        <h2>In 4 Schritten zur fertigen Webseite.</h2>
        <p className="process__sub">Kein Meetings-Marathon. Alles per E-Mail. In 3–5 Wochen live.</p>
        <div className="process__grid">
          {steps.map((s, i) => (
            <ProcessStep key={i} number={s.number} label={s.label} title={s.title} description={s.description} />
          ))}
        </div>
        <div className="process__guarantee">
          Nicht zufrieden? Wir überarbeiten bis du es bist.
        </div>
      </div>
    </section>
  );
}
