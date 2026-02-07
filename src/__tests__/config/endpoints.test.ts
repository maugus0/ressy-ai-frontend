import { describe, expect, it } from "vitest";
import { API_ENDPOINTS } from "@/config/endpoints";

describe("API_ENDPOINTS", () => {
  it("has production health endpoint defined", () => {
    expect(API_ENDPOINTS.production.health).toBeDefined();
    expect(typeof API_ENDPOINTS.production.health).toBe("string");
  });

  it("has demo health endpoint defined", () => {
    expect(API_ENDPOINTS.demo.health).toBeDefined();
    expect(typeof API_ENDPOINTS.demo.health).toBe("string");
  });

  it("uses correct default production URL", () => {
    expect(API_ENDPOINTS.production.health).toContain("voice.ressy.ai");
  });

  it("uses correct default demo URL", () => {
    expect(API_ENDPOINTS.demo.health).toContain("api.ressy.ai");
  });
});
