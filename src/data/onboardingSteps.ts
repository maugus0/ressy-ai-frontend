export interface OnboardingStep {
  stepNumber: number;
  title: string;
  description: string;
  bulletPoints?: string[];
  postText?: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    stepNumber: 1,
    title: "Admin Setup",
    description: "Before you even log in, the RessyAI team:",
    bulletPoints: [
      "Creates your restaurant profile",
      "Adds your team as client managers",
      "Onboards our operations team as admins",
    ],
    postText: "Zero friction on your end.",
  },
  {
    stepNumber: 2,
    title: "Restaurant Details Configuration",
    description:
      "You provide your restaurant name, primary and secondary contact numbers, and operating hours for each day of the week. This is the foundation — getting it right matters.",
  },
  {
    stepNumber: 3,
    title: "Call Forwarding Setup",
    description:
      "Your restaurant keeps its existing phone number. Calls are forwarded to a unique RessyAI number provided during onboarding. If you're using always-on forwarding, your primary number in settings is updated to your secondary number — so when a customer asks to speak with a human, they reach your restaurant directly, not the AI.",
  },
  {
    stepNumber: 4,
    title: "Menu & FAQ Configuration",
    description:
      "You add your complete menu with availability, specials, and item details. You also set up FAQs covering common customer questions:",
    bulletPoints: [
      "Ingredients and allergens",
      "Preparation methods",
      "Parking information",
      "Events and specials",
    ],
    postText:
      "The RessyAI team reviews everything with you before launch. Updates reflect instantly, even mid-call.",
  },
  {
    stepNumber: 5,
    title: "Agent Capabilities Configuration",
    description: "You choose which capabilities to enable for your AI agent:",
    bulletPoints: [
      "FAQ handling (always on)",
      "Order handling",
      "Reservation handling",
      "SMS redirect",
    ],
    postText:
      "These can be toggled independently based on how your restaurant operates.",
  },
  {
    stepNumber: 6,
    title: "Client Training",
    description:
      "Our team walks you through the RessyAI Client Dashboard — the mindset shift from picking up calls to monitoring the dashboard. You learn how to:",
    bulletPoints: [
      "Track live connection status",
      "Read call transcripts",
      "Manage orders and reservations by status",
      "View caller history",
      "Handle escalations",
    ],
  },
  {
    stepNumber: 7,
    title: "Order & Reservation Workflow",
    description:
      "RessyAI takes the call and logs the order or reservation. Your restaurant confirms it in the dashboard. The customer receives a SMS or WhatsApp confirmation. Clean, trackable, and stress-free.",
  },
  {
    stepNumber: 8,
    title: "Escalation Setup",
    description:
      "You're briefed on how escalations work. Currently, escalations appear on a dedicated dashboard page with real-time notifications. Auto-forwarding to your secondary number is available as well & recommended.",
  },
  {
    stepNumber: 9,
    title: "Final Pre-Launch Check",
    description: "Before going live, we confirm together:",
    bulletPoints: [
      "Menu and FAQs reviewed",
      "Settings verified",
      "Client trained",
      "Escalation process clear",
      "Successful test call completed",
    ],
    postText: "If it's not perfect, we don't launch.",
  },
  {
    stepNumber: 10,
    title: "Go Live",
    description:
      "Call handling is enabled. The RessyAI team monitors your first calls closely, ensures nothing slips through, and collects your feedback on Day 1. We don't disappear after setup — dedicated support continues through your early days and beyond.",
  },
];
