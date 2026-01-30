import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Values = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [ethicsRef, ethicsVisible] = useScrollAnimation();
  const [standardsRef, standardsVisible] = useScrollAnimation();

  return (
    <div data-testid="values-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="values-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            Professional Values & Ethics
          </h1>
          <p data-testid="values-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            The ethical foundations and professional standards guiding our institutional conduct.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section
        ref={ethicsRef}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          ethicsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="core-values-title" className="font-serif text-3xl text-black mb-8">
            Core Professional Values
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="values-para-1">
              Rudra Verde Lex International is founded upon unwavering commitment to professional ethics and institutional
              integrity. Our practice is guided by principles that prioritize transparency, accountability, and respect for
              the rule of law.
            </p>
            <p data-testid="values-para-2">
              We recognize that the practice of law carries significant responsibilities to clients, to the legal profession,
              and to society at large. These responsibilities inform every aspect of our professional conduct and institutional
              decision-making.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-testid="value-integrity" className="p-10 bg-white border-l-4 border-navy-dark card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Integrity</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintaining the highest standards of honesty, transparency, and ethical conduct in all professional
                relationships and institutional operations.
              </p>
            </div>
            <div data-testid="value-competence" className="p-10 bg-white border-l-4 border-navy-dark card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Competence</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Commitment to continuous learning, rigorous analysis, and the maintenance of professional knowledge
                necessary for effective legal practice.
              </p>
            </div>
            <div data-testid="value-independence" className="p-10 bg-white border-l-4 border-navy-dark card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Independence</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Preservation of intellectual and professional independence, free from conflicts of interest and external
                pressures that might compromise objective judgment.
              </p>
            </div>
            <div data-testid="value-confidentiality" className="p-10 bg-white border-l-4 border-navy-dark card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Confidentiality</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strict adherence to duties of confidentiality and protection of privileged information in accordance with
                professional obligations and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section
        ref={standardsRef}
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 delay-300 ${
          standardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="standards-title" className="font-serif text-3xl text-black mb-8">
            Ethical Standards & Compliance
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="standards-para-1">
              Our firm operates in full compliance with applicable rules of professional conduct, bar regulations, and legal
              ethics requirements across all relevant jurisdictions. We maintain active engagement with evolving ethical
              standards and regulatory frameworks governing legal practice.
            </p>
            <p data-testid="standards-para-2">
              Professional conduct is monitored through internal review processes, adherence to established protocols, and
              commitment to continuing legal education. We recognize that ethical practice requires ongoing attention,
              institutional vigilance, and willingness to adapt to changing professional landscapes.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white border border-gray-200">
            <h3 data-testid="commitments-title" className="font-serif text-xl text-black mb-4">
              Institutional Commitments
            </h3>
            <ul data-testid="commitments-list" className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Full compliance with professional rules of conduct and bar regulations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Rigorous conflict of interest screening and management procedures</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Protection of client confidentiality and privileged communications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Transparent fee structures and billing practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Ongoing professional development and ethics training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Respect for judicial institutions and adversarial processes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">•</span>
                <span>Commitment to access to justice and pro bono service</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-100">
            <p data-testid="ethics-note" className="text-sm text-gray-600 leading-relaxed">
              <strong>Note on Professional Responsibility:</strong> The firm's commitment to professional ethics extends
              beyond formal regulatory requirements to encompass broader duties to the legal profession, the judiciary, and
              the public interest. These commitments inform our approach to practice and our engagement with the broader
              legal community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
