import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import type { ReactElement } from "react";
import { vi } from "vitest";

export const renderWithRouter = (ui: ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

export const renderWithMemoryRouter = (
  ui: ReactElement,
  { initialEntries = ["/"] }: { initialEntries?: string[] } = {},
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>,
  );
};

export const renderRouteWithSlug = (
  element: ReactElement,
  path: string,
  initialEntry: string,
) => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    </MemoryRouter>,
  );
};

export const mockFetchSuccess = (response: unknown) => {
  return vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response),
    } as Response),
  );
};

export const mockFetchFailure = (statusCode = 500) => {
  return vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: statusCode,
      json: () => Promise.resolve({}),
    } as Response),
  );
};

export const mockFetchNetworkError = () => {
  return vi.fn(() => Promise.reject(new Error("Network error")));
};
