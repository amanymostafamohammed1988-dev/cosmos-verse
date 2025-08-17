import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions", icon: "/assets/icons/faq/all.svg" },
    { id: "process", name: "Consultations & Procedures", icon: "/assets/icons/faq/process.svg" },
    { id: "billing", name: "Fees & Billing", icon: "/assets/icons/faq/billing.svg" },
    { id: "privacy", name: "Privacy & Confidentiality", icon: "/assets/icons/faq/privacy.svg" },
    { id: "timeline", name: "Scheduling & Timelines", icon: "/assets/icons/faq/calendar.svg" }
  ];

  const faqs = [
    {
      category: "process",
      question: "How do I schedule an initial consultation?",
      answer: "You can schedule an initial consultation by calling our office at (555) 123-4567, using our online contact form, or visiting our office in person. We offer both in-person and virtual consultations to accommodate your schedule and preferences."
    },
    {
      category: "process", 
      question: "What should I bring to my first consultation?",
      answer: "Please bring any relevant documents related to your legal matter, including contracts, correspondence, court documents, identification, and a list of questions you'd like to discuss. This will help us provide the most effective consultation."
    },
    {
      category: "process",
      question: "How long does a typical case take to resolve?",
      answer: "Case timelines vary significantly based on complexity, court schedules, and case type. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide realistic timeline expectations during your consultation."
    },
    {
      category: "billing",
      question: "How are your legal fees structured?",
      answer: "Our fee structure depends on the type of case. We offer hourly billing, flat fees for specific services, and contingency fees where appropriate. All fees are discussed transparently during your initial consultation, with written fee agreements provided."
    },
    {
      category: "billing",
      question: "Do you require a retainer fee?",
      answer: "For most cases, we do require a retainer fee which serves as an advance payment for legal services. The amount varies based on case complexity and estimated work required. We'll explain retainer requirements during your consultation."
    },
    {
      category: "billing",
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, credit cards (Visa, MasterCard, American Express), and bank transfers. Payment plans may be available for certain cases - please discuss your situation with our billing department."
    },
    {
      category: "privacy",
      question: "Is my information kept confidential?",
      answer: "Absolutely. Attorney-client privilege protects all communications between you and our firm. We maintain strict confidentiality protocols and will never share your information without your explicit consent, except as required by law."
    },
    {
      category: "privacy",
      question: "Who has access to my case information?",
      answer: "Access to your case information is limited to your assigned attorney, necessary support staff working on your case, and yourself. All team members are bound by confidentiality agreements and professional ethical obligations."
    },
    {
      category: "privacy",
      question: "How do you protect sensitive documents?",
      answer: "We use secure, encrypted digital storage systems and maintain physical security measures for paper documents. Access is controlled through multi-factor authentication and all systems are regularly audited for security compliance."
    },
    {
      category: "timeline",
      question: "How quickly can you respond to urgent matters?",
      answer: "For urgent legal matters, we strive to respond within 24 hours. We have an emergency contact system for time-sensitive situations. Please clearly indicate if your matter is urgent when contacting us."
    },
    {
      category: "timeline",
      question: "How often will you update me on my case progress?",
      answer: "We provide regular updates on case progress, typically weekly or bi-weekly depending on case activity. You can also contact us anytime for status updates, and we use a client portal for 24/7 access to case information."
    },
    {
      category: "process",
      question: "Do you handle cases outside your local area?",
      answer: "We can handle cases in multiple jurisdictions. Our attorneys are licensed in several states, and we have established relationships with qualified local counsel when needed for out-of-state matters."
    },
    {
      category: "billing",
      question: "Can you provide cost estimates for my case?",
      answer: "While exact costs are difficult to predict, we can provide estimated cost ranges based on similar cases and expected complexity. We'll discuss potential cost scenarios during your consultation and keep you informed of any changes."
    },
    {
      category: "process",
      question: "What happens if I'm not satisfied with the service?",
      answer: "Client satisfaction is our priority. If you have concerns, please contact us immediately so we can address them. We have internal review processes and, if necessary, can discuss transitioning your case to another attorney."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-lawfirm-gold font-medium">FAQ</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-lawfirm-gold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-lawfirm-dark-navy mb-8 font-roboto leading-relaxed">
                Find answers to common questions about our legal services, processes, and policies. 
                If you don't find what you're looking for, please don't hesitate to contact us directly.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/faq-hero.jpg"
                alt="FAQ and legal questions"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-lawfirm-light-gray py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src="/assets/icons/ui/search.svg" alt="Search" className="h-5 w-5 text-lawfirm-dark-navy" />
              </div>
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-lawfirm-gold focus:border-lawfirm-gold text-lg font-roboto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-roboto font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-lawfirm-gold text-white"
                    : "bg-lawfirm-light-gray text-lawfirm-dark-navy hover:bg-lawfirm-gold hover:text-white"
                }`}
              >
                <img src={category.icon} alt={`${category.name} icon`} className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-lawfirm-light-gray rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-montserrat font-semibold text-lawfirm-dark-blue hover:text-lawfirm-gold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lawfirm-dark-navy font-roboto leading-relaxed text-base pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-navy mb-4">
                  No matching questions found
                </h3>
                <p className="text-lg text-lawfirm-dark-navy font-roboto mb-8">
                  Try adjusting your search terms or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="bg-lawfirm-gold text-white font-roboto font-medium px-6 py-3 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Didn't Find Your Answer */}
      <section className="bg-lawfirm-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold text-lawfirm-gold mb-6">
              Didn't Find Your Answer?
            </h2>
            <p className="text-lg text-lawfirm-dark-navy font-roboto mb-8 max-w-2xl mx-auto">
              We're here to help! If you couldn't find the information you need, please don't hesitate 
              to reach out to us directly. Our team is ready to answer any questions you may have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img src="/assets/icons/contact/phone.svg" alt="Phone" className="w-full h-full" />
                </div>
                <h3 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">Call Us</h3>
                <p className="text-lawfirm-dark-navy font-roboto">(555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img src="/assets/icons/contact/email.svg" alt="Email" className="w-full h-full" />
                </div>
                <h3 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">Email Us</h3>
                <p className="text-lawfirm-dark-navy font-roboto">contact@lawfirm.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img src="/assets/icons/contact/location.svg" alt="Location" className="w-full h-full" />
                </div>
                <h3 className="font-montserrat font-bold text-lawfirm-dark-blue mb-2">Visit Us</h3>
                <p className="text-lawfirm-dark-navy font-roboto">123 Legal Street<br />City, State 12345</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-block bg-lawfirm-gold text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-lawfirm-medium-navy transition-colors duration-300 text-lg"
            >
              Send Your Question
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-lawfirm-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-montserrat font-bold text-lawfirm-dark-blue mb-4">
                Legal Disclaimer
              </h3>
              <p className="text-lawfirm-dark-navy font-roboto leading-relaxed mb-4">
                The information provided in these FAQs is for general informational purposes only and 
                does not constitute legal advice. Every legal situation is unique, and the information 
                here may not apply to your specific circumstances.
              </p>
              <p className="text-lawfirm-dark-navy font-roboto leading-relaxed">
                For personalized legal advice regarding your situation, please schedule a consultation 
                with one of our qualified attorneys. Review our{" "}
                <Link to="/privacy-policy" className="text-lawfirm-gold hover:underline">
                  Privacy Policy
                </Link>{" "}
                for information about how we handle your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="bg-lawfirm-medium-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Get Professional Legal Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-roboto max-w-3xl mx-auto">
            Don't let legal questions go unanswered. Schedule a consultation with our experienced 
            team and get the personalized guidance you need for your specific situation.
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
