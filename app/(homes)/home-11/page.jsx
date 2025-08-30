import Header1 from "@/components/headers/Header1";
import Features from "@/components/homes/home-11/Features";
import Hero from "@/components/homes/home-11/Hero";
import Integretion from "@/components/homes/home-11/Integretion";
import Facts from "@/components/homes/home-11/Facts";
import Pricing from "@/components/homes/home-11/Pricing";
import Feedback from "@/components/homes/home-11/Feedback";
import Timeline from "@/components/homes/home-11/Timeline";
import Team from "@/components/homes/home-11/Team";
import Cta from "@/components/homes/home-11/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Calculator from "@/components/homes/home-11/Calculator";
import Features2 from "@/components/homes/home-11/Features2";
import Howworks from "@/components/homes/home-11/Howworks";
export const metadata = {
  title:
    "Medical Weight Loss with GLP-1 Injections | healthflexi Weight Loss Platform",
  description:
    "Lose up to 20% body weight safely with GLP-1 injections, medical supervision, and personalized care from endocrinologists. Book your free consultation today.",
};
export default function HomePage1() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        {/* <Header1 /> */}
        <div className="theme-3">
        <Topbar />
        <Header6 />
        </div>
        <div id="wrapper" className="wrap">
          <div className="theme-3">
          <Hero />
          </div>
         
          <Features />
          <div className="theme-4">
          <Features2 />
          </div>
          <Howworks />
          <Integretion />
          <div className="theme-4">
          <Calculator />
          </div>
          <Facts />
          <Feedback />
          <Timeline />
          <Team />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
