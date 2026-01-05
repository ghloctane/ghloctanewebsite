import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./Page/Home"));
const AboutPage = lazy(() => import("./Page/About"));
const ServicePage = lazy(() => import("./Page/Service"));
const CaseStudiesPage = lazy(() => import("./Page/CaseStudies"));
const TeamPage = lazy(() => import("./Page/Team"));
const PricingPage = lazy(() => import("./Page/Pricing"));
const TestimonialPage = lazy(() => import("./Page/Testimonial"));
const NotFoundPage = lazy(() => import("./Page/NotFound"));
const FaqPage = lazy(() => import("./Page/FAQs"));
const BlogPage = lazy(() => import("./Page/Blog"));
const ContactPage = lazy(() => import("./Page/Contact"));
const ServiceDetailPage = lazy(() => import("./Page/ServiceDetail"));
const SinglePostPage = lazy(() => import("./Page/SinglePost"));
const PortfolioPage = lazy(() => import("./Page/Portfolio"));
const BookACallPage = lazy(() => import("./Page/BookACall"));

// Loading component
const PageLoader = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh' 
    }}>
        <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #27428c',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }}></div>
    </div>
);

function AppRouter(){
    return (
        <Suspense fallback={<PageLoader />}>
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
                <Route path="404_page" element={<NotFoundPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    );
}

export default AppRouter;