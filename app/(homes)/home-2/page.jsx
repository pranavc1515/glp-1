import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Blogs from "@/components/homes/home-2/Blogs";
import Cta from "@/components/homes/home-2/Cta";
import Faq from "@/components/homes/home-2/Faq";
import Features from "@/components/homes/home-2/Features";
import Feedback from "@/components/homes/home-2/Feedback";
import Hero from "@/components/homes/home-2/Hero";
import KeyFeatures from "@/components/homes/home-2/KeyFeatures";
import Pricing from "@/components/common/Pricing";
import React from "react";
export const metadata = {
  title:
    "GLP-1 Weight Loss Program | Medical Supervision & Results | Lexend",
  description:
    "Transform your health with our GLP-1 weight loss program. Expert endocrinologist care, proven results up to 20% weight loss, and comprehensive support.",
};
export default function HomePage2() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <KeyFeatures />
          <Pricing />
          <Faq />
          <Feedback />
          <Blogs />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
