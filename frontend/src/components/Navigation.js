import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const logo = require('../assets/logo.png');

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/practice', label: 'Practice Orientation' },
    { path: '/values', label: 'Values & Ethics' },
    { path: '/people', label: 'People' },
    { path: '/publications', label: 'Publications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white shadow-sm border-divider' : 'bg-white border-grey-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            data-testid="firm-logo"
            className="flex items-center"
            aria-label="Rudra Verde Lex International"
          >
            <img
              src={logo}
              alt="Rudra Verde Lex International logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative text-sm tracking-wider font-medium transition-all duration-200 pb-1 link-fade ${
                  location.pathname === link.path
                    ? 'text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent'
                    : 'text-gray-600 hover:text-charcoal link-underline'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-charcoal hover:text-accent p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div data-testid="mobile-menu" className="lg:hidden py-4 border-t border-divider bg-grey-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block py-3 text-base transition-colors tracking-wide ${
                  location.pathname === link.path
                    ? 'text-accent font-medium'
                    : 'text-gray-600 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
