"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function BMRCalculatorPage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [bmr, setBmr] = useState(0);
  const [dailyCalories, setDailyCalories] = useState({});

  useEffect(() => {
    let calculatedBMR;
    
    if (gender === 'male') {
      calculatedBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      calculatedBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    setBmr(Math.round(calculatedBMR));
    
    // Calculate daily calories based on activity level
    setDailyCalories({
      sedentary: Math.round(calculatedBMR * 1.2),
      light: Math.round(calculatedBMR * 1.375),
      moderate: Math.round(calculatedBMR * 1.55),
      heavy: Math.round(calculatedBMR * 1.725),
      extra: Math.round(calculatedBMR * 1.9)
    });
  }, [weight, height, age, gender]);

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
            <h1 className="h2 xl:h1 m-0">BMR Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your Basal Metabolic Rate - the calories your body burns at rest
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="row child-cols-12 lg:child-cols-6 col-match g-4 lg:g-6">
            
            {/* Calculator Form */}
            <div>
              <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-5 vstack gap-4">
                
                {/* Gender Selection */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Gender</label>
                  <div className="hstack gap-2">
                    <button
                      className={`btn flex-1 ${gender === 'male' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setGender('male')}
                    >
                      Male
                    </button>
                    <button
                      className={`btn flex-1 ${gender === 'female' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setGender('female')}
                    >
                      Female
                    </button>
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Weight (kg)</span>
                    <span className="fw-bold text-dark dark:text-white">{weight}</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>

                {/* Height Slider */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Height (cm)</span>
                    <span className="fw-bold text-dark dark:text-white">{height}</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>

                {/* Age Slider */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Age (years)</span>
                    <span className="fw-bold text-dark dark:text-white">{age}</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                {/* BMR Result */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4 text-center">
                  <div className="fs-6 fw-medium text-primary dark:text-primary-200 mb-2">
                    Your BMR
                  </div>
                  <div className="h2 xl:h1 fw-bold text-primary dark:text-primary-200">
                    {bmr}
                  </div>
                  <div className="fs-6 text-primary dark:text-primary-200">
                    calories/day
                  </div>
                </div>

                {/* Daily Calorie Needs */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Daily Calorie Needs</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Sedentary</span>
                      <span className="fw-bold text-dark dark:text-white">{dailyCalories.sedentary}</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Light Exercise</span>
                      <span className="fw-bold text-dark dark:text-white">{dailyCalories.light}</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Moderate Exercise</span>
                      <span className="fw-bold text-dark dark:text-white">{dailyCalories.moderate}</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Heavy Exercise</span>
                      <span className="fw-bold text-dark dark:text-white">{dailyCalories.heavy}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Create a Calorie Deficit?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Use these numbers to plan your weight loss journey with professional support
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/page-contact" 
                className="btn btn-primary"
              >
                Get Professional Help
              </Link>
              <Link 
                href="/calculators/waist-hip-ratio" 
                className="btn btn-outline-primary"
              >
                Check Body Fat Distribution →
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
