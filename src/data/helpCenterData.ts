export interface FAQItem {
  question: string;
  answer: string;
  bulletPoints?: string[];
  postText?: string;
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
          "RessyAI is an AI Agent built for the F&B and hospitality sector that manages customer communication end-to-end. She answers phone calls, understands customer intent, and orchestrates complex actions across your technology stack — from answering questions to handling orders and reservations.",
      },
      {
        question: "How does RessyAI work?",
        answer:
          "RessyAI can operate as either your first line of defence or second line of defence. As a first line, she answers all incoming calls on your existing number. As a second line, she answers only when your staff is busy or unable to pick up. All call transcripts, orders, reservations, and settings are accessible through the RessyAI Client Dashboard.",
      },
      {
        question: "What can RessyAI handle?",
        answer: "Depending on your configuration, RessyAI can:",
        bulletPoints: [
          "Answer restaurant-specific FAQs (hours, menu, dietary options, parking, events, and more)",
          "Take and modify takeout orders during a call",
          "Book and manage table reservations",
          "Redirect customers via SMS or WhatsApp when needed",
          "Escalate calls to your staff for complex situations",
        ],
      },
      {
        question: "What do I need to get started?",
        answer: "You need:",
        bulletPoints: [
          "A business phone line (VoIP or carrier-based)",
          "An active RessyAI subscription",
          "Optionally, POS and reservation system integrations such as Square, ToastPOS, Libro, Auphan, and others",
        ],
      },
      {
        question: "How long does setup take?",
        answer:
          "Most businesses are fully set up in 15–20 minutes. This includes entering business details, configuring the agent's behaviour, and setting up call forwarding.",
      },
    ],
  },
  {
    title: "Setup & Onboarding",
    icon: "⚙️",
    items: [
      {
        question: "What happens during onboarding?",
        answer: "Our operations team works closely with you to:",
        bulletPoints: [
          "Create your restaurant profile",
          "Configure operating hours",
          "Upload your menu",
          "Set up FAQs",
          "Configure call forwarding",
          "Walk you through the RessyAI Client Dashboard",
        ],
        postText: "A test call is always conducted before going live.",
      },
      {
        question: "What must be configured before launch?",
        answer: "Three items must be completed:",
        bulletPoints: [
          "Your full menu (including availability and specials)",
          "Your restaurant FAQs",
          "Restaurant settings (operating hours and contact numbers)",
        ],
        postText:
          "Everything is reviewed together before launch to ensure a smooth go-live.",
      },
      {
        question: "How does call forwarding work?",
        answer:
          "You keep your existing phone number. Calls are forwarded to a unique RessyAI number provided during onboarding. Customers experience this as a seamless call. Call forwarding can be enabled or disabled at any time.",
      },
      {
        question: "What if my hours vary by day?",
        answer:
          "You can configure operating hours individually for each day of the week directly from the RessyAI Client Dashboard. More flexible scheduling options are planned for future releases.",
      },
    ],
  },
  {
    title: "Agent Capabilities",
    icon: "🧠",
    items: [
      {
        question: "What capabilities does RessyAI have?",
        answer: "RessyAI currently supports four core capabilities:",
        bulletPoints: [
          "FAQ Handling (always enabled)",
          "Order Handling",
          "Reservation Handling",
          "SMS Redirect",
        ],
      },
      {
        question: "Is FAQ handling optional?",
        answer:
          "No. FAQ handling is always enabled. RessyAI will always answer restaurant-specific questions accurately using the information configured in your dashboard.",
      },
      {
        question: "How do Order and Reservation capabilities work?",
        answer:
          "Order and Reservation handling can be enabled or disabled independently:",
        bulletPoints: [
          "Both can be enabled",
          "Both can be disabled",
          "Or only one can be enabled",
        ],
        postText:
          "If a capability is disabled, RessyAI detects the customer's intent and proactively transfers the call to your staff instead.",
      },
      {
        question: "What is SMS Redirect?",
        answer: "When SMS Redirect is enabled:",
        bulletPoints: [
          "Order and Reservation handling are automatically disabled",
          "If a caller wants to order or reserve, RessyAI sends a configurable SMS or WhatsApp link",
          "RessyAI can remain on the call to guide the customer through the digital process",
        ],
        postText:
          "This is ideal for businesses that prefer online ordering or booking flows.",
      },
    ],
  },
  {
    title: "Dashboard & Monitoring",
    icon: "📊",
    items: [
      {
        question: "How do I monitor activity?",
        answer:
          "You manage everything through the RessyAI Client Dashboard instead of answering calls directly. A live connection indicator shows whether your agent is active, and you receive real-time notifications for orders, reservations, and escalations.",
      },
      {
        question: "What pages are in the dashboard?",
        answer: "The dashboard includes:",
        bulletPoints: [
          "Calls (full transcripts)",
          "Callers (unique phone numbers)",
          "Escalations",
          "Orders (by status)",
          "Reservations (by status)",
          "Order Updates",
          "Reservation Updates",
          "FAQs",
          "Menu",
          "Restaurant Settings",
        ],
      },
      {
        question: "Can I update my menu in real time?",
        answer:
          "Yes. The Menu page provides industry-grade controls including:",
        bulletPoints: [
          "Item availability",
          "Combos and deals",
          "Specials",
          "Temporary unavailability",
          "Advanced menu structures",
        ],
        postText:
          "All changes take effect immediately, even during active calls.",
      },
      {
        question: "Can I update FAQs at any time?",
        answer:
          "Yes. FAQs are loaded at the start of every call, so any updates made in the dashboard apply immediately to subsequent calls.",
      },
    ],
  },
  {
    title: "Integrations",
    icon: "🔗",
    items: [
      {
        question: "Which systems does RessyAI integrate with?",
        answer:
          "RessyAI integrates with POS and reservation systems such as Square, ToastPOS, Libro, Auphan, and others. Orders and reservations can be pushed directly into your systems.",
      },
      {
        question: "What if my system isn't listed?",
        answer:
          "Reach out to us — we are continuously expanding our integration support and can evaluate compatibility with your system.",
      },
    ],
  },
  {
    title: "Call Handling & Escalation",
    icon: "📞",
    items: [
      {
        question: "When does RessyAI escalate to a human?",
        answer: "RessyAI escalates when:",
        bulletPoints: [
          "The customer explicitly asks for a human",
          "The request is complex (large parties, special events)",
          "The AI fails to understand after multiple attempts",
          "The call exceeds the maximum allowed duration",
        ],
      },
      {
        question: "How do I see escalations?",
        answer:
          "Escalations appear on a dedicated page in the RessyAI Client Dashboard, with real-time notifications when your connection is active.",
      },
      {
        question: "Can RessyAI handle multiple calls at the same time?",
        answer:
          "Yes. RessyAI is designed to handle multiple simultaneous calls reliably.",
      },
      {
        question: "How are spam or prank calls handled?",
        answer:
          "RessyAI includes built-in spam detection that monitors call behaviour, frequency, and patterns. Suspicious calls may be flagged, terminated, or temporarily blocked automatically.",
      },
    ],
  },
  {
    title: "Security & Reliability",
    icon: "🔒",
    items: [
      {
        question: "How is my data handled?",
        answer:
          "All calls are securely transcribed and encrypted. You own your data, transcripts, and recordings. Data retention follows applicable legal and regulatory requirements.",
      },
      {
        question: "What compliance standards does RessyAI align with?",
        answer:
          "RessyAI aligns with SOC-2 controls, GDPR, PIPEDA (Canada), HIPAA-aligned practices for clinics, and PDPA/IMDA requirements in Singapore.",
      },
      {
        question: "How reliable is RessyAI?",
        answer:
          "Reliability is core to RessyAI. Our agents are built on robust infrastructure and carefully engineered prompts to ensure consistent, accurate performance — even at scale and during peak hours.",
      },
    ],
  },
  {
    title: "Support",
    icon: "💬",
    items: [
      {
        question: "How do I contact support?",
        answer:
          "Email us at info@ressy.ai or contact the dedicated operations team number provided during onboarding. Enterprise customers can reach their account managers directly.",
      },
    ],
  },
];
