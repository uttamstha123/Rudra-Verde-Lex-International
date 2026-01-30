import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [introRef, introVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-6 py-24 bg-white transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="hero-title" className="font-serif text-5xl sm:text-6xl lg:text-7xl text-black mb-8 leading-tight">
            Rudra Verde Lex International
          </h1>
          <p data-testid="hero-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            An institutional legal presence dedicated to excellence in jurisprudence, scholarship, and professional practice.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introRef}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 delay-200 ${
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="intro-title" className="font-serif text-3xl sm:text-4xl text-black mb-8">
            Institutional Commitment
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="intro-para-1">
              Rudra Verde Lex International operates as a scholarly and professional institution focused on the advancement
              of legal knowledge and principled practice. Our work is grounded in rigorous analysis, ethical integrity,
              and a commitment to the broader academic and professional community.
            </p>
            <p data-testid="intro-para-2">
              This digital presence serves as an informational resource regarding our institutional identity, professional
              orientation, and contributions to legal scholarship. It is not intended for client solicitation or commercial
              purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section
        ref={featuresRef}
        className={`py-24 px-6 bg-white transition-all duration-1000 delay-300 ${
          featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 data-testid="areas-title" className="font-serif text-3xl sm:text-4xl text-black mb-16 text-center">
            Our Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div data-testid="focus-area-1" className="space-y-4">
              <h3 className="font-serif text-xl text-black">Professional Practice</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Engagement with complex legal matters through principled analysis and scholarly rigor, maintaining the
                highest standards of professional conduct.
              </p>
            </div>
            <div data-testid="focus-area-2" className="space-y-4">
              <h3 className="font-serif text-xl text-black">Academic Contribution</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Development and dissemination of legal scholarship through publications, research, and institutional
                engagement with the broader academic community.
              </p>
            </div>
            <div data-testid="focus-area-3" className="space-y-4">
              <h3 className="font-serif text-xl text-black">Ethical Foundation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Unwavering commitment to professional ethics, regulatory compliance, and the advancement of justice
                through principled legal work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Notice */}
      <section data-testid="home-disclaimer" className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Disclaimer:</strong> This website provides information for academic and professional purposes only.
            Content herein does not constitute legal advice, create an attorney-client relationship, or serve as solicitation
            for legal services. For complete terms, please review our Legal & Regulatory Disclaimer.
          </p>
        </div>
      </section>
    </div>
  );
};
