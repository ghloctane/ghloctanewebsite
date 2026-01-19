import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary SEO Meta Tags */}
        <meta name="title" content="GHL Octane - Professional GoHighLevel Solutions for Agencies & Businesses" />
        <meta name="description" content="GHL Octane provides professional GoHighLevel (GHL) solutions including CRM setup, automation workflows, funnel design, white-label agency builds, and marketing automation. Transform your business with expert GHL implementation." />
        <meta name="keywords" content="GoHighLevel, GHL, GoHighLevel setup, GHL automation, CRM setup, funnel design, marketing automation, white label agency, GHL integration, lead generation, sales automation, GoHighLevel agency, GHL consultant, automation workflow, landing page design" />
        <meta name="author" content="GHL Octane" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#27428c" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ghloctane.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ghloctane.com/" />
        <meta property="og:title" content="GHL Octane - Professional GoHighLevel Solutions for Agencies & Businesses" />
        <meta property="og:description" content="Transform your business with expert GoHighLevel implementation. CRM setup, automation workflows, funnel design, and white-label agency solutions." />
        <meta property="og:image" content="https://ghloctane.com/assets/images/GHL Octane Final.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="GHL Octane - GoHighLevel Solutions" />
        <meta property="og:site_name" content="GHL Octane" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ghloctane.com/" />
        <meta name="twitter:title" content="GHL Octane - Professional GoHighLevel Solutions" />
        <meta name="twitter:description" content="Transform your business with expert GoHighLevel implementation. CRM setup, automation workflows, funnel design, and white-label agency solutions." />
        <meta name="twitter:image" content="https://ghloctane.com/assets/images/GHL Octane Final.webp" />
        <meta name="twitter:image:alt" content="GHL Octane - GoHighLevel Solutions" />
        
        {/* Google Search Console Verification - Add your verification code here */}
        {/* <meta name="google-site-verification" content="YOUR_ACTUAL_VERIFICATION_CODE" /> */}
        
        {/* Additional SEO */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="application-name" content="GHL Octane" />
        
        {/* Structured Data (JSON-LD) for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GHL Octane",
              "url": "https://ghloctane.com",
              "logo": "https://ghloctane.com/assets/images/GHL Octane Final.webp",
              "description": "Professional GoHighLevel Solutions for Agencies & Businesses",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@ghloctane.com",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://facebook.com",
                "https://youtube.com",
                "https://instagram.com",
                "https://linkedin.com"
              ]
            })
          }}
        />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        
        {/* Performance hints for low-end devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS - Load synchronously for proper layout */}
        <link rel="stylesheet" href="/assets/css/vendor/font-family-plus-jakarta-sans.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/vendor/brands.css" />
        <link rel="stylesheet" href="/assets/css/vendor/regular.css" />
        <link rel="stylesheet" href="/assets/css/vendor/solid.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11.2.10/swiper-bundle.min.css" />
        
        {/* Non-Critical CSS - Deferred loading */}
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" as="style" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
                document.head.appendChild(link);
              });
            `
          }}
        />
        
        
        <link rel="icon" href="/assets/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        {/* Bootstrap JS - Load after page content */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          async
        />
        <NextScript />
      </body>
    </Html>
  );
}
