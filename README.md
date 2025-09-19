## CodeCares — Privacy Policy Page

A minimal React 19 + MUI single-page app that renders the CodeCares Privacy Policy. Ready for Vercel deployment.

### Tech
- React 19, React DOM 19
- Vite
- MUI v6, Emotion

### Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

### Customize
- Update placeholders in `src/constants/site.js`:
	- `effectiveDate`
	- `contactEmail`
	- `contactPhone`
	- `orgLines`

### Deploy to Vercel
1. Commit and push this repo to GitHub/GitLab.
2. In Vercel, import the project.
3. Framework preset: `Vite` (or `Other` with build command `vite build`).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.
This will be used for the Graph API
