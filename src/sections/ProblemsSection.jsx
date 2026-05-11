import './ProblemsSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import ProblemCard from '../components/ProblemCard/ProblemCard';
import Button from '../components/Button/Button';
import { problems } from '../data/content';

export default function ProblemsSection() {
  return (
    <section className="section section--alt" id="leistungen">
      <div className="container">
        <SectionLabel>DIE SITUATION</SectionLabel>
        <h2>Kommt dir das bekannt vor?</h2>
        <div className="problems__grid">
          {problems.map(p => (
            <ProblemCard key={p.id} number={p.number} title={p.title} description={p.description} />
          ))}
        </div>
        <div className="problems__cta">
          <Button variant="primary" size="lg" href="#kontakt">Wir lösen das → Jetzt Anfrage stellen</Button>
        </div>
      </div>
    </section>
  );
}
