import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Footer1 from "@/components/footers/Footer1";
import Privacy from "@/components/otherPages/Privacy";

export const metadata = {
  title: "Privacy Policy | HealthFlexi - Medical Weight Loss Platform",
  description:
    "Learn how HealthFlexi protects your privacy and personal health information. Our comprehensive privacy policy covers data collection, usage, and your rights as a user of our medical weight loss services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <div className="theme-3">
          <Topbar />
          <Header6 />
        </div>
        <div id="wrapper" className="wrap">
          <Privacy />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
