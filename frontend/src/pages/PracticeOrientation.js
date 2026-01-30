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
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="practice-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            Practice Orientation
          </h1>
          <p data-testid="practice-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Areas of professional focus and scholarly engagement.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section
        ref={areasRef}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 data-testid="areas-title" className="font-serif text-3xl text-black mb-12 text-center">
            Areas of Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                data-testid={`practice-area-${index}`}
                className="p-8 bg-white border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        ref={approachRef}
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 delay-300 ${
          approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="approach-title" className="font-serif text-3xl text-black mb-8">
            Professional Methodology
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
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

          <div className="mt-12 p-8 bg-white border border-gray-200">
            <h3 data-testid="methodology-title" className="font-serif text-xl text-black mb-4">
              Methodological Framework
            </h3>
            <ul data-testid="methodology-list" className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Comprehensive legal research grounded in primary and secondary sources</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Careful analysis of statutory frameworks and judicial precedent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Integration of scholarly perspectives and contemporary legal theory</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Strategic assessment informed by institutional and regulatory contexts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Commitment to transparent reasoning and principled argumentation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section data-testid="practice-disclaimer" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            <strong>Note:</strong> This overview is provided for informational purposes only and does not constitute legal
            advice or an offer of legal services. No attorney-client relationship is created through review of this content.
          </p>
        </div>
      </section>
    </div>
  );
};
