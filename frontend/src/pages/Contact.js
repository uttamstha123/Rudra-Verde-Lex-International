import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();

  return (
    <div data-testid="contact-page" className="bg-white">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 bg-gray-50 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="contact-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            Contact
          </h1>
          <p data-testid="contact-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Institutional contact information for academic and professional inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section
        ref={infoRef}
        className={`py-20 px-6 transition-all duration-1000 delay-200 ${
          infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p data-testid="contact-intro" className="text-gray-700 leading-relaxed mb-8">
              For academic inquiries, professional correspondence, or institutional matters, please use the contact
              information provided below. This information is provided for informational purposes and does not constitute
              an invitation for client solicitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Office Location */}
            <div data-testid="contact-location" className="p-10 bg-white border-l-4 border-navy-dark">
              <h3 className="font-serif text-2xl text-navy-dark mb-8 tracking-wide">Office Location</h3>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="font-medium text-navy-dark">Rudra Verde Lex International</p>
                <p>123 Legal District Avenue</p>
                <p>Metropolitan Center, Suite 1500</p>
                <p>New Delhi 110001</p>
                <p>India</p>
              </div>
            </div>

            {/* Contact Details */}
            <div data-testid="contact-details" className="p-10 bg-white border-l-4 border-charcoal">
              <h3 className="font-serif text-2xl text-charcoal mb-8 tracking-wide">Contact Details</h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 mb-2 tracking-wide">General Inquiries</p>
                  <p data-testid="contact-email" className="font-medium text-navy-dark">
                    info@rudraverdelex.international
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2 tracking-wide">Academic Correspondence</p>
                  <p data-testid="contact-academic-email" className="font-medium text-navy-dark">
                    academic@rudraverdelex.international
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div data-testid="contact-notice" className="p-10 bg-grey-50 border-l-4 border-navy-dark">
            <h3 className="font-serif text-2xl text-navy-dark mb-6 tracking-wide">Important Notice</h3>
            <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong className="text-navy-dark">No Solicitation:</strong> The contact information provided on this page is for institutional,
                academic, and professional correspondence only. It does not constitute an invitation for client solicitation
                or an offer of legal services.
              </p>
              <p>
                <strong className="text-navy-dark">No Attorney-Client Relationship:</strong> Communication via email or other means does not establish
                an attorney-client relationship. Do not send confidential or time-sensitive information through unsecured
                email.
              </p>
              <p>
                <strong className="text-navy-dark">Response Times:</strong> While we endeavor to respond to appropriate inquiries in a timely manner,
                response to communications does not guarantee that the firm will undertake representation or provide legal
                advice.
              </p>
              <p>
                <strong className="text-navy-dark">Academic Inquiries:</strong> For academic collaboration, speaking engagements, or scholarly
                correspondence, please use the academic contact address and clearly indicate the nature of your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="additional-info-title" className="font-serif text-3xl text-black mb-8">
            Regulatory Information
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p data-testid="regulatory-para-1">
              Rudra Verde Lex International operates in compliance with applicable bar regulations and professional conduct
              rules. Our professional staff maintains memberships and good standing with relevant bar associations and
              regulatory bodies.
            </p>
            <p data-testid="regulatory-para-2">
              For complete terms regarding the use of this website, limitations on the establishment of attorney-client
              relationships, and other regulatory disclosures, please review our Legal & Regulatory Disclaimer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
