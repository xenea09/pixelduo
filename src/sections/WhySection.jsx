import './WhySection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';

const cards = [
  {
    title: 'Blitzschnell',
    body: 'Schnelle Ladezeiten, nachweisbar mit Google PageSpeed.',
  },
  {
    title: 'Nativ Mobile',
    body: 'Nicht nur "responsive", von Anfang an für Handy gebaut.',
  },
  {
    title: 'Google-ready',
    body: 'Technische Struktur die Google versteht.',
  },
];

export default function WhySection() {
  return (
    <section className="section">
      <div className="container">
        <SectionLabel>WAS WIR ANDERS MACHEN</SectionLabel>
        <h2>Webseiten die funktionieren.</h2>
        <p className="why__sub">Nicht nur gut aussehen, sondern Besucher in Anfragen verwandeln.</p>
        <div className="why__cards">
          {cards.map((c, i) => (
            <div key={i} className="why__card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
