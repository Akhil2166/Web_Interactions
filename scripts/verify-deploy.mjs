/**
 * Fails the build early if the Next.js app directory is missing.
 * Prevents Vercel/GitHub deploys that only pushed package.json without src/.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";

const required = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/globals.css",
  "public",
  "package.json",
  "next.config.ts",
];

const missing = required.filter((p) => !existsSync(join(process.cwd(), p)));

if (missing.length > 0) {
  console.error("\n❌ Deploy verification failed. Missing required paths:\n");
  missing.forEach((p) => console.error(`   - ${p}`));
  console.error(
    "\nPush the full project (including src/ and public/) to GitHub,",
  );
  console.error("or set Vercel Root Directory to the folder that contains src/app.\n",
  );
  process.exit(1);
}

console.log("✓ Deploy verification passed (src/app present)");
