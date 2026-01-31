import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="main-footer" className="bg-navy-dark text-white py-20 border-t-2 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-serif text-2xl mb-6 tracking-wide">Rudra Verde Lex International</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An institutional legal presence committed to academic excellence and professional integrity.
            </p>
          </div>

          <div className="md:border-l md:border-gray-700 md:pl-10">
            <h4 className="font-medium mb-6 text-base tracking-widest uppercase text-gray-300">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" data-testid="footer-link-about" className="text-gray-400 hover:text-white transition-colors link-underline">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/practice" data-testid="footer-link-practice" className="text-gray-400 hover:text-white transition-colors link-underline">
                  Practice Orientation
                </Link>
              </li>
              <li>
                <Link to="/values" data-testid="footer-link-values" className="text-gray-400 hover:text-white transition-colors link-underline">
                  Values & Ethics
                </Link>
              </li>
              <li>
                <Link to="/publications" data-testid="footer-link-publications" className="text-gray-400 hover:text-white transition-colors link-underline">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:border-l md:border-gray-700 md:pl-10">
            <h4 className="font-medium mb-6 text-base tracking-widest uppercase text-gray-300">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/disclaimer" data-testid="footer-link-disclaimer" className="text-gray-400 hover:text-white transition-colors link-underline">
                  Legal & Regulatory Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-6 md:space-y-0">
            <p data-testid="copyright-text">© {currentYear} Rudra Verde Lex International. All rights reserved.</p>
            <p data-testid="disclaimer-notice" className="text-xs text-center md:text-right max-w-md leading-relaxed">
              This website is for informational and academic purposes only and does not constitute legal advice or solicitation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
