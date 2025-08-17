import { Link } from "react-router-dom";

export function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Criminal Law",
      description:
        "Expert defense representation for all criminal charges, from misdemeanors to serious felonies. We provide aggressive advocacy while protecting your constitutional rights throughout the legal process.",
      icon: (
        <svg
          className="w-12 h-12 text-lawfirm-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" />
        </svg>
      ),
    },
    {
      title: "Civil Law",
      description:
        "Comprehensive civil litigation services including personal injury, contract disputes, property matters, and tort claims. We fight to protect your interests and secure fair compensation.",
      icon: (
        <svg
          className="w-12 h-12 text-lawfirm-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Business Law",
      description:
        "Strategic legal counsel for businesses of all sizes, including entity formation, contract negotiation, mergers and acquisitions, employment law, and corporate governance.",
      icon: (
        <svg
          className="w-12 h-12 text-lawfirm-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: "Corporate Law",
      description:
        "Sophisticated corporate legal services including securities compliance, corporate restructuring, board governance, shareholder agreements, and regulatory compliance matters.",
      icon: (
        <svg
          className="w-12 h-12 text-lawfirm-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
    },
    {
      title: "Real Estate Law",
      description:
        "Complete real estate legal services including property transactions, title examinations, zoning issues, landlord-tenant disputes, and commercial real estate development.",
      icon: (
        <svg
          className="w-12 h-12 text-lawfirm-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Our Practice Areas
              </h1>
              <p className="text-xl text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                Comprehensive legal expertise across multiple practice areas.
                Our specialized attorneys provide strategic counsel and
                effective representation tailored to your unique legal
                challenges.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/practice-banner.jpg"
                alt="Legal practice areas"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-0">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className={`py-12 ${
                  index % 2 === 0 ? "bg-white" : "bg-lawfirm-light-gray"
                }`}
              >
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                      <div className="flex items-center mb-6">
                        <div className="mr-6">{area.icon}</div>
                        <h2 className="text-4xl font-montserrat font-bold text-lawfirm-dark-blue">
                          {area.title}
                        </h2>
                      </div>
                      <p className="text-lg text-lawfirm-dark-navy font-roboto leading-relaxed mb-8">
                        {area.description}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div
                      className={`flex justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}
                    >
                      <div className="w-64 h-64 bg-gradient-to-br from-lawfirm-gold to-lawfirm-medium-navy rounded-lg shadow-lg flex items-center justify-center">
                        <div className="text-6xl text-white">{area.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lawfirm-dark-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-roboto max-w-3xl mx-auto">
            Our experienced attorneys are ready to help you navigate your legal
            challenges. Contact us today to discuss your case and explore your
            options.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
