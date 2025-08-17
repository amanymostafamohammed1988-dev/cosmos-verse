import React from "react";

interface IconProps {
  className?: string;
}

// Service Icons
export const CriminalLawIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Criminal Law</title>
    <desc>
      Shield with scales representing criminal defense and legal protection
    </desc>
    <path d="M12 2l3.5 1.5v6.5c0 3.5-3.5 7-3.5 7s-3.5-3.5-3.5-7V3.5L12 2z" />
    <path d="M9 9h6" />
    <path d="M9 12h6" />
    <circle cx="12" cy="7" r="1" />
  </svg>
);

export const BusinessLawIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Business Law</title>
    <desc>
      Building with briefcase representing corporate and business legal services
    </desc>
    <path d="M3 21h18" />
    <path d="M5 21V8l8-4v17" />
    <path d="M19 21V8l-8-4" />
    <path d="M9 9h2v2H9z" />
    <path d="M13 9h2v2h-2z" />
    <path d="M9 13h2v2H9z" />
    <path d="M13 13h2v2h-2z" />
  </svg>
);

export const FamilyLawIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Family Law</title>
    <desc>Heart with figures representing family legal matters</desc>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="12" r="2" />
    <circle cx="12" cy="8" r="1" />
  </svg>
);

export const LitigationIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Civil Litigation</title>
    <desc>
      Courthouse with gavel representing civil litigation and court proceedings
    </desc>
    <path d="M3 21h18" />
    <path d="M6 21V3h12v18" />
    <path d="M6 3l6-2 6 2" />
    <path d="M10 8h4" />
    <path d="M10 12h4" />
    <path d="M10 16h4" />
    <circle cx="12" cy="5" r="1" />
  </svg>
);

// Values Icons
export const IntegrityIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Integrity</title>
    <desc>Hand on heart representing integrity and honest values</desc>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <path d="M12 7v6l4 2" />
  </svg>
);

export const ExcellenceIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Excellence</title>
    <desc>Star with crown representing excellence and high standards</desc>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    <path d="M12 2v4" />
    <path d="M8 8l2 2" />
    <path d="M16 8l-2 2" />
  </svg>
);

export const DedicationIcon: React.FC<IconProps> = ({
  className = "w-8 h-8",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Dedication</title>
    <desc>
      Target with arrow representing dedication and focused commitment
    </desc>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M22 12h-4" />
    <path d="M6 12H2" />
    <path d="M12 6V2" />
    <path d="M12 22v-4" />
  </svg>
);

export const MissionIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Mission</title>
    <desc>Compass representing mission and direction</desc>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const VisionIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Vision</title>
    <desc>Eye representing vision and foresight</desc>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ValuesIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Values</title>
    <desc>Scales of justice representing core values and principles</desc>
    <rect x="9" y="9" width="6" height="12" rx="1" />
    <path d="M3 3h3l3 9 3-9h3" />
    <path d="M6 12h12" />
    <path d="M12 3v6" />
  </svg>
);

// Contact Icons
export const PhoneIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Phone</title>
    <desc>Phone icon for contact information</desc>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Email</title>
    <desc>Email icon for contact information</desc>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Location</title>
    <desc>Map pin icon for location information</desc>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Hours</title>
    <desc>Clock icon for office hours</desc>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

// UI Icons
export const QuoteIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Quote</title>
    <desc>Quote marks for testimonials</desc>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 .522.35 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 .522.35 1 1 1z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Search</title>
    <desc>Search icon for FAQ search functionality</desc>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

// Timeline Icons
export const MilestoneIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Milestone</title>
    <desc>Flag icon representing timeline milestones</desc>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

// FAQ Category Icons
export const AllQuestionsIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>All Questions</title>
    <desc>Grid icon representing all FAQ categories</desc>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

export const ProcessIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Consultations & Procedures</title>
    <desc>Process flow icon for consultation procedures</desc>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
    <polyline points="7.5,19.79 7.5,14.6 3,12" />
    <polyline points="21,12 16.5,14.6 16.5,19.79" />
  </svg>
);

export const BillingIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Fees & Billing</title>
    <desc>Credit card icon for billing and payment information</desc>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const PrivacyIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Privacy & Confidentiality</title>
    <desc>Shield icon for privacy and confidentiality</desc>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Scheduling & Timelines</title>
    <desc>Calendar icon for scheduling and timeline information</desc>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Differentiator Icons
