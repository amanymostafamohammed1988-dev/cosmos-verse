import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: "/assets/icons/contact/phone.svg",
      title: "Phone Numbers",
      details: [
        {
          label: "Main Office",
          value: "(555) 123-4567",
          link: "tel:+15551234567",
        },
        {
          label: "Emergency Line",
          value: "(555) 987-6543",
          link: "tel:+15559876543",
        },
      ],
    },
    {
      icon: "/assets/icons/contact/email.svg",
      title: "Email Address",
      details: [
        {
          label: "General Inquiries",
          value: "contact@lawfirm.com",
          link: "mailto:contact@lawfirm.com",
        },
        {
          label: "New Cases",
          value: "cases@lawfirm.com",
          link: "mailto:cases@lawfirm.com",
        },
      ],
    },
    {
      icon: "/assets/icons/contact/location.svg",
      title: "Office Address",
      details: [
        { label: "Address", value: "123 Legal Street, Suite 500", link: null },
        { label: "City", value: "City, State 12345", link: null },
        {
          label: "Directions",
          value: "Get Directions",
          link: "https://maps.google.com",
        },
      ],
    },
    {
      icon: "/assets/icons/contact/clock.svg",
      title: "Office Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 6:00 PM", link: null },
        { label: "Saturday", value: "9:00 AM - 2:00 PM", link: null },
        { label: "Sunday", value: "Closed", link: null },
      ],
    },
  ];

  const socialLinks = [
    { icon: "/assets/icons/social/linkedin.svg", name: "LinkedIn", url: "#" },
    { icon: "/assets/icons/social/facebook.svg", name: "Facebook", url: "#" },
    { icon: "/assets/icons/social/instagram.svg", name: "Instagram", url: "#" },
    { icon: "/assets/icons/social/twitter.svg", name: "Twitter", url: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-white py-4 border-b border-lawfirm-light-gray">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm font-roboto">
            <Link
              to="/"
              className="text-lawfirm-dark-navy hover:text-lawfirm-gold transition-colors"
            >
              Home
            </Link>
            <span className="text-lawfirm-dark-navy">/</span>
            <span className="text-lawfirm-gold font-medium">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Intro Header Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 3, 73, 0.8), rgba(0, 3, 73, 0.8)), url('/assets/images/contact-hero.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl font-roboto leading-relaxed opacity-90">
              We're here to help – Contact us today with confidence. Our
              experienced legal team is ready to provide the guidance and
              representation you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-lawfirm-dark-navy font-roboto">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 font-roboto mb-4">
                    Thank you for contacting us. We'll review your message and
                    get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-roboto font-medium text-lawfirm-dark-navy mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-lawfirm-gold focus:ring-lawfirm-gold"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-roboto font-medium text-lawfirm-dark-navy mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-lawfirm-gold focus:ring-lawfirm-gold"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-roboto font-medium text-lawfirm-dark-navy mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-gray-300 focus:border-lawfirm-gold focus:ring-lawfirm-gold"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-roboto font-medium text-lawfirm-dark-navy mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-300 focus:border-lawfirm-gold focus:ring-lawfirm-gold"
                        placeholder="Enter the subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-roboto font-medium text-lawfirm-dark-navy mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-lawfirm-gold focus:ring-lawfirm-gold resize-none"
                      placeholder="Please describe your legal matter or question in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lawfirm-gold hover:bg-lawfirm-medium-navy text-white font-roboto font-medium py-4 rounded-lg transition-colors duration-300 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Direct Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-lawfirm-dark-navy font-roboto">
                  Reach out to us directly using any of the methods below.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-lawfirm-light-gray p-6 rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-lawfirm-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={info.icon}
                          alt={info.title}
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-montserrat font-bold text-lawfirm-dark-blue mb-3">
                          {info.title}
                        </h3>
                        <div className="space-y-2">
                          {info.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex justify-between items-center"
                            >
                              <span className="text-lawfirm-dark-navy font-roboto">
                                {detail.label}:
                              </span>
                              {detail.link ? (
                                <a
                                  href={detail.link}
                                  className="text-lawfirm-gold hover:text-lawfirm-medium-navy font-roboto font-medium transition-colors"
                                >
                                  {detail.value}
                                </a>
                              ) : (
                                <span className="text-lawfirm-dark-navy font-roboto font-medium">
                                  {detail.value}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-4">
              Find Our Office
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto max-w-2xl mx-auto">
              Located in the heart of the business district, our office is
              easily accessible with ample parking and public transportation
              options.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Map Container */}
              <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src="/assets/images/office-map.jpg"
                  alt="Office location map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-lawfirm-gold rounded-full flex items-center justify-center">
                      <img
                        src="/assets/icons/contact/location.svg"
                        alt="Location"
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-lg font-roboto">
                      Interactive Map Coming Soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Info Bar */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">
                      Address
                    </h4>
                    <p className="text-lawfirm-dark-navy font-roboto">
                      123 Legal Street, Suite 500
                      <br />
                      City, State 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">
                      Parking
                    </h4>
                    <p className="text-lawfirm-dark-navy font-roboto">
                      Free parking available
                      <br />
                      in building garage
                    </p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">
                      Public Transit
                    </h4>
                    <p className="text-lawfirm-dark-navy font-roboto">
                      Metro Station
                      <br />2 blocks away
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-lawfirm-dark-blue to-lawfirm-medium-navy rounded-lg p-12 text-white">
              <h2 className="text-4xl font-montserrat font-bold mb-6">
                Ready to Schedule a Consultation?
              </h2>
              <p className="text-xl font-roboto mb-8 opacity-90 max-w-2xl mx-auto">
                Don't wait to get the legal help you need. Book a consultation
                with our experienced attorneys and take the first step toward
                resolving your legal matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 text-lg transform hover:scale-105"
                >
                  Book a Consultation
                </Link>
                <a
                  href="tel:+15551234567"
                  className="inline-block border-2 border-white text-white font-roboto font-medium px-10 py-4 rounded-lg hover:bg-white hover:text-lawfirm-dark-blue transition-all duration-300 text-lg"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quick Links & Social */}
      <section className="bg-lawfirm-light-gray py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-8">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-lawfirm-gold hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
            <p className="text-lawfirm-dark-navy font-roboto">
              Follow us on social media for legal updates and news
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
