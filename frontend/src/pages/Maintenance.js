const logo = require("../assets/logo.png");

export const Maintenance = () => {
  return (
    <main className="min-h-screen section-neutral text-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(184, 155, 79, 0.14), transparent 30%), radial-gradient(circle at bottom right, rgba(214, 180, 106, 0.1), transparent 26%), linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 40%)",
        }}
      />

      <div className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-5xl animate-fade-in-up">
          <div className="content-card bg-grey-50/95 p-8 sm:p-10 lg:p-14">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <img
                  src={logo}
                  alt="Rudra Verde Lex International"
                  className="h-14 w-auto"
                />
                <div className="heading-rule sm:w-20" />
                <p className="text-xs uppercase tracking-[0.35em] text-accent">
                  Temporary maintenance
                </p>
              </div>

              <div className="max-w-3xl">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy-dark leading-tight mb-6">
                  We are briefly offline for maintenance.
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-charcoal max-w-2xl">
                  The site is being updated to keep the same formal visual language and a
                  reliable experience. Please check back shortly, or reach out directly if
                  you need immediate assistance.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="content-card-soft bg-grey-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                    Status
                  </p>
                  <p className="font-serif text-2xl text-navy-dark">Maintenance mode</p>
                  <p className="text-sm text-charcoal mt-2 leading-relaxed">
                    Content and structure remain aligned with the live site theme.
                  </p>
                </div>

                <div className="content-card-soft bg-grey-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                    Update path
                  </p>
                  <p className="font-serif text-2xl text-navy-dark">Quick toggle</p>
                  <p className="text-sm text-charcoal mt-2 leading-relaxed">
                    Switch <span className="text-accent">REACT_APP_SITE_MODE</span> between
                    <span className="text-accent"> maintenance</span> and
                    <span className="text-accent"> live</span>.
                  </p>
                </div>

                <div className="content-card-soft bg-grey-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                    Contact
                  </p>
                  <p className="font-serif text-2xl text-navy-dark">Need help?</p>
                  <p className="text-sm text-charcoal mt-2 leading-relaxed">
                    <a
                      href="tel:+918528123330"
                      className="block link-underline hover:text-accent transition-colors"
                    >
                      +91 8528123330
                    </a>
                    <a
                      href="mailto:rudraverdelexinternational@gmail.com"
                      className="block mt-2 link-underline hover:text-accent transition-colors"
                    >
                      rudraverdelexinternational@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="section-divider" />

              <p className="text-sm text-charcoal max-w-2xl leading-relaxed">
                If you are deploying locally, set <span className="text-accent">REACT_APP_SITE_MODE=live</span>
                to restore the full site, then restart the frontend dev server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};