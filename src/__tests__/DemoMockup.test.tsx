import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { toast } from "@/hooks/use-toast";
import DemoMockup from "@/components/DemoMockup";

// Mock the toast function
vi.mock("@/hooks/use-toast", () => ({
  toast: vi.fn(),
}));

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Mock the image to avoid loading issues
vi.mock("@/assets/mockup.png", () => ({
  default: "mock-image-path",
}));

describe("DemoMockup Component - Email Validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
  });

  const fillForm = (businessName: string, email: string, phone: string) => {
    render(<DemoMockup />);

    const businessInput = screen.getByPlaceholderText("Business name");
    const emailInput = screen.getByPlaceholderText("Email address");
    const phoneInput = screen.getByPlaceholderText("Phone No");

    fireEvent.change(businessInput, { target: { value: businessName } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(phoneInput, { target: { value: phone } });

    return { businessInput, emailInput, phoneInput };
  };

  describe("Frontend Validation Tests", () => {
    // TEST 1: Basic required fields
    it("should show error when email is empty", () => {
      fillForm("Test Business", "", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Invalid Email Address",
          description: "Email address is required.",
        }),
      );
    });

    // TEST 2: The exact bug case from task description
    it("should reject email with trailing junk after TLD (user@gmail.com3333vvdv)", () => {
      fillForm("Test Business", "user@gmail.com3333vvdv", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      // Should show email-specific error, NOT "invalid number"
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Invalid email format"),
        }),
      );
    });

    // TEST 3: TLD with numbers (critical backend rule)
    it("should reject email with numeric TLD (test@domain.c0m)", () => {
      fillForm("Test Business", "test@domain.c0m", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Invalid email format"),
        }),
      );
    });

    // TEST 4: Invalid TLD length
    it("should reject email with single-character TLD", () => {
      fillForm("Test Business", "test@domain.a", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Invalid email format"),
        }),
      );
    });

    // TEST 5: Consecutive dots
    it("should reject email with consecutive dots", () => {
      fillForm("Test Business", "test..test@domain.com", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Invalid email format"),
        }),
      );
    });

    // TEST 6: Domain starting with hyphen
    it("should reject email with domain starting with hyphen", () => {
      fillForm("Test Business", "test@-domain.com", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("Invalid email format"),
        }),
      );
    });

    // TEST 7: Valid email should pass frontend validation
    it("should accept valid email format", () => {
      const { emailInput } = fillForm(
        "Test Business",
        "valid@example.com",
        "+11234567890",
      );

      // Trigger blur to validate
      fireEvent.blur(emailInput);

      // Check that no error is displayed in the UI
      const errorMessages = screen.queryAllByText(
        /Invalid email format|Email address is required/,
      );
      expect(errorMessages.length).toBe(0);
    });

    // TEST 8: Real-time validation feedback
    it("should show inline error when typing invalid email", async () => {
      const { emailInput } = fillForm(
        "Test Business",
        "bad-email",
        "+11234567890",
      );

      // Trigger blur to show error
      fireEvent.blur(emailInput);

      // Should show inline error below field
      await waitFor(() => {
        const errorText = screen.getByText(/Invalid email format/);
        expect(errorText).toBeInTheDocument();
      });
    });
  });

  describe("API Integration Tests", () => {
    beforeEach(() => {
      // Reset mocks before each API test
      vi.clearAllMocks();
    });

    // TEST 9: Should use new /api/v1/ endpoint
    it("should call the new RMM Level 2 endpoint", async () => {
      render(<DemoMockup />);

      // Fill with valid data
      fireEvent.change(screen.getByPlaceholderText("Business name"), {
        target: { value: "Valid Business" },
      });
      fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "valid@example.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Phone No"), {
        target: { value: "1234567890" },
      });

      // Mock successful API response
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, message: "Call initiated" }),
      });

      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
        expect(mockFetch.mock.calls[0][0]).toBe(
          "https://api.ressy.ai/api/v1/calls",
        );
      });
    });

    // TEST 10: Should handle backend email validation errors
    // Note: test@bad.123 has numeric TLD which frontend catches, so we use
    // a valid-format email that backend might reject for other reasons
    it("should show correct error when backend rejects email", async () => {
      render(<DemoMockup />);

      // Fill form with email that passes frontend validation
      // but backend might reject (e.g., disposable email, banned domain)
      fireEvent.change(screen.getByPlaceholderText("Business name"), {
        target: { value: "Test Business" },
      });
      fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "test@valid-domain.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Phone No"), {
        target: { value: "1234567890" },
      });

      // Mock backend validation error (e.g., disposable email check)
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        json: async () => ({
          success: false,
          error: "Invalid email format: domain not allowed",
        }),
      });

      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast).toHaveBeenCalledWith(
          expect.objectContaining({
            title: "Invalid Email Address",
            description: expect.stringContaining("email"),
          }),
        );
      });
    });

    // TEST 11: Should NOT show "invalid number" for email errors
    // Note: test@gmail.com3333vvdv is caught by frontend validation,
    // so we test backend error differentiation with valid-format emails
    it("should differentiate between email and phone errors from backend", async () => {
      render(<DemoMockup />);

      // Fill with valid email format (passes frontend) but valid phone
      fireEvent.change(screen.getByPlaceholderText("Business name"), {
        target: { value: "Test Business" },
      });
      fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Phone No"), {
        target: { value: "1234567890" },
      });

      // Mock backend email validation error
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        json: async () => ({
          success: false,
          error: "Invalid email format: domain not found",
        }),
      });

      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      await waitFor(() => {
        // Should show email error, NOT phone error
        const toastCalls = vi.mocked(toast).mock.calls;
        const lastToast = toastCalls[toastCalls.length - 1][0];

        expect(lastToast.title).toBe("Invalid Email Address");
        expect(lastToast.description).toContain("email");
        expect(lastToast.title).not.toBe("Please enter a valid number.");
      });
    });

    // TEST 12: Business name validation
    it("should validate business name length", () => {
      render(<DemoMockup />);

      // Fill with too-short business name
      fireEvent.change(screen.getByPlaceholderText("Business name"), {
        target: { value: "Abc" }, // Less than 5 chars
      });
      fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "valid@example.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Phone No"), {
        target: { value: "1234567890" },
      });

      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Invalid Business Name",
          description: "Business name must be at least 5 characters.",
        }),
      );
    });

    // TEST 13: Clear business name error on typing
    it("should clear business name error when user starts typing", () => {
      const { businessInput } = fillForm(
        "",
        "test@example.com",
        "+11234567890",
      );

      // Trigger business name error
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      // Verify business name error
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Business name is required.",
        }),
      );

      // Clear mocks
      vi.clearAllMocks();

      // Fix business name
      fireEvent.change(businessInput, { target: { value: "Valid Business" } });

      // Submit again - should pass business validation
      fireEvent.click(submitButton);

      // Should now show phone validation error (or API call)
      // The phone format needs to be valid E.164
      expect(toast).not.toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Business name is required.",
        }),
      );
    });

    // TEST 14: Error clearing when user starts typing
    it("should clear email error when user starts typing", async () => {
      const { emailInput } = fillForm(
        "Test Business",
        "bad-email",
        "+11234567890",
      );

      // Trigger error
      fireEvent.blur(emailInput);

      // Wait for error to appear
      await waitFor(() => {
        expect(screen.getByText(/Invalid email format/)).toBeInTheDocument();
      });

      // Start typing VALID email (not just partial)
      fireEvent.change(emailInput, { target: { value: "valid@example.com" } });

      // Wait for error to clear (might need blur trigger)
      fireEvent.blur(emailInput);

      await waitFor(() => {
        const errorText = screen.queryByText(/Invalid email format/);
        expect(errorText).not.toBeInTheDocument();
      });
    });

    // TEST 15: Test more email edge cases
    it("should reject email with consecutive hyphens in domain", () => {
      fillForm("Test Business", "test@do--main.com", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("consecutive hyphens"),
        }),
      );
    });

    // TEST 16: Test email with domain ending with hyphen
    it("should reject email with domain ending with hyphen", () => {
      fillForm("Test Business", "test@domain-.com", "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining(
            "domain labels cannot start or end with hyphen",
          ),
        }),
      );
    });

    // TEST 17: Test very long local part
    it("should reject email with local part longer than 64 chars", () => {
      const longLocal = "a".repeat(65) + "@example.com";
      fillForm("Test Business", longLocal, "+11234567890");
      const submitButton = screen.getByText("Call me");
      fireEvent.click(submitButton);

      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          description: expect.stringContaining("local part is too long"),
        }),
      );
    });
  });
});
