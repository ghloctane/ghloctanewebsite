import dynamic from "next/dynamic";
import HeadTitle from "../components/Components/Head/HeadTitle";
import SEOHead from "../components/Components/Head/SEOHead";
import BannerInnerSection from "../components/Components/Banner/Inner";
import AboutSection from "../components/Components/About/about";
import PartnershipSection from "../components/Components/Partnership/Partnership";

// Below-the-fold components — dynamically loaded with SSR
const OurImpact = dynamic(() => import("../components/Components/Impact/OurImpact"));
const ChooseUsAboutSection = dynamic(() => import("../components/Components/ChooseUs/chooseusabout"));
const GuideBannerSection = dynamic(() => import("../components/Components/Banner/guide"));
const ModalVideoSection = dynamic(() => import("../components/Components/Video/video"));
const DigitalProcessSection = dynamic(() => import("../components/Components/DigitalProcess/digitalstep"));
const TestimonialSection = dynamic(() => import("../components/Components/Testimonial/testimonial"));

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About GHL Octane - GoHighLevel Experts"
        description="Learn about GHL Octane - certified GoHighLevel experts helping agencies and businesses automate operations, improve lead quality, and increase revenue."
        keywords="About GHL Octane, GoHighLevel experts, GHL certified, automation specialists"
      />
      <HeadTitle title="About - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="About GHL Octane" currentPage="About Us" />
      <AboutSection />
      <PartnershipSection />
      <OurImpact />
      <ChooseUsAboutSection />
      <GuideBannerSection />
      <ModalVideoSection />
      <DigitalProcessSection />
      <TestimonialSection />
    </>
  );
}
