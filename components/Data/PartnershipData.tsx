export interface PartnershipItem {
  id: number;
  name: string;
  logo: string;
}

const partnerships: PartnershipItem[] = [
  { id: 1, name: "Adobe", logo: "/assets/images/adope.webp" },
  { id: 2, name: "Canva", logo: "/assets/images/canva.webp" },
  { id: 3, name: "CSS", logo: "/assets/images/css.webp" },
  { id: 4, name: "GHL", logo: "/assets/images/ghl.webp" },
  { id: 5, name: "HTML", logo: "/assets/images/html.webp" },
  { id: 6, name: "JavaScript", logo: "/assets/images/js.webp" },
  { id: 7, name: "Slack", logo: "/assets/images/slack.webp" },
  { id: 8, name: "Shopify", logo: "/assets/images/shopify.webp" },
  { id: 9, name: "Stripe", logo: "/assets/images/stripe.webp" },
  { id: 10, name: "WordPress", logo: "/assets/images/wordpress.webp" },
];

export default partnerships;
