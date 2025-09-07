import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calculatorFeatures } from '@/data/calculators';
import WeightLossCalculator from '@/components/common/WeightLossCalculator';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export const metadata = {
  title: 'Health Calculators | BMI, BMR, Weight Loss Tools | HealthFlexi',
  description: 'Use our comprehensive health calculators to track your BMI, BMR, waist-to-hip ratio, and daily calorie needs. Start your weight loss journey with professional medical support.',
};

export default function CalculatorsPage() {
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
                href="/page-features" 
                className="btn btn-sm btn-outline-primary mb-4"
              >
                ← Back to Health Tools
              </Link>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Health Calculators
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Track your health metrics and plan your weight loss journey with our comprehensive 
                suite of medical-grade calculators. Get personalized insights to support your 
                GLP-1 weight loss treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick BMI Calculator Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-4xl">
          <div
            className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
              Quick BMI Calculator
            </h2>
            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
              Get an instant BMI calculation to start your health assessment
            </p>
          </div>
          
          <div className="row child-cols-12 lg:child-cols-8 col-match g-4 lg:g-6">
            <div className="col-12 lg:col-8">
              <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6">
                <WeightLossCalculator />
              </div>
            </div>
            <div className="col-12 lg:col-4">
              <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 lg:p-6 h-100">
                <h3 className="h4 mb-3 text-primary dark:text-primary-200">BMI Categories</h3>
                <div className="vstack gap-3">
                  <div className="hstack justify-between p-2 bg-info-100 dark:bg-info-800 rounded-1">
                    <span className="fs-6 fw-medium text-info">Underweight</span>
                    <span className="fw-bold text-info">&lt; 18.5</span>
                  </div>
                  <div className="hstack justify-between p-2 bg-success-100 dark:bg-success-800 rounded-1">
                    <span className="fs-6 fw-medium text-success">Healthy</span>
                    <span className="fw-bold text-success">18.5 - 24.9</span>
                  </div>
                  <div className="hstack justify-between p-2 bg-warning-100 dark:bg-warning-800 rounded-1">
                    <span className="fs-6 fw-medium text-warning">Overweight</span>
                    <span className="fw-bold text-warning">25 - 29.9</span>
                  </div>
                  <div className="hstack justify-between p-2 bg-danger-100 dark:bg-danger-800 rounded-1">
                    <span className="fs-6 fw-medium text-danger">Obese</span>
                    <span className="fw-bold text-danger">≥ 30</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-top border-primary border-opacity-20">
                  <Link 
                    href="/mounjaro-assessment" 
                    className="btn btn-primary w-100"
                  >
                    Check GLP-1 Eligibility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Calculators Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Complete Health Assessment Tools
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Use our comprehensive calculators to get a complete picture of your health 
                and create a personalized weight loss plan with medical supervision.
              </p>
            </div>
            <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
              {calculatorFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                    <div className="order-0 lg:order-1">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                    </div>
                    <div className="order-1 lg:order-0 col-12 sm:col-5">
                      <div className="panel vstack justify-center gap-4 h-100">
                        <div>
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold m-0 text-primary">
                              {feature.id.toString().padStart(2, "0")}.
                            </span>
                            <h3 className="h4 lg:h2 m-0">{feature.title}</h3>
                            <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                              {feature.description}
                            </p>
                            {feature.link && (
                              <Link
                                href={feature.link.href}
                                className="uc-link fw-bold hstack gap-narrow"
                              >
                                <span>{feature.link.text}</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Health Assessment CTA */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div
            className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-6 lg:p-8 text-center">
              <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-primary dark:text-primary-200">
                Ready for Professional Medical Support?
              </h2>
              <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                Our licensed healthcare providers can help you interpret these results and 
                create a personalized weight loss plan with GLP-1 medications like Mounjaro.
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

      {/* Health Information Section */}
      <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="row child-cols-12 lg:child-cols-4 col-match g-4">
            <div className="col">
              <div className="panel text-center">
                <div className="w-48px h-48px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3">
                  <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                </div>
                <h4 className="h5 mb-2 text-dark dark:text-white">Medical Grade</h4>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  All calculators use medically validated formulas and guidelines
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel text-center">
                <div className="w-48px h-48px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3">
                  <i className="icon unicon-shield text-info dark:text-info-200"></i>
                </div>
                <h4 className="h5 mb-2 text-dark dark:text-white">Privacy Protected</h4>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Your health data is secure and never shared without consent
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel text-center">
                <div className="w-48px h-48px bg-warning-100 dark:bg-warning-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3">
                  <i className="icon unicon-user-md text-warning dark:text-warning-200"></i>
                </div>
                <h4 className="h5 mb-2 text-dark dark:text-white">Expert Support</h4>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Licensed healthcare providers available for consultation
                </p>
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
