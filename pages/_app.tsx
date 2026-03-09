import type { AppProps } from 'next/app';
import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Error boundary so a crash shows a message instead of white screen
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App error:', error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 600 }}>
          <h2>Something went wrong</h2>
          <p>Check the browser console for details. Refresh the page to try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// CSS imports — loaded via JS bundle (non-render-blocking)
import '../public/assets/css/vendor/bootstrap-essential.css';
import '../public/assets/css/vendor/fontawesome.css';
import '../public/assets/css/vendor/brands.css';
import '../public/assets/css/vendor/regular.css';
import '../public/assets/css/vendor/solid.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../src/assets/css/main.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/services-bento.css';
import '../components/Components/Button/AnimatedButton.css';
import '../components/Components/CTA/FloatingLines.css';
import '../components/Components/Card/StatsCard.css';
import '../components/Components/Integrations/IntegrationsSection.css';
import '../components/Components/ScrollToTop/ScrollToTop.css';
import '../components/Components/Social/SocialButton.css';

import { ModalVideoProvider } from '../components/Components/Video/ModalVideoContext';
import { NavProvider } from '../components/Components/Context/NavContext';
import Navbar from '../components/Components/Header/header';
import Footer from '../components/Components/Footer/footer';
import Sidebar from '../components/Components/Sidebar/Sidebar';
import ScrollToTop from '../components/Components/ScrollToTop/ScrollToTop';

// next/font — zero layout shift, no render-blocking CSS file needed
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--global-font',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <NavProvider>
        <ModalVideoProvider>
<div className={jakarta.variable}>
            <Navbar />
            <Sidebar />
            <Component {...pageProps} />
            <Footer />
            <ScrollToTop />
          </div>
        </ModalVideoProvider>
      </NavProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
