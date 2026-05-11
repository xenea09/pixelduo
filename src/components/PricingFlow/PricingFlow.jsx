import './PricingFlow.css';

const flowSteps = [
  { n: '1', title: 'Du schreibst uns', sub: 'kostenlos, unverbindlich' },
  { n: '2', title: 'Wir planen & machen ein Angebot', sub: 'transparent, bevor wir anfangen' },
  { n: '3', title: 'Du entscheidest, ohne Druck', sub: 'bis zum Schluss kannst du Nein sagen' },
  { n: '4', title: 'Bezahlt wird erst wenn du zufrieden bist', sub: '' },
];

const guarantees = [
  'Anfrage stellen kostet nichts',
  'Planung und Konzept kostet nichts',
  'Du kannst jederzeit, bis zum Schluss, Nein sagen',
  'Keine Kosten bis die Webseite fertig und abgenommen ist',
  'Preis steht fest bevor wir anfangen, keine Überraschungen',
];

const priceFactors = ['Anzahl Seiten', 'Funktionen', 'Design'];

export default function PricingFlow() {
  return (
    <div className="pricing-flow">
      <div className="pricing-flow__headline">
        <h2>Preis nach Absprache</h2>
        <p className="pricing-flow__sub">Basierend auf deinen Anforderungen und der Komplexität.</p>
      </div>

      <div className="pricing-flow__steps">
        {flowSteps.map((s, i) => (
          <div key={i} className="pricing-flow__step">
            <div className="pricing-flow__step-left">
              <div className="pricing-flow__dot">{s.n}</div>
              {i < flowSteps.length - 1 && <div className="pricing-flow__line" />}
            </div>
            <div className="pricing-flow__step-body">
              <strong>{s.title}</strong>
              {s.sub && <span className="pricing-flow__step-sub">, {s.sub}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-flow__guarantee">
        <div className="pricing-flow__guarantee-title">Dein Schutz, schwarz auf weiss</div>
        <ul>
          {guarantees.map((g, i) => (
            <li key={i}><span className="pricing-flow__check">✓</span>{g}</li>
          ))}
        </ul>
      </div>

      <div className="pricing-flow__factors-label">Was den Preis beeinflusst</div>
      <div className="pricing-flow__factors">
        {priceFactors.map((f, i) => (
          <div key={i} className="pricing-flow__factor">{f}</div>
        ))}
      </div>
    </div>
  );
}
