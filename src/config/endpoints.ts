export const API_ENDPOINTS = {
  production: {
    health:
      import.meta.env.VITE_PROD_HEALTH_URL || "https://voice.ressy.ai/health",
  },
  demo: {
    health:
      import.meta.env.VITE_DEMO_HEALTH_URL || "https://api.ressy.ai/health",
  },
} as const;
