import './Footer.css';

export default function Footer({ onImpressum, onDatenschutz }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-pixel">pixel</span>
            <span className="footer__logo-duo">duo</span>
          </span>
          <span className="footer__meta">Bern, Schweiz · © 2025</span>
        </div>
        <div className="footer__right">
          <button className="footer__link" onClick={onImpressum}>Impressum</button>
          <button className="footer__link" onClick={onDatenschutz}>Datenschutz</button>
        </div>
      </div>
    </footer>
  );
}