export const ExperienceIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Proven Experience</title>
    <desc>Award trophy icon representing proven experience</desc>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.05 18.75 14 20 14 20s1.95-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34C17.83 14.82 16.96 14.97 16 15c-1 0-1.83-.15-2 .34" />
    <path d="M18 6H6" />
    <rect x="6" y="14" width="12" height="8" rx="1" />
  </svg>
);

export const ResponsivenessIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>24/7 Responsiveness</title>
    <desc>24-hour clock icon representing round-the-clock availability</desc>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
  </svg>
);

export const ConfidentialityIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Complete Confidentiality</title>
    <desc>Lock icon representing complete confidentiality and security</desc>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const ResultsIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Proven Results</title>
    <desc>Chart trending upward representing proven results</desc>
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    <path d="M16 6l6 6-6 6" />
  </svg>
);

export const PersonalizedIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Personalized Service</title>
    <desc>User with heart icon representing personalized service</desc>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M17.5 8.5c.5-1 1.5-1.5 2.5-1s1.5 1.5 1 2.5-1.5 1.5-2.5 1-1.5-1.5-1-2.5z" />
  </svg>
);

export const TransparentIcon: React.FC<IconProps> = ({
  className = "w-12 h-12",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Transparent Pricing</title>
    <desc>Dollar sign with transparency icon representing clear pricing</desc>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    <circle cx="12" cy="12" r="10" strokeDasharray="5,5" />
  </svg>
);

// Social Media Icons
export const LinkedInIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>LinkedIn</title>
    <desc>LinkedIn social media icon</desc>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Facebook</title>
    <desc>Facebook social media icon</desc>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Instagram</title>
    <desc>Instagram social media icon</desc>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Twitter</title>
    <desc>Twitter social media icon</desc>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

// Accreditation Icons
export const BarAssociationIcon: React.FC<IconProps> = ({
  className = "max-w-full max-h-full",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Bar Association</title>
    <desc>Scales of justice representing bar association accreditation</desc>
    <path d="M9 6h6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M12 6v12" />
    <path d="M3 6h6l-3 8-3-8z" />
    <path d="M15 6h6l-3 8-3-8z" />
    <path d="M3 18h18" />
  </svg>
);

export const ISOIcon: React.FC<IconProps> = ({
  className = "max-w-full max-h-full",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>ISO Certification</title>
    <desc>Shield with checkmark representing ISO certification</desc>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export const LegalExcellenceIcon: React.FC<IconProps> = ({
  className = "max-w-full max-h-full",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Legal Excellence Award</title>
    <desc>Medal icon representing legal excellence recognition</desc>
    <circle cx="12" cy="8" r="6" />
    <path d="M12 14l-4 6h8l-4-6" />
    <circle cx="12" cy="8" r="2" />
    <path d="M8 8l-2-2" />
    <path d="M16 8l2-2" />
  </svg>
);

export const ChambersIcon: React.FC<IconProps> = ({
  className = "max-w-full max-h-full",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Chambers Rating</title>
    <desc>Star rating icon representing Chambers recognition</desc>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

// Icon mapping object for easy lookup
export const IconMap = {
  // Services
  "criminal-law": CriminalLawIcon,
  "business-law": BusinessLawIcon,
  "family-law": FamilyLawIcon,
  litigation: LitigationIcon,

  // Values
  integrity: IntegrityIcon,
  excellence: ExcellenceIcon,
  dedication: DedicationIcon,
  mission: MissionIcon,
  vision: VisionIcon,
  values: ValuesIcon,

  // Contact
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
  clock: ClockIcon,

  // UI
  quote: QuoteIcon,
  search: SearchIcon,

  // Timeline
  milestone: MilestoneIcon,

  // FAQ
  all: AllQuestionsIcon,
  process: ProcessIcon,
  billing: BillingIcon,
  privacy: PrivacyIcon,
  calendar: CalendarIcon,

  // Differentiators
  experience: ExperienceIcon,
  responsiveness: ResponsivenessIcon,
  confidentiality: ConfidentialityIcon,
  results: ResultsIcon,
  personalized: PersonalizedIcon,
  transparent: TransparentIcon,

  // Social
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,

  // Accreditations
  "bar-association": BarAssociationIcon,
  iso: ISOIcon,
  "legal-excellence": LegalExcellenceIcon,
  chambers: ChambersIcon,
};

// Helper function to get icon by path
export const getIconByPath = (iconPath: string, className?: string) => {
  const iconName = iconPath.split("/").pop()?.replace(".svg", "") || "";
  const IconComponent = IconMap[iconName as keyof typeof IconMap];

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  // Fallback for unknown icons
  return (
    <svg
      className={className || "w-6 h-6"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Icon</title>
      <desc>Placeholder icon</desc>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};
