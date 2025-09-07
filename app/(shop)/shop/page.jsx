import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Footer6 from "@/components/footers/Footer6";
import Breadcumb from "@/components/shop/Breadcumb";
import Shop1 from "@/components/shop/Shop1";

export const metadata = {
  title: "Shop | HealthFlexi - Medical Weight Loss Platform",
  description: "Browse our selection of medical weight loss products and services.",
};

export default function ShopPage1() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            <Breadcumb />
            <Shop1 />
          </div>
          <Footer6 />
        </div>
      </div>
    </>
  );
}
