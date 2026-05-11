import './ProcessStep.css';

export default function ProcessStep({ number, label, title, description }) {
  return (
    <div className="process-step">
      <div className="process-step__number">{number}</div>
      <div className="process-step__label">{label}</div>
      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__desc">{description}</p>
    </div>
  );
}
