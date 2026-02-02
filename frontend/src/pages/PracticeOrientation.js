import { useScrollAnimation } from "../hooks/useScrollAnimation";
import practiceAreas from "../data/practiceAreas.json";

export const PracticeOrientation = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [areasRef, areasVisible] = useScrollAnimation();
  const [approachRef, approachVisible] = useScrollAnimation();

  return (
    <div data-testid="practice-page" className="section-neutral">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-28 px-6 section-neutral border-b border-divider transition-all duration-1000 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        } relative overflow-hidden`}
        style={{
          backgroundImage: `linear-gradient(rgba(9, 18, 32, 0.55), rgba(9, 18, 32, 0.55)), url(${new URL("../assets/professional-header.webp", import.meta.url).href})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            data-testid="practice-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy-dark tracking-wide"
          >
            Practice Orientation
          </h1>
          <div className="w-24 h-0.5 bg-divider mx-auto mb-8"></div>
          <p
            data-testid="practice-subtitle"
            className="text-lg text-charcoal max-w-2xl mx-auto"
          >
            Areas of professional focus and scholarly engagement.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section
        ref={areasRef}
        className={`py-24 px-6 section-neutral relative overflow-hidden transition-all duration-1000 delay-200 ${
          areasVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(9, 18, 32, 0.06) 0px, rgba(9, 18, 32, 0.06) 1px, transparent 1px, transparent 18px)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="w-16 h-0.5 bg-navy-dark mb-6"></div>
            <h2
              data-testid="areas-title"
              className="font-serif text-4xl text-navy-dark tracking-wide"
            >
              Areas of Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id || index}
                data-testid={`practice-area-${index}`}
                className="p-10 content-card hover:border-accent transition-all duration-300 card-hover bg-white/80 backdrop-blur-[1px]"
              >
                <h3 className="font-serif text-2xl text-navy-dark mb-2 tracking-wide uppercase">
                  {area.title}
                </h3>
                <div className="w-12 h-0.5 bg-divider mb-3"></div>
                <p className="text-charcoal leading-relaxed text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        ref={approachRef}
        className={`py-24 px-6 bg-grey-100 border-t border-divider transition-all duration-1000 delay-300 ${
          approachVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="w-16 h-0.5 bg-navy-dark mb-6"></div>
            <h2
              data-testid="approach-title"
              className="font-serif text-4xl text-navy-dark tracking-wide"
            >
              Professional Methodology
            </h2>
          </div>
          <div className="space-y-6 text-charcoal leading-relaxed content-card p-10">
            <p data-testid="approach-para-1">
              The Firm's professional methodology is anchored in constitutional
              supremacy, statutory precision, and forensic rigor, operating
              strictly secundum legem. Every matter undergoes a structured
              jurisdictional and evidentiary audit ab initio, scrutinising
              investigative competence, procedural compliance, and statutory
              validity to ensure that no prosecution proceeds per incuriam or in
              abuse of process.
            </p>
            <p data-testid="approach-para-2">
              Penal provisions are construed strictissimi juris, guided by the
              maxim actus non facit reum nisi mens sit rea, while the burden of
              proof is assessed in light of onus probandi and the presumption of
              innocence under Article 21. Reverse burden clauses and coercive
              measures are constitutionally tested against proportionality and
              natural justice, including audi alteram partem.
            </p>
            <p data-testid="approach-para-3">
              Forensic evaluation of documentary, financial, and scientific
              evidence is undertaken to preserve evidentiary integrity and chain
              of custody. Strategic litigation architecture encompasses
              discharge, quashing, trial defence, and appellate remedies.
              Ethical governance under the Advocates Act, 1961 and BCI Rules
              remains paramount, ensuring fiduciary confidentiality and
              professional independence in the pursuit of fiat justitia ruat
              caelum.
            </p>
          </div>

          <div className="mt-12 p-10 content-card border-l-4 border-accent">
            <h3
              data-testid="methodology-title"
              className="font-serif text-2xl text-navy-dark mb-6 tracking-wide"
            >
              Methodological Framework
            </h3>
            <ul
              data-testid="methodology-list"
              className="space-y-4 text-charcoal"
            >
              <li className="flex items-start">
                <span className="mr-4 text-accent font-medium">•</span>
                <span>
                  Comprehensive legal research grounded in primary and secondary
                  sources
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent font-medium">•</span>
                <span>
                  Careful analysis of statutory frameworks and judicial
                  precedent
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent font-medium">•</span>
                <span>
                  Integration of scholarly perspectives and contemporary legal
                  theory
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent font-medium">•</span>
                <span>
                  Strategic assessment informed by institutional and regulatory
                  contexts
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent font-medium">•</span>
                <span>
                  Commitment to transparent reasoning and principled
                  argumentation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        data-testid="practice-disclaimer"
        className="py-20 px-6 bg-grey-200 border-t border-divider"
      >
        <div className="max-w-4xl mx-auto">
          <div className="content-card p-8 border-l-4 border-accent">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-navy-dark">Note:</strong> This overview is
              provided for informational purposes only and does not constitute
              legal advice or an offer of legal services. No attorney-client
              relationship is created through review of this content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
