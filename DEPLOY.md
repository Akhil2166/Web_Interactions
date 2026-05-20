# Deploy to Vercel (fix for “Couldn't find app directory”)

## What went wrong

Vercel cloned your repo and ran `npm run build` at the **repository root**, but **`src/app` was not pushed to GitHub** (only `package.json` / design docs were there). Next.js requires `src/app` or `pages` at the project root.

## Fix (recommended): deploy from repo root

Your complete app lives at the **repository root** (`src/`, `public/`, `package.json`, etc.).

### 1. Push the full project to GitHub

From the project root (`cur` / `Web_des_Collection`), commit **everything** below:

```
src/
public/
package.json
package-lock.json
next.config.ts
tailwind.config.ts
tsconfig.json
postcss.config.mjs
eslint.config.mjs
vercel.json
.nvmrc
scripts/
```

Design docs (optional but fine to include):

```
DESIGN-fuse-kiwi.md
design-tokens-fuse-kiwi.json
```

**Do not** deploy only `package.json` without `src/`.

```bash
git add src public package.json package-lock.json next.config.ts tailwind.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs vercel.json .nvmrc scripts .gitignore README.md DEPLOY.md
git add DESIGN-fuse-kiwi.md design-tokens-fuse-kiwi.json
git commit -m "Add complete Next.js app for Vercel deploy"
git push origin main
```

### 2. Vercel project settings

| Setting | Value |
|--------|--------|
| **Framework Preset** | Next.js |
| **Root Directory** | *(leave empty — repo root)* |
| **Build Command** | `npm run build` (default) |
| **Install Command** | `npm install` (default) |
| **Node.js Version** | 20.x (uses `.nvmrc`) |

### 3. Redeploy

Vercel → your project → **Deployments** → **Redeploy** (or push again to `main`).

### 4. Verify locally before pushing

```bash
npm run verify   # checks src/app exists
npm run build    # full production build
```

---

## Alternative: app inside a subfolder

If you keep the app in `fuse-website/` on GitHub:

1. Vercel → **Settings** → **General** → **Root Directory** → set to `fuse-website`
2. Save and redeploy

Do **not** leave Root Directory empty if the app is only in a subfolder.

---

## After deploy

Your live URL will appear in the Vercel dashboard, e.g. `https://your-project.vercel.app`.
