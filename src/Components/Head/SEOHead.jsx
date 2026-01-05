import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEOHead = ({ 
    title = "GHL Octane - GoHighLevel Solutions",
    description = "GHL Octane provides professional GoHighLevel (GHL) solutions including CRM setup, automation workflows, funnel design, and white-label agency builds.",
    keywords = "GoHighLevel, GHL, CRM setup, automation, funnel design",
    image = "/assets/images/GHL Octane Final.png"
}) => {
    const location = useLocation();
    const baseUrl = "https://ghloctane.com";
    const fullUrl = `${baseUrl}${location.pathname}`;
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attribute}="${name}"]`);
            
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Update basic meta tags
        updateMetaTag('title', title);
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Update Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:image', imageUrl, true);

        // Update Twitter tags
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', imageUrl);

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', fullUrl);

    }, [title, description, keywords, image, fullUrl, imageUrl]);

    return null;
};

export default SEOHead;

