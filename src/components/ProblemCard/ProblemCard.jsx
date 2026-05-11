import './ProblemCard.css';

export default function ProblemCard({ number, title, description }) {
  return (
    <div className="problem-card">
      <span className="problem-card__number">{number}</span>
      <div className="problem-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
