import './PricingSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import PricingFlow from '../components/PricingFlow/PricingFlow';

export default function PricingSection() {
  return (
    <section className="section" id="preise">
      <div className="container">
        <SectionLabel>PREISE</SectionLabel>
        <h2 className="pricing__h2">Faire Preise. Kein Risiko für dich.</h2>
        <PricingFlow />
      </div>
    </section>
  );
}
