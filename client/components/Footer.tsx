import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lawfirm-dark-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-montserrat font-bold text-lawfirm-gold mb-4">
              Law Firm Name
            </h3>
            <p className="font-roboto text-gray-300 mb-4">
              Providing exceptional legal services with integrity, dedication,
              and expertise. Your trusted legal partners for over 20 years.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn Icon */}
              <a
                href="#"
                className="text-white hover:text-lawfirm-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="#"
                className="text-white hover:text-lawfirm-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="#"
                className="text-white hover:text-lawfirm-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.948 2.684c.646 0 1.209.526 1.209 1.209s-.563 1.209-1.209 1.209-1.209-.526-1.209-1.209.563-1.209 1.209-1.209zm7.104 0c.646 0 1.209.526 1.209 1.209s-.563 1.209-1.209 1.209-1.209-.526-1.209-1.209.563-1.209 1.209-1.209zM12.017 5.235c3.726 0 6.751 3.025 6.751 6.752 0 3.726-3.025 6.751-6.751 6.751-3.727 0-6.752-3.025-6.752-6.751 0-3.727 3.025-6.752 6.752-6.752zm0 2.117c-2.559 0-4.635 2.076-4.635 4.635s2.076 4.635 4.635 4.635 4.635-2.076 4.635-4.635-2.076-4.635-4.635-4.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-lawfirm-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-roboto text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="font-roboto text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-roboto text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-roboto text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold text-lawfirm-gold mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 font-roboto text-gray-300">
              <p>123 Legal Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@lawfirm.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-300">
            © {currentYear} Law Firm Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
