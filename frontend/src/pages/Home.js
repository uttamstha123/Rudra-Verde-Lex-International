import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
const heroVideo = require("../assets/lady justice.mp4");

export const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [introRef, introVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const setRate = () => {
      try {
        v.playbackRate = 0.75; // calm, dignified motion
      } catch (e) {}
    };
    v.addEventListener("loadedmetadata", setRate);
    return () => v.removeEventListener("loadedmetadata", setRate);
  }, []);

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center px-6 py-32 section-neutral transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background media layer */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Static fallback for mobile/low-bandwidth */}
          <img
            className="hero-media-fallback"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
            alt=""
            aria-hidden="true"
          />
          {/* Soft white overlay for readability */}
          <div className="hero-overlay"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            data-testid="hero-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy-dark mb-8 leading-tight tracking-wide"
          >
            <span className="text-accent">Rudra Verde Lex</span> International
          </h1>
          <div className="heading-rule mx-auto mb-8"></div>
          <p
            data-testid="hero-subtitle"
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Veritas Semper vincit.
          </p>
          <p
            data-testid="hero-subtitle"
            className="text-md text-accent max-w-2xl mx-auto leading-relaxed"
          >
            सत्य विद्या न्याय स्थापना:
          </p>
        </div>
      </section>
      <section
        ref={introRef}
        className={`py-24 px-6 section-neutral texture-stone hairline transition-all duration-1000 delay-200 ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <div className="heading-rule mb-6"></div>
            <h2
              data-testid="intro-title"
              className="font-serif text-4xl sm:text-5xl text-navy-dark mb-10 tracking-wide"
            >
              <span className="text-accent">Institutional</span> Commitment
            </h2>
          </div>
          <div className="content-card bg-grey-50 p-10">
            <div className="prose-law space-y-6 text-gray-700">
              <p data-testid="intro-para-1" className="text-base">
                Rudra Verde Lex International is engaged in the facilitation and administration of legal services
                strictly through Advocates duly enrolled under Section 24 of the
                Advocates Act, 1961 and holding valid Certificates of Practice
                as prescribed by the Bar Council of India.
              </p>
              <p data-testid="intro-para-2" className="text-base">
                All legal services rendered by or through the Firm are
                undertaken exclusively by enrolled Advocates entitled to
                practice law under Sections 29 and 30 of the Advocates Act,
                1961. The Firm functions in full recognition of the exclusive
                statutory right of Advocates to practice before Courts,
                Tribunals, and other authorities.
              </p>
              <p data-testid="intro-para-3" className="text-base">
                The Firm acknowledges and remains subject to the disciplinary
                and regulatory jurisdiction of the respective State Bar Councils
                and the Bar Council of India under Sections 35-44 of the
                Advocates Act, 1961.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section
        ref={featuresRef}
        className={`py-24 px-6 section-muted texture-columns transition-all duration-1000 delay-300 ${
          featuresVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="heading-rule mx-auto mb-6"></div>
            <h2
              data-testid="areas-title"
              className="font-serif text-4xl sm:text-5xl text-navy-dark tracking-wide"
            >
              Our <span className="text-accent">Focus</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
              data-testid="focus-area-3"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide uppercase">
                NDPS
              </h3>
              {/* <div className="w-12 h-0.5 bg-grey-300 mb-0"></div> */}
              <p className="text-gray-600 leading-relaxed text-sm">
               In NDPS litigation, the Firm subjects every search, seizure, and arrest to rigorous compliance analysis under Sections 41, 42, 43, 50, and 57, conscious that deviation from statutory safeguards may vitiate proceedings ab initio. The concept of conscious possession is examined through evidentiary nexus and forensic integrity, with strict evaluation of sampling procedures and chain of custody.
              </p>
            </div>
            <div
              data-testid="focus-area-1"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide uppercase">
                Pocso
              </h3>
              {/* <div className="w-12 h-0.5 bg-grey-300 mb-0"></div> */}
              <p className="text-gray-600 leading-relaxed text-sm">
               In POCSO prosecutions, the Firm navigates the delicate equilibrium between victim protection and the inviolable guarantees of fair trial under Articles 14 and 21, ensuring that statutory presumptions under Section 29 do not erode the foundational principle that actus non facit reum nisi mens sit rea.
              </p>
            </div>
            <div
              data-testid="focus-area-2"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide uppercase">
                White Collar Crime
              </h3>
              {/* <div className="w-12 h-0.5 bg-grey-300 mb-0"></div> */}
              <p className="text-gray-600 leading-relaxed text-sm">
               In White Collar Crime and Economic Offences, the Firm undertakes forensic examination of prosecution complaints, attachment orders, and financial records under statutes including PMLA, Companies Act, and allied regulatory frameworks, ensuring that coercive state action withstands constitutional scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Notice */}
      <section
        data-testid="home-disclaimer"
        className="py-20 px-6 bg-grey-200 "
      >
        <div className="max-w-4xl mx-auto">
          <div className="content-card bg-white p-10 border-l-4 border-navy-dark">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-navy-dark">Disclaimer:</strong> As per the
              rules of the Bar Council of India, Advocates are prohibited from
              soliciting work or advertising. By accessing this website, you
              acknowledge that there has been no advertisement, solicitation, or
              inducement by Rudra Verde Lex International or its Advocates. The
              content provided herein is for informational purposes only and
              does not constitute legal advice, legal opinion, or a substitute
              for professional consultation. Viewing this website or
              communicating through it does not create an advocate-client
              relationship. Any reliance on the information contained on this
              website is at the user's own discretion. For formal legal advice,
              a proper engagement in accordance with applicable law is required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
