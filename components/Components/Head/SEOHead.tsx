import { useRouter } from "next/router";
import Head from "next/head";

const SEOHead = ({ 
    title = "GHL Octane - GoHighLevel Solutions",
    description = "GHL Octane provides professional GoHighLevel (GHL) solutions including CRM setup, automation workflows, funnel design, and white-label agency builds.",
    keywords = "GoHighLevel, GHL, CRM setup, automation, funnel design",
    image = "/assets/images/GHL Octane Final.webp"
}) => {
    const router = useRouter();
    const baseUrl = "https://www.ghloctane.com";
    const fullUrl = `${baseUrl}${router.pathname}`;
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <link rel="canonical" href={fullUrl} />
        </Head>
    );
};

export default SEOHead;

