import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/shop/Breadcumb";
import ShopDetails1 from "@/components/shop/ShopDetails1";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Mounjaro Injection | HealthFlexi - Medical Weight Loss Platform",
  description: "View detailed information about Mounjaro (tirzepatide) injections for weight loss and diabetes management.",
};

export default async function ProductDetailPage({ params }) {
  // Await params before accessing its properties (Next.js 15 requirement)
  const resolvedParams = await params;
  
  // Find the product by ID
  const productId = parseInt(resolvedParams.id);
  const product = products.find(p => p.id === productId);
  
  // If product not found, return 404
  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <ShopDetails1 product={product} />
        </div>
        <Footer2 />
      </div>
    </>
  );
}