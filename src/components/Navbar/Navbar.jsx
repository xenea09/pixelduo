import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Preise', href: '#preise' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-pixel">pixel</span>
          <span className="navbar__logo-duo">duo</span>
        </a>

        <div className="navbar__links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
          ))}
          <a href="#kontakt" className="navbar__cta">Anfrage stellen</a>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menü öffnen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__overlay" onClick={closeMenu}>
          <div className="navbar__overlay-inner" onClick={e => e.stopPropagation()}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar__overlay-link" onClick={closeMenu}>{l.label}</a>
            ))}
            <a href="#kontakt" className="navbar__overlay-cta" onClick={closeMenu}>Anfrage stellen →</a>
          </div>
        </div>
      )}
    </nav>
  );
}
