"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function BodyFatPercentagePage() {
  const [method, setMethod] = useState('navy'); // navy, bmi, or deurenberg
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [waist, setWaist] = useState(80);
  const [neck, setNeck] = useState(35);
  const [hip, setHip] = useState(100);
  const [bodyFat, setBodyFat] = useState(0);
  const [category, setCategory] = useState('');

  useEffect(() => {
    let calculatedBodyFat = 0;
    
    if (method === 'navy') {
      // US Navy method
      if (gender === 'male') {
        calculatedBodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
      } else {
        calculatedBodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
      }
    } else if (method === 'bmi') {
      // BMI-based method
      const bmi = weight / ((height / 100) ** 2);
      if (gender === 'male') {
        calculatedBodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
      } else {
        calculatedBodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
      }
    } else if (method === 'deurenberg') {
      // Deurenberg method
      const bmi = weight / ((height / 100) ** 2);
      calculatedBodyFat = (1.2 * bmi) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
    }

    setBodyFat(Math.max(0, Math.min(50, parseFloat(calculatedBodyFat.toFixed(1)))));

    // Determine category
    let bodyFatCategory = '';
    if (gender === 'male') {
      if (calculatedBodyFat < 6) bodyFatCategory = 'Essential Fat';
      else if (calculatedBodyFat < 14) bodyFatCategory = 'Athletes';
      else if (calculatedBodyFat < 18) bodyFatCategory = 'Fitness';
      else if (calculatedBodyFat < 25) bodyFatCategory = 'Average';
      else bodyFatCategory = 'Obese';
    } else {
      if (calculatedBodyFat < 10) bodyFatCategory = 'Essential Fat';
      else if (calculatedBodyFat < 20) bodyFatCategory = 'Athletes';
      else if (calculatedBodyFat < 25) bodyFatCategory = 'Fitness';
      else if (calculatedBodyFat < 32) bodyFatCategory = 'Average';
      else bodyFatCategory = 'Obese';
    }
    
    setCategory(bodyFatCategory);
  }, [method, gender, age, weight, height, waist, neck, hip]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Essential Fat':
      case 'Athletes':
        return 'info';
      case 'Fitness':
        return 'success';
      case 'Average':
        return 'warning';
      case 'Obese':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  const getCategoryColorClass = (category) => {
    const color = getCategoryColor(category);
    return `bg-${color}-100 dark:bg-${color}-900 text-${color}`;
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
            <h1 className="h2 xl:h1 m-0">Body Fat Percentage Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Estimate your body fat percentage using multiple validated methods
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
                
                {/* Method Selection */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Calculation Method</label>
                  <div className="vstack gap-2">
                    <button
                      className={`btn ${method === 'navy' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setMethod('navy')}
                    >
                      US Navy Method (Most Accurate)
                    </button>
                    <button
                      className={`btn ${method === 'bmi' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setMethod('bmi')}
                    >
                      BMI-Based Method
                    </button>
                    <button
                      className={`btn ${method === 'deurenberg' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setMethod('deurenberg')}
                    >
                      Deurenberg Method
                    </button>
                  </div>
                </div>

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

                {/* Age */}
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

                {/* Weight */}
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

                {/* Height */}
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

                {/* Navy Method Specific Fields */}
                {method === 'navy' && (
                  <>
                    <div className="vstack gap-2">
                      <div className="hstack justify-between">
                        <span className="fw-medium text-dark dark:text-white">Waist (cm)</span>
                        <span className="fw-bold text-dark dark:text-white">{waist}</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value={waist}
                        onChange={(e) => setWaist(parseInt(e.target.value))}
                        className="form-range w-100"
                      />
                      <p className="fs-7 opacity-70 m-0">Measure at the narrowest part</p>
                    </div>

                    <div className="vstack gap-2">
                      <div className="hstack justify-between">
                        <span className="fw-medium text-dark dark:text-white">Neck (cm)</span>
                        <span className="fw-bold text-dark dark:text-white">{neck}</span>
                      </div>
                      <input
                        type="range"
                        min="25"
                        max="50"
                        value={neck}
                        onChange={(e) => setNeck(parseInt(e.target.value))}
                        className="form-range w-100"
                      />
                      <p className="fs-7 opacity-70 m-0">Measure just below the Adam's apple</p>
                    </div>

                    {gender === 'female' && (
                      <div className="vstack gap-2">
                        <div className="hstack justify-between">
                          <span className="fw-medium text-dark dark:text-white">Hip (cm)</span>
                          <span className="fw-bold text-dark dark:text-white">{hip}</span>
                        </div>
                        <input
                          type="range"
                          min="60"
                          max="160"
                          value={hip}
                          onChange={(e) => setHip(parseInt(e.target.value))}
                          className="form-range w-100"
                        />
                        <p className="fs-7 opacity-70 m-0">Measure at the widest part</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Body Fat Result */}
                <div className={`panel ${getCategoryColorClass(category)} rounded-2 p-4 text-center`}>
                  <div className="fs-6 fw-medium mb-2">
                    Your Body Fat Percentage
                  </div>
                  <div className="h2 xl:h1 fw-bold">
                    {bodyFat}%
                  </div>
                  <div className="fs-5 fw-bold">
                    {category}
                  </div>
                </div>

                {/* Body Fat Categories */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Body Fat Categories</h4>
                  <div className="vstack gap-2">
                    {gender === 'male' ? (
                      <>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-info">Essential Fat</span>
                          <span className="fw-bold text-info">2-5%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-info">Athletes</span>
                          <span className="fw-bold text-info">6-13%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-success">Fitness</span>
                          <span className="fw-bold text-success">14-17%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-warning">Average</span>
                          <span className="fw-bold text-warning">18-24%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-danger">Obese</span>
                          <span className="fw-bold text-danger">25%+</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-info">Essential Fat</span>
                          <span className="fw-bold text-info">10-13%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-info">Athletes</span>
                          <span className="fw-bold text-info">14-20%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-success">Fitness</span>
                          <span className="fw-bold text-success">21-24%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-warning">Average</span>
                          <span className="fw-bold text-warning">25-31%</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-danger">Obese</span>
                          <span className="fw-bold text-danger">32%+</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Health Information */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-info">Health Impact</h5>
                  <p className="fs-6 text-info dark:text-info-200 m-0">
                    Higher body fat percentages are associated with increased risk of 
                    cardiovascular disease, diabetes, and metabolic syndrome. GLP-1 
                    treatments can help reduce body fat while preserving muscle mass.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Want to Reduce Your Body Fat Safely?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Our medical experts can help you create a personalized plan to reduce body fat 
              while maintaining muscle mass with GLP-1 treatment
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/mounjaro-consultation" 
                className="btn btn-outline-primary"
              >
                Book Consultation
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
