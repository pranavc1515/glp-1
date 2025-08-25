"use client";
import React, { useState, useEffect } from "react";

export default function WeightLossCalculator() {
  const [weight, setWeight] = useState(55);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(7);
  const [currentBMI, setCurrentBMI] = useState(18.9);
  const [projectedBMI, setProjectedBMI] = useState(16.1);
  const [weightLoss3Months, setWeightLoss3Months] = useState(6);
  const [weightLoss6Months, setWeightLoss6Months] = useState(8);

  // Calculate BMI and weight loss projections
  useEffect(() => {
    // Convert height to meters
    const totalInches = heightFt * 12 + heightIn;
    const heightM = totalInches * 0.0254;
    
    // Calculate current BMI
    const bmi = weight / (heightM * heightM);
    setCurrentBMI(parseFloat(bmi.toFixed(1)));
    
    // Calculate projected weight loss (up to 20% as mentioned)
    const maxWeightLoss = weight * 0.20; // 20% of body weight
    const loss3Months = Math.round((maxWeightLoss * 0.4)); // Gradual loss - 40% of max in 3 months
    const loss6Months = Math.round((maxWeightLoss * 0.6)); // 60% of max in 6 months
    
    setWeightLoss3Months(loss3Months);
    setWeightLoss6Months(loss6Months);
    
    // Calculate projected BMI after 12 months (assuming 15% weight loss)
    const projectedWeight = weight * 0.85; // 15% weight loss
    const projectedBMICalc = projectedWeight / (heightM * heightM);
    setProjectedBMI(parseFloat(projectedBMICalc.toFixed(1)));
  }, [weight, heightFt, heightIn]);

  return (
    <div className="weight-loss-calculator panel bg-secondary dark:bg-gray-800 rounded-2 lg:rounded-3 p-4 lg:p-6 xl:p-8">
      <div className="row child-cols-12 lg:child-cols-6 col-match g-4 lg:g-6">
        {/* Left side - Info */}
        <div>
          <div className="panel vstack gap-3 lg:gap-4">
            <div className="vstack gap-2">
              <h3 className="h3 lg:h2 m-0 text-dark dark:text-white">
                Curious about weight loss medications?
              </h3>
              <p className="fs-6 lg:fs-5 text-primary dark:text-secondary fw-medium">
                GLP-1 weight loss & BMI calculator.
              </p>
              <p className="fs-6 text-dark dark:text-white text-opacity-70">
                Minimum average weight loss with proper diet & lifestyle changes.
              </p>
            </div>
            
            {/* Circular percentage display */}
            <div className="panel text-center my-3 lg:my-4">
              <div className="d-inline-flex flex-column items-center justify-center w-200px h-200px lg:w-250px lg:h-250px bg-gradient-to-br from-success-400 to-success-600 rounded-circle text-dark">
                <span className="fs-7 lg:fs-6 fw-medium">Lose up to</span>
                <span className="display-2 lg:display-1 fw-bold lh-1">20%<sup className="fs-4">*</sup></span>
                <span className="fs-6 lg:fs-5 fw-medium">of your body weight</span>
                <span className="fs-6 lg:fs-5 fw-medium">with GLP-1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Calculator */}
        <div>
          <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-5 vstack gap-4">
            {/* Weight Slider */}
            <div className="vstack gap-2">
              <div className="hstack justify-between">
                <span className="fw-medium text-dark dark:text-white">Weight (kg)</span>
                <span className="fw-bold text-dark dark:text-white">{weight}</span>
              </div>
              <div className="position-relative">
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="form-range w-100"
                  style={{
                    background: `linear-gradient(to right, #84cc16 0%, #84cc16 ${((weight - 40) / (150 - 40)) * 100}%, #e5e7eb ${((weight - 40) / (150 - 40)) * 100}%, #e5e7eb 100%)`
                  }}
                />
              </div>
            </div>

            {/* Height Slider */}
            <div className="vstack gap-2">
              <div className="hstack justify-between">
                <span className="fw-medium text-dark dark:text-white">Height (ft)</span>
                <span className="fw-bold text-dark dark:text-white">{heightFt}'{heightIn}"</span>
              </div>
              <div className="hstack gap-2">
                <div className="flex-fill position-relative">
                  <input
                    type="range"
                    min="4"
                    max="7"
                    value={heightFt}
                    onChange={(e) => setHeightFt(parseInt(e.target.value))}
                    className="form-range w-100"
                    style={{
                      background: `linear-gradient(to right, #84cc16 0%, #84cc16 ${((heightFt - 4) / (7 - 4)) * 100}%, #e5e7eb ${((heightFt - 4) / (7 - 4)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="w-60px">
                  <input
                    type="range"
                    min="0"
                    max="11"
                    value={heightIn}
                    onChange={(e) => setHeightIn(parseInt(e.target.value))}
                    className="form-range w-100"
                    style={{
                      background: `linear-gradient(to right, #84cc16 0%, #84cc16 ${(heightIn / 11) * 100}%, #e5e7eb ${(heightIn / 11) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Weight Loss Projections */}
            <div className="vstack gap-2">
              <h5 className="h5 m-0 text-dark dark:text-white">Weight You Could Lose (kg)</h5>
              <div className="row child-cols g-2">
                <div>
                  <div className="panel bg-gray-50 dark:bg-gray-600 rounded-2 p-3 text-center">
                    <span className="fs-7 fw-medium text-dark dark:text-white d-block">3 Months</span>
                    <span className="h4 fw-bold text-dark dark:text-white">{weightLoss3Months} kg</span>
                  </div>
                </div>
                <div>
                  <div className="panel bg-gray-50 dark:bg-gray-600 rounded-2 p-3 text-center">
                    <span className="fs-7 fw-medium text-dark dark:text-white d-block">6 Months</span>
                    <span className="h4 fw-bold text-dark dark:text-white">{weightLoss6Months} kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BMI Display */}
            <div className="vstack gap-2">
              <h5 className="h5 m-0 text-dark dark:text-white">Body Mass Index (BMI)</h5>
              <div className="row child-cols g-2">
                <div>
                  <div className="panel bg-gray-50 dark:bg-gray-600 rounded-2 p-3 text-center">
                    <span className="fs-7 fw-medium text-dark dark:text-white d-block">Current</span>
                    <span className="h4 fw-bold text-dark dark:text-white">{currentBMI}</span>
                  </div>
                </div>
                <div>
                  <div className="panel bg-gray-50 dark:bg-gray-600 rounded-2 p-3 text-center">
                    <span className="fs-7 fw-medium text-dark dark:text-white d-block">In 12 Months</span>
                    <span className="h4 fw-bold text-dark dark:text-white">{projectedBMI}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="panel mt-4">
        <p className="fs-8 text-dark dark:text-white text-opacity-60 text-center">
          *Up to 20% weight loss is based on tests in large multi-centre international clinical trials for GLP-1 when combined with a diet and exercise plan. GLP-1 medications are prescribed only if an Early doctor determines it is medically appropriate.
        </p>
      </div>
    </div>
  );
}
