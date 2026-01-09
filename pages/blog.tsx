import React from "react";
import HeadTitle from "../components/Components/Head/HeadTitle";
import BannerInnerSection from "../components/Components/Banner/Inner";
import BlogSection from "../components/Components/Blog/blog";

export default function BlogPage() {
  return (
    <>
      <HeadTitle title="Blog - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Our Blog" currentPage="Blog" />
      <BlogSection />            
    </>
  );
}
