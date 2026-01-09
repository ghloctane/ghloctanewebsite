import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../src/assets/css/main.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/inline-styles.css';
// Component CSS imports
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

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load Bootstrap JS on client-side only
    if (typeof window !== 'undefined') {
      // Bootstrap JS is loaded via script tag in _document.tsx
      // No additional initialization needed
    }
  }, []);

  return (
    <NavProvider>
      <ModalVideoProvider>
        <Navbar />
        <Sidebar />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTop />
      </ModalVideoProvider>
    </NavProvider>
  );
}

export default MyApp;
