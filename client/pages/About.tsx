import { Link } from "react-router-dom";

export function About() {
  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "1000+", label: "Cases Handled" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: "/assets/icons/values/mission.svg",
      title: "Mission",
      description: "To provide exceptional legal representation with unwavering commitment to justice, integrity, and client success.",
      background: "bg-white"
    },
    {
      icon: "/assets/icons/values/vision.svg", 
      title: "Vision",
      description: "To be the most trusted and respected law firm, setting the standard for excellence in legal services and client care.",
      background: "bg-lawfirm-light-gray"
    },
    {
      icon: "/assets/icons/values/values.svg",
      title: "Values", 
      description: "Integrity, excellence, dedication, and client-focused service guide everything we do in pursuit of justice.",
      background: "bg-white"
    }
  ];

  const differentiators = [
    {
      icon: "/assets/icons/diff/experience.svg",
      title: "Proven Experience",
      description: "Over 25 years of successful legal practice across multiple jurisdictions."
    },
    {
      icon: "/assets/icons/diff/responsiveness.svg", 
      title: "24/7 Responsiveness",
      description: "Always available when you need us most, with rapid response times."
    },
    {
      icon: "/assets/icons/diff/confidentiality.svg",
      title: "Complete Confidentiality", 
      description: "Your privacy and sensitive information are our highest priority."
    },
    {
      icon: "/assets/icons/diff/results.svg",
      title: "Proven Results",
      description: "Track record of successful outcomes and satisfied clients."
    },
    {
      icon: "/assets/icons/diff/personalized.svg",
      title: "Personalized Service",
      description: "Tailored legal strategies designed specifically for your unique situation."
    },
    {
      icon: "/assets/icons/diff/transparent.svg",
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises."
    }
  ];

  const teamMembers = [
    {
      image: "/assets/images/team-ceo.jpg",
      name: "Sarah Johnson",
      role: "Managing Partner & CEO",
      linkedin: "#"
    },
    {
      image: "/assets/images/team-partner-1.jpg", 
      name: "Michael Davis",
      role: "Senior Partner, Criminal Law",
      linkedin: "#"
    },
    {
      image: "/assets/images/team-partner-2.jpg",
      name: "Emily Rodriguez",
      role: "Partner, Corporate Law", 
      linkedin: "#"
    },
    {
      image: "/assets/images/team-partner-3.jpg",
      name: "David Chen",
      role: "Partner, Family Law",
      linkedin: "#"
    },
    {
      image: "/assets/images/team-partner-4.jpg",
      name: "Lisa Thompson",
      role: "Senior Associate",
      linkedin: "#"
    },
    {
      image: "/assets/images/team-partner-5.jpg", 
      name: "Robert Wilson",
      role: "Associate, Litigation",
      linkedin: "#"
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Firm Founded",
      description: "Established with a vision to provide exceptional legal services."
    },
    {
      year: "2005", 
      title: "Major Expansion",
      description: "Opened additional offices and expanded practice areas."
    },
    {
      year: "2012",
      title: "Award Recognition",
      description: "Received State Bar Association's Excellence in Legal Services Award."
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched innovative digital client portal and case management system."
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description: "Celebrating 25 years of legal excellence and client success."
    }
  ];

  const testimonials = [
    {
      quote: "The team provided exceptional service and achieved results beyond our expectations. Their professionalism and expertise made all the difference.",
      name: "Jennifer Martinez",
      role: "Business Owner"
    },
    {
      quote: "Outstanding legal representation with personal attention. They guided us through every step of the complex litigation process.",
      name: "Thomas Anderson", 
      role: "Corporate Executive"
    }
  ];

  const accreditations = [
    "/assets/icons/accreditations/bar-association.svg",
    "/assets/icons/accreditations/iso.svg", 
    "/assets/icons/accreditations/legal-excellence.svg",
    "/assets/icons/accreditations/chambers.svg"
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b border-lawfirm-light-gray">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm font-roboto">
            <Link to="/" className="text-lawfirm-dark-navy hover:text-lawfirm-gold transition-colors">
              Home
            </Link>
            <span className="text-lawfirm-dark-navy">/</span>
            <span className="text-lawfirm-gold font-medium">About Us</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Excellence in Legal Representation
              </h1>
              <p className="text-xl text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                For over 25 years, we have been dedicated to providing exceptional legal services 
                with integrity, expertise, and unwavering commitment to our clients' success. 
                Our experienced team stands ready to guide you through your legal challenges.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/about-hero.jpg"
                alt="Professional legal team"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/images/firm-overview.jpg"
                alt="Law firm overview"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Your Trusted Legal Partners
              </h2>
              <p className="text-lg text-lawfirm-dark-navy mb-6 font-roboto leading-relaxed">
                Founded on the principles of integrity, excellence, and client dedication, our firm 
                has built a reputation as one of the region's most trusted legal practices. We combine 
                traditional values with innovative approaches to deliver outstanding results for our clients.
              </p>
              <p className="text-lg text-lawfirm-dark-navy mb-6 font-roboto leading-relaxed">
                Our comprehensive legal services span multiple practice areas, ensuring that we can 
                address all aspects of your legal needs under one roof. From complex corporate matters 
                to personal legal challenges, we bring the same level of expertise and commitment to every case.
              </p>
              <p className="text-lg text-lawfirm-dark-navy font-roboto leading-relaxed">
                What sets us apart is our personalized approach to client service. We believe that 
                every client deserves individual attention and customized legal strategies that align 
                with their specific goals and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to excellence in legal services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${value.background} p-8 rounded-lg shadow-lg text-center`}>
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src={value.icon} alt={`${value.title} icon`} className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-lawfirm-dark-navy font-roboto leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              Discover the unique advantages that make us the preferred choice for legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img src={diff.icon} alt={`${diff.title} icon`} className="w-full h-full" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-lawfirm-gold mb-3">
                  {diff.title}
                </h3>
                <p className="text-lawfirm-dark-navy font-roboto">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              Meet the experienced professionals who lead our firm and guide our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lawfirm-gold font-roboto mb-4">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-lawfirm-dark-navy hover:text-lawfirm-gold transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-lawfirm-light-gray py-20" style={{backgroundImage: "url('/assets/images/timeline-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              Milestones that have shaped our firm's growth and commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-lawfirm-gold"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-lawfirm-gold rounded-full flex items-center justify-center">
                    <img src="/assets/icons/timeline/milestone.svg" alt="Milestone" className="w-4 h-4" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-montserrat font-bold text-lawfirm-gold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lawfirm-dark-navy font-roboto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-montserrat font-bold text-lawfirm-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-roboto text-lawfirm-dark-navy">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-lawfirm-light-gray py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-lawfirm-gold mb-4">
              Accreditations & Recognition
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto">
              Recognized by leading legal organizations for our commitment to excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {accreditations.map((logo, index) => (
              <div key={index} className="w-32 h-16 flex items-center justify-center">
                <img src={logo} alt="Accreditation logo" className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              Real testimonials from clients who have experienced our dedication to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-lawfirm-light-gray p-8 rounded-lg shadow-lg">
                <div className="w-8 h-8 mb-4">
                  <img src="/assets/icons/ui/quote.svg" alt="Quote" className="w-full h-full text-lawfirm-gold" />
                </div>
                <p className="text-lawfirm-dark-navy font-roboto mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-montserrat font-bold text-lawfirm-dark-blue">
                    {testimonial.name}
                  </div>
                  <div className="text-lawfirm-gold font-roboto">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
            >
              See More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="bg-lawfirm-dark-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-roboto max-w-3xl mx-auto">
            Join the hundreds of satisfied clients who have trusted us with their legal needs. 
            Contact us today to discover how our experienced team can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
