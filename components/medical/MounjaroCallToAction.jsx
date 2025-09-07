"use client";
import Link from "next/link";

export default function MounjaroCallToAction() {
  return (
    <div className="section py-6 lg:py-8 xl:py-12 bg-gradient-to-r from-primary to-secondary">
      <div className="container max-w-4xl">
        <div className="panel text-center text-white">
          <div className="vstack gap-4 lg:gap-6">
            <div className="vstack gap-2">
              <h2 className="h3 lg:h2 text-white m-0">
                Ready to Start Your Weight Loss Journey?
              </h2>
              <p className="fs-5 lg:fs-4 text-white text-opacity-90">
                Take our comprehensive medical assessment to see if Mounjaro is right for you
              </p>
            </div>
            
            <div className="hstack justify-center gap-3 flex-wrap">
              <Link
                href="/mounjaro-assessment"
                className="btn btn-lg btn-white text-primary fw-bold"
              >
                Start Free Assessment
              </Link>
              
              <Link
                href="/shop"
                className="btn btn-lg btn-outline-white text-white border-white"
              >
                Browse Products
              </Link>
            </div>
            
            <div className="hstack justify-center gap-6 flex-wrap text-white text-opacity-80 fs-7">
              <div className="hstack gap-2">
                <i className="icon-1 unicon-checkmark-circle"></i>
                <span>FDA-Approved Treatment</span>
              </div>
              <div className="hstack gap-2">
                <i className="icon-1 unicon-checkmark-circle"></i>
                <span>Licensed Healthcare Providers</span>
              </div>
              <div className="hstack gap-2">
                <i className="icon-1 unicon-checkmark-circle"></i>
                <span>Personalized Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
