"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function IdealWeightCalculatorPage() {
  const [height, setHeight] = useState(170);
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState(30);
  const [frameSize, setFrameSize] = useState('medium');
  const [results, setResults] = useState({});

  useEffect(() => {
    const heightInches = height / 2.54; // Convert cm to inches
    const heightFeet = Math.floor(heightInches / 12);
    const remainingInches = heightInches % 12;

    // Robinson Formula (1983)
    let robinson;
    if (gender === 'male') {
      robinson = 52 + (1.9 * (heightInches - 60));
    } else {
      robinson = 49 + (1.7 * (heightInches - 60));
    }

    // Miller Formula (1983)
    let miller;
    if (gender === 'male') {
      miller = 56.2 + (1.41 * (heightInches - 60));
    } else {
      miller = 53.1 + (1.36 * (heightInches - 60));
    }

    // Devine Formula (1974)
    let devine;
    if (gender === 'male') {
      devine = 50 + (2.3 * (heightInches - 60));
    } else {
      devine = 45.5 + (2.3 * (heightInches - 60));
    }

    // Hamwi Formula (1964)
    let hamwi;
    if (gender === 'male') {
      hamwi = 48 + (2.7 * (heightInches - 60));
    } else {
      hamwi = 45.5 + (2.2 * (heightInches - 60));
    }

    // BMI-based ideal weight (BMI 22)
    const heightM = height / 100;
    const bmiIdeal = 22 * (heightM * heightM);

    // Calculate average
    const weights = [robinson, miller, devine, hamwi, bmiIdeal];
    const average = weights.reduce((sum, weight) => sum + weight, 0) / weights.length;

    // Adjust for frame size
    const frameAdjustment = {
      small: 0.9,
      medium: 1.0,
      large: 1.1
    };

    const adjustedAverage = average * frameAdjustment[frameSize];

    // Calculate range (±10%)
    const range = {
      min: Math.round(adjustedAverage * 0.9),
      max: Math.round(adjustedAverage * 1.1)
    };

    setResults({
      robinson: Math.round(robinson),
      miller: Math.round(miller),
      devine: Math.round(devine),
      hamwi: Math.round(hamwi),
      bmiIdeal: Math.round(bmiIdeal),
      average: Math.round(adjustedAverage),
      range,
      heightDisplay: `${heightFeet}' ${Math.round(remainingInches)}"`
    });
  }, [height, gender, age, frameSize]);

  const getFrameDescription = () => {
    switch (frameSize) {
      case 'small':
        return 'Narrow shoulders, small joints';
      case 'large':
        return 'Broad shoulders, larger joints';
      default:
        return 'Average proportions';
    }
  };

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
              href="/calculators" 
              className="btn btn-sm btn-outline-primary mb-4"
            >
              ← Back to All Calculators
            </Link>
            <h1 className="h2 xl:h1 m-0">Ideal Weight Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your ideal weight using multiple medical formulas
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-4xl">
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

                {/* Height Slider */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Height (cm)</span>
                    <div className="vstack gap-1 text-end">
                      <span className="fw-bold text-dark dark:text-white">{height} cm</span>
                      <span className="fs-7 text-dark dark:text-white text-opacity-70">
                        {results.heightDisplay}
                      </span>
                    </div>
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

                {/* Frame Size */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Body Frame Size</label>
                  <div className="vstack gap-2">
                    {[
                      { key: 'small', label: 'Small Frame' },
                      { key: 'medium', label: 'Medium Frame' },
                      { key: 'large', label: 'Large Frame' }
                    ].map((frame) => (
                      <div key={frame.key} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="frameSize"
                          id={frame.key}
                          value={frame.key}
                          checked={frameSize === frame.key}
                          onChange={(e) => setFrameSize(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor={frame.key}>
                          {frame.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    {getFrameDescription()}
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Main Result */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4 text-center">
                  <div className="fs-6 fw-medium text-primary dark:text-primary-200 mb-2">
                    Your Ideal Weight Range
                  </div>
                  <div className="h2 xl:h1 fw-bold text-primary dark:text-primary-200">
                    {results.range?.min} - {results.range?.max} kg
                  </div>
                  <div className="fs-6 text-primary dark:text-primary-200">
                    Average: {results.average} kg
                  </div>
                </div>

                {/* Formula Results */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Medical Formulas</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Robinson (1983)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.robinson} kg</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Miller (1983)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.miller} kg</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Devine (1974)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.devine} kg</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Hamwi (1964)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.hamwi} kg</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">BMI 22</span>
                      <span className="fw-bold text-dark dark:text-white">{results.bmiIdeal} kg</span>
                    </div>
                  </div>
                </div>

                {/* Frame Size Info */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-info">Frame Size: {frameSize.charAt(0).toUpperCase() + frameSize.slice(1)}</h5>
                  <p className="fs-6 text-info dark:text-info-200 m-0">
                    {getFrameDescription()}. Frame size affects your ideal weight by approximately ±10%.
                  </p>
                </div>

                {/* Health Information */}
                <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-success">Healthy Weight Benefits</h5>
                  <p className="fs-6 text-success dark:text-success-200 m-0">
                    Maintaining an ideal weight reduces risk of diabetes, heart disease, 
                    and improves overall health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="row child-cols-12 lg:child-cols-3 col-match g-4 mt-6">
            <div className="col">
              <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-warning">Multiple Formulas</h5>
                <p className="fs-6 text-warning dark:text-warning-200 m-0">
                  We use 5 different medical formulas to give you the most accurate 
                  ideal weight range possible.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-info">Realistic Goals</h5>
                <p className="fs-6 text-info dark:text-info-200 m-0">
                  Use this as a guide for setting realistic weight loss goals 
                  with your GLP-1 treatment plan.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-success">Medical Support</h5>
                <p className="fs-6 text-success dark:text-success-200 m-0">
                  Our healthcare providers can help you safely reach your 
                  ideal weight with personalized treatment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Reach Your Ideal Weight?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Get professional medical support to achieve your ideal weight safely 
              and effectively with GLP-1 treatment
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/calculators/weight-loss-goals" 
                className="btn btn-outline-primary"
              >
                Set Weight Goals →
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
