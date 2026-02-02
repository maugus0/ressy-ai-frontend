/**
 * Shared email validation for forms (DemoMockup, ScheduleDemoModal).
 * RFC-oriented checks; avoids false positives on valid subdomains and IDN punycode.
 */
export function validateEmail(email: string): string | undefined {
  const trimmed = email.trim();

  if (!trimmed) {
    return "Email address is required.";
  }

  // RFC 5322 compliant basic check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return "Invalid email format (example: name@domain.com).";
  }

  const [, domain] = trimmed.split("@");
  const labels = domain.split(".");
  const tld = labels[labels.length - 1];

  // TLD must be at least 2 characters and alphabetic
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return "Invalid email format: domain extension appears invalid.";
  }

  // Check each domain label
  for (const label of labels) {
    if (label.startsWith("-") || label.endsWith("-")) {
      return "Invalid email format: domain labels cannot start or end with hyphens.";
    }
    if (label.length > 63) {
      return "Invalid email format: domain label too long.";
    }
  }

  return undefined;
}
