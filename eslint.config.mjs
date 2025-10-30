import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    extends: [...nextCoreWebVitals, ...nextTypescript],
    // ignore globs for files/directories that should not be linted
    // use glob patterns to ensure nested files are excluded
    ignores: [
      ".amplify/**",
      ".amplify",
      "node_modules/**",
      "out/**",
      "build/**",
      "public/**",
      ".next/**",
      "next-env.d.ts",
      "**/*.config.js",
      "app/ui-components/**",
    ],
  },
]);
