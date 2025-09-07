import React from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';
import { plans } from '@/data/pricing';

export const metadata = {
  title: 'Pricing | HealthFlexi Medical Weight Loss Plans',
  description: 'Affordable medical weight loss plans with GLP-1 medications. Choose from our flexible pricing options for safe, supervised weight loss treatment.',
};

export default function PricingPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            
            {/* Header Section */}
            <div className="section panel py-6 xl:py-9 bg-secondary dark:bg-gray-900">
              <div className="container max-w-lg">
                <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                  <div
                    className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <Link 
                      href="/" 
                      className="btn btn-sm btn-outline-primary mb-4"
                    >
                      ← Back to Home
                    </Link>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                      HealthFlexi Pricing
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      Transparent, affordable pricing for medical weight loss with GLP-1 medications. 
                      No hidden fees, no surprises - just effective treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Plans Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  {plans.map((plan, index) => (
                    <div
                      key={plan.id}
                      className="col"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className={`panel rounded-2 p-4 lg:p-6 h-100 ${
                        plan.isPopular 
                          ? 'bg-primary-50 dark:bg-primary-900 border border-primary border-opacity-20' 
                          : 'bg-white dark:bg-gray-800'
                      }`}>
                        
                        {/* Plan Header */}
                        <div className="text-center mb-4">
                          {plan.isPopular && (
                            <div className="badge bg-primary text-white mb-3">
                              Most Popular
                            </div>
                          )}
                          <h3 className={`h4 mb-2 ${
                            plan.isPopular 
                              ? 'text-primary dark:text-primary-200' 
                              : 'text-dark dark:text-white'
                          }`}>
                            {plan.name}
                          </h3>
                          <div className="mb-3">
                            <span className={`h2 fw-bold ${
                              plan.isPopular 
                                ? 'text-primary dark:text-primary-200' 
                                : 'text-dark dark:text-white'
                            }`}>
                              ${plan.price}
                            </span>
                            <span className={`fs-6 ${
                              plan.isPopular 
                                ? 'text-primary dark:text-primary-200' 
                                : 'text-dark dark:text-white'
                            } text-opacity-70`}>
                              /{plan.period}
                            </span>
                          </div>
                          <p className={`fs-6 ${
                            plan.isPopular 
                              ? 'text-primary dark:text-primary-200' 
                              : 'text-dark dark:text-white'
                          } text-opacity-70`}>
                            {plan.description}
                          </p>
                        </div>

                        {/* Features List */}
                        <div className="mb-4">
                          <ul className="list-unstyled vstack gap-2">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="hstack gap-2">
                                <i className={`icon unicon-checkmark text-success ${
                                  plan.isPopular ? 'text-primary dark:text-primary-200' : ''
                                }`}></i>
                                <span className={`fs-6 ${
                                  plan.isPopular 
                                    ? 'text-primary dark:text-primary-200' 
                                    : 'text-dark dark:text-white'
                                }`}>
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                          <Link 
                            href={plan.cta.href}
                            className={`btn w-100 ${
                              plan.isPopular 
                                ? 'btn-primary' 
                                : 'btn-outline-primary'
                            }`}
                          >
                            {plan.cta.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    What's Included in Every Plan
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Comprehensive medical weight loss support with every subscription
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-4 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-primary dark:text-primary-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Medical Supervision</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Licensed healthcare providers monitor your progress and adjust treatment as needed
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-syringe text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">GLP-1 Medications</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        FDA-approved medications delivered directly to your door with proper dosing
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-video-camera text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Telehealth Consultations</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Regular virtual check-ins with your healthcare provider for ongoing support
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-warning-100 dark:bg-warning-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-calculator text-warning dark:text-warning-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Health Tools</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Access to comprehensive health calculators and progress tracking tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container max-w-4xl">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Frequently Asked Questions
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Common questions about our pricing and services
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">Is insurance accepted?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        We work with most major insurance providers. Our team will help verify your coverage 
                        and maximize your benefits for GLP-1 medications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">Can I change plans later?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Yes! You can upgrade or downgrade your plan at any time. Changes take effect 
                        at your next billing cycle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">What if I'm not eligible?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        If you're not eligible for GLP-1 medications, we'll work with you to find 
                        alternative weight loss solutions that fit your needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6">
                      <h4 className="h5 mb-3 text-dark dark:text-white">Is there a money-back guarantee?</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        We offer a 30-day satisfaction guarantee. If you're not completely satisfied, 
                        we'll provide a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container max-w-lg">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-6 lg:p-8 text-center">
                    <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-primary dark:text-primary-200">
                      Start Your Weight Loss Journey Today
                    </h2>
                    <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                      Choose the plan that's right for you and begin your transformation with 
                      medical-grade weight loss treatment.
                    </p>
                    <div className="hstack gap-3 justify-center flex-wrap">
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-primary btn-lg"
                      >
                        Check Eligibility
                      </Link>
                      <Link 
                        href="/page-contact" 
                        className="btn btn-outline-primary btn-lg"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Footer6 />
        </div>
      </div>
    </>
  );
}
