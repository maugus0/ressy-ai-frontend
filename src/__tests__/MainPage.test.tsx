import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";

afterEach(() => {
  cleanup();
});

describe("Main page", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(
      screen.getByText(
        /Your AI receptionist that books, answers, and follows up/i,
      ),
    ).toBeInTheDocument();
  });
});
