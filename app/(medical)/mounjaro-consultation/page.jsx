import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import MounjaroConsultation from "@/components/medical/MounjaroConsultation";

export const metadata = {
  title: "Mounjaro Medical Consultation | HealthFlexi - Licensed Healthcare Providers",
  description: "Book your consultation with licensed healthcare providers for Mounjaro prescription. Secure telehealth appointments available.",
};

export default function MounjaroConsultationPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <MounjaroConsultation />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
