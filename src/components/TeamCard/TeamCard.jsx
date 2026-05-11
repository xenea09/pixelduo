import './TeamCard.css';

export default function TeamCard({ initials, name, role, schools, tags, color = 'green' }) {
  return (
    <div className={`team-card team-card--${color}`}>
      <div className="team-card__top">
        <div className={`team-card__avatar team-card__avatar--${color}`}>{initials}</div>
        <div>
          <h3 className="team-card__name">{name}</h3>
          <p className="team-card__role">{role}</p>
        </div>
      </div>
      <hr className="team-card__divider" />
      <div className="team-card__schools">
        {schools.map((s, i) => (
          <div key={i} className="team-card__school">
            <span className="team-card__school-icon">🎓</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className="team-card__tags">
        {tags.map((t, i) => (
          <span key={i} className="team-card__tag">{t}</span>
        ))}
      </div>
    </div>
  );
}
