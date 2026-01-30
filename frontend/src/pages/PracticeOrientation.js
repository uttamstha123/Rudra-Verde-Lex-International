import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const PracticeOrientation = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [areasRef, areasVisible] = useScrollAnimation();
  const [approachRef, approachVisible] = useScrollAnimation();

  const practiceAreas = [
    {
      title: 'Commercial Law',
      description:
        'Engagement with complex commercial transactions, contractual frameworks, and institutional governance structures through rigorous legal analysis.',
    },
    {
      title: 'Constitutional & Administrative Law',
      description:
        'Scholarly examination of constitutional principles, administrative procedure, and the relationship between state institutions and individual rights.',
    },
    {
      title: 'International Law',
      description:
        'Analysis of cross-border legal frameworks, international treaty obligations, and comparative legal systems in an increasingly interconnected world.',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Navigating complex regulatory environments across multiple jurisdictions, with emphasis on institutional accountability and legal risk management.',
    },
    {
      title: 'Dispute Resolution',
      description:
        'Principled approach to legal disputes through litigation, arbitration, and mediation, grounded in thorough research and strategic analysis.',
    },
    {
      title: 'Intellectual Property',
      description:
        'Protection and strategic management of intellectual assets within evolving technological and commercial landscapes.',
    },
  ];

  return (
    <div data-testid="practice-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-28 px-6 bg-gradient-to-b from-grey-50 to-white border-b border-divider transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="practice-title" className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy-dark mb-6 tracking-wide">
            Practice Orientation
          </h1>
          <div className="w-24 h-0.5 bg-charcoal mx-auto mb-8"></div>
          <p data-testid="practice-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Areas of professional focus and scholarly engagement.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section
        ref={areasRef}
        className={`py-24 px-6 bg-white transition-all duration-1000 delay-200 ${
          areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="w-16 h-0.5 bg-navy-dark mb-6"></div>
            <h2 data-testid="areas-title" className="font-serif text-4xl text-navy-dark tracking-wide">
              Areas of Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                data-testid={`practice-area-${index}`}
                className="p-10 bg-grey-50 border border-grey-300 hover:border-navy-dark transition-all duration-300 card-hover"
              >
                <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide">{area.title}</h3>
                <div className="w-12 h-0.5 bg-grey-400 mb-5"></div>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        ref={approachRef}
        className={`py-24 px-6 bg-grey-100 border-t border-divider transition-all duration-1000 delay-300 ${
          approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="w-16 h-0.5 bg-navy-dark mb-6"></div>
            <h2 data-testid="approach-title" className="font-serif text-4xl text-navy-dark tracking-wide">
              Professional Methodology
            </h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-10 border border-grey-300">
            <p data-testid="approach-para-1">
              Our approach to legal practice is characterized by thorough research, analytical precision, and principled
              advocacy. Each matter is addressed through careful examination of relevant legal frameworks, precedent, and
              scholarly discourse.
            </p>
            <p data-testid="approach-para-2">
              We emphasize intellectual independence and methodological rigor, drawing on both established doctrine and
              contemporary legal scholarship. Our work reflects a commitment to advancing legal understanding while
              maintaining the highest standards of professional conduct.
            </p>
            <p data-testid="approach-para-3">
              This orientation emphasizes collaboration with other professionals, engagement with academic discourse, and
              continuous refinement of analytical methods in response to evolving legal landscapes.
            </p>
          </div>

          <div className="mt-12 p-10 bg-white border-l-4 border-navy-dark">
            <h3 data-testid="methodology-title" className="font-serif text-2xl text-navy-dark mb-6 tracking-wide">
              Methodological Framework
            </h3>
            <ul data-testid="methodology-list" className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-4 text-navy-dark font-medium">•</span>
                <span>Comprehensive legal research grounded in primary and secondary sources</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-navy-dark font-medium">•</span>
                <span>Careful analysis of statutory frameworks and judicial precedent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-navy-dark font-medium">•</span>
                <span>Integration of scholarly perspectives and contemporary legal theory</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-navy-dark font-medium">•</span>
                <span>Strategic assessment informed by institutional and regulatory contexts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-navy-dark font-medium">•</span>
                <span>Commitment to transparent reasoning and principled argumentation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section data-testid="practice-disclaimer" className="py-20 px-6 bg-grey-200 border-t border-divider">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 border-l-4 border-charcoal">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-navy-dark">Note:</strong> This overview is provided for informational purposes only and does not constitute legal
              advice or an offer of legal services. No attorney-client relationship is created through review of this content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
