import { features11 } from "@/data/features";
import React from "react";

export default function Features2() {

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                GLP-1 Benefits
              </span>
              <h2 className="h3 lg:h2 m-0">
                GLP-1 helps you lose weight naturally
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                GLP-1s are a naturally occurring peptide in the human body. They make you feel full for longer, naturally reducing appetite and cravings.
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 lg:g-6 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {features11.map((benefit, index) => (
                <div key={index} className={benefit.order}>
                  <div className="features-item vstack items-center justify-center text-center gap-4">
                    <div className="icon-box cstack w-48px h-48px dark:bg-white rounded">
                      <img
                        className="w-24px xl:w-32px"
                        alt={benefit.alt}
                        src={benefit.src}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="panel">
                      <div className="vstack gap-1">
                        <h3 className="title h6 lg:h5 m-0">{benefit.title}</h3>
                        <p className="desc fs-6 opacity-60 dark:opacity-90">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="pre-cta vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-6 xl:mt-10"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="mb-2 lg:mb-3">
                <a
                  href="/mounjaro-consultation"
                  className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                >
                  <span>Check Eligibility</span>
                </a>
              </div>
              <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white sm-flex-column">
                <div className="hstack justify-center gap-2">
                  <b>Excellent</b>
                  <div className="rating panel">
                    <div className="hstack justify-center gap-narrow">
                      <i
                        className="icon unicon-star-filled text-white p-narrow"
                        style={{ backgroundColor: "#00b67a" }}
                      />
                      <i
                        className="icon unicon-star-filled text-white p-narrow"
                        style={{ backgroundColor: "#00b67a" }}
                      />
                      <i
                        className="icon unicon-star-filled text-white p-narrow"
                        style={{ backgroundColor: "#00b67a" }}
                      />
                      <i
                        className="icon unicon-star-filled text-white p-narrow"
                        style={{ backgroundColor: "#00b67a" }}
                      />
                      <i
                        className="icon unicon-star-filled text-white p-narrow"
                        style={{ backgroundColor: "#00b67a" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="hstack justify-center gap-narrow">
                  <span className="desc rtl:order-first">
                    Trusted by thousands of patients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
