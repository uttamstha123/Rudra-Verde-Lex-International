import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const People = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  const teamMembers = [
    {
      name: 'Dr. Arjun Menon',
      title: 'Senior Partner',
      qualifications: 'LL.M (Harvard), Ph.D. (Oxford)',
      areas: 'Constitutional Law, International Law',
      bio: 'Dr. Menon brings extensive experience in constitutional litigation and international legal frameworks, with particular focus on comparative constitutional analysis and human rights law.',
    },
    {
      name: 'Priya Sharma',
      title: 'Partner',
      qualifications: 'LL.M (Cambridge), B.C.L. (Oxford)',
      areas: 'Commercial Law, Regulatory Compliance',
      bio: 'Ms. Sharma specializes in complex commercial transactions and regulatory compliance across multiple jurisdictions, with emphasis on cross-border transactions and corporate governance.',
    },
    {
      name: 'Vikram Chandra',
      title: 'Partner',
      qualifications: 'LL.M (Yale), Barrister (Lincoln\'s Inn)',
      areas: 'Dispute Resolution, Arbitration',
      bio: 'Mr. Chandra has extensive experience in commercial litigation and international arbitration, representing clients in complex disputes across various forums and jurisdictions.',
    },
    {
      name: 'Dr. Meera Krishnan',
      title: 'Associate Partner',
      qualifications: 'LL.M (Columbia), Ph.D. (LSE)',
      areas: 'Intellectual Property, Technology Law',
      bio: 'Dr. Krishnan focuses on intellectual property protection and technology law, with particular expertise in emerging technologies and digital rights frameworks.',
    },
  ];

  return (
    <div data-testid="people-page" className="section-neutral">
      {/* Header */}
      <section
        ref={headerRef}
        className={`py-24 px-6 section-muted transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
         style={{
             backgroundImage: `linear-gradient(rgba(9, 18, 32, 0.55), rgba(9, 18, 32, 0.55)), url(${new URL("../assets/team.webp", import.meta.url).href})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
      >
          <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 data-testid="people-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-dark mb-6">
            People
          </h1>
          <p data-testid="people-subtitle" className="text-lg text-charcoal max-w-2xl mx-auto">
            Our professional team and institutional contributors.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-charcoal leading-relaxed mb-16">
            <p data-testid="people-intro-1">
              Rudra Verde Lex International's professional team comprises individuals with distinguished academic credentials
              and extensive experience in legal practice and scholarship. Our collective expertise spans multiple jurisdictions
              and areas of legal specialization.
            </p>
            <p data-testid="people-intro-2">
              Each member of our team maintains active engagement with scholarly discourse, professional development, and the
              broader legal community. This commitment to intellectual rigor and professional excellence informs our
              institutional approach to legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section
        ref={teamRef}
        className={`py-20 px-6 section-muted transition-all duration-1000 delay-200 ${
          teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 data-testid="team-members-title" className="font-serif text-3xl text-navy-dark mb-12 text-center">
            Professional Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-testid={`team-member-${index}`}
                className="p-10 content-card hover:border-accent transition-all duration-300 card-hover"
              >
                <h3 className="font-serif text-3xl text-navy-dark mb-3 tracking-wide">{member.name}</h3>
                <p className="text-charcoal text-sm mb-1 font-medium tracking-wide opacity-80">{member.title}</p>
                <p className="text-charcoal text-xs mb-6 opacity-80">{member.qualifications}</p>
                <div className="w-16 h-0.5 bg-navy-dark mb-6"></div>
                <p className="text-navy-dark text-sm font-medium mb-4 tracking-wide">Areas: {member.areas}</p>
                <p className="text-charcoal text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Engagement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 data-testid="engagement-title" className="font-serif text-3xl text-navy-dark mb-8">
            Academic & Professional Engagement
          </h2>
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p data-testid="engagement-para-1">
              Members of our firm maintain active involvement with academic institutions, professional associations, and
              scholarly publications. This engagement reflects our commitment to advancing legal knowledge and contributing
              to professional discourse.
            </p>
            <p data-testid="engagement-para-2">
              Our team regularly participates in academic conferences, contributes to legal journals, and engages in teaching
              and mentorship activities. These activities ensure that our practice remains informed by current scholarship and
              contemporary legal developments.
            </p>
          </div>

          <div className="mt-12 p-8 content-card">
            <h3 data-testid="activities-title" className="font-serif text-xl text-navy-dark mb-4">
              Professional Activities
            </h3>
            <ul data-testid="activities-list" className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Active membership in professional bar associations and legal societies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Regular contributions to peer-reviewed legal journals and scholarly publications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Participation in academic conferences and professional symposia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Guest lectureships and teaching engagements at academic institutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">•</span>
                <span>Mentorship and guidance for emerging legal professionals</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
