import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useTableOfContentsScroll } from "@/hooks/useTableOfContentsScroll";

const Terms = () => {
  const tocContainerRef = useRef<HTMLDivElement>(null);
  useTableOfContentsScroll(tocContainerRef);

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "eligibility", title: "2. Eligibility" },
    { id: "account-registration", title: "3. Account Registration & Security" },
    { id: "description-of-service", title: "4. Description of the Service" },
    { id: "prohibited-uses", title: "5. Prohibited Uses" },
    { id: "billing-pricing", title: "6. Billing, Pricing & Payment" },
    { id: "term-cancellation", title: "7. Term, Cancellation & Termination" },
    { id: "intellectual-property", title: "8. Intellectual Property" },
    {
      id: "data-privacy",
      title: "9. Data Privacy & Customer Responsibilities",
    },
    { id: "ai-limitations", title: "10. AI Limitations & Disclaimers" },
    { id: "third-party-services", title: "11. Third-Party Services" },
    { id: "warranties-disclaimers", title: "12. Warranties & Disclaimers" },
    { id: "limitation-of-liability", title: "13. Limitation of Liability" },
    { id: "indemnification", title: "14. Indemnification" },
    { id: "service-modifications", title: "15. Service Modifications" },
    { id: "governing-law", title: "16. Governing Law & Dispute Resolution" },
    { id: "general-provisions", title: "17. General Provisions" },
    { id: "contact-information", title: "18. Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 border-b border-gray-200 pb-8 lg:pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl xl:whitespace-nowrap font-bold text-gray-900 mb-6 lg:mb-8 leading-tight tracking-tight">
              Ressy Technologies Inc. – Terms of Service
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
                These Terms of Service ("Terms") govern your access to and use
                of the AI-powered virtual receptionist, call-handling,
                automation tools, and related products and services offered by
                Ressy Technologies Inc. ("Ressy.ai," "we," "us" or "our"),
                including our website, dashboard, APIs, apps, integrations, and
                all associated technologies (collectively, the "Service").
              </p>
              <p className="mb-4">
                By accessing or using the Service, you acknowledge that you have
                read, understood, and agree to be legally bound by these Terms
                and our Privacy Policy, which is incorporated by reference. If
                you do not agree, you must not access or use the Service.
              </p>
              <p>
                These Terms form a binding agreement between Ressy.ai, a British
                Columbia corporation, and the individual or business entity
                using the Service ("Customer," "you," or "your"). If you are
                accessing the Service on behalf of an organization, you
                represent that you are authorized to bind that organization.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="eligibility"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                2. Eligibility
              </h2>
              <p className="mb-4">To use the Service, you must:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Be at least 18 years of age;</li>
                <li>Have legal capacity to enter into a binding contract;</li>
                <li>
                  Use the Service for business (non-consumer) purposes only;
                </li>
                <li>
                  Be located in a supported region (currently: Canada, United
                  States, Australia).
                </li>
              </ul>
              <p>
                <strong>
                  The Service is not available to residents of the EU or UK at
                  this time.
                </strong>
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="account-registration"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                3. Account Registration & Security
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 Registration
              </h3>
              <p className="mb-4">
                To access the Service, you must create an account and provide
                accurate, complete, and current information, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Business name and details</li>
                <li>Contact information</li>
                <li>Industry classification</li>
                <li>Billing details</li>
                <li>Integration credentials (if applicable)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 Responsibility for Your Account
              </h3>
              <p className="mb-4">You are responsible for:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  Maintaining the confidentiality of your login credentials
                </li>
                <li>Restricting access to your account</li>
                <li>All activities occurring under your account</li>
              </ul>
              <p className="mb-4">
                <strong>
                  Notify us immediately if you suspect unauthorized access.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.3 Suspension
              </h3>
              <p className="mb-4">
                We may suspend or terminate your account immediately if we
                determine that:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>You violated these Terms</li>
                <li>You used the Service fraudulently or illegally</li>
                <li>You pose a security or operational risk</li>
                <li>Payments are overdue</li>
                <li>Continued service would violate applicable law</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section
              id="description-of-service"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                4. Description of the Service
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 Core Features
              </h3>
              <p className="mb-4">The Service may include:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>AI-driven inbound call handling</li>
                <li>
                  Reservation and appointment booking, modification, and
                  cancellation
                </li>
                <li>Menu/service information responses</li>
                <li>FAQ automation and inquiry handling</li>
                <li>Lead capture and qualification</li>
                <li>Call recording, transcripts, and AI-generated summaries</li>
                <li>Multi-location routing</li>
                <li>Telephony integration</li>
                <li>Business analytics and reporting</li>
                <li>Optional outbound calling (limited use cases)</li>
                <li>Multi-language support (as launched)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Availability
              </h3>
              <p className="mb-4">
                We strive for high uptime and reliability but do not guarantee
                uninterrupted operation. Unless a separate Service Level
                Agreement (SLA) is signed, the Service is provided "as
                available."
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Integrations
              </h3>
              <p className="mb-4">
                You may connect third-party systems such as POS, CRM, and
                calendars. You are responsible for:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Maintaining valid third-party accounts</li>
                <li>Managing your integration settings</li>
                <li>Ensuring compatibility as third-party APIs evolve</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section
              id="prohibited-uses"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                5. Prohibited Uses
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Prohibited Industries
              </h3>
              <p className="mb-4">
                You may not use the Service if you operate in:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Adult or sexual services</li>
                <li>Illegal substances or unlicensed pharmaceuticals</li>
                <li>Gambling (unless properly licensed)</li>
                <li>Extremist, hate-group, or discriminatory activities</li>
                <li>Financial fraud, pyramid schemes, or predatory lending</li>
                <li>Any illegal or harmful business activities</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Prohibited Conduct
              </h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Violate any applicable law or regulation</li>
                <li>Record calls illegally or without necessary consent</li>
                <li>Submit harmful or malicious content</li>
                <li>Attempt unauthorized access to the Service</li>
                <li>Reverse engineer or modify our systems</li>
                <li>Use the Service to build a competing product</li>
                <li>Impersonate any person or entity</li>
                <li>Use the Service as an emergency system (e.g., 911)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.3 Emergency Restrictions
              </h3>
              <p>
                <strong>
                  The Service is not designed or permitted to handle medical,
                  police, or life-threatening emergencies.
                </strong>
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="billing-pricing"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                6. Billing, Pricing & Payment
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.1 Subscription & Usage Fees
              </h3>
              <p className="mb-4">Fees may include:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Monthly subscription fees billed in advance</li>
                <li>Per-minute usage fees billed in arrears</li>
                <li>Add-on feature fees</li>
                <li>Multi-location fees</li>
              </ul>
              <p className="mb-4">
                Current pricing is displayed at signup and may change with
                notice.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.2 Free Trials
              </h3>
              <p className="mb-4">
                Free trials (e.g., 300 minutes) may be offered at Ressy.ai's
                discretion.{" "}
                <strong>Trials are limited to one per business.</strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.3 Payment
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Payments are processed through Stripe.</li>
                <li>
                  <strong>
                    You authorize recurring charges to your payment method.
                  </strong>
                </li>
                <li>
                  <strong>
                    Fees are non-refundable unless required by law.
                  </strong>
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.4 Nonpayment
              </h3>
              <p className="mb-4">Late or failed payments may result in:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Service suspension</li>
                <li>Termination</li>
                <li>Collections procedures</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.5 Taxes
              </h3>
              <p className="mb-4">
                <strong>
                  You are responsible for all applicable taxes (HST, GST, VAT,
                  etc.).
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                6.6 Price Changes
              </h3>
              <p>
                We may modify pricing with 30 days' notice.{" "}
                <strong>Continued use constitutes acceptance.</strong>
              </p>
            </section>

            {/* Section 7 */}
            <section
              id="term-cancellation"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                7. Term, Cancellation & Termination
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.1 Term
              </h3>
              <p className="mb-4">
                <strong>Subscriptions renew monthly until cancelled.</strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.2 Cancellation
              </h3>
              <p className="mb-4">
                <strong>You may cancel at any time.</strong> Cancellation takes
                effect at the end of the current billing cycle.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.3 Termination by Ressy.ai
              </h3>
              <p className="mb-4">We may terminate immediately for:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Material breach</li>
                <li>Fraudulent or illegal use</li>
                <li>Payment failure</li>
                <li>Security or operational threat</li>
                <li>Regulatory requirements</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                7.4 Data After Termination
              </h3>
              <p className="mb-4">Upon termination:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Access is immediately disabled</li>
                <li>
                  <strong>Fees accrued remain payable</strong>
                </li>
                <li>Data is deleted per our retention schedule</li>
                <li>Certain provisions survive (IP, liability, indemnity)</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section
              id="intellectual-property"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                8. Intellectual Property
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.1 Ressy.ai IP
              </h3>
              <p className="mb-4">Ressy.ai owns all rights in:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Software, code, models, and algorithms</li>
                <li>Documentation and training materials</li>
                <li>UI/UX layouts</li>
                <li>Logos, trademarks, and branding</li>
                <li>Call-handling workflows and automation tools</li>
              </ul>
              <p className="mb-4">
                <strong>
                  You receive a limited, non-transferable, revocable license to
                  use the Service.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.2 Customer Data
              </h3>
              <p className="mb-4">You retain ownership of all:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Business content (menus, pricing, scripts)</li>
                <li>Customer data and call content</li>
                <li>Call recordings, transcripts, and summaries</li>
              </ul>
              <p className="mb-4">
                <strong>
                  You grant Ressy.ai a license to use this data solely to
                  provide, maintain, and improve the Service.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.3 Call Content
              </h3>
              <p className="mb-4">
                You own the underlying content of calls. Ressy.ai may:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Store recordings/transcripts securely</li>
                <li>Use anonymized data for product improvement</li>
                <li>Retain data per legal requirements</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                8.4 Feedback
              </h3>
              <p>
                <strong>
                  Feedback submitted to Ressy.ai may be used without restriction
                  or compensation.
                </strong>
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="data-privacy"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                9. Data Privacy & Customer Responsibilities
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                9.1 Privacy Policy
              </h3>
              <p className="mb-4">
                Use of the Service is governed by the Ressy.ai Privacy Policy,
                incorporated by reference.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                9.2 Call Consent Laws
              </h3>
              <p className="mb-4">
                <strong>You are solely responsible for complying with:</strong>
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>One-party and two-party recording consent laws</li>
                <li>Telemarketing and anti-spam laws</li>
                <li>Disclosure obligations required by your jurisdiction</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                9.3 Sensitive Data Prohibited
              </h3>
              <p className="mb-4">
                <strong>The Service must not be used to handle:</strong>
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>PHI under HIPAA</li>
                <li>Payment card information</li>
                <li>Legal privileged information</li>
                <li>Children's data (under 18)</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                9.4 Your Obligations
              </h3>
              <p className="mb-4">You must:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Keep business info updated (hours, prices, policies)</li>
                <li>Maintain alternative emergency communication channels</li>
                <li>Review AI outputs and transcripts for accuracy</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section
              id="ai-limitations"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                10. AI Limitations & Disclaimers
              </h2>
              <p className="mb-4">You acknowledge that:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  <strong>
                    AI may make mistakes, misunderstand callers, or provide
                    inaccurate information
                  </strong>
                </li>
                <li>AI accuracy depends on your configuration</li>
                <li>
                  AI is not a human agent and cannot interpret emotional nuance
                  or emergency requests
                </li>
                <li>
                  <strong>
                    You remain responsible for monitoring outputs and correcting
                    misconfigurations.
                  </strong>
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section
              id="third-party-services"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                11. Third-Party Services
              </h2>
              <p className="mb-4">
                We integrate with third-party providers (e.g., Twilio, Stripe,
                POS/CRM systems).
              </p>
              <p className="mb-4">
                <strong>We are not liable for:</strong>
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Outages or errors in third-party systems</li>
                <li>Changes to third-party APIs or pricing</li>
                <li>Data practices of third-party providers</li>
              </ul>
              <p>
                Your use of third-party services is governed by their respective
                terms.
              </p>
            </section>

            {/* Section 12 */}
            <section
              id="warranties-disclaimers"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                12. Warranties & Disclaimers
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                12.1 Limited Warranty
              </h3>
              <p className="mb-4">
                We warrant that the Service will perform materially in
                accordance with our documentation.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                12.2 Disclaimer (IMPORTANT)
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r">
                <p className="font-semibold text-gray-900 mb-2">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND.
                </p>
                <p className="mb-2 font-semibold text-gray-900">
                  WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>MERCHANTABILITY</strong>
                  </li>
                  <li>
                    <strong>FITNESS FOR A PARTICULAR PURPOSE</strong>
                  </li>
                  <li>
                    <strong>NON-INFRINGEMENT</strong>
                  </li>
                  <li>
                    <strong>ACCURACY OR RELIABILITY</strong>
                  </li>
                  <li>
                    <strong>UNINTERRUPTED OPERATION</strong>
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  Some jurisdictions restrict disclaimers—those laws may apply.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section
              id="limitation-of-liability"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                13. Limitation of Liability
              </h2>
              <p className="mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                13.1 Aggregate Cap
              </h3>
              <p className="mb-4">
                <strong>
                  Ressy.ai's total liability is limited to the fees paid by you
                  in the three (3) months preceding the event giving rise to the
                  claim.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                13.2 Excluded Damages
              </h3>
              <p className="mb-4">Ressy.ai is not liable for:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Lost profits, revenue, or business</li>
                <li>Missed bookings or messages</li>
                <li>Loss of data</li>
                <li>Business interruption</li>
                <li>Reputational harm</li>
                <li>
                  Indirect, incidental, special, consequential, or punitive
                  damages
                </li>
              </ul>
            </section>

            {/* Section 14 */}
            <section
              id="indemnification"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                14. Indemnification
              </h2>
              <p className="mb-4">
                <strong>
                  You agree to indemnify and defend Ressy.ai from claims arising
                  from:
                </strong>
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Your use or misuse of the Service</li>
                <li>Your violation of laws</li>
                <li>Your violation of these Terms</li>
                <li>Your failure to obtain call recording consent</li>
                <li>Your customer disputes</li>
                <li>Misconfigured automations or business info</li>
              </ul>
              <p>
                <strong>This obligation survives termination.</strong>
              </p>
            </section>

            {/* Section 15 */}
            <section
              id="service-modifications"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                15. Service Modifications
              </h2>
              <p className="mb-4">We may:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Change or discontinue any feature</li>
                <li>Modify pricing</li>
                <li>Update documentation</li>
                <li>Perform maintenance</li>
                <li>Release new versions of the Service</li>
              </ul>
              <p>
                <strong>
                  Material changes will be communicated in advance when
                  feasible.
                </strong>
              </p>
            </section>

            {/* Section 16 */}
            <section
              id="governing-law"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                16. Governing Law & Dispute Resolution
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                16.1 Governing Law
              </h3>
              <p className="mb-4">
                <strong>
                  These Terms are governed by the laws of British Columbia,
                  Canada.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                16.2 Venue
              </h3>
              <p className="mb-4">
                <strong>
                  All disputes must be brought in the courts of Vancouver,
                  British Columbia.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                16.3 Informal Resolution
              </h3>
              <p className="mb-4">
                <strong>
                  You agree to attempt informal resolution by contacting
                  info@ressy.ai before initiating legal action.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                16.4 No Class Actions
              </h3>
              <p>
                <strong>
                  You waive any right to participate in class or collective
                  actions.
                </strong>
              </p>
            </section>

            {/* Section 17 */}
            <section
              id="general-provisions"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                17. General Provisions
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  <strong>Entire Agreement:</strong> These Terms + Privacy
                  Policy form the complete agreement.
                </li>
                <li>
                  <strong>Severability:</strong> Invalid provisions are
                  interpreted narrowly; the remainder survives.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms
                  without permission. We may assign freely.
                </li>
                <li>
                  <strong>Notices:</strong> Notices are sent to your email on
                  file.
                </li>
                <li>
                  <strong>Force Majeure:</strong> We are not liable for events
                  beyond our control.
                </li>
                <li>
                  <strong>Independent Parties:</strong> No partnership,
                  employment, or agency is created.
                </li>
              </ul>
            </section>

            {/* Section 18 */}
            <section
              id="contact-information"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                18. Contact Information
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
