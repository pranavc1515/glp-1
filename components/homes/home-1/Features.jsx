"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-xl lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                How Our Program Works
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                4 Key Areas of Excellence - We combine clinically proven GLP-1 medication with personalized medical care, convenient delivery, and ongoing support to help you achieve sustainable weight loss without the struggle of traditional diets.
              </p>
            </div>
            <div className="panel vstack gap-4 xl:gap-6">
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="main-features-nav hstack text-center overflow-auto"
                  data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                  role="tablist"
                >
                  <li
                    className={`${activeTab == 1 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(1)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Clinical Results</a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    className={`${activeTab == 2 ? "uc-active" : ""}`}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Personalized Care</a>
                  </li>
                  <li
                    className={`${activeTab == 3 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(3)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">
                      Convenient Delivery
                    </a>
                  </li>
                  <li
                    className={`${activeTab == 4 ? "uc-active" : ""}`}
                    onClick={() => setActiveTab(4)}
                    role="presentation"
                  >
                    <a className="h6 lg:h5 text-nowrap m-0">Ongoing Support</a>
                  </li>
                </ul>
              </div>
              <div
                className="main-features-switcher uc-switcher overflow-hidden"
                role="presentation"
                style={{ touchAction: "pan-y pinch-zoom" }}
              >
                {activeTab == 1 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Clinically proven weight loss results"
                              src="/assets/images/template/feature-image-02.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Clinically Proven Results - Up to 21% Weight Loss
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Our GLP-1 program delivers 5x better results than diet and exercise alone. Clinical studies show average weight loss of 15-21% in 16 months. The medication naturally reduces hunger and helps you feel satisfied with smaller portions - no willpower required.
                                  </p>
                                 <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>See clinical results</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Personalized weight loss care"
                              src="/assets/images/template/feature-image-03.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Personalized Medical Care & Weekly Coaching
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Start with a comprehensive health assessment and get matched with specialist endocrinologists. Your personalized plan includes weekly nutrition coaching, custom meal plans, and monthly doctor check-ins - all tailored to your lifestyle and goals.
                                  </p>
                                  <a
                                    href="#"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Learn about our process</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="Convenient medication delivery"
                              src="/assets/images/template/feature-image-01.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    Convenient At-Home Delivery & Smart Tracking
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Skip the pharmacy lines - your medication arrives discreetly at your door with easy pre-filled pens. Our app connects your smart scale, fitness tracker, and meal logging in one place. Everything you need, delivered when you need it.
                                  </p>
                                <Link
                                    href="/page-features"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>How it works</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="uc-active">
                    <div className="feature-item panel">
                      <div className="row child-cols col-match justify-between g-4">
                        <div className="col-12 sm:col-6">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              alt="24/7 support and guidance"
                              src="/assets/images/template/feature-image-04.jpg"
                              width="1200"
                              height="1200"
                            />
                          </figure>
                        </div>
                        <div className="col-12 sm:col-6">
                          <div className="panel">
                            <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                              <div>
                                <div className="panel vstack gap-2">
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    24/7 Support & Long-term Success Planning
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    Access instant support via chat for any questions about side effects, nutrition, or progress. Get ongoing coaching, habit-building guidance, and a structured plan for maintaining your results even after medication ends. We're always just a message away.
                                  </p>
                                  <Link
                                    href="/mounjaro-consultation"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Check Eligibility</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
