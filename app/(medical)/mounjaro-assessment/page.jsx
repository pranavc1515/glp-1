import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import MounjaroAssessment from "@/components/medical/MounjaroAssessment";

export const metadata = {
  title: "Mounjaro Eligibility Assessment | HealthFlexi - Medical Weight Loss",
  description: "Complete our medical questionnaire to determine your eligibility for Mounjaro weight loss treatment. Get personalized recommendations from licensed healthcare providers.",
};

export default function MounjaroAssessmentPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <MounjaroAssessment />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
