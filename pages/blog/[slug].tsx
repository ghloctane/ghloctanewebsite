import React from "react";
import HeadTitle from "../../components/Components/Head/HeadTitle";
import BannerInnerSection from "../../components/Components/Banner/Inner";
import BlogPostSection from "../../components/Components/Blog/SinglePost";

export default function SinglePostPage() {
  return (
    <>
      <HeadTitle title="Single Post - GHL Octane - GoHighLevel Solutions" />
      <BannerInnerSection title="Growth Strategies for Digital Businesse" currentPage="Single Post" />
      <BlogPostSection />
    </>
  );
}
