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
            Rudra Verde Lex International
          </h1>
          <div className="heading-rule mx-auto mb-8"></div>
          <p
            data-testid="hero-subtitle"
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            An institutional legal presence dedicated to excellence in
            jurisprudence, scholarship, and professional practice.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introRef}
        className={`py-24 px-6 bg-white  transition-all duration-1000 delay-200 ${
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
              <span class="text-accent">Institutional</span> Commitment
            </h2>
          </div>
          <div className="content-card bg-grey-50 p-10">
            <div className="prose-law space-y-6 text-gray-700">
              <p data-testid="intro-para-1" className="text-base">
                Rudra Verde Lex International operates as a scholarly and
                professional institution focused on the advancement of legal
                knowledge and principled practice. Our work is grounded in
                rigorous analysis, ethical integrity, and a commitment to the
                broader academic and professional community.
              </p>
              <p data-testid="intro-para-2" className="text-base">
                This digital presence serves as an informational resource
                regarding our institutional identity, professional orientation,
                and contributions to legal scholarship. It is not intended for
                client solicitation or commercial purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section
        ref={featuresRef}
        className={`py-24 px-6 section-muted  transition-all duration-1000 delay-300 ${
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
              Our Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              data-testid="focus-area-1"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide">
                Professional Practice
              </h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-5"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Engagement with complex legal matters through principled
                analysis and scholarly rigor, maintaining the highest standards
                of professional conduct.
              </p>
            </div>
            <div
              data-testid="focus-area-2"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide">
                Academic Contribution
              </h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-5"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Development and dissemination of legal scholarship through
                publications, research, and institutional engagement with the
                broader academic community.
              </p>
            </div>
            <div
              data-testid="focus-area-3"
              className="content-card-soft bg-white p-10 card-hover"
            >
              <h3 className="font-serif text-2xl text-navy-dark mb-5 tracking-wide">
                Ethical Foundation
              </h3>
              <div className="w-12 h-0.5 bg-grey-300 mb-5"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Unwavering commitment to professional ethics, regulatory
                compliance, and the advancement of justice through principled
                legal work.
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
              <strong className="text-navy-dark">Disclaimer:</strong> This
              website provides information for academic and professional
              purposes only. Content herein does not constitute legal advice,
              create an attorney-client relationship, or serve as solicitation
              for legal services. For complete terms, please review our Legal &
              Regulatory Disclaimer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
