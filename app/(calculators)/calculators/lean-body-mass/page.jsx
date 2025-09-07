"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function LeanBodyMassCalculatorPage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [waist, setWaist] = useState(80);
  const [neck, setNeck] = useState(35);
  const [hip, setHip] = useState(100);
  const [method, setMethod] = useState('boer'); // boer, james, hume
  const [results, setResults] = useState({});

  useEffect(() => {
    let leanBodyMass = 0;
    let bodyFatPercentage = 0;
    
    // Calculate body fat percentage using US Navy method
    if (gender === 'male') {
      bodyFatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      bodyFatPercentage = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }
    
    // Ensure body fat percentage is within reasonable bounds
    bodyFatPercentage = Math.max(5, Math.min(50, bodyFatPercentage));
    
    // Calculate lean body mass using different methods
    if (method === 'boer') {
      // Boer Formula
      if (gender === 'male') {
        leanBodyMass = (0.407 * weight) + (0.267 * height) - 19.2;
      } else {
        leanBodyMass = (0.252 * weight) + (0.473 * height) - 48.3;
      }
    } else if (method === 'james') {
      // James Formula
      if (gender === 'male') {
        leanBodyMass = (1.1 * weight) - (128 * Math.pow(weight / height, 2));
      } else {
        leanBodyMass = (1.07 * weight) - (148 * Math.pow(weight / height, 2));
      }
    } else if (method === 'hume') {
      // Hume Formula
      if (gender === 'male') {
        leanBodyMass = (0.32810 * weight) + (0.33929 * height) - 29.5336;
      } else {
        leanBodyMass = (0.29569 * weight) + (0.41813 * height) - 43.2933;
      }
    }
    
    // Alternative calculation using body fat percentage
    const lbmFromBodyFat = weight * (1 - bodyFatPercentage / 100);
    
    // Calculate fat mass
    const fatMass = weight - leanBodyMass;
    const fatMassFromBF = weight - lbmFromBodyFat;
    
    // Calculate BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    // Calculate muscle mass percentage
    const muscleMassPercentage = (leanBodyMass / weight) * 100;
    
    // Calculate recommended ranges
    let recommendedLBM = {};
    if (gender === 'male') {
      recommendedLBM = {
        min: weight * 0.85, // 85% for males
        max: weight * 0.95  // 95% for males
      };
    } else {
      recommendedLBM = {
        min: weight * 0.75, // 75% for females
        max: weight * 0.85  // 85% for females
      };
    }
    
    setResults({
      leanBodyMass: parseFloat(leanBodyMass.toFixed(1)),
      lbmFromBodyFat: parseFloat(lbmFromBodyFat.toFixed(1)),
      bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
      fatMass: parseFloat(fatMass.toFixed(1)),
      fatMassFromBF: parseFloat(fatMassFromBF.toFixed(1)),
      bmi: parseFloat(bmi.toFixed(1)),
      muscleMassPercentage: parseFloat(muscleMassPercentage.toFixed(1)),
      recommendedLBM: {
        min: parseFloat(recommendedLBM.min.toFixed(1)),
        max: parseFloat(recommendedLBM.max.toFixed(1))
      }
    });
  }, [weight, height, age, gender, waist, neck, hip, method]);

  const getLBMCategory = (lbm) => {
    const { min, max } = results.recommendedLBM;
    if (lbm < min) return { category: 'Below Average', color: 'warning' };
    if (lbm <= max) return { category: 'Healthy Range', color: 'success' };
    return { category: 'Above Average', color: 'info' };
  };

  const lbmCategory = getLBMCategory(results.leanBodyMass);

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
            <h1 className="h2 xl:h1 m-0">Lean Body Mass Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your lean body mass to track muscle preservation during weight loss
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="section panel py-6 xl:py-9">
        <div className="container max-w-5xl">
          <div className="row child-cols-12 lg:child-cols-6 col-match g-4 lg:g-6">
            
            {/* Calculator Form */}
            <div>
              <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-5 vstack gap-4">
                
                {/* Calculation Method */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Calculation Method</label>
                  <select 
                    className="form-control"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value="boer">Boer Formula (Recommended)</option>
                    <option value="james">James Formula</option>
                    <option value="hume">Hume Formula</option>
                  </select>
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

                {/* Body measurements for body fat calculation */}
                <hr />
                <h5 className="h6 text-dark dark:text-white">Body Measurements (for body fat estimation)</h5>
                
                {/* Waist */}
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
                </div>

                {/* Neck */}
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
                </div>

                {/* Hip (for females) */}
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
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Lean Body Mass Result */}
                <div className={`panel bg-${lbmCategory.color}-100 dark:bg-${lbmCategory.color}-900 rounded-2 p-4 text-center`}>
                  <div className={`fs-6 fw-medium text-${lbmCategory.color} dark:text-${lbmCategory.color}-200 mb-2`}>
                    Your Lean Body Mass
                  </div>
                  <div className={`h2 xl:h1 fw-bold text-${lbmCategory.color} dark:text-${lbmCategory.color}-200`}>
                    {results.leanBodyMass} kg
                  </div>
                  <div className={`fs-6 text-${lbmCategory.color} dark:text-${lbmCategory.color}-200`}>
                    {lbmCategory.category}
                  </div>
                </div>

                {/* Body Composition Breakdown */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Body Composition</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Lean Body Mass</span>
                      <span className="fw-bold text-dark dark:text-white">{results.leanBodyMass} kg</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Fat Mass</span>
                      <span className="fw-bold text-dark dark:text-white">{results.fatMass} kg</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Body Fat Percentage</span>
                      <span className="fw-bold text-dark dark:text-white">{results.bodyFatPercentage}%</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Muscle Mass %</span>
                      <span className="fw-bold text-dark dark:text-white">{results.muscleMassPercentage}%</span>
                    </div>
                  </div>
                </div>

                {/* Alternative Calculation */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-info">Body Fat Method Comparison</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">Formula Method</span>
                      <span className="fw-bold text-info">{results.leanBodyMass} kg</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">Body Fat Method</span>
                      <span className="fw-bold text-info">{results.lbmFromBodyFat} kg</span>
                    </div>
                  </div>
                </div>

                {/* Healthy Range */}
                <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-success">Healthy Range</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-success">Minimum LBM</span>
                      <span className="fw-bold text-success">{results.recommendedLBM?.min} kg</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-success">Maximum LBM</span>
                      <span className="fw-bold text-success">{results.recommendedLBM?.max} kg</span>
                    </div>
                  </div>
                </div>

                {/* GLP-1 Information */}
                <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-warning">Muscle Preservation</h5>
                  <p className="fs-6 text-warning dark:text-warning-200 m-0">
                    GLP-1 treatments help preserve lean muscle mass during weight loss by promoting 
                    fat loss while maintaining protein synthesis with proper nutrition and exercise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="row child-cols-12 lg:child-cols-3 col-match g-4 mt-6">
            <div className="col">
              <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-primary">What is LBM?</h5>
                <p className="fs-6 text-primary dark:text-primary-200 m-0">
                  Lean Body Mass includes muscles, bones, organs, and water - 
                  everything except body fat.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-info">Why It Matters</h5>
                <p className="fs-6 text-info dark:text-info-200 m-0">
                  Preserving lean body mass during weight loss ensures you lose fat, 
                  not muscle, maintaining metabolism.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-success">Track Progress</h5>
                <p className="fs-6 text-success dark:text-success-200 m-0">
                  Monitor your LBM to ensure your weight loss program is 
                  targeting fat, not muscle tissue.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Want to Preserve Muscle During Weight Loss?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Our medical team can help you lose fat while preserving lean muscle mass 
              with personalized GLP-1 treatment and nutrition guidance
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/calculators/protein-intake" 
                className="btn btn-outline-primary"
              >
                Calculate Protein Needs →
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
