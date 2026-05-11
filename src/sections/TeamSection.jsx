import './TeamSection.css';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import TeamCard from '../components/TeamCard/TeamCard';
import { teamMembers } from '../data/content';

export default function TeamSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionLabel>WER WIR SIND</SectionLabel>
        <h2>Zwei Jugendliche. Eine Leidenschaft.</h2>
        <p className="team__sub">Wir sind jung. Das bedeutet frische Technologie, faire Preise und echter Einsatz.</p>
        <div className="team__cards">
          {teamMembers.map(m => (
            <TeamCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
