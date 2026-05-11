import './CompareSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import CompareTable from '../components/CompareTable/CompareTable';
import { compareRows } from '../data/content';

export default function CompareSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionLabel>DER VERGLEICH</SectionLabel>
        <h2>Andere Agenturen vs. B&amp;G Technologies</h2>
        <div className="compare__wrap">
          <CompareTable rows={compareRows} ourName="B&G Technologies" theirName="Andere Agenturen" />
        </div>
      </div>
    </section>
  );
}
