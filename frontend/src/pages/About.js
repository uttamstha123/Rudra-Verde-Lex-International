import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [historyRef, historyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();

  return (
    <div data-testid="about-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="about-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            About the Firm
          </h1>
          <p data-testid="about-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            An institutional overview of our identity, history, and academic commitments.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          historyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="history-title" className="font-serif text-3xl text-black mb-8">
            Institutional History
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="history-para-1">
              Rudra Verde Lex International was established as a professional institution dedicated to the practice and
              advancement of law through scholarly engagement and principled representation. From its inception, the firm
              has maintained a focus on academic rigor and ethical integrity in all professional endeavours.
            </p>
            <p data-testid="history-para-2">
              Our institutional framework emphasizes independence, intellectual depth, and commitment to the rule of law.
              We operate within established regulatory frameworks while contributing to the broader discourse on legal
              theory and practice.
            </p>
            <p data-testid="history-para-3">
              The firm's development has been guided by a commitment to maintaining the highest standards of professional
              conduct while engaging meaningfully with complex legal questions and evolving jurisprudential landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section
        ref={missionRef}
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 delay-300 ${
          missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="mission-title" className="font-serif text-3xl text-black mb-8">
            Institutional Mission
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="mission-para-1">
              Our mission is to advance legal understanding through rigorous analysis, ethical practice, and scholarly
              contribution. We seek to maintain an institutional presence that reflects both professional competence and
              academic credibility.
            </p>
            <p data-testid="mission-para-2">
              The firm operates on principles of intellectual independence, methodological rigor, and unwavering commitment
              to professional ethics. Our work is informed by careful research, analytical precision, and respect for
              established legal frameworks.
            </p>
            <p data-testid="mission-para-3">
              We engage with legal matters as opportunities for scholarly inquiry and principled advocacy, maintaining
              transparency in our methods and accountability in our professional relationships.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white border border-gray-200">
            <h3 data-testid="principles-title" className="font-serif text-xl text-black mb-4">
              Core Institutional Principles
            </h3>
            <ul data-testid="principles-list" className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Commitment to academic excellence and scholarly rigor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Adherence to the highest standards of professional ethics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Respect for regulatory frameworks and legal institutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Dedication to transparent and accountable professional conduct</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Engagement with the broader academic and professional community</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
