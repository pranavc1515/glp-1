"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function WaistHipRatioPage() {
  const [waist, setWaist] = useState(80);
  const [hip, setHip] = useState(100);
  const [gender, setGender] = useState('female');
  const [ratio, setRatio] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');
  const [riskColor, setRiskColor] = useState('');

  useEffect(() => {
    const calculatedRatio = waist / hip;
    setRatio(parseFloat(calculatedRatio.toFixed(2)));

    // Determine risk level based on gender and ratio
    let risk, color;
    if (gender === 'male') {
      if (calculatedRatio < 0.90) {
        risk = 'Low Risk';
        color = 'success';
      } else if (calculatedRatio <= 0.99) {
        risk = 'Moderate Risk';
        color = 'warning';
      } else {
        risk = 'High Risk';
        color = 'danger';
      }
    } else {
      if (calculatedRatio < 0.80) {
        risk = 'Low Risk';
        color = 'success';
      } else if (calculatedRatio <= 0.84) {
        risk = 'Moderate Risk';
        color = 'warning';
      } else {
        risk = 'High Risk';
        color = 'danger';
      }
    }
    
    setRiskLevel(risk);
    setRiskColor(color);
  }, [waist, hip, gender]);

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
            <h1 className="h2 xl:h1 m-0">Waist to Hip Ratio Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Assess your body fat distribution and health risk factors
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

                {/* Waist Measurement */}
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
                  <p className="fs-7 opacity-70 m-0">Measure at the narrowest part of your waist</p>
                </div>

                {/* Hip Measurement */}
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
                  <p className="fs-7 opacity-70 m-0">Measure at the widest part of your hips</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                {/* Ratio Result */}
                <div className={`panel bg-${riskColor}-100 dark:bg-${riskColor}-900 rounded-2 p-4 text-center`}>
                  <div className={`fs-6 fw-medium text-${riskColor} dark:text-${riskColor}-200 mb-2`}>
                    Your Waist-Hip Ratio
                  </div>
                  <div className={`h2 xl:h1 fw-bold text-${riskColor} dark:text-${riskColor}-200`}>
                    {ratio}
                  </div>
                  <div className={`fs-5 fw-bold text-${riskColor} dark:text-${riskColor}-200`}>
                    {riskLevel}
                  </div>
                </div>

                {/* Risk Guidelines */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Health Risk Guidelines</h4>
                  <div className="vstack gap-2">
                    {gender === 'male' ? (
                      <>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-success">Low Risk</span>
                          <span className="fw-bold text-success">&lt; 0.90</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-warning">Moderate Risk</span>
                          <span className="fw-bold text-warning">0.90 - 0.99</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-danger">High Risk</span>
                          <span className="fw-bold text-danger">≥ 1.00</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-success">Low Risk</span>
                          <span className="fw-bold text-success">&lt; 0.80</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-warning">Moderate Risk</span>
                          <span className="fw-bold text-warning">0.80 - 0.84</span>
                        </div>
                        <div className="hstack justify-between py-2">
                          <span className="fs-6 text-danger">High Risk</span>
                          <span className="fw-bold text-danger">≥ 0.85</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Health Impact */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-info">What This Means</h5>
                  <p className="fs-6 text-info dark:text-info-200 m-0">
                    Higher waist-to-hip ratios are associated with increased risk of cardiovascular disease, 
                    type 2 diabetes, and metabolic syndrome.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Concerned About Your Results?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Our medical experts can help you understand your health risks and create a plan
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/page-contact" 
                className="btn btn-primary"
              >
                Consult Our Doctors
              </Link>
              <Link 
                href="/calculators/calorie-nutrient" 
                className="btn btn-outline-primary"
              >
                Plan Your Nutrition →
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
