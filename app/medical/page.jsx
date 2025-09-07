import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export const metadata = {
  title: 'Medical Services | HealthFlexi Weight Loss Program',
  description: 'Comprehensive medical weight loss services including GLP-1 medications, telehealth consultations, and personalized treatment plans from licensed healthcare providers.',
};

export default function MedicalPage() {
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
                      Medical Weight Loss Services
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      Comprehensive medical weight loss program with GLP-1 medications, telehealth consultations, 
                      and personalized treatment plans from licensed healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Services Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-8">
                  
                  {/* Mounjaro Assessment */}
                  <div className="col">
                    <div
                      className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 lg:p-6 h-100"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="hstack gap-4 mb-4">
                        <div className="w-80px h-80px bg-primary-100 dark:bg-primary-800 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-clipboard text-primary dark:text-primary-200 icon-2"></i>
                        </div>
                        <div>
                          <h2 className="h3 mb-2 text-primary dark:text-primary-200">Mounjaro Eligibility Assessment</h2>
                          <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            Comprehensive medical evaluation for GLP-1 treatment
                          </p>
                        </div>
                      </div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                        Our detailed assessment evaluates your medical history, current health status, 
                        and weight loss goals to determine if you're a candidate for Mounjaro or other 
                        GLP-1 medications. This includes BMI calculation, health risk evaluation, 
                        and medication compatibility review.
                      </p>
                      <div className="vstack gap-2 mb-4">
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-primary dark:text-primary-200"></i>
                          <span className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            Medical history review
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-primary dark:text-primary-200"></i>
                          <span className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            BMI and health metrics evaluation
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-primary dark:text-primary-200"></i>
                          <span className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            Medication compatibility check
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-primary dark:text-primary-200"></i>
                          <span className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                            Personalized treatment recommendations
                          </span>
                        </div>
                      </div>
                      <div className="hstack gap-2">
                        <Link 
                          href="/mounjaro-assessment" 
                          className="btn btn-primary flex-1"
                        >
                          Start Assessment
                        </Link>
                        <Link 
                          href="/calculators" 
                          className="btn btn-outline-primary"
                        >
                          Health Calculators
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Medical Consultation */}
                  <div className="col">
                    <div
                      className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 lg:p-6 h-100"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                    >
                      <div className="hstack gap-4 mb-4">
                        <div className="w-80px h-80px bg-success-100 dark:bg-success-800 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-video-camera text-success dark:text-success-200 icon-2"></i>
                        </div>
                        <div>
                          <h2 className="h3 mb-2 text-success dark:text-success-200">Medical Consultation</h2>
                          <p className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            Virtual consultation with licensed healthcare providers
                          </p>
                        </div>
                      </div>
                      <p className="fs-6 text-success dark:text-success-200 text-opacity-80 mb-4">
                        Schedule a comprehensive virtual consultation with our board-certified healthcare 
                        providers. Discuss your weight loss goals, review your assessment results, and 
                        receive a personalized treatment plan tailored to your specific needs and health conditions.
                      </p>
                      <div className="vstack gap-2 mb-4">
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                          <span className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            One-on-one video consultation
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                          <span className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            Treatment plan development
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                          <span className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            Medication prescription if eligible
                          </span>
                        </div>
                        <div className="hstack gap-2">
                          <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                          <span className="fs-6 text-success dark:text-success-200 text-opacity-80">
                            Ongoing monitoring and support
                          </span>
                        </div>
                      </div>
                      <div className="hstack gap-2">
                        <Link 
                          href="/mounjaro-consultation" 
                          className="btn btn-success flex-1"
                        >
                          Book Consultation
                        </Link>
                        <Link 
                          href="/page-contact" 
                          className="btn btn-outline-success"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Process Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Our Treatment Process
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    A step-by-step approach to safe and effective weight loss
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-4 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <span className="h4 fw-bold text-primary dark:text-primary-200">1</span>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Initial Assessment</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Complete our comprehensive health assessment to determine your eligibility 
                        for GLP-1 medications and weight loss treatment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <span className="h4 fw-bold text-success dark:text-success-200">2</span>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Medical Consultation</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Meet with our licensed healthcare providers to discuss your goals and 
                        develop a personalized treatment plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <span className="h4 fw-bold text-info dark:text-info-200">3</span>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Treatment Begins</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Start your personalized treatment plan with GLP-1 medications and 
                        lifestyle modifications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-warning-100 dark:bg-warning-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <span className="h4 fw-bold text-warning dark:text-warning-200">4</span>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Ongoing Support</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Receive continuous monitoring, support, and treatment adjustments 
                        throughout your weight loss journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GLP-1 Medications Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    GLP-1 Medications We Offer
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    FDA-approved medications for safe and effective weight loss
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 h-100">
                      <div className="hstack gap-3 mb-4">
                        <div className="w-60px h-60px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-syringe text-primary dark:text-primary-200"></i>
                        </div>
                        <div>
                          <h3 className="h5 mb-1 text-dark dark:text-white">Mounjaro (Tirzepatide)</h3>
                          <p className="fs-6 text-primary dark:text-primary-200">Dual GIP/GLP-1 Receptor Agonist</p>
                        </div>
                      </div>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        The latest breakthrough in weight loss medication, Mounjaro targets both GIP and GLP-1 
                        receptors for enhanced effectiveness. Clinical trials show patients can lose up to 20% 
                        of their body weight.
                      </p>
                      <div className="vstack gap-2">
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">Effectiveness</span>
                          <span className="fw-bold text-success">Up to 20% weight loss</span>
                        </div>
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">Dosing</span>
                          <span className="fw-bold text-info">Weekly injection</span>
                        </div>
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">FDA Approved</span>
                          <span className="fw-bold text-success">2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 h-100">
                      <div className="hstack gap-3 mb-4">
                        <div className="w-60px h-60px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="icon unicon-syringe text-success dark:text-success-200"></i>
                        </div>
                        <div>
                          <h3 className="h5 mb-1 text-dark dark:text-white">Ozempic (Semaglutide)</h3>
                          <p className="fs-6 text-success dark:text-success-200">GLP-1 Receptor Agonist</p>
                        </div>
                      </div>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        A well-established GLP-1 medication that helps regulate blood sugar and supports 
                        significant weight loss. Proven effective in clinical trials with excellent safety profile.
                      </p>
                      <div className="vstack gap-2">
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">Effectiveness</span>
                          <span className="fw-bold text-success">Up to 15% weight loss</span>
                        </div>
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">Dosing</span>
                          <span className="fw-bold text-info">Weekly injection</span>
                        </div>
                        <div className="hstack justify-between">
                          <span className="fs-6 text-dark dark:text-white">FDA Approved</span>
                          <span className="fw-bold text-success">2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety & Monitoring Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Safety & Monitoring
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Your safety is our top priority with comprehensive monitoring and support
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-primary dark:text-primary-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Licensed Providers</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        All treatments are prescribed and monitored by board-certified healthcare providers
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-shield text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Regular Monitoring</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Continuous health monitoring and regular check-ins to ensure safe and effective treatment
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-phone text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">24/7 Support</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Round-the-clock medical support for any questions or concerns about your treatment
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
                      Ready to Start Your Medical Weight Loss Journey?
                    </h2>
                    <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                      Take the first step towards a healthier you with our comprehensive medical weight loss program. 
                      Get started with a free assessment today.
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
