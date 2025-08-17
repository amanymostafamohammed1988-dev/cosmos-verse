import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "This law firm exceeded our expectations with their professional approach and exceptional results. Their expertise and dedication made all the difference in our case.",
      name: "Sarah Johnson",
      profession: "Business Owner",
      image: "/assets/images/testimonials/client-1.jpg"
    },
    {
      text: "Outstanding legal representation with personal attention to detail. They guided us through every step and achieved the best possible outcome for our family.",
      name: "Michael Davis",
      profession: "Corporate Executive",
      image: "/assets/images/testimonials/client-2.jpg"
    },
    {
      text: "Professional, responsive, and incredibly knowledgeable. I wouldn't trust anyone else with my legal matters. Highly recommend their services.",
      name: "Emily Rodriguez",
      profession: "Entrepreneur",
      image: "/assets/images/testimonials/client-3.jpg"
    }
  ];

  const services = [
    {
      icon: "/assets/icons/services/criminal-law.svg",
      title: "Criminal Defense",
      description: "Expert defense representation for criminal charges, from misdemeanors to serious felonies. We protect your rights and freedom with aggressive advocacy.",
      link: "/practice-areas#criminal"
    },
    {
      icon: "/assets/icons/services/business-law.svg", 
      title: "Business Law",
      description: "Comprehensive business legal services including contract drafting, corporate formation, and compliance to protect your business interests.",
      link: "/practice-areas#business"
    },
    {
      icon: "/assets/icons/services/family-law.svg",
      title: "Family Law",
      description: "Compassionate representation for divorce, custody, adoption, and other family matters with personalized attention to your unique situation.",
      link: "/practice-areas#family"
    },
    {
      icon: "/assets/icons/services/litigation.svg",
      title: "Civil Litigation",
      description: "Strategic litigation representation for complex disputes, personal injury claims, and civil matters with proven courtroom success.",
      link: "/practice-areas#litigation"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 3, 73, 0.7), rgba(0, 3, 73, 0.7)), url('/assets/images/hero-background.jpg')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-lawfirm-gold text-white px-4 py-2 rounded-full text-sm font-roboto font-medium uppercase tracking-wide">
                Trusted Legal Excellence Since 1998
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
              Your Legal Success
              <span className="text-lawfirm-gold"> Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl font-roboto mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
              With over 25 years of proven excellence, we deliver strategic legal solutions 
              that protect your interests and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 text-lg transform hover:scale-105 shadow-lg"
              >
                Request Consultation
              </Link>
              <Link
                to="/about"
                className="inline-block border-2 border-white text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-white hover:text-lawfirm-dark-blue transition-all duration-300 text-lg"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Enhanced About Section with Logo */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <div className="mb-8">
                <img
                  src="/assets/images/firm-logo.png"
                  alt="Law Firm Logo"
                  className="h-24 mx-auto mb-6"
                />
              </div>
              <img
                src="/assets/images/lawyer-team.jpg"
                alt="Our professional legal team"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="inline-block bg-lawfirm-light-gray text-lawfirm-dark-blue px-4 py-2 rounded-full text-sm font-roboto font-medium uppercase tracking-wide">
                  About Our Firm
                </span>
              </div>
              <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Your Trusted Legal Partners for Over 25 Years
              </h2>
              <p className="text-lg text-lawfirm-dark-navy mb-6 font-roboto leading-relaxed">
                Our experienced team of attorneys brings together decades of combined expertise 
                across multiple practice areas. We are committed to providing personalized, 
                strategic legal counsel that protects your interests and achieves your goals.
              </p>
              <p className="text-lg text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                From complex business transactions to personal legal matters, we approach every 
                case with meticulous attention to detail and unwavering dedication to our clients' success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-lawfirm-gold text-lawfirm-gold font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-gold hover:text-white transition-colors duration-300 text-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview Section */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block bg-lawfirm-gold text-white px-4 py-2 rounded-full text-sm font-roboto font-medium uppercase tracking-wide">
                Our Legal Services
              </span>
            </div>
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              We provide expert legal representation across multiple practice areas, 
              ensuring comprehensive solutions for all your legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-lawfirm-dark-navy font-roboto leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-lawfirm-gold font-roboto font-medium hover:text-lawfirm-medium-navy transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
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

      {/* Testimonials Carousel Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-block bg-lawfirm-light-gray text-lawfirm-dark-blue px-4 py-2 rounded-full text-sm font-roboto font-medium uppercase tracking-wide">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-lawfirm-light-gray rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src="/assets/icons/ui/quote.svg" alt="Quote" className="w-full h-full text-lawfirm-gold" />
                </div>
                <blockquote className="text-xl md:text-2xl text-lawfirm-dark-navy font-roboto mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-montserrat font-bold text-lawfirm-dark-blue text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-lawfirm-gold font-roboto">
                      {testimonials[currentTestimonial].profession}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-lawfirm-gold' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-lawfirm-gold hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-lawfirm-gold hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact/CTA Section */}
      <section className="bg-lawfirm-dark-blue py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block bg-lawfirm-gold text-white px-4 py-2 rounded-full text-sm font-roboto font-medium uppercase tracking-wide">
                  Ready to Get Started?
                </span>
              </div>
              <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
                Schedule Your Consultation Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-roboto leading-relaxed">
                Don't navigate your legal challenges alone. Our experienced team is here to 
                provide the guidance and representation you need. Contact us today for a consultation.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 text-lg transform hover:scale-105 shadow-lg"
              >
                Book Your Consultation
              </Link>
            </div>
            <div className="bg-lawfirm-medium-navy p-8 rounded-lg">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    <img src="/assets/icons/contact/phone.svg" alt="Phone" className="w-full h-full text-lawfirm-gold" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">Phone</div>
                    <div className="text-white font-roboto">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    <img src="/assets/icons/contact/email.svg" alt="Email" className="w-full h-full text-lawfirm-gold" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">Email</div>
                    <div className="text-white font-roboto">contact@lawfirm.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    <img src="/assets/icons/contact/location.svg" alt="Location" className="w-full h-full text-lawfirm-gold" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">Office</div>
                    <div className="text-white font-roboto">123 Legal Street<br />City, State 12345</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    <img src="/assets/icons/contact/clock.svg" alt="Hours" className="w-full h-full text-lawfirm-gold" />
                  </div>
                  <div>
                    <div className="text-lawfirm-gold font-roboto font-medium">Hours</div>
                    <div className="text-white font-roboto">Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
