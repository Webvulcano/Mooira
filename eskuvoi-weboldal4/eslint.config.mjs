import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Képek kézzel konvertálva (webp) → sima <img>, nincs next/image optimalizálás.
  { rules: { "@next/next/no-img-element": "off" } },
  // App Routerben a root layout <head>-je minden oldalra hat → a pages/_document-re szabott szabály itt téves.
  { files: ["src/app/layout.jsx"], rules: { "@next/next/no-page-custom-font": "off" } },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
