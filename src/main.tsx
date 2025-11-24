import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages 404.html redirect
// The 404.html redirects paths like /restaurants to /?/restaurants
// This code converts it back to a normal path for React Router
(function handleGitHubPagesRedirect() {
  const location = window.location;
  // Check if we're in a redirect from 404.html
  if (location.search.startsWith("?/")) {
    const search = location.search.slice(2); // Remove "?/"
    const parts = search.split("&");
    const path = parts[0].replace(/~and~/g, "&");
    const queryParams = parts
      .slice(1)
      .map((param) => param.replace(/~and~/g, "&"))
      .join("&");

    const newUrl =
      location.protocol +
      "//" +
      location.host +
      "/" +
      path +
      (queryParams ? "?" + queryParams : "") +
      location.hash;

    window.history.replaceState({}, "", newUrl);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
