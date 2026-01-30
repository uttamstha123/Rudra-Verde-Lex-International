import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Disclaimer = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <div data-testid="disclaimer-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 bg-black text-white transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="disclaimer-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
            Legal & Regulatory Disclaimer
          </h1>
          <p data-testid="disclaimer-subtitle" className="text-lg text-gray-300 max-w-2xl mx-auto">
            Important legal notices and regulatory disclosures.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        ref={contentRef}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* No Solicitation */}
          <div data-testid="disclaimer-section-1" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">1. No Solicitation or Advertisement</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This website is maintained for informational and academic purposes only. It does <strong>not</strong>{' '}
                constitute advertising, solicitation, or an offer of legal services. The content herein is intended to
                provide general information about Rudra Verde Lex International as an institutional and professional
                entity.
              </p>
              <p>
                No content on this website should be construed as an invitation to engage legal services or as a
                representation that the firm is accepting new matters. Any decision to engage legal counsel should be made
                independently and based upon appropriate evaluation of qualifications and suitability.
              </p>
            </div>
          </div>

          {/* No Attorney-Client Relationship */}
          <div data-testid="disclaimer-section-2" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">2. No Attorney-Client Relationship</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Accessing, browsing, or communicating through this website does NOT create an attorney-client
                relationship</strong> between the user and Rudra Verde Lex International or any of its affiliated
                professionals.
              </p>
              <p>
                An attorney-client relationship is established only through a formal, written engagement agreement executed
                by authorized representatives of the firm. No such relationship exists until such an agreement is in place
                and all necessary conflict checks and regulatory requirements have been satisfied.
              </p>
              <p>
                Do not send confidential, time-sensitive, or privileged information through this website or via unsecured
                email. Communications sent via these channels are not protected by attorney-client privilege and may not be
                treated as confidential.
              </p>
            </div>
          </div>

          {/* Not Legal Advice */}
          <div data-testid="disclaimer-section-3" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">3. Not Legal Advice</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The information presented on this website is general in nature and provided for academic and informational
                purposes only. <strong>This content does not constitute legal advice</strong> and should not be relied upon
                as such.
              </p>
              <p>
                Legal advice can only be provided in the context of a formal attorney-client relationship, following thorough
                review of specific facts, applicable law, and relevant circumstances. General information provided here
                cannot substitute for individualized legal counsel.
              </p>
              <p>
                Readers should not act or refrain from acting based upon information contained on this website without
                seeking appropriate professional legal advice from a qualified attorney licensed in the relevant jurisdiction.
              </p>
            </div>
          </div>

          {/* Jurisdictional Limitations */}
          <div data-testid="disclaimer-section-4" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">4. Jurisdictional Limitations</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The professionals at Rudra Verde Lex International are admitted to practice in specific jurisdictions only.
                This website is not intended to solicit clients or provide services in jurisdictions where such professionals
                are not properly admitted or where such solicitation would violate applicable rules of professional conduct.
              </p>
              <p>
                The choice of an attorney or law firm is an important decision that should not be based solely upon
                advertisements or digital content. Prior results referenced on this website do not guarantee similar outcomes
                in future matters, as each case depends upon its unique facts and applicable law.
              </p>
            </div>
          </div>

          {/* Academic Content */}
          <div data-testid="disclaimer-section-5" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">5. Academic and Scholarly Content</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Publications, articles, and other scholarly materials referenced or linked from this website represent the
                academic views and research of individual authors. These materials are provided for informational and
                educational purposes and should not be construed as legal advice or as reflecting official positions of the
                firm.
              </p>
              <p>
                All publications remain subject to intellectual property rights of their respective publishers and authors.
                Academic materials are presented in compliance with applicable copyright laws and fair use principles.
              </p>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div data-testid="disclaimer-section-6" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">6. Regulatory Compliance</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Rudra Verde Lex International operates in compliance with applicable bar regulations, professional conduct
                rules, and advertising restrictions in all relevant jurisdictions. This website has been designed to comply
                with these regulatory requirements.
              </p>
              <p>
                Members of the firm maintain active licenses and good standing with relevant bar associations and regulatory
                bodies. Professional conduct is governed by applicable rules in jurisdictions where services are provided.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div data-testid="disclaimer-section-7" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">7. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                While reasonable efforts are made to ensure the accuracy of information presented on this website, Rudra
                Verde Lex International makes no warranties or representations regarding completeness, accuracy, or
                currentness of content. Legal information may become outdated as laws, regulations, and judicial
                interpretations evolve.
              </p>
              <p>
                The firm and its professionals disclaim any liability for actions taken or not taken based upon information
                contained on this website. Users assume all risks associated with use of this website and its content.
              </p>
            </div>
          </div>

          {/* External Links */}
          <div data-testid="disclaimer-section-8" className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="font-serif text-2xl text-black mb-6">8. External Links and References</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This website may contain links to external websites and resources maintained by third parties. These links
                are provided for convenience and informational purposes only. Rudra Verde Lex International does not
                control, endorse, or assume responsibility for content, accuracy, or practices of external sites.
              </p>
              <p>
                Accessing external links is done at the user's own risk. The firm is not responsible for any damages or
                issues arising from use of third-party websites.
              </p>
            </div>
          </div>

          {/* Changes to Disclaimer */}
          <div data-testid="disclaimer-section-9" className="mb-12">
            <h2 className="font-serif text-2xl text-black mb-6">9. Changes to This Disclaimer</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This disclaimer may be updated periodically to reflect changes in regulatory requirements, professional
                standards, or institutional practices. Users are encouraged to review this disclaimer regularly. Continued
                use of the website following changes constitutes acceptance of the updated terms.
              </p>
              <p className="text-sm text-gray-500 mt-8">
                <strong>Last Updated:</strong> December 2025
              </p>
            </div>
          </div>

          {/* Contact for Questions */}
          <div data-testid="disclaimer-contact" className="p-8 bg-gray-50 border border-gray-300">
            <h3 className="font-serif text-xl text-black mb-4">Questions Regarding This Disclaimer</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              For questions regarding this disclaimer or the regulatory framework governing this website, please contact the
              firm through appropriate channels identified on the Contact page. Such inquiries will be addressed as
              appropriate, though response does not create an attorney-client relationship or constitute legal advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
