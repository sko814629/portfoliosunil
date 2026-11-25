import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          aria-label="Sunil Kumar — Home"
          onClick={() => handleLinkClick('#home')}
        >
          <span>SUNIL</span>
          <span className="navbar__logo-dot" aria-hidden="true">
            .
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary Navigation">
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="navbar__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container navbar__mobile-inner">
              <div className="navbar__mobile-status">
                <span className="navbar__status-dot" aria-hidden="true" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              <nav aria-label="Mobile Navigation">
                <ul className="navbar__mobile-list">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        className={`navbar__mobile-link ${
                          activeSection === link.href ? 'navbar__mobile-link--active' : ''
                        }`}
                        onClick={() => handleLinkClick(link.href)}
                      >
                        <span className="navbar__mobile-index">0{index + 1}</span>
                        <span>{link.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="navbar__mobile-footer">
                <a
                  href="#contact"
                  className="btn btn--primary navbar__mobile-cta"
                  onClick={() => handleLinkClick('#contact')}
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={17} strokeWidth={2.2} />
                </a>
                <p className="navbar__mobile-meta">
                  {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
