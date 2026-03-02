export interface Tool {
    id: number;
    title: string;
    image: string;
    description: string;
    gradient: string;
    price: string;
    priceLabel: string;
    ctaText: string;
    ctaLink: string;
    videoId?: string; // Optional video ID or URL
    isVimeo?: boolean; // Whether it's a Vimeo link
}

export const allTools: Tool[] = [
    {
        id: 1,
        title: "Pipeline Cloner",
        image: "/assets/images/tools/pipeline-cloner.png",
        description: "Clone entire GoHighLevel pipelines with all stages and settings in just one click. Save hours of manual setup when replicating pipelines across sub-accounts or building new client workspaces.",
        gradient: "linear-gradient(135deg, rgba(39, 66, 140, 0.95) 0%, rgba(30, 50, 110, 0.98) 50%, rgba(25, 40, 90, 0.95) 100%)",
        price: "USD 149",
        priceLabel: "Lifetime Deal",
        ctaText: "Buy Now",
        ctaLink: "/book-a-call"
    },
    {
        id: 2,
        title: "Reset Button Add-on",
        image: "/assets/images/tools/reset-button.png",
        description: "Instantly clear all test data, contacts, and workflow histories with a single click. The Reset Button add-on ensures your GoHighLevel funnels and pipelines are pristine before handing them off to clients.",
        gradient: "linear-gradient(135deg, rgba(39, 66, 140, 0.95) 0%, rgba(30, 50, 110, 0.98) 50%, rgba(25, 40, 90, 0.95) 100%)",
        price: "USD 99",
        priceLabel: "Lifetime Deal",
        ctaText: "Buy Now",
        ctaLink: "/book-a-call"
        // Leaving videoId empty to show it supports tools without videos
    },
];
