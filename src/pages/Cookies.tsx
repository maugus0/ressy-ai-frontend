import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useTableOfContentsScroll } from "@/hooks/useTableOfContentsScroll";

const Cookies = () => {
  const tocContainerRef = useRef<HTMLDivElement>(null);
  useTableOfContentsScroll(tocContainerRef);

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "what-are-cookies", title: "2. What Are Cookies?" },
    { id: "types-of-cookies", title: "3. Types of Cookies We Use" },
    { id: "why-we-use-cookies", title: "4. Why We Use Cookies" },
    { id: "your-choices", title: "5. Your Choices and Control" },
    { id: "retention", title: "6. Retention" },
    { id: "third-party-providers", title: "7. Third-Party Providers" },
    { id: "changes-to-policy", title: "8. Changes to This Cookie Policy" },
    { id: "contact-us", title: "9. Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 border-b border-gray-200 pb-8 lg:pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl xl:whitespace-nowrap font-bold text-gray-900 mb-6 lg:mb-8 leading-tight tracking-tight">
              Ressy Technologies Inc. – Cookie Policy
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
                This Cookie Policy explains how Ressy Technologies Inc.
                ("Ressy.ai," "we," "us," or "our") uses cookies and similar
                tracking technologies on our website, dashboard, applications,
                and online services (collectively, the "Service").
              </p>
              <p className="mb-4">
                This policy should be read together with our Privacy Policy and
                Terms of Service.
              </p>
              <p>
                By using the Service, you agree to our use of cookies as
                described in this Cookie Policy. If you do not agree, you may
                disable cookies through your browser settings as described
                below.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="what-are-cookies"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                2. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files stored on your device when you
                visit a website. Cookies serve many purposes, such as enabling
                core functionality, remembering preferences, gathering
                analytics, and supporting advertising.
              </p>
              <p className="mb-4">
                Cookies set by Ressy.ai are called{" "}
                <strong>first-party cookies</strong>. Cookies set by third
                parties (such as analytics or telephony vendors) are called{" "}
                <strong>third-party cookies</strong>.
              </p>
              <p className="mb-4">
                We may also use related technologies including:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Web beacons</li>
                <li>Pixels</li>
                <li>Tracking scripts</li>
                <li>Local storage</li>
                <li>Session storage</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section
              id="types-of-cookies"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                3. Types of Cookies We Use
              </h2>
              <p className="mb-4">
                We use the following categories of cookies:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.1 Essential (Strictly Necessary) Cookies
              </h3>
              <p className="mb-4">
                <strong>
                  These cookies are required for the Service to function and
                  cannot be disabled.
                </strong>
              </p>
              <p className="mb-4">They enable:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Account login and authentication</li>
                <li>Session management</li>
                <li>Load balancing</li>
                <li>Security and fraud prevention</li>
                <li>Core functionality of the dashboard</li>
              </ul>
              <p className="mb-4">Examples:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Authentication tokens</li>
                <li>Session identifiers</li>
                <li>Security cookies</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.2 Performance & Analytics Cookies
              </h3>
              <p className="mb-4">
                These cookies help us understand how users interact with the
                Service so we can improve performance and features.
              </p>
              <p className="mb-4">They collect:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Page views and navigation patterns</li>
                <li>Feature usage metrics</li>
                <li>Error logs and diagnostics</li>
                <li>Call analytics (non-identifiable)</li>
                <li>Aggregated usage trends</li>
              </ul>
              <p className="mb-4">
                We use trusted providers (e.g., analytics platforms, AWS
                monitoring tools).
              </p>
              <p>
                <strong>
                  All analytics data is aggregated and anonymized where
                  possible.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.3 Functionality Cookies
              </h3>
              <p className="mb-4">
                These cookies remember choices you make to customize your
                experience, such as:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Saved preferences</li>
                <li>Language settings</li>
                <li>Dashboard configuration</li>
                <li>Previously used locations or features</li>
              </ul>
              <p>
                <strong>
                  Disabling these cookies may reduce functionality.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.4 Advertising & Marketing Cookies
              </h3>
              <p className="mb-4">We may use marketing cookies to:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Measure conversions</li>
                <li>Attribute traffic sources</li>
                <li>Optimize marketing campaigns</li>
                <li>Provide anonymized audience insights</li>
              </ul>
              <p className="mb-4">
                <strong>
                  We do not sell personal data or allow cross-context behavioral
                  advertising.
                </strong>
              </p>
              <p>
                Marketing cookies operate only with your consent (where legally
                required).
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                3.5 Third-Party Cookies
              </h3>
              <p className="mb-4">
                Third-party cookies may be placed when you:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Use integrations (POS, CRM, calendar platforms)</li>
                <li>Visit embedded content</li>
                <li>Interact with our support tools</li>
                <li>Access our hosted documentation</li>
              </ul>
              <p>
                <strong>
                  Third-party vendors govern their own cookie usage via their
                  own policies.
                </strong>
              </p>
            </section>

            {/* Section 4 */}
            <section
              id="why-we-use-cookies"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                4. Why We Use Cookies
              </h2>
              <p className="mb-4">We use cookies to:</p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 Operate and secure the Service
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Authenticate sessions</li>
                <li>Prevent fraudulent activity</li>
                <li>Maintain stability and performance</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Understand and improve usage
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Identify customer needs</li>
                <li>Monitor system load</li>
                <li>Improve AI performance and call flows</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Personalize user experience
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Save preferences</li>
                <li>Simplify login</li>
                <li>Optimize dashboard functionality</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.4 Support marketing and growth
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Track conversions</li>
                <li>Measure landing page performance</li>
                <li>Evaluate campaign effectiveness</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section
              id="your-choices"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                5. Your Choices and Control
              </h2>
              <p className="mb-4">You can manage cookies in several ways:</p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.1 Browser Settings
              </h3>
              <p className="mb-4">Most browsers allow you to:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Reject cookies</li>
                <li>Delete existing cookies</li>
                <li>Block third-party cookies</li>
                <li>Receive alerts when cookies are set</li>
              </ul>
              <p className="mb-4">Instructions:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Firefox: Options → Privacy & Security</li>
                <li>Edge: Settings → Cookies & site permissions</li>
              </ul>
              <p>
                <strong>
                  Blocking essential cookies may break the Service.
                </strong>
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.2 Cookie Banner
              </h3>
              <p className="mb-4">
                Where required, you may accept or reject non-essential cookies
                through our cookie consent banner.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6">
                5.3 Opt-Out Tools
              </h3>
              <p>
                Some analytics and marketing providers offer opt-out tools, such
                as browser extensions or device-level settings.
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="retention"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                6. Retention
              </h2>
              <p className="mb-4">Cookies may be:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>
                  <strong>Session cookies</strong> (deleted when you close your
                  browser)
                </li>
                <li>
                  <strong>Persistent cookies</strong> (remain until they expire
                  or are deleted)
                </li>
              </ul>
              <p>
                Retention depends on the cookie purpose but typically ranges
                from a few minutes to up to 12 months.
              </p>
            </section>

            {/* Section 7 */}
            <section
              id="third-party-providers"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                7. Third-Party Providers
              </h2>
              <p className="mb-4">We may use cookies provided by:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>AWS Cloud Services</li>
                <li>Stripe</li>
                <li>Telephony providers (e.g., Twilio, Telnyx)</li>
                <li>Analytics vendors</li>
                <li>Performance monitoring tools</li>
                <li>Support and chat platforms</li>
              </ul>
              <p>
                <strong>
                  These third parties are contractually required to protect your
                  information, but their cookie use is governed by their own
                  policies.
                </strong>
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="changes-to-policy"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                8. Changes to This Cookie Policy
              </h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time. The updated
                version will be posted with a new "Last Updated" date.
              </p>
              <p className="mb-4">Material changes may be communicated via:</p>
              <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
                <li>Email notification</li>
                <li>Banner notice</li>
                <li>Dashboard alert</li>
              </ul>
              <p>
                <strong>
                  Continued use of the Service constitutes acceptance of the
                  updated policy.
                </strong>
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="contact-us"
              className="mb-8 sm:mb-12 scroll-mt-24 sm:scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8 sm:mt-12">
                9. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about our Cookie Policy or wish to submit
                a request related to cookies, contact us at:
              </p>
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

export default Cookies;
