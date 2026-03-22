# Portfolio (static site)

Deploy to **Vercel** to get a public link like `https://your-project.vercel.app`.

## Option A — Vercel website (no CLI)

1. Push this `Portfolio` folder to a **GitHub** repository (only the files inside this folder, not your whole user directory).
2. Go to **[vercel.com](https://vercel.com)** → sign in with GitHub.
3. **Add New…** → **Project** → **Import** your repo.
4. Settings:
   - **Framework Preset:** Other (or “No framework”)
   - **Root Directory:** `./` (repo root if the repo *is* only this portfolio)
   - **Build Command:** leave **empty**
   - **Output Directory:** leave **empty** (Vercel serves the repo root)
5. Click **Deploy**. After ~1 minute you get a URL: `https://<project-name>.vercel.app`.

You can rename the project in Vercel → **Settings** → **Domains** / project name to change the `*.vercel.app` subdomain.

## Option B — Vercel CLI (fastest from your PC)

1. Install [Node.js](https://nodejs.org/) if needed.
2. In PowerShell, from this folder:

   ```bash
   npm i -g vercel
   vercel
   ```

3. Follow the prompts (login, confirm project).  
4. Vercel prints a **Preview** URL first; run `vercel --prod` for your main **`*.vercel.app`** production URL.

Later, run `vercel --prod` again after changes to update the live site.

## Files

- `index.html` — Home; other pages: `about.html`, `skills.html`, `projects.html`, `experience.html`, `contact.html`
- `assets/` — images, CV PDF, etc.
- `vercel.json` — optional Vercel project name hint
