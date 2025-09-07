import React from 'react';
import WeightLossCalculator from '@/components/common/WeightLossCalculator';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export const metadata = {
  title: 'BMI Calculator | Body Mass Index Calculator',
  description: 'Calculate your BMI to determine if your weight is in a healthy range. Free BMI calculator with instant results.',
};

export default function BMICalculatorPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
      {/* Header */}
      <div className="section panel py-6 xl:py-9 bg-secondary dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-6">
            <Link 
              href="/page-features" 
              className="btn btn-sm btn-outline-primary mb-4"
            >
              ← Back to Health Tools
            </Link>
            <h1 className="h2 xl:h1 m-0">BMI Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your Body Mass Index to see if your weight is in a healthy range for your height
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <WeightLossCalculator />
          
          {/* BMI Information */}
          <div className="mt-8 xl:mt-10">
            <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-6">
              <h3 className="h4 mb-4 text-dark dark:text-white">Understanding Your BMI</h3>
              <div className="row g-4">
                <div className="col-12 sm:col-6 lg:col-3">
                  <div className="text-center p-3 bg-info-100 dark:bg-info-900 rounded-1">
                    <div className="h5 fw-bold text-info">Under 18.5</div>
                    <div className="fs-6">Underweight</div>
                  </div>
                </div>
                <div className="col-12 sm:col-6 lg:col-3">
                  <div className="text-center p-3 bg-success-100 dark:bg-success-900 rounded-1">
                    <div className="h5 fw-bold text-success">18.5 - 24.9</div>
                    <div className="fs-6">Healthy Weight</div>
                  </div>
                </div>
                <div className="col-12 sm:col-6 lg:col-3">
                  <div className="text-center p-3 bg-warning-100 dark:bg-warning-900 rounded-1">
                    <div className="h5 fw-bold text-warning">25 - 29.9</div>
                    <div className="fs-6">Overweight</div>
                  </div>
                </div>
                <div className="col-12 sm:col-6 lg:col-3">
                  <div className="text-center p-3 bg-danger-100 dark:bg-danger-900 rounded-1">
                    <div className="h5 fw-bold text-danger">30+</div>
                    <div className="fs-6">Obese</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Start Your Weight Loss Journey?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Get personalized support with our GLP-1 weight loss program
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-consultation" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/calculators/bmr" 
                className="btn btn-outline-primary"
              >
                Calculate BMR →
              </Link>
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
