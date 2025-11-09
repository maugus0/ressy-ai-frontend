## RessyAI Promotional Website – Local Setup (npm)

Follow these steps to set up and run the RessyAI promotional website locally using npm:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Open your terminal and navigate to the project directory:
   ```bash
   cd /path/to/ressy-ai-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

The site will be available at [http://localhost:8080](http://localhost:8080) (default Vite port is set to 8080).

### Building for Production

To build the site for production:

```bash
npm run build
```

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting & Formatting

Run ESLint with TypeScript/React defaults (warnings treated as errors):

```bash
npm run lint
```

Generate an ESLint SARIF report for GitHub code scanning:

```bash
npm run lint:sarif
```

Format the codebase (Prettier) or verify formatting without changing files:

```bash
npm run format        # writes changes
npm run format:check  # read-only check
```

### Testing

Execute the Vitest suite interactively:

```bash
npm run test
```

Run the CI-friendly Vitest command with coverage output in `coverage/`:

```bash
npm run test:ci
```

### Additional npm Scripts

- `npm run build:dev` – create a development-mode build.
- `npm run format` – format the codebase with Prettier.
- `npm run format:check` – verify formatting without modifying files (used in CI).
- `npm run lint` – run ESLint against TypeScript/React sources with warnings treated as errors.
- `npm run lint:sarif` – generate an ESLint SARIF report at `eslint.sarif`.
- `npm run test` – execute Vitest in watch mode.
- `npm run test:ci` – execute Vitest in CI mode with coverage reporting to `coverage/`.
- `npm run predeploy` – alias for `npm run build` (used by GitHub Pages deployments).
- `npm run deploy` – publish the latest build directory to the `gh-pages` branch using the `gh-pages` CLI.

---

## GitHub Actions – Required Secrets

To allow the CI/CD pipeline in `.github/workflows/ci.yml` to run end-to-end, configure the following repository secrets in **Settings → Secrets and variables → Actions**:

| Secret        | Purpose                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------- |
| `SONAR_TOKEN` | Authentication token for SonarCloud analysis. Generate one from your SonarCloud account. |
| `SNYK_TOKEN`  | API token for Snyk Open Source scanning. Obtain from your Snyk account.                  |

The workflow also relies on the built-in `GITHUB_TOKEN` for publishing Docker images, uploading SARIF files, and deploying to GitHub Pages—no action needed unless you have custom permissions.

If you intend to push Docker images to a private GitHub Container Registry, ensure the repository has the `packages` permission enabled and your organization allows fine-grained tokens if applicable.

---

For troubleshooting, see console output for errors or check your Node/npm versions.
