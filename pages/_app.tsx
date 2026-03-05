import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans } from 'next/font/google';

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
  );
}

export default MyApp;
