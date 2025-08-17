import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getIconByPath,
  CriminalLawIcon,
  BusinessLawIcon,
  FamilyLawIcon,
  LitigationIcon,
  IntegrityIcon,
  ExcellenceIcon,
  DedicationIcon,
  QuoteIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  ClockIcon,
} from "@/components/Icons";

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const testimonials = [
    {
      text: "This law firm exceeded our expectations with their professional approach and exceptional results. Their expertise and dedication made all the difference in our case.",
      name: "Sarah Johnson",
      profession: "Business Owner",
      image: "/assets/images/testimonials/client-1.jpg",
    },
    {
      text: "Outstanding legal representation with personal attention to detail. They guided us through every step and achieved the best possible outcome for our family.",
      name: "Michael Davis",
      profession: "Corporate Executive",
      image: "/assets/images/testimonials/client-2.jpg",
    },
    {
      text: "Professional, responsive, and incredibly knowledgeable. I wouldn't trust anyone else with my legal matters. Highly recommend their services.",
      name: "Emily Rodriguez",
      profession: "Entrepreneur",
      image: "/assets/images/testimonials/client-3.jpg",
    },
  ];

  const services = [
    {
      IconComponent: CriminalLawIcon,
      title: "Criminal Defense",
      description:
        "Expert defense representation for criminal charges, from misdemeanors to serious felonies. We protect your rights and freedom with aggressive advocacy.",
      link: "/practice-areas#criminal",
    },
    {
      IconComponent: BusinessLawIcon,
      title: "Business Law",
      description:
        "Comprehensive business legal services including contract drafting, corporate formation, and compliance to protect your business interests.",
      link: "/practice-areas#business",
    },
    {
      IconComponent: FamilyLawIcon,
      title: "Family Law",
      description:
        "Compassionate representation for divorce, custody, adoption, and other family matters with personalized attention to your unique situation.",
      link: "/practice-areas#family",
    },
    {
      IconComponent: LitigationIcon,
      title: "Civil Litigation",
      description:
        "Strategic litigation representation for complex disputes, personal injury claims, and civil matters with proven courtroom success.",
      link: "/practice-areas#litigation",
    },
  ];

  const teamValues = [
    {
      IconComponent: IntegrityIcon,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our legal practice and client relationships.",
    },
    {
      IconComponent: ExcellenceIcon,
      title: "Excellence",
      description:
        "Our commitment to legal excellence drives us to achieve the best possible outcomes for our clients.",
    },
    {
      IconComponent: DedicationIcon,
      title: "Dedication",
      description:
        "We are dedicated to providing personalized attention and unwavering support to every client.",
    },
  ];

  const legalInsights = [
    {
      image: "/assets/images/insights/legal-update-1.jpg",
      category: "Legal Updates",
      title:
        "New Regulations in Corporate Compliance: What Your Business Needs to Know",
      excerpt:
        "Recent changes in corporate compliance regulations require immediate attention from business owners...",
      date: "December 15, 2024",
      readTime: "5 min read",
      link: "/insights/corporate-compliance",
    },
    {
      image: "/assets/images/insights/family-law-2.jpg",
      category: "Family Law",
      title:
        "Understanding Child Custody Laws: A Parent's Guide to Legal Rights",
      excerpt:
        "Navigating child custody can be complex. Learn about your rights and the legal process...",
      date: "December 12, 2024",
      readTime: "7 min read",
      link: "/insights/child-custody-guide",
    },
    {
      image: "/assets/images/insights/criminal-defense-3.jpg",
      category: "Criminal Defense",
      title: "Your Rights During Police Questioning: Essential Legal Knowledge",
      excerpt:
        "Understanding your constitutional rights during police interactions is crucial for every citizen...",
      date: "December 10, 2024",
      readTime: "6 min read",
      link: "/insights/police-questioning-rights",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-lawfirm-dark-blue">
      {/* Enhanced Hero Section with Parallax Effect */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 3, 73, 0.9) 0%, rgba(12, 27, 99, 0.8) 50%, rgba(0, 3, 73, 0.9) 100%), url('/assets/images/hero-background.jpg')",
        }}
      >
        {/* Elegant overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lawfirm-medium-navy/30 to-transparent">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(230, 166, 30, 0.4) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div
              className="mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-lg backdrop-blur-sm">
                Trusted Legal Excellence Since 1998
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Your Legal Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lawfirm-gold to-yellow-400">
                {" "}
                Starts Here
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl font-roboto mb-8 leading-relaxed max-w-3xl mx-auto opacity-95 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              With over 25 years of proven excellence, we deliver strategic
              legal solutions that protect your interests and secure your
              future.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                to="/contact"
                className="group inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white font-roboto font-medium px-10 py-4 rounded-lg hover:from-yellow-400 hover:to-lawfirm-gold transition-all duration-300 text-lg transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Request Consultation
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-white text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-white hover:text-lawfirm-dark-blue transition-all duration-300 text-lg backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs font-roboto uppercase tracking-wide">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Dark Background */}
      <section className="bg-gradient-to-br from-lawfirm-dark-blue via-lawfirm-medium-navy to-lawfirm-dark-blue py-20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 35%, rgba(230, 166, 30, 0.1) 35%, rgba(230, 166, 30, 0.1) 65%, transparent 65%)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              id="about-image"
              data-animate
              className={`order-2 lg:order-1 text-center transition-all duration-1000 ${
                isVisible["about-image"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="mb-8">
                  <img
                    src="/assets/images/firm-logo.png"
                    alt="Law Firm Logo"
                    className="h-24 mx-auto mb-6 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group">
                  <img
                    src="/assets/images/lawyer-team.jpg"
                    alt="Our professional legal team"
                    className="w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 filter contrast-110"
                    style={{
                      filter:
                        "sepia(5%) saturate(110%) hue-rotate(200deg) brightness(1.05)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lawfirm-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            <div
              id="about-content"
              data-animate
              className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
                isVisible["about-content"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-lawfirm-gold/20 to-yellow-400/20 border border-lawfirm-gold/30 text-lawfirm-gold px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-md backdrop-blur-sm">
                  About Our Firm
                </span>
              </div>
              <h2 className="text-4xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6">
                Your Trusted Legal Partners for Over 25 Years
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-roboto leading-relaxed">
                Our experienced team of attorneys brings together decades of
                combined expertise across multiple practice areas. We are
                committed to providing personalized, strategic legal counsel
                that protects your interests and achieves your goals.
              </p>
              <p className="text-lg text-gray-300 mb-8 font-roboto leading-relaxed">
                From complex business transactions to personal legal matters, we
                approach every case with meticulous attention to detail and
                unwavering dedication to our clients' success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white font-roboto font-medium px-8 py-4 rounded-lg hover:from-yellow-400 hover:to-lawfirm-gold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-lawfirm-dark-blue transition-all duration-300 text-lg shadow-md hover:shadow-lg backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Team Values Cards - White cards on dark background */}
          <div
            id="values-section"
            data-animate
            className={`mt-20 transition-all duration-1000 delay-400 ${
              isVisible["values-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-lawfirm-gold/20 to-yellow-400/20 border border-lawfirm-gold/30 text-lawfirm-gold px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide mb-4 backdrop-blur-sm">
                Our Core Values
              </span>
              <h3 className="text-3xl font-montserrat font-bold text-white">
                What Drives Our Excellence
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-lawfirm-gold/30"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.IconComponent className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <h4 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-4 text-center group-hover:text-lawfirm-gold transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-lawfirm-dark-navy font-roboto leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview with Dark Background and White Cards */}
      <section className="bg-gradient-to-br from-lawfirm-medium-navy via-lawfirm-dark-blue to-lawfirm-medium-navy py-20 relative">
        {/* Elegant texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(230, 166, 30, 0.2) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-lg">
                Our Legal Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-lg text-gray-300 font-roboto max-w-3xl mx-auto leading-relaxed">
              We provide expert legal representation across multiple practice
              areas, ensuring comprehensive solutions for all your legal needs.
            </p>
          </div>

          <div
            id="services-grid"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${
              isVisible["services-grid"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-lawfirm-gold/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.IconComponent className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-4 text-center group-hover:text-lawfirm-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lawfirm-dark-navy font-roboto leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-lawfirm-gold font-roboto font-medium hover:text-lawfirm-medium-navy transition-all duration-300 group-hover:translate-x-1"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="group inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white font-roboto font-medium px-10 py-4 rounded-lg hover:from-yellow-400 hover:to-lawfirm-gold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View All Practice Areas
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials with Dark Background and White Card */}
      <section className="bg-gradient-to-br from-lawfirm-dark-blue via-lawfirm-medium-navy to-lawfirm-dark-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(230, 166, 30, 0.1) 10px, rgba(230, 166, 30, 0.1) 20px)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="testimonials-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["testimonials-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-lawfirm-gold/20 to-yellow-400/20 border border-lawfirm-gold/30 text-lawfirm-gold px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-md backdrop-blur-sm">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 font-roboto max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our legal services.
            </p>
          </div>

          <div
            id="testimonials-carousel"
            data-animate
            className={`max-w-5xl mx-auto relative transition-all duration-1000 delay-200 ${
              isVisible["testimonials-carousel"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <QuoteIcon className="w-10 h-10 filter brightness-0 invert" />
                </div>
                <blockquote className="text-xl md:text-2xl text-lawfirm-dark-navy font-roboto mb-8 italic leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      style={{
                        filter:
                          "sepia(5%) saturate(110%) hue-rotate(200deg) brightness(1.05)",
                      }}
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-lawfirm-gold rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-montserrat font-bold text-lawfirm-dark-blue text-xl">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-lawfirm-gold font-roboto text-lg">
                      {testimonials[currentTestimonial].profession}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-lawfirm-gold to-yellow-400 scale-125 shadow-lg"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-lawfirm-gold hover:text-white transition-all duration-300 group border border-gray-100"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length,
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-lawfirm-gold hover:text-white transition-all duration-300 group border border-gray-100"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Legal Insights Section with Dark Background and White Cards */}
      <section className="bg-gradient-to-br from-lawfirm-medium-navy via-lawfirm-dark-blue to-lawfirm-medium-navy py-20 relative">
        <div className="absolute inset-0 opacity-15">
          <div
            style={{
              backgroundImage:
                "linear-gradient(30deg, transparent 40%, rgba(230, 166, 30, 0.1) 40%, rgba(230, 166, 30, 0.1) 60%, transparent 60%)",
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="insights-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["insights-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-lg">
                Legal Insights
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6">
              Latest Legal Updates & Articles
            </h2>
            <p className="text-lg text-gray-300 font-roboto max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest legal insights, updates, and expert
              analysis on current legal matters.
            </p>
          </div>

          <div
            id="insights-grid"
            data-animate
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible["insights-grid"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {legalInsights.map((insight, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-lawfirm-gold/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{
                      filter:
                        "sepia(5%) saturate(110%) hue-rotate(200deg) brightness(1.05)",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-roboto font-medium uppercase tracking-wide">
                      {insight.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-3 group-hover:text-lawfirm-gold transition-colors duration-300 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-lawfirm-dark-navy font-roboto mb-4 line-clamp-3 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 font-roboto mb-4">
                    <span>{insight.date}</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <Link
                    to={insight.link}
                    className="inline-flex items-center text-lawfirm-gold font-roboto font-medium hover:text-lawfirm-medium-navy transition-all duration-300 group-hover:translate-x-1"
                  >
                    Read Full Article
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/insights"
              className="group inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white font-roboto font-medium px-10 py-4 rounded-lg hover:from-yellow-400 hover:to-lawfirm-gold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View All Insights
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Contact/CTA Section */}
      <section className="bg-gradient-to-br from-lawfirm-dark-blue via-lawfirm-medium-navy to-lawfirm-dark-blue py-20 relative overflow-hidden">
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(230, 166, 30, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(230, 166, 30, 0.2) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="cta-section"
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible["cta-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-roboto font-medium uppercase tracking-wide shadow-lg">
                  Ready to Get Started?
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6 leading-tight">
                Schedule Your Consultation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lawfirm-gold to-yellow-400">
                  {" "}
                  Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-roboto leading-relaxed">
                Don't navigate your legal challenges alone. Our experienced team
                is here to provide the guidance and representation you need.
                Contact us today for a consultation.
              </p>
              <Link
                to="/contact"
                className="group inline-block bg-gradient-to-r from-lawfirm-gold to-yellow-400 text-white font-roboto font-medium px-10 py-4 rounded-lg hover:from-yellow-400 hover:to-lawfirm-gold transition-all duration-300 text-lg transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Book Your Consultation
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <PhoneIcon className="w-6 h-6 filter brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">
                      Phone
                    </div>
                    <div className="text-white font-roboto text-lg">
                      (555) 123-4567
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <EmailIcon className="w-6 h-6 filter brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">
                      Email
                    </div>
                    <div className="text-white font-roboto text-lg">
                      contact@lawfirm.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <LocationIcon className="w-6 h-6 filter brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">
                      Office
                    </div>
                    <div className="text-white font-roboto text-lg">
                      123 Legal Street
                      <br />
                      City, State 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-lawfirm-gold to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ClockIcon className="w-6 h-6 filter brightness-0 invert" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">
                      Hours
                    </div>
                    <div className="text-white font-roboto text-lg">
                      Mon-Fri: 8:00 AM - 6:00 PM
                      <br />
                      Sat: 9:00 AM - 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
