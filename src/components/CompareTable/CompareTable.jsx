import './CompareTable.css';

export default function CompareTable({ rows, ourName = 'pixelduo', theirName = 'Andere Agenturen' }) {
  return (
    <div className="compare-table">
      <div className="compare-table__header">
        <div className="compare-table__label-col" />
        <div className="compare-table__them-col">{theirName}</div>
        <div className="compare-table__us-col">{ourName}</div>
      </div>
      {rows.map((row, i) => (
        <div key={i} className={`compare-table__row${i % 2 === 1 ? ' compare-table__row--alt' : ''}`}>
          <div className="compare-table__label">{row.label}</div>
          <div className="compare-table__them">{row.them}</div>
          <div className="compare-table__us">{row.us}</div>
        </div>
      ))}
    </div>
  );
}
