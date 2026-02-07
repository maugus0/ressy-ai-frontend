export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    step: 1,
    title: "Create your account",
    description:
      "Sign up for RessyAI and choose the plan that fits your business.",
  },
  {
    step: 2,
    title: "Configure your business profile",
    description:
      "Add your business name, hours, services, pricing, and FAQs so the AI knows your business inside out.",
  },
  {
    step: 3,
    title: "Set up call forwarding",
    description:
      "Forward your business phone number to your unique RessyAI number so the AI can start answering calls.",
  },
  {
    step: 4,
    title: "Customise your AI receptionist",
    description:
      "Choose the AI's voice, tone, greeting style, and configure how it handles different types of inquiries.",
  },
  {
    step: 5,
    title: "Go live",
    description:
      "Activate your AI receptionist and start handling calls 24/7. Monitor everything from your dashboard.",
  },
];
