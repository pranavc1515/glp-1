import Header1 from "@/components/headers/Header1";
import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Footer6 from "@/components/footers/Footer6";

// Home-11 specific components
import Hero from "@/components/homes/home-11/Hero";
import Features from "@/components/homes/home-11/Features";
import Features2 from "@/components/homes/home-11/Features2";
import Howworks from "@/components/homes/home-11/Howworks";
import Integretion from "@/components/homes/home-11/Integretion";
import Calculator from "@/components/homes/home-11/Calculator";
import Facts from "@/components/homes/home-11/Facts";
import Feedback from "@/components/homes/home-11/Feedback";
import Timeline from "@/components/homes/home-11/Timeline";
import Team from "@/components/homes/home-11/Team";
import Pricing from "@/components/homes/home-11/Pricing";
import Cta from "@/components/homes/home-11/Cta";

// Shared components from home-7
import Testimonials from "@/components/homes/home-7/Testimonials";
import Blogs from "@/components/homes/home-11/Blogs";
import Faqs from "@/components/homes/home-7/Faqs";

export const metadata = {
  title: "Medical Weight Loss with GLP-1 Injections | healthflexi Weight Loss Platform",
  description: "Lose up to 20% body weight safely with GLP-1 injections, medical supervision, and personalized care from endocrinologists. Book your free consultation today.",
};

export default function HomePage11() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            {/* Hero Section */}
            <div className="theme-3">
              <Hero />
            </div>

            {/* Main Content Sections */}
            <div id="features-section">
              <Features />
            </div>
            
            <div className="theme-4">
              <Features2 />
            </div>
            
            <div id="how-it-works-section">
              <Howworks />
            </div>
            <Integretion />
            
            <div id="calculator-section" className="theme-4">
              <Calculator />
            </div>
            
            <Facts />
            <Feedback />
            <Timeline />
            <div id="team-section">
              <Team />
            </div>

            {/* Additional Content Sections */}
            <div className="theme-3">
              <div id="testimonials-section">
                <Testimonials />
              </div>
              <Blogs />
              <div id="faq-section">
                <Faqs />
              </div>
            </div>
            
            <Cta />
          </div>
          <Footer6 />
        </div>
      </div>
    </>
  );
}
