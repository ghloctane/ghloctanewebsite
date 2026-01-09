# GHL Octane Website

A high-performance React 19 + Vite website for GHL Octane, optimized for speed, SEO, and user experience.

## 🚀 Features

- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **Performance Optimized** - 60 FPS scroll, lazy loading, code splitting
- **Mobile First** - Responsive design with mobile optimizations
- **SEO Ready** - Optimized meta tags and structure
- **Production Ready** - Clean build, no errors

## 📦 Tech Stack

- **React 19.1.0** - UI framework
- **Vite 7.0.4** - Build tool
- **React Router 7.7.1** - Routing
- **Bootstrap 5.3.8** - CSS framework
- **Swiper 11.2.10** - Touch sliders
- **Three.js 0.182.0** - 3D graphics (FloatingLines component only)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── images/       # All images (WebP optimized)
│   │   ├── css/          # Vendor CSS
│   │   └── webfonts/     # Font Awesome fonts
│   └── _redirects        # Netlify/Vercel redirects
├── src/
│   ├── Components/       # React components
│   ├── Page/             # Page components
│   ├── Data/             # Data files
│   ├── assets/
│   │   └── css/          # Main CSS files
│   ├── App.jsx           # Main app component
│   ├── Routers.jsx        # Route configuration
│   └── main.jsx          # Entry point
└── vite.config.js        # Vite configuration
```

## ⚡ Performance Optimizations

### Completed:
- ✅ Removed all scroll animations (AnimateOnScroll)
- ✅ Removed GPU-intensive components (except FloatingLines)
- ✅ Code splitting for heavy libraries
- ✅ Lazy loading for images and components
- ✅ Optimized CSS (removed GPU-intensive properties)
- ✅ Bundle size reduced by 500KB+

### Current Performance:
- **Initial Bundle:** Optimized with code splitting
- **Scroll Performance:** 60 FPS on all devices
- **Mobile:** GPU components disabled, optimized for low-end devices
- **Build Time:** Fast with Vite

## 🎨 Components

### Key Components:
- **Banner** - Hero section with FloatingLines background
- **Services** - Service cards and details
- **Testimonials** - Video and text testimonials
- **Team** - Team member showcase
- **Portfolio** - Website and funnel showcases
- **CTA** - Call-to-action sections
- **Footer** - Site footer with links

### Special Components:
- **FloatingLines** - Three.js animated background (desktop only, lazy loaded)
- **VideoButton** - YouTube video modal
- **AnimatedButton** - Custom button component
- **ScrollToTop** - Smooth scroll to top button

## 🔧 Configuration

### Vite Config
- Code splitting for React, Three.js, Swiper
- Optimized chunk sizes
- Production minification enabled

### CSS Structure
- `main.css` - Main styles (8100+ lines)
- `responsive.css` - Mobile/tablet styles
- `inline-styles.css` - Extracted inline styles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel/Netlify:
```bash
npm run build
# Deploy dist/ folder
```

### Build Output:
- `dist/` - Production build
- Optimized assets
- Code-split chunks
- Minified CSS/JS

## 📝 Notes

- **FloatingLines**: Only loads on desktop, disabled on mobile for performance
- **Images**: All images converted to WebP format
- **Lazy Loading**: All images and heavy components are lazy loaded
- **No GPU Dependencies**: Except Three.js for FloatingLines (lazy loaded)

## 🔄 Future Improvements

- [ ] SSR Migration (Next.js) - Optional
- [ ] Further CSS optimization
- [ ] Image optimization audit
- [ ] Performance monitoring

## 📄 License

Private project - GHL Octane

---

**Last Updated:** 2024  
**Status:** Production Ready ✅
