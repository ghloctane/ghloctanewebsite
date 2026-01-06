import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import CaseStudiesPage from "./Page/CaseStudies";
import TeamPage from "./Page/Team";
import PricingPage from "./Page/Pricing";
import TestimonialPage from "./Page/Testimonial";
import NotFoundPage from "./Page/NotFound";
import FaqPage from "./Page/FAQs";
import BlogPage from "./Page/Blog";
import ContactPage from "./Page/Contact";
import ServiceDetailPage from "./Page/ServiceDetail";
import SinglePostPage from "./Page/SinglePost";
import PortfolioPage from "./Page/Portfolio";
import BookACallPage from "./Page/BookACall";
import SpeedInsightsPage from "./Page/SpeedInsights";

function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="service" element={<ServicePage />}/>
            <Route path="service/:id" element={<ServiceDetailPage />}/>
            <Route path="case_studies" element={<CaseStudiesPage />}/>
            <Route path="team" element={<TeamPage />}/>
            <Route path="pricing" element={<PricingPage />}/>
            <Route path="Testimonial" element={<TestimonialPage />}/>
            <Route path="faq" element={<FaqPage />}/>
            <Route path="blog" element={<BlogPage />}/>
            <Route path="single_post" element={<SinglePostPage />}/>
            <Route path="contact" element={<ContactPage />}/>
            <Route path="book-a-call" element={<BookACallPage />}/>
            <Route path="portfolio" element={<PortfolioPage />}/>
            <Route path="speed-insights-guide" element={<SpeedInsightsPage />}/>
            <Route path="404_page" element={<NotFoundPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    );
}

export default AppRouter;