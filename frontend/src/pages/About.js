import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [historyRef, historyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();

  return (
    <div data-testid="about-page" className="section-neutral">
      {/* Header */}
      <section
        ref={headerRef}
        className={`relative py-24 px-6 section-muted texture-symmetry transition-all duration-1000 bg-cover bg-center ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{
          backgroundImage: `url(${new URL("../assets/about-header.webp", import.meta.url).href})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1
            data-testid="about-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-dark mb-6"
          >
            About the Firm
          </h1>
          <p
            data-testid="about-subtitle"
            className="text-lg text-charcoal max-w-2xl mx-auto"
          >
            An institutional overview of our identity, history, and academic
            commitments.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className={`py-20 px-6 texture-stone transition-all duration-1000 delay-200 ${
          historyVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            data-testid="history-title"
            className="font-serif text-3xl text-navy-dark mb-8"
          >
            Institutional History
          </h2>
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p data-testid="history-para-1">
              Rudra Verde Lex International is a private limited entity engaged
              in the facilitation and administration of legal services strictly
              through Advocates duly enrolled under Section 24 of the Advocates
              Act, 1961 and holding valid Certificates of Practice as prescribed
              by the Bar Council of India.
            </p>
            <p data-testid="history-para-2">
              All legal services rendered by or through the Firm are undertaken
              exclusively by enrolled Advocates entitled to practice law under
              Sections 29 and 30 of the Advocates Act, 1961. The Firm functions
              in full recognition of the exclusive statutory right of Advocates
              to practice before Courts, Tribunals, and other authorities.
            </p>
            <p data-testid="history-para-3">
              The Firm acknowledges and remains subject to the disciplinary and
              regulatory jurisdiction of the respective State Bar Councils and
              the Bar Council of India under Sections 35-44 of the Advocates
              Act, 1961.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section
        ref={missionRef}
        className={`py-20 px-6 section-muted texture-columns transition-all duration-1000 delay-300 ${
          missionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            data-testid="mission-title"
            className="font-serif text-3xl text-navy-dark mb-8"
          >
            Institutional Mission
          </h2>
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p data-testid="mission-para-1">
              All information shared with the Firm is treated as confidential
              and protected under professional privilege, subject to statutory
              exceptions.
            </p>
            <p data-testid="mission-para-2">
              Client funds, where received in trust, are maintained with
              fiduciary segregation and transparent accounting practices.
            </p>
            <p data-testid="mission-para-3">
              No information is disclosed without lawful authority or express
              client consent.
            </p>
          </div>

          <div className="mt-12 p-8 content-card">
            <h3
              data-testid="principles-title"
              className="font-serif text-xl text-navy-dark mb-4"
            >
              Core Institutional Principles
            </h3>
            <div class="space-y-6 text-charcoal leading-relaxed">
              <p>
                The content of this website is provided for informational purposes
                only and does not constitute legal advice, legal opinion, or
                professional solicitation.
              </p>
              <p>
                Accessing this website, transmitting information through it, or
                communicating with the Firm through electronic means does not
                create an advocate-client relationship.
              </p>
              <p>
                Such relationship arises only upon formal engagement and written
                acceptance. Users are advised to seek independent legal
                consultation before acting upon any information contained herein.
              </p>
            </div>
            {/* <ul
              data-testid="principles-list"
              className="space-y-3 text-charcoal"
            >
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>
                  Commitment to academic excellence and scholarly rigor
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>
                  Adherence to the highest standards of professional ethics
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>
                  Respect for regulatory frameworks and legal institutions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>
                  Dedication to transparent and accountable professional conduct
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>
                  Engagement with the broader academic and professional
                  community
                </span>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    </div>
  );
};
