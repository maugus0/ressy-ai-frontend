import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import calendly from "@/assets/integrations/calendly.svg";
import clio from "@/assets/integrations/clio.svg";
import highlevel from "@/assets/integrations/highlevel.avif";
import housecall from "@/assets/integrations/housecall.svg";
import hubspot from "@/assets/integrations/hubspot.svg";
import lawmatics from "@/assets/integrations/lawmatics.svg";
import make from "@/assets/integrations/make.svg";
import mycase from "@/assets/integrations/mycase.svg";
import salesforce from "@/assets/integrations/salesforce.svg";
import serive_titan from "@/assets/integrations/serive_titan.svg";
import slack from "@/assets/integrations/slack.svg";
import zapier from "@/assets/integrations/zapier.svg";

const IntegrationMarquee = () => {
  const logos = [
    { src: calendly, alt: "Calendly" },
    { src: clio, alt: "Clio" },
    { src: highlevel, alt: "HighLevel" },
    { src: housecall, alt: "Housecall Pro" },
    { src: hubspot, alt: "HubSpot" },
    { src: lawmatics, alt: "Lawmatics" },
    { src: make, alt: "Make" },
    { src: mycase, alt: "MyCase" },
    { src: salesforce, alt: "Salesforce" },
    { src: serive_titan, alt: "ServiceTitan" },
    { src: slack, alt: "Slack" },
    { src: zapier, alt: "Zapier" },
  ];
  const inner = logos.slice(0, Math.ceil(logos.length / 2));
  const outer = logos.slice(Math.ceil(logos.length / 2));

  const details = useMemo(
    () => ({
      Calendly: {
        title: "Calendly",
        summary:
          "Auto-schedule meetings and sync events to your CRM in real time.",
        learnMore: "https://calendly.com/integrations",
        bullets: [
          "Create contacts on booking and update lifecycle stages",
          "Writeback event notes and meeting outcomes",
          "Two-way sync of reschedules and cancellations",
        ],
      },
      Clio: {
        title: "Clio",
        summary:
          "Log matters, contacts, and activities seamlessly from conversations.",
        learnMore: "https://www.clio.com/app-directory/",
        bullets: [
          "Create/update matters and contacts",
          "Attach call summaries as notes",
          "Sync statuses and task follow-ups",
        ],
      },
      HighLevel: {
        title: "HighLevel",
        summary:
          "Sync pipelines, contacts, and triggers for automated follow-ups.",
        learnMore: "https://www.gohighlevel.com/",
        bullets: [
          "Create/update opportunities and contacts",
          "Trigger workflows and campaigns",
          "Log calls and transcripts to the contact timeline",
        ],
      },
      "Housecall Pro": {
        title: "Housecall Pro",
        summary:
          "Capture jobs, estimates, and customer info without manual entry.",
        learnMore: "https://www.housecallpro.com/integrations/",
        bullets: [
          "Create customers and jobs",
          "Attach call notes and tags",
          "Keep job status in sync",
        ],
      },
      HubSpot: {
        title: "HubSpot",
        summary:
          "Full-fidelity CRM sync across contacts, deals, and engagements.",
        learnMore: "https://ecosystem.hubspot.com/marketplace/apps",
        bullets: [
          "Create/update Contacts and Companies",
          "Open or progress Deals based on intent",
          "Log calls, notes, and transcripts as engagements",
        ],
      },
      Lawmatics: {
        title: "Lawmatics",
        summary:
          "Automate intake and case workflows directly from conversations.",
        learnMore: "https://www.lawmatics.com/integrations/",
        bullets: [
          "Create/update matters and people",
          "Trigger automations and tasks",
          "Store transcripts on the record",
        ],
      },
      Make: {
        title: "Make (Integromat)",
        summary: "Connect to hundreds of apps with powerful scenario routing.",
        learnMore: "https://www.make.com/en/integrations",
        bullets: [
          "Emit webhooks with structured payloads",
          "Map fields to any destination app",
          "Idempotent retries and error handling",
        ],
      },
      MyCase: {
        title: "MyCase",
        summary: "Push client intake, notes, and tasks into your case system.",
        learnMore: "https://www.mycase.com/integrations/",
        bullets: [
          "Create clients and matters",
          "Attach call notes and documents",
          "Update case statuses",
        ],
      },
      Salesforce: {
        title: "Salesforce",
        summary:
          "Enterprise-grade sync across Leads, Contacts, and Opportunities.",
        learnMore: "https://appexchange.salesforce.com/",
        bullets: [
          "Create/update Leads/Contacts/Accounts",
          "Advance Opportunities with stage logic",
          "Log tasks, calls, and custom objects",
        ],
      },
      ServiceTitan: {
        title: "ServiceTitan",
        summary: "Create jobs and customers, and sync appointments and notes.",
        learnMore: "https://www.servicetitan.com/integrations",
        bullets: [
          "Create/update customers and jobs",
          "Sync schedules and statuses",
          "Write notes and tags to records",
        ],
      },
      Slack: {
        title: "Slack",
        summary: "Notify channels and route escalations with rich context.",
        learnMore: "https://slack.com/integrations",
        bullets: [
          "Post summaries and alerts",
          "Route mentions to the right team",
          "Quick actions to call back or assign",
        ],
      },
      Zapier: {
        title: "Zapier",
        summary: "One-click automations to thousands of tools via Zaps.",
        learnMore: "https://zapier.com/apps",
        bullets: [
          "Trigger Zaps with structured webhooks",
          "Map dynamic fields reliably",
          "Built-in retries and error surfacing",
        ],
      },
    }),
    [],
  );

  const [active, setActive] = useState<null | { alt: string; src: string }>(
    null,
  );
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => dialogRef.current?.focus(), 0);
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [active]);

  const closeModal = () => setActive(null);
  const onKeyDownModal: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeModal();
    }
  };

  return (
    <section
      id="integrations"
      className="relative w-full py-16 bg-gradient-to-b from-white via-purple-50/40 to-teal-50/30 overflow-hidden scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Integrates with your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
            Existing Stack
          </span>
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
          Connect your favorite tools in seconds. No heavy setup.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Decorative background lines */}
        <svg
          className="absolute inset-0 -z-10 w-full h-full opacity-60"
          viewBox="0 0 1200 600"
          aria-hidden
        >
          <defs>
            <linearGradient id="gridStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
              <stop offset="100%" stopColor="rgba(20,184,166,0.18)" />
            </linearGradient>
          </defs>
          <g stroke="url(#gridStroke)" strokeWidth="1">
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={(i + 1) * 100}
                y1="40"
                x2={(i + 1) * 100}
                y2="560"
                className="bg-line"
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="60"
                y1={(i + 1) * 80}
                x2="1140"
                y2={(i + 1) * 80}
                className="bg-line"
              />
            ))}
          </g>
        </svg>

        {/* Section intro text */}
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8">
          <p className="text-gray-600 text-sm sm:text-base">
            Seamless connections to the tools you already trust. No custom code
            required.
          </p>
        </div>

        {/* Symmetric responsive grid (uniform cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch">
          {[...inner, ...outer].map((logo, idx) => (
            <button
              type="button"
              key={logo.alt}
              className="group relative col-span-1 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm transition-all duration-300 shadow-[0_6px_24px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_10px_34px_-12px_rgba(15,23,42,0.22)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-300"
              style={{
                animationDelay: `${(idx % 6) * 120}ms`,
                ["--d" as any]: `${(idx % 5) * 0.2}s`,
              }}
              onClick={() =>
                setActive({ alt: logo.alt, src: logo.src as string })
              }
            >
              <div className="flex items-center justify-center h-24 sm:h-28 lg:h-28 px-4 animate-fade-up">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-9 sm:h-10 lg:h-10 object-contain saturate-0 opacity-70 group-hover:saturate-100 group-hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-emerald-200/50 group-hover:scale-[1.01] transition" />
              {/* sheen overlay */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-[0.05] group-hover:opacity-[0.12] animate-sheen" />
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {active &&
          createPortal(
            <div
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
              aria-labelledby="integration-dialog-title"
              aria-modal="true"
              role="dialog"
            >
              <div
                className="absolute inset-0 bg-blue-600/30 backdrop-blur-md transition-opacity animate-fade-in"
                onClick={closeModal}
              />
              <div
                ref={dialogRef}
                tabIndex={-1}
                onKeyDown={onKeyDownModal}
                className="relative z-10 w-full max-w-3xl sm:max-w-4xl mx-auto rounded-2xl bg-white shadow-xl border border-slate-200 animate-zoom-in max-h-[85vh] overflow-y-auto overscroll-contain"
              >
                <div className="p-0 sm:p-0">
                  {/* Header band */}
                  <div className="rounded-t-2xl px-5 sm:px-6 py-5 bg-amber-50/60 border-b border-amber-100">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={active.src}
                          alt=""
                          className="h-9 w-9 object-contain"
                        />
                        <div>
                          <h3
                            id="integration-dialog-title"
                            className="text-xl sm:text-2xl font-semibold text-slate-900"
                          >
                            {details[active.alt as keyof typeof details]
                              ?.title || active.alt}
                          </h3>
                          <p className="mt-1 text-sm text-slate-700 max-w-2xl">
                            {details[active.alt as keyof typeof details]
                              ?.summary ||
                              "Deep, reliable sync to your CRM with writebacks and automation triggers."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="sm:col-span-1">
                      <dl className="text-sm">
                        <div className="mb-3">
                          <dt className="text-slate-500">Company</dt>
                          <dd className="font-medium text-slate-800">
                            {details[active.alt as keyof typeof details]
                              ?.title || active.alt}
                          </dd>
                        </div>
                        <div className="mb-3">
                          <dt className="text-slate-500">Categories</dt>
                          <dd className="font-medium text-slate-800">
                            {(
                              details[active.alt as keyof typeof details] as any
                            )?.category || "CRM"}
                          </dd>
                        </div>
                        <div className="mb-3">
                          <dt className="text-slate-500">Works with</dt>
                          <dd className="font-medium">
                            <ul className="space-y-1">
                              {(
                                (
                                  details[
                                    active.alt as keyof typeof details
                                  ] as any
                                )?.worksWith ?? [
                                  "Virtual Receptionists",
                                  "Outreach Campaigns",
                                ]
                              ).map((w: string, i: number) => (
                                <li key={i}>
                                  <a
                                    href="#"
                                    className="text-emerald-700 hover:underline"
                                  >
                                    {w}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                        <div className="mb-3">
                          <dt className="text-slate-500">Integration type</dt>
                          <dd className="font-medium text-slate-800">
                            {(
                              details[active.alt as keyof typeof details] as any
                            )?.type || "Native"}
                          </dd>
                        </div>
                        <div className="mt-5 flex items-center gap-3">
                          <Link
                            to="/schedule-demo"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black text-white text-sm font-semibold px-5 py-2 hover:shadow-md hover:scale-[1.02] transition"
                            onClick={() => closeModal()}
                          >
                            Connect
                          </Link>
                          <a
                            href={
                              (
                                details[
                                  active.alt as keyof typeof details
                                ] as any
                              )?.learnMore || "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-300 text-slate-800 text-sm font-medium px-5 py-2 hover:bg-slate-50 transition"
                          >
                            Learn More
                          </a>
                        </div>
                      </dl>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="text-sm text-slate-700">
                        We recognize how valuable time is to your team. Our
                        integration with{" "}
                        {details[active.alt as keyof typeof details]?.title ||
                          active.alt}{" "}
                        helps automate intake and sync rich context back to your
                        CRM to keep your pipeline accurate and actionable.
                      </div>
                      <div className="mt-5">
                        <h4 className="text-base font-semibold text-slate-900">
                          How the{" "}
                          {details[active.alt as keyof typeof details]?.title ||
                            active.alt}{" "}
                          integration works
                        </h4>
                        <p className="mt-2 text-sm text-slate-700">
                          <strong>
                            When you connect Ressy AI with{" "}
                            {details[active.alt as keyof typeof details]
                              ?.title || active.alt}
                            , key interactions will automatically sync to your
                            CRM.
                          </strong>{" "}
                          After every call or conversation, Ressy AI can:
                        </p>
                        <ul className="mt-3 space-y-2">
                          {(
                            details[active.alt as keyof typeof details]
                              ?.bullets || [
                              "Create/update records",
                              "Log calls and notes",
                              "Trigger workflows",
                            ]
                          ).map((b, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}

        {/* Callout */}
        <div className="mt-8 sm:mt-10 text-center">
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Works with hundreds more via Zapier and Make
          </span>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp .6s ease forwards; }
        .bg-line { opacity: .25 }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .animate-fade-in { animation: fadeIn .2s ease }
        @keyframes slideUp { from { transform: translateY(16px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .animate-slide-up { animation: slideUp .25s ease }
        @keyframes zoomIn { from { transform: scale(.98); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .animate-zoom-in { animation: zoomIn .2s ease }
        /* Ambient float per card */
        @keyframes floatCard {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: floatCard 6.5s ease-in-out var(--d, 0s) infinite; }
        /* Sweeping sheen */
        @keyframes sheenMove {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        .animate-sheen { animation: sheenMove 5.5s ease-in-out var(--d, 0s) infinite; }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up, .animate-float, .animate-sheen, .animate-fade-in, .animate-slide-up, .animate-zoom-in { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationMarquee;
