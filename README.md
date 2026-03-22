# Portfolio (static site)

**Live site:** [priyanshu-portfolio-kappa.vercel.app](https://priyanshu-portfolio-kappa.vercel.app/)

## Update the live site after you change files

Edits in Cursor **do not** appear on Vercel until you **deploy** again. Pick **one** way:

### If GitHub is connected to Vercel (most common)

Every time you finish changes:

```bash
cd C:\Users\hp\Portfolio
git add .
git commit -m "Describe your change"
git push
```

Vercel will **automatically** build and update **https://priyanshu-portfolio-kappa.vercel.app/** in about 1–2 minutes. Check **Dashboard → Deployments** on [vercel.com](https://vercel.com) if it’s slow.

### If you deploy with the Vercel CLI (no GitHub)

```bash
cd C:\Users\hp\Portfolio
vercel --prod
```

Confirm the project is linked to **priyanshu-portfolio-kappa** when prompted.

---

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

## Images / screenshots missing on Vercel?

1. **Paths:** This site uses **`./assets/...`** (not `assets/...` alone) so images load correctly on Vercel when the page URL looks like `/about` and when you open files locally.

2. **Git:** If you deploy from GitHub, every image must be **committed and pushed**:
   ```bash
   git add assets/
   git commit -m "Add certificate images"
   git push
   ```
   Then Vercel will redeploy (or click **Redeploy** in the dashboard).

3. **Check the live file:** Open  
   `https://YOUR-SITE.vercel.app/assets/coursera-networking-certificate.png`  
   in the browser. If you get **404**, the file is not on Vercel — fix step 2 or run `vercel --prod` again from a folder that contains `assets/`.
