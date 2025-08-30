import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Footer1 from "@/components/footers/Footer1";
import Terms from "@/components/otherPages/Terms";

export const metadata = {
  title: "Terms & Conditions | HealthFlexi - Medical Weight Loss Platform",
  description:
    "Read our comprehensive terms and conditions for HealthFlexi's medical weight loss services. Understand your rights, responsibilities, and our service agreements for GLP-1 medication programs.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <div className="theme-3">
          <Topbar />
          <Header6 />
        </div>
        <div id="wrapper" className="wrap">
          <Terms />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
