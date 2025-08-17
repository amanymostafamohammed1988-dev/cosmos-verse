import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Welcome to Excellence in Legal Services
              </h1>
              <p className="text-xl text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                With over two decades of experience, we provide comprehensive
                legal solutions tailored to your unique needs. Trust our expert
                team to guide you through complex legal challenges with
                integrity and dedication.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/hero-banner.jpg"
                alt="Legal professionals"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/images/lawyer-team.jpg"
                alt="Our legal team"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Your Trusted Legal Partners
              </h2>
              <p className="text-lg text-lawfirm-dark-navy mb-6 font-roboto leading-relaxed">
                Our experienced team of attorneys brings together decades of
                combined expertise across multiple practice areas. We are
                committed to providing personalized, strategic legal counsel
                that protects your interests and achieves your goals.
              </p>
              <p className="text-lg text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                From complex business transactions to personal legal matters, we
                approach every case with meticulous attention to detail and
                unwavering dedication to our clients' success.
              </p>
              <Link
                to="/about"
                className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Our Practice Areas
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple practice
              areas, ensuring expert representation for all your legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Criminal Law */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-lawfirm-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                Criminal Law
              </h3>
              <p className="text-lawfirm-dark-navy font-roboto leading-relaxed">
                Expert defense representation for criminal charges, from
                misdemeanors to serious felonies. We protect your rights and
                freedom.
              </p>
            </div>

            {/* Business Contracts */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-lawfirm-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                Business Contracts
              </h3>
              <p className="text-lawfirm-dark-navy font-roboto leading-relaxed">
                Comprehensive contract drafting, review, and negotiation
                services to protect your business interests and ensure
                compliance.
              </p>
            </div>

            {/* Legal Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-lawfirm-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                Legal Consulting
              </h3>
              <p className="text-lawfirm-dark-navy font-roboto leading-relaxed">
                Strategic legal advice and consultation to help you make
                informed decisions and navigate complex legal landscapes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lawfirm-dark-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-roboto max-w-3xl mx-auto">
            Don't navigate your legal challenges alone. Our experienced team is
            here to provide the guidance and representation you need. Contact us
            today for a consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
