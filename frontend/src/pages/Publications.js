import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Publications = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [listRef, listVisible] = useScrollAnimation();

  const publications = [
    {
      title: 'Constitutional Interpretation in Comparative Perspective: A Framework for Analysis',
      author: 'Dr. Arjun Menon',
      publication: 'International Journal of Constitutional Law',
      year: '2024',
      type: 'Journal Article',
      abstract:
        'This article examines approaches to constitutional interpretation across multiple jurisdictions, developing an analytical framework for comparative constitutional analysis.',
    },
    {
      title: 'Cross-Border Regulatory Compliance: Navigating Jurisdictional Complexity',
      author: 'Priya Sharma',
      publication: 'Journal of International Business Law',
      year: '2024',
      type: 'Journal Article',
      abstract:
        'An analysis of regulatory compliance challenges in cross-border transactions, with emphasis on harmonization efforts and jurisdictional coordination.',
    },
    {
      title: 'Arbitration in the Digital Age: Procedural Adaptations and Emerging Challenges',
      author: 'Vikram Chandra',
      publication: 'Arbitration Quarterly Review',
      year: '2023',
      type: 'Journal Article',
      abstract:
        'Exploration of how international arbitration procedures are adapting to technological change and digital evidence frameworks.',
    },
    {
      title: 'Intellectual Property Protection for Artificial Intelligence: Legal Frameworks and Policy Considerations',
      author: 'Dr. Meera Krishnan',
      publication: 'Technology Law Review',
      year: '2023',
      type: 'Journal Article',
      abstract:
        'Analysis of intellectual property protection regimes as applied to AI-generated works and algorithmic innovations.',
    },
    {
      title: 'The Rule of Law in Transitional Contexts: Institutional Design and Implementation',
      author: 'Dr. Arjun Menon',
      publication: 'Harvard Human Rights Journal',
      year: '2023',
      type: 'Journal Article',
      abstract:
        'Examination of rule of law promotion in post-conflict and transitional societies, with focus on institutional design and capacity building.',
    },
    {
      title: 'Corporate Governance Reform: International Trends and Domestic Implications',
      author: 'Priya Sharma',
      publication: 'Corporate Law Journal',
      year: '2022',
      type: 'Journal Article',
      abstract:
        'Comparative analysis of corporate governance reforms across major jurisdictions and their implications for institutional investors.',
    },
  ];

  return (
    <div data-testid="publications-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="publications-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            Publications & Insights
          </h1>
          <p data-testid="publications-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scholarly contributions and professional insights from our team.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 leading-relaxed mb-16">
            <p data-testid="publications-intro-1">
              The professionals at Rudra Verde Lex International maintain an active scholarly presence through contributions
              to peer-reviewed journals, academic publications, and professional discourse. These publications reflect our
              commitment to advancing legal knowledge and engaging with contemporary legal questions.
            </p>
            <p data-testid="publications-intro-2">
              The following list represents a selection of recent scholarly work by members of our firm. These publications
              are provided for academic and informational purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section
        ref={listRef}
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 delay-200 ${
          listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 data-testid="recent-publications-title" className="font-serif text-3xl text-black mb-12">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={index}
                data-testid={`publication-${index}`}
                className="p-8 bg-white border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <h3 className="font-serif text-xl text-black mb-3">{pub.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <span data-testid={`pub-author-${index}`}>{pub.author}</span>
                  <span>•</span>
                  <span data-testid={`pub-publication-${index}`}>{pub.publication}</span>
                  <span>•</span>
                  <span data-testid={`pub-year-${index}`}>{pub.year}</span>
                  <span>•</span>
                  <span data-testid={`pub-type-${index}`} className="px-2 py-1 bg-gray-100 text-xs">
                    {pub.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{pub.abstract}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Use Disclaimer */}
      <section data-testid="publications-disclaimer" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gray-100 border border-gray-300">
            <h3 data-testid="academic-disclaimer-title" className="font-serif text-xl text-black mb-4">
              Academic Use Disclaimer
            </h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The publications listed on this page are provided for informational and academic purposes only. They
                represent the scholarly views and research of individual authors and should not be construed as legal
                advice or as reflecting official positions of Rudra Verde Lex International.
              </p>
              <p>
                These materials are intended to contribute to professional discourse and academic debate. They do not
                create an attorney-client relationship, and readers should not act upon information contained in these
                publications without seeking appropriate professional counsel.
              </p>
              <p>
                All publications remain subject to the intellectual property rights of their respective publishers and
                authors. Citations should follow appropriate academic conventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
