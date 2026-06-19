# RollnEnterprises

Modern, accessibility-first company website for [RollnEnterprises](https://github.com/AstridBonoan/RollnEnterprises.io) — a technology company building software products that improve independence, health, mobility, and daily living for people with disabilities.

## Tech Stack

- React.js
- Tailwind CSS
- Vite

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

This project uses **GitHub Actions** to build and deploy to the `gh-pages` branch on every push to `main`.

### GitHub Pages Setup

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Save

The site will be available at: `https://astridbonoan.github.io/RollnEnterprises.io/`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Mission.jsx
│   ├── Products.jsx
│   ├── WhyUs.jsx
│   ├── Vision.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
└── App.jsx
```

## Accessibility

Built with WCAG 2.2 AA compliance in mind:

- Semantic HTML
- Keyboard navigation
- ARIA labels
- Skip navigation link
- Reduced motion support
- High contrast design
