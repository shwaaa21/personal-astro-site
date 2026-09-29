# jquest.dev

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

Welcome to jquest.dev, my personal website. This site showcases my quest to become a better developer, with work, random thoughts, and personal findings as a newly starting web developer. — Josh G.

## 🚀 Built With

This portfolio is built using the excellent [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) by the amazing team at [Incluud](https://incluud.dev). The starter provides a solid foundation with:

- **Accessibility-first design** following WCAG 2.2 AA guidelines
- **Modern tech stack** with Astro, TypeScript, and Tailwind CSS
- **Performance optimised** with excellent Lighthouse scores
- **Comprehensive component library** for rapid development

## ✨ Features

- Fully accessible and keyboard navigable
- Dark/light mode toggle
- Responsive design that works on all devices
- Blog with dynamic content
- Portfolio showcase
- Contact forms and social sharing
- SEO optimized with proper meta tags
- Astro 7 with Tailwind CSS 4
- TypeScript integration with path aliases and content collections
- Prettier integration with `prettier-plugin-astro` and `prettier-plugin-tailwind`
- ESLint integration with strict accessibility settings for `eslint-plugin-jsx-a11y`
- Markdown and MDX support
- Modern OKLCH color system with automatic palette generation from primary/secondary colors
- Atkinson Hyperlegible font for improved readability and accessibility
- Lucide icon set via `astro-icon` for consistent, friendly icons
- Outline focus indicator which works on dark and light backgrounds
- `prefers-reduced-motion` disables animations for users that have this preference turned on
- Built-in command launcher with keyboard navigation (Cmd/Ctrl+K)
- Comprehensive SCSS utility classes and CSS custom properties

## 🎨 Customisations

While maintaining the accessible foundation, I've personalised this site with:

- Custom color scheme and branding
- Portfolio projects showcasing my work
- Personal blog content
- Updated navigation and content structure
- Custom components for my specific needs

## 🛠️ Development

### Getting Started

Clone this repository and run any of the following commands:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally, before deploying|

### Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Typography:** Atkinson Hyperlegible font for improved readability
- **Icons:** [Lucide](https://lucide.dev) via astro-icon

## 🚀 Deployment

The site is live at **https://jquest.dev** and deploys automatically from `personal-site`.

### How it works

A push to `personal-site` runs `.github/workflows/deploy.yml`, which has two jobs:

1. **Build** — checks out the repo, installs with `npm ci`, runs `npm run build`, and uploads `dist/` as a Pages artifact.
2. **Deploy** — publishes that artifact to GitHub Pages via `actions/deploy-pages`.

The jobs are separate so the deploy only runs once the build succeeds. The `deploy` job is
pinned to the `github-pages` environment, which is where GitHub tracks the live deployment
URL.

There are **no secrets and no deploy key**. The workflow authenticates with a short-lived
OIDC token minted for this job (`id-token: write`), so there is no stored credential to
leak, rotate, or expire.

`public/CNAME` is copied into the build output and tells GitHub Pages which custom domain
to serve, which is how `jquest.dev` resolves.

### One-time setup

In `shwaaa21/shwaaa21.github.io` → **Settings → Pages**, set **Source** to **GitHub Actions**.
Nothing else is required — the workflow creates and manages the `github-pages` environment
on first run.

If `jquest.dev` is already registered, the DNS records are in place. If you ever need to
re-add the domain, Settings → Pages → Custom domain.

### Running a deploy by hand

Actions → Deploy to GitHub Pages → Run workflow. Useful after a DNS or settings change,
since neither requires a commit.

### Adding a route

New pages under `src/pages/` are picked up automatically. To add a URL to the built-in index at `/sitemap`, add an entry to the `staticPages` array in `src/pages/sitemap.astro`.

### Adding a route

New pages under `src/pages/` are picked up automatically. To add a URL to the built-in index at `/sitemap`, add an entry to the `staticPages` array in `src/pages/sitemap.astro`.

## 🙏 Acknowledgments

Huge thanks to:

- **[Mark Teekman](https://github.com/markteekman)** and the [Incluud team](https://incluud.dev) for creating the amazing Accessible Astro Starter
- **The Astro team** for building such an incredible framework
- **The web accessibility community** for their continued education

## 📄 License

This project is based on the [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) which is licensed under the MIT License. My customisations and content are also available under the MIT License.

---

## 🔄 Keeping Updated

This site maintains a connection to the upstream Accessible Astro Starter repository to benefit from bug fixes and improvements:

```bash
# To pull updates from the original starter
git fetch upstream
git merge upstream/main
```

This ensures I can benefit from the community's continued improvements while maintaining my personal site.
