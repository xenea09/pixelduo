import './FaqSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import FaqItem from '../components/FaqItem/FaqItem';
import { faqs } from '../data/content';

export default function FaqSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionLabel>FRAGEN & ANTWORTEN</SectionLabel>
        <h2>Häufige Fragen.</h2>
        <div className="faq__list">
          {faqs.map(f => (
            <FaqItem key={f.id} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
