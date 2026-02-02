import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Values = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [ethicsRef, ethicsVisible] = useScrollAnimation();
  const [standardsRef, standardsVisible] = useScrollAnimation();

  return (
    <div data-testid="values-page" className="section-neutral">
      {/* Header */}
        <section
          ref={headerRef}
          className={`relative py-24 px-6 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
             backgroundImage: `linear-gradient(rgba(9, 18, 32, 0.55), rgba(9, 18, 32, 0.55)), url(${new URL("../assets/values.webp", import.meta.url).href})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 data-testid="values-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-dark mb-6">
          Professional Values & Ethics
            </h1>
            <p data-testid="values-subtitle" className="text-lg text-charcoal max-w-2xl mx-auto">
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
          <h2 data-testid="core-values-title" className="font-serif text-3xl text-navy-dark mb-8">
            Core Professional Values
          </h2>
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p data-testid="values-para-1">
             At Rudra Verde Lex International, professional ethics are not merely aspirational ideals but binding norms flowing from lex et aequitas. The Firm conducts itself in strict adherence to the highest traditions of the Bar, guided by constitutional morality, professional honour, and bona fides in all legal dealings.
            </p>
          </div>
         

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-testid="value-integrity" className="p-10 content-card border-l-4 border-accent card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Integrity</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-charcoal text-sm leading-relaxed">
                Integrity (Integritas et Probitas) lies at the nucleus of the Firm’s ethos. All actions are governed by truthfulness, fairness, and moral rectitude, ensuring that advocacy is never compromised by deceit, misrepresentation, or dolus malus. The Firm remains committed to fiat justitia ruat caelum—let justice be done though the heavens fall.
              </p>
            </div>
            <div data-testid="value-competence" className="p-10 content-card border-l-4 border-accent card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Competence</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-charcoal text-sm leading-relaxed">
               Competence (Peritia et Diligentia) is maintained through rigorous legal research, continuous professional development, and mastery over substantive and procedural law. Every brief is handled with cura maxima, reflecting diligence, precision, and analytical depth, ensuring representation that meets the highest professional standards.
              </p>
            </div>
            <div data-testid="value-independence" className="p-10 content-card border-l-4 border-accent card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Independence</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-charcoal text-sm leading-relaxed">
              Independence (Libertas Forensis) is zealously preserved. The Firm renders advice and advocacy free from external pressure, conflicts of interest, or undue influence, in conformity with nemo judex in causa sua and the duty of fearless representation within the bounds of law.
              </p>
            </div>
            <div data-testid="value-confidentiality" className="p-10 content-card border-l-4 border-accent card-hover">
              <h3 className="font-serif text-2xl text-navy-dark mb-4 tracking-wide">Confidentiality</h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-4"></div>
              <p className="text-charcoal text-sm leading-relaxed">
               Confidentiality (Fides et Secretum) is treated as sacrosanct. All client communications, documents, and strategies are protected under the doctrine of professional privilege, sub silentio et sub sigillo, except where disclosure is mandated by law.
              </p>
            </div>
          </div>
           <div className="space-y-6 text-charcoal leading-relaxed mt-6">
            <p data-testid="values-para-1">
            Collectively, these values sustain public confidence in the legal profession and affirm the Firm’s unwavering commitment to justice, legality, and ethical advocacy, in rem publicam et clientis utilitatem.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section
        ref={standardsRef}
        className={`py-20 px-6 section-muted transition-all duration-1000 delay-300 ${
          standardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="standards-title" className="font-serif text-3xl text-navy-dark mb-8">
            Ethical Standards & Compliance
          </h2>
          <div className="space-y-6 text-charcoal leading-relaxed">
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

          <div className="mt-12 p-8 content-card">
            <h3 data-testid="commitments-title" className="font-serif text-xl text-navy-dark mb-4">
              Institutional Commitments
            </h3>
            <ul data-testid="commitments-list" className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Full compliance with professional rules of conduct and bar regulations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Rigorous conflict of interest screening and management procedures</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Protection of client confidentiality and privileged communications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Transparent fee structures and billing practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Ongoing professional development and ethics training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Respect for judicial institutions and adversarial processes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Commitment to access to justice and pro bono service</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 content-card">
            <p data-testid="ethics-note" className="text-sm text-charcoal leading-relaxed">
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
