export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: "🚀",
    items: [
      {
        question: "What is RessyAI?",
        answer:
          "RessyAI is an AI-powered receptionist that answers phone calls, handles bookings, responds to FAQs, and supports your customers 24/7. It's built for restaurants, salons, dental clinics, and service-based businesses.",
      },
      {
        question: "How does RessyAI work?",
        answer:
          "Your business phone number is forwarded to your AI agent. The AI answers calls instantly, understands customer intent, handles inquiries, books appointments, and provides information. You monitor everything from your RessyAI Dashboard.",
      },
      {
        question: "What do I need to get started?",
        answer:
          "A business phone line (VoIP or carrier-based) and an active RessyAI subscription. Optionally, you can connect integrations like OpenTable, Google Calendar, or your POS system.",
      },
      {
        question: "How long does setup take?",
        answer:
          "A full setup typically takes about 15 minutes. You provide your business details, customise the AI's voice and behaviour, and set up call forwarding.",
      },
    ],
  },
  {
    title: "Setup & Configuration",
    icon: "⚙️",
    items: [
      {
        question: "How do I set up call forwarding?",
        answer:
          "Each RessyAI account gets a unique forwarding number, found in your Dashboard under Settings → Phone Setup → Call Forwarding Number. For VoIP providers (OpenPhone, RingCentral, Grasshopper, etc.), add this number in your provider's call forwarding settings. For carrier lines (Rogers, Bell, Telus, T-Mobile, AT&T, Verizon, Jio, Airtel, etc.), dial the appropriate forwarding code on your phone's dial pad using your unique Ressy number.",
      },
      {
        question: "What can I customise in my business profile?",
        answer:
          "Inside your dashboard you can edit your business name, description, address, hours of operation, menu or services list, pricing, team contacts, and FAQ entries.",
      },
      {
        question: "Does call forwarding need to stay on?",
        answer:
          "Yes, call forwarding must remain enabled for RessyAI to answer. You can toggle it on or off at any time using your carrier's forwarding codes.",
      },
    ],
  },
  {
    title: "Integrations",
    icon: "🔗",
    items: [
      {
        question: "Does RessyAI integrate with OpenTable?",
        answer:
          "Yes. Once connected, RessyAI can check availability, create reservations, modify or cancel bookings, and record guest notes. Connect via Integrations → OpenTable in your dashboard.",
      },
      {
        question: "Can I connect Google Calendar?",
        answer:
          "Yes. This is especially useful for salons, clinics, and consultants. Once connected, the AI reads your availability, books appointments, and handles cancellations or reschedules in real time.",
      },
      {
        question: "What POS and CRM integrations are supported?",
        answer:
          "RessyAI supports Toast, Square, Clover, Lightspeed, and HubSpot. Salesforce integration is coming soon. These integrations enhance customer history, loyalty tracking, and caller recognition.",
      },
    ],
  },
  {
    title: "Using Your AI Receptionist",
    icon: "🤖",
    items: [
      {
        question: "What can the AI handle?",
        answer:
          "It can answer common questions, book and modify reservations, provide pricing and policy info, capture leads, give directions and hours, handle complaints politely, and escalate to staff when needed. Takeout ordering is currently in beta.",
      },
      {
        question: "Can I adjust the AI's tone and personality?",
        answer:
          "Yes. You can customise formality (formal vs casual), friendliness, speaking speed, and greeting style from your dashboard.",
      },
      {
        question: "Can I add custom responses?",
        answer:
          "Absolutely. You can add tailored answers for pricing, policies, special requests, promotions, and seasonal updates.",
      },
    ],
  },
  {
    title: "Dashboard & Analytics",
    icon: "📊",
    items: [
      {
        question: "What information do call logs show?",
        answer:
          "Each call log includes caller ID, full transcript, AI summary, call outcome, and sentiment score.",
      },
      {
        question: "What analytics are available?",
        answer:
          "Key metrics include missed call recovery rate, booking conversion, call volume trends, peak call hours, and estimated time saved.",
      },
      {
        question: "How do I get notified about calls?",
        answer:
          "You can receive SMS alerts and email summaries. Slack integration is coming soon.",
      },
    ],
  },
  {
    title: "Billing & Usage",
    icon: "💳",
    items: [
      {
        question: "How does billing work?",
        answer:
          "Each plan includes a monthly usage allowance. After your trial credits, calls are billed by the minute. You can view invoices under Billing → Payments in your dashboard.",
      },
      {
        question: "What's included in my plan?",
        answer:
          "Each plan includes a monthly minute allowance, tier-based features, dashboard access, and unlimited transcripts.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    icon: "🔧",
    items: [
      {
        question: "The AI isn't answering calls — what should I check?",
        answer:
          "Verify that call forwarding is enabled, your RessyAI plan is active, and your forwarding number is correct in your dashboard.",
      },
      {
        question: "The AI is giving incorrect information.",
        answer:
          "Update your hours, pricing, and FAQs in the dashboard. Remove any outdated custom answers and re-sync your integrations.",
      },
      {
        question: "Bookings aren't syncing with OpenTable or Google Calendar.",
        answer:
          "Re-authenticate the integration, check that permission scopes are correct, and refresh the connection in your dashboard.",
      },
      {
        question: "I'm experiencing call quality issues.",
        answer:
          "If using VoIP, prefer a wired connection over WiFi, reduce forwarding hops, and check that your provider isn't compressing audio.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    icon: "🔒",
    items: [
      {
        question: "How is my data handled?",
        answer:
          "All calls are securely transcribed and data is encrypted. You own your transcripts and recordings.",
      },
      {
        question: "What compliance standards does RessyAI follow?",
        answer:
          "RessyAI aligns with SOC-2 controls, GDPR, PIPEDA (Canada), and HIPAA-aligned practices for clinics. Full legal documentation is available upon request.",
      },
    ],
  },
  {
    title: "Contact Support",
    icon: "💬",
    items: [
      {
        question: "How do I reach support?",
        answer:
          "Email us at info@ressy.ai or use the live chat in your dashboard. Enterprise customers can contact their account manager directly.",
      },
    ],
  },
];
