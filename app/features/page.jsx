import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';
import { features } from '@/data/features';

export const metadata = {
  title: 'Features | HealthFlexi Medical Weight Loss Platform',
  description: 'Discover HealthFlexi\'s comprehensive features for safe, medically supervised weight loss with GLP-1 medications, telehealth consultations, and personalized care.',
};

export default function FeaturesPage() {
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
                      HealthFlexi Features
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      Comprehensive medical weight loss platform with GLP-1 medications, 
                      telehealth consultations, and personalized care from licensed healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Features Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-4 col-match g-4 lg:g-6">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className="col"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 h-100 text-center">
                        <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                          <i className={`icon ${feature.iconClass} text-primary dark:text-primary-200`}></i>
                        </div>
                        <h3 className="h5 mb-3 text-dark dark:text-white">{feature.title}</h3>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Medical Features Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Medical Weight Loss Features
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Advanced medical features designed for safe and effective weight loss
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Licensed Healthcare Providers</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Board-certified doctors and endocrinologists provide personalized medical supervision
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-syringe text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">GLP-1 Medications</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Access to FDA-approved GLP-1 medications like Mounjaro for effective weight loss
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-warning-100 dark:bg-warning-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-video-camera text-warning dark:text-warning-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Telehealth Consultations</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Convenient virtual consultations from the comfort of your home
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Tools Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Health Assessment Tools
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Comprehensive tools to evaluate your health and weight loss readiness
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 lg:p-6 h-100">
                      <div className="hstack gap-3 mb-4">
                        <div className="w-48px h-48px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-calculator text-primary dark:text-primary-200"></i>
                        </div>
                        <div>
                          <h3 className="h5 mb-1 text-primary dark:text-primary-200">Health Calculators</h3>
                          <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            16 comprehensive health calculators
                          </p>
                        </div>
                      </div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                        BMI, BMR, body fat percentage, metabolic age, and more to track your health metrics
                      </p>
                      <Link 
                        href="/calculators" 
                        className="btn btn-primary btn-sm"
                      >
                        View All Calculators
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 lg:p-6 h-100">
                      <div className="hstack gap-3 mb-4">
                        <div className="w-48px h-48px bg-success-100 dark:bg-success-800 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-clipboard text-success dark:text-success-200"></i>
                        </div>
                        <div>
                          <h3 className="h5 mb-1 text-success dark:text-success-200">Medical Assessment</h3>
                          <p className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            Comprehensive eligibility evaluation
                          </p>
                        </div>
                      </div>
                      <p className="fs-6 text-success dark:text-success-200 text-opacity-80 mb-4">
                        Detailed medical assessment to determine GLP-1 medication eligibility
                      </p>
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-success btn-sm"
                      >
                        Start Assessment
                      </Link>
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
                      Ready to Start Your Weight Loss Journey?
                    </h2>
                    <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                      Experience the power of medical-grade weight loss with HealthFlexi's 
                      comprehensive platform and expert healthcare team.
                    </p>
                    <div className="hstack gap-3 justify-center flex-wrap">
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-primary btn-lg"
                      >
                        Start Free Assessment
                      </Link>
                      <Link 
                        href="/mounjaro-consultation" 
                        className="btn btn-outline-primary btn-lg"
                      >
                        Book Consultation
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
