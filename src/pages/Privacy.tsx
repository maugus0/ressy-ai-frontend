import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useTableOfContentsScroll } from "@/hooks/useTableOfContentsScroll";

const Privacy = () => {
  const tocContainerRef = useRef<HTMLDivElement>(null);
  useTableOfContentsScroll(tocContainerRef);

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "how-we-use-information", title: "3. How We Use Information" },
    {
      id: "how-we-disclose-information",
      title: "4. How We Disclose Information",
    },
    { id: "data-retention", title: "5. Data Retention" },
    { id: "data-security", title: "6. Data Security" },
    { id: "your-rights", title: "7. Your Rights" },
    { id: "international-transfers", title: "8. International Transfers" },
    { id: "cookies-tracking", title: "9. Cookies & Tracking Technologies" },
    { id: "third-party-services", title: "10. Third-Party Services & Links" },
    { id: "childrens-privacy", title: "11. Children's Privacy" },
    { id: "ccpa-cpra", title: "12. CCPA / CPRA (California Residents)" },
    { id: "canadian-privacy", title: "13. Canadian Privacy (PIPEDA)" },
    {
      id: "customer-data-responsibilities",
      title: "14. Customer Data Responsibilities",
    },
    { id: "changes-to-policy", title: "15. Changes to This Policy" },
    { id: "contact-information", title: "16. Contact Information" },
    { id: "data-protection-officer", title: "17. Data Protection Officer" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 border-b border-gray-200 pb-8 lg:pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl lg:whitespace-nowrap font-bold text-gray-900 mb-6 lg:mb-8 leading-tight tracking-tight">
              Ressy Technologies Inc. – Privacy Policy
            </h1>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600 space-y-2">
              <p>
                <strong>Effective Date:</strong> 27 November 2025
              </p>
              <p>
                <strong>Last Updated:</strong> 27 November 2025
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div
            ref={tocContainerRef}
            className="mb-10 sm:mb-12 lg:mb-16 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Table of Contents
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm sm:text-base text-purple-600 hover:text-purple-700 hover:underline transition-colors duration-200 py-1"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section
              id="introduction"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                1. Introduction
              </h2>
              <p className="mb-4">
                This Privacy Policy describes how Ressy Technologies Inc.
                ("Ressy.ai," "we," "us," or "our") collects, uses, discloses,
                retains, and protects personal information in connection with
                our AI-powered virtual receptionist, telephony, and business
                automation services, including our website, applications, APIs,
                dashboards, call-handling tools, and all related products and
                services (collectively, the "Service").
              </p>
              <p className="mb-4">
                By accessing or using the Service, you acknowledge that you have
                read and understood this Privacy Policy and agree to its terms.
                If you do not agree, you must not access or use the Service.
              </p>
              <p>
                This Privacy Policy forms part of our Terms of Service and
                applies to all users of the Service, including businesses and
                their authorized personnel.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="information-we-collect"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information in the following categories:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.1 Information You Provide to Us
              </h3>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Account Information
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Business name and legal entity details</li>
                <li>Contact name, title, and role</li>
                <li>Email address, phone number, and business address</li>
                <li>Industry and business classification</li>
                <li>Login credentials (hashed passwords only)</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Billing Information
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  Payment card details (processed exclusively by Stripe; not
                  stored by us)
                </li>
                <li>Billing address and tax information</li>
                <li>Transaction and invoicing history</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Business Configuration & Operational Data
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  Business hours, holiday schedules, menus, services, pricing
                </li>
                <li>FAQs, policies, custom scripts, and AI configurations</li>
                <li>Staff information for call routing</li>
                <li>Reservation and appointment rules</li>
                <li>Multi-location information</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Support Communications
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Interactions with our support team</li>
                <li>Feedback and survey responses</li>
                <li>Troubleshooting information</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.2 Information Collected Automatically
              </h3>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Call Data & Telephony Information
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Caller ID and phone numbers</li>
                <li>Call recordings, audio files, transcripts, summaries</li>
                <li>Call duration, timestamps, call outcomes</li>
                <li>Multi-location call routing history</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Usage Information
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Feature usage metrics</li>
                <li>Portal and dashboard activity</li>
                <li>Session logs</li>
                <li>Interaction patterns for service optimization</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Device & Technical Information
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>IP addresses</li>
                <li>Browser and device identifiers</li>
                <li>Operating system</li>
                <li>Language, time zone, and approximate location (via IP)</li>
                <li>Referring pages and interaction paths</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Cookies & Tracking Technologies
              </h4>
              <p className="mb-4">
                We use cookies and similar technologies for authentication,
                analytics, and performance. See Section 9.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.3 Information Obtained Through Integrations
              </h3>
              <p className="mb-4">
                If you connect a third-party service to Ressy.ai, we may process
                information made available via the integration, including:
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                POS Systems (e.g., Toast, Square, Clover, Lightspeed)
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Menu data, pricing, item availability</li>
                <li>Business hours and capacity information</li>
                <li>Reservation data</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Calendar Systems (e.g., Google Calendar, Outlook, Calendly)
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Staff schedules and availability</li>
                <li>Calendar events</li>
                <li>Appointment confirmations</li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                CRM Systems (e.g., HubSpot, Salesforce, Zoho)
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Customer contact details</li>
                <li>Lead and opportunity data</li>
                <li>Customer interaction history</li>
                <li>Notes and custom fields</li>
              </ul>

              <p className="mb-4">
                <strong>
                  You control what data is shared via your integration settings.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.4 Information About Your Customers ("End Users")
              </h3>
              <p className="mb-4">
                We process information about your callers and customers on your
                behalf, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Names, contact information, phone numbers</li>
                <li>Reservation or appointment information</li>
                <li>Customer inquiries and preferences</li>
                <li>
                  Any information disclosed during calls handled by the Service
                </li>
              </ul>
              <p>
                <strong>
                  You are the data controller; we act solely as a data
                  processor.
                </strong>
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="how-we-use-information"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                3. How We Use Information
              </h2>
              <p className="mb-4">
                We use personal information strictly for the following purposes:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 To Provide and Operate the Service
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Answering and routing calls</li>
                <li>
                  Booking, cancelling, and modifying reservations/appointments
                </li>
                <li>Responding to FAQs and business-specific inquiries</li>
                <li>Generating transcripts, summaries, and metadata</li>
                <li>Providing multi-location call routing</li>
                <li>Sending notifications and confirmations</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 To Manage Your Account
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Account creation and authentication</li>
                <li>Processing payments and billing</li>
                <li>Sending service-related communications</li>
                <li>Providing technical and customer support</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.3 To Improve and Develop the Service
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Monitoring usage and performance</li>
                <li>Enhancing AI accuracy and reliability</li>
                <li>Performing quality assurance</li>
                <li>Identifying trends and improving user experience</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r">
                <p className="font-semibold text-gray-900 mb-2">Important:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>
                      We do not use customer data to train public AI models.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      We do not sell, license, or share customer data for any AI
                      model training outside of delivering the Service.
                    </strong>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.4 Security and Protection
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Detecting and preventing fraud or unauthorized access</li>
                <li>
                  Protecting the rights, safety, and integrity of the Service
                </li>
                <li>Investigating suspicious activity</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.5 Communications & Marketing (with consent)
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Sending product updates and educational content</li>
                <li>Providing promotional offers</li>
              </ul>
              <p className="mb-4">
                <strong>You may opt out at any time.</strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.6 Legal Compliance
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Responding to lawful requests</li>
                <li>Complying with tax, audit, and regulatory requirements</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section
              id="how-we-disclose-information"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                4. How We Disclose Information
              </h2>
              <p className="mb-4">
                <strong>We do not sell personal information.</strong> We may
                disclose information only as follows:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 Service Providers (Under Contractual Obligation)
              </h3>
              <p className="mb-4">
                We work with vetted third-party processors, including:
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Cloud Infrastructure
              </h4>
              <p className="mb-4">
                Amazon Web Services (AWS), hosted in North America
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Telephony Providers
              </h4>
              <p className="mb-4">Twilio, Telnyx, or comparable providers</p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Payment Processing
              </h4>
              <p className="mb-4">Stripe (PCI-DSS compliant)</p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                AI Processing Vendors
              </h4>
              <p className="mb-4">
                Speech-to-text, text-to-speech, and LLM providers used solely to
                deliver the Service
              </p>

              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">
                Analytics and Monitoring
              </h4>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Error logging</li>
                <li>Performance monitoring</li>
              </ul>

              <p className="mb-4">
                All providers are bound by confidentiality and data protection
                obligations.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Business Transfers
              </h3>
              <p className="mb-4">
                In the event of a merger, acquisition, investment, financing, or
                sale of assets, information may be transferred as part of the
                transaction.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Legal, Compliance, and Security
              </h3>
              <p className="mb-4">
                We may disclose information if required to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Comply with law or legal process</li>
                <li>Respond to valid governmental requests</li>
                <li>Protect our rights, users, or the public</li>
                <li>Enforce our Terms of Service</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.4 With Consent
              </h3>
              <p className="mb-4">
                We may disclose information when you explicitly authorize us to
                do so.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.5 Aggregated or De-Identified Information
              </h3>
              <p className="mb-4">
                We may share anonymized insights that cannot identify any
                individual or business.
              </p>
            </section>

            {/* Section 5 */}
            <section
              id="data-retention"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                5. Data Retention
              </h2>
              <p className="mb-4">
                We retain information only as long as necessary for the purposes
                described.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Standard Retention Periods
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  Call recordings/transcripts: 12 months (unless you request
                  earlier deletion)
                </li>
                <li>
                  Account & business information: For the duration of the
                  account + 7 years
                </li>
                <li>Billing records: 7 years (legal requirement)</li>
                <li>Analytics & logs: Up to 24 months</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Deletion Requests
              </h3>
              <p className="mb-4">
                <strong>You may request deletion at any time.</strong>
              </p>
              <p>
                <strong>
                  We may retain limited information if required by law or to
                  resolve disputes.
                </strong>
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="data-security"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                6. Data Security
              </h2>
              <p className="mb-4">
                We implement administrative, technical, and physical safeguards,
                including:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                Technical Measures
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Encryption in transit (TLS/SSL)</li>
                <li>Encryption at rest (AES-256)</li>
                <li>Secure AWS infrastructure</li>
                <li>Network monitoring and intrusion detection</li>
                <li>Automated log monitoring</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                Access Controls
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Role-based access control (RBAC)</li>
                <li>MFA for internal systems</li>
                <li>Principle of least privilege</li>
                <li>Regular access audits</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                Organizational Measures
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Security training for personnel</li>
                <li>Confidentiality agreements</li>
                <li>Incident response and breach procedures</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                Payment Security
              </h3>
              <p>
                All payment information is processed by Stripe.{" "}
                <strong>Ressy.ai does not store full card numbers.</strong>
              </p>
            </section>

            {/* Section 7 */}
            <section
              id="your-rights"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Restrict or object to certain processing</li>
                <li>Export your data</li>
              </ul>
              <p>
                Requests may be submitted to{" "}
                <a
                  href="mailto:info@ressy.ai"
                  className="text-purple-600 hover:underline font-medium"
                >
                  info@ressy.ai
                </a>
                .
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="international-transfers"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                8. International Transfers
              </h2>
              <p>We store data primarily in Canada and the United States.</p>
              <p className="mt-4">
                Use of the Service from other regions may involve cross-border
                transfers consistent with applicable laws.
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="cookies-tracking"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                9. Cookies & Tracking Technologies
              </h2>
              <p className="mb-4">We use:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Essential cookies (required for operation)</li>
                <li>Analytics cookies</li>
                <li>Preference cookies</li>
                <li>Marketing cookies (with consent)</li>
              </ul>
              <p>
                You may adjust your preferences via browser settings or our
                cookie banner.
              </p>
            </section>

            {/* Section 10 */}
            <section
              id="third-party-services"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                10. Third-Party Services & Links
              </h2>
              <p>
                Our Service may link to third-party websites or integrations. We
                are not responsible for their privacy practices.
              </p>
            </section>

            {/* Section 11 */}
            <section
              id="childrens-privacy"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                11. Children's Privacy
              </h2>
              <p>
                The Service is not intended for individuals under 18. We do not
                knowingly collect children's information.
              </p>
            </section>

            {/* Section 12 */}
            <section
              id="ccpa-cpra"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                12. CCPA / CPRA (California Residents)
              </h2>
              <p className="mb-4">California residents have rights to:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Know categories of personal information collected</li>
                <li>Request deletion</li>
                <li>Correct information</li>
                <li>
                  Opt-out of sale/sharing <strong>(we do not sell data)</strong>
                </li>
                <li>Non-discrimination</li>
              </ul>
              <p>
                Requests may be sent to{" "}
                <a
                  href="mailto:info@ressy.ai"
                  className="text-purple-600 hover:underline font-medium"
                >
                  info@ressy.ai
                </a>
                .
              </p>
            </section>

            {/* Section 13 */}
            <section
              id="canadian-privacy"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                13. Canadian Privacy (PIPEDA)
              </h2>
              <p className="mb-4">
                As a Canadian company, we comply with PIPEDA, including
                requirements relating to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Consent</li>
                <li>Accountability</li>
                <li>Safeguards</li>
                <li>Access rights</li>
                <li>Complaint rights</li>
              </ul>
              <p>
                Complaints may be submitted to the Office of the Privacy
                Commissioner of Canada.
              </p>
            </section>

            {/* Section 14 */}
            <section
              id="customer-data-responsibilities"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                14. Customer Data Responsibilities
              </h2>
              <p className="mb-4">You are responsible for:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Call recording consent compliance</li>
                <li>Providing notice to your customers</li>
                <li>Maintaining a lawful basis for processing</li>
                <li>Responding to customer data subject requests</li>
                <li>
                  Configuring your call flows in compliance with local laws
                </li>
              </ul>
              <p>
                We provide tools to assist but{" "}
                <strong>
                  legal compliance is ultimately your responsibility.
                </strong>
              </p>
            </section>

            {/* Section 15 */}
            <section
              id="changes-to-policy"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                15. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. Material changes
                will be communicated via:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Email notification</li>
                <li>Dashboard notice</li>
                <li>Updated "Last Updated" date</li>
              </ul>
              <p>Continued use of the Service constitutes acceptance.</p>
            </section>

            {/* Section 16 */}
            <section
              id="contact-information"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                16. Contact Information
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 mb-2">
                  Ressy Technologies Inc.
                </p>
                <p className="text-gray-700 mb-1">1033 Nelson Street</p>
                <p className="text-gray-700 mb-1">Vancouver, BC V6E 0E5</p>
                <p className="text-gray-700 mb-1">Canada</p>
                <p className="text-gray-700 mb-1">
                  Email:{" "}
                  <a
                    href="mailto:info@ressy.ai"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    info@ressy.ai
                  </a>
                </p>
                <p className="text-gray-700 mb-1">
                  Phone:{" "}
                  <a
                    href="tel:+12367771255"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    +1 (236) 777-1255
                  </a>
                </p>
                <p className="text-gray-700">
                  Website:{" "}
                  <a
                    href="https://www.ressy.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    www.ressy.ai
                  </a>
                </p>
              </div>
              <p>We will respond to privacy inquiries within 30 days.</p>
            </section>

            {/* Section 17 */}
            <section
              id="data-protection-officer"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                17. Data Protection Officer
              </h2>
              <p>
                While we do not currently appoint a formal DPO, privacy matters
                should be addressed to:{" "}
                <a
                  href="mailto:info@ressy.ai"
                  className="text-purple-600 hover:underline font-medium"
                >
                  info@ressy.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
