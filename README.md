# GHL Octane Website

A high-performance **Next.js 16** marketing site for GHL Octane (GoHighLevel solutions), built with React 19 and TypeScript.

## Features

- **Next.js 16** – App Router–ready with file-based routing in `pages/`
- **React 19** – Latest React with modern features
- **TypeScript** – Typed codebase (path aliases: `@/components`, `@/pages`, etc.)
- **Performance** – Code splitting, lazy loading, optimized images (WebP/AVIF)
- **Mobile-first** – Responsive layout with mobile optimizations
- **SEO** – Meta tags, `sitemap.xml`, `robots.txt`
- **Production** – Deployed on Vercel with cache headers

## Tech stack

- **Next.js 16** – Framework
- **React 19** – UI
- **TypeScript** – Typing
- **Bootstrap 5** – Layout (vendor CSS in `public/assets/css/`)
- **Swiper** – Carousels/sliders
- **Three.js** – 3D background (FloatingLines, client-only)
- **react-intersection-observer** – Scroll/visibility (e.g. CounterOnScroll)

## Getting started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Bundle analysis
npm run analyze
```

## Project structure

```
├── pages/                 # Next.js pages (file-based routing)
│   ├── _app.tsx           # App shell, fonts, global CSS, layout
│   ├── _document.tsx      # HTML document, meta, preconnect
│   ├── index.tsx          # Home page
│   └── service/[id].tsx   # Service detail (getStaticPaths/getStaticProps)
├── components/
│   ├── Components/        # UI components (Header, Footer, Banner, etc.)
│   └── Data/              # Static content (AllServicesData, testimonials, etc.)
├── src/
│   └── assets/css/        # Global CSS (main.css, responsive.css)
├── public/
│   ├── assets/            # Vendor CSS, images, webfonts
│   ├── _redirects
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.js
├── tsconfig.json
└── vercel.json            # Cache headers for deployment
```

- **Pages** use `pages/`; the only dynamic route is `service/[id]`.
- **UI** lives in `components/Components/`; **data** in `components/Data/`.
- **Forms/booking** are external iframes (LeadConnector/GoHighLevel); no form API in this repo.

## Configuration

- **next.config.js** – Images, headers, webpack (Three.js fallbacks), `optimizePackageImports` for swiper/react-icons/three.
- **TypeScript** – Build fails on type errors; fix types before relying on CI.
- **Vercel** – Deploy with `vercel`; `vercel.json` sets cache headers for `/assets/`, `/_next/static/`, and fonts.

## Deployment

```bash
npm run build
# Deploy to Vercel (or your host); Vercel runs `next build` automatically.
```

## Notes

- **FloatingLines** (Three.js) loads only on the client and is disabled on mobile for performance.
- **Images** – Next Image with WebP/AVIF; optional lazy loading where needed.
- **Content** – All content is static (no CMS); edit `components/Data/*` and related components.

## License

Private project – GHL Octane.

---

**Last updated:** 2025  
**Status:** Production ready
