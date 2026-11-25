import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span>SUNIL</span>
            <span className="footer__logo-dot" aria-hidden="true">
              .
            </span>
          </a>
          <p className="footer__tagline">
            {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
          </p>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__right">
          <a href="#home" className="footer__top-btn" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={14} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Crafted with React &amp; clean CSS.
        </p>
      </div>
    </footer>
  );
}
