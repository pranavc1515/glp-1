"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function WeightLossGoalsPage() {
  const [currentWeight, setCurrentWeight] = useState(80);
  const [targetWeight, setTargetWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [goal, setGoal] = useState('moderate'); // conservative, moderate, aggressive
  const [results, setResults] = useState({});

  useEffect(() => {
    const weightToLose = currentWeight - targetWeight;
    const currentBMI = currentWeight / ((height / 100) ** 2);
    const targetBMI = targetWeight / ((height / 100) ** 2);
    
    // Weight loss timeline based on goal
    const timelineWeeks = {
      conservative: Math.ceil(weightToLose / 0.25), // 0.25kg per week
      moderate: Math.ceil(weightToLose / 0.5), // 0.5kg per week
      aggressive: Math.ceil(weightToLose / 0.75) // 0.75kg per week
    };

    const timeline = timelineWeeks[goal];
    const months = Math.ceil(timeline / 4);
    
    // GLP-1 treatment timeline (typically 12-16 weeks for significant results)
    const glp1Timeline = Math.min(16, Math.max(12, Math.ceil(weightToLose * 0.6 / 0.5)));

    setResults({
      weightToLose,
      currentBMI: parseFloat(currentBMI.toFixed(1)),
      targetBMI: parseFloat(targetBMI.toFixed(1)),
      timeline,
      months,
      glp1Timeline,
      weeklyLoss: goal === 'conservative' ? 0.25 : goal === 'moderate' ? 0.5 : 0.75
    });
  }, [currentWeight, targetWeight, height, age, gender, goal]);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'info' };
    if (bmi < 25) return { category: 'Healthy Weight', color: 'success' };
    if (bmi < 30) return { category: 'Overweight', color: 'warning' };
    return { category: 'Obese', color: 'danger' };
  };

  const currentBMICategory = getBMICategory(results.currentBMI);
  const targetBMICategory = getBMICategory(results.targetBMI);

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
            <h1 className="h2 xl:h1 m-0">Weight Loss Goal Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Set realistic weight loss goals and plan your GLP-1 treatment journey
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

                {/* Current Weight */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Current Weight (kg)</span>
                    <span className="fw-bold text-dark dark:text-white">{currentWeight}</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>

                {/* Target Weight */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Target Weight (kg)</span>
                    <span className="fw-bold text-dark dark:text-white">{targetWeight}</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(parseInt(e.target.value))}
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

                {/* Weight Loss Goal */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Weight Loss Approach</label>
                  <div className="vstack gap-2">
                    <button
                      className={`btn ${goal === 'conservative' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setGoal('conservative')}
                    >
                      Conservative (0.25kg/week)
                    </button>
                    <button
                      className={`btn ${goal === 'moderate' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setGoal('moderate')}
                    >
                      Moderate (0.5kg/week)
                    </button>
                    <button
                      className={`btn ${goal === 'aggressive' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setGoal('aggressive')}
                    >
                      Aggressive (0.75kg/week)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Weight Loss Summary */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4 text-center">
                  <div className="fs-6 fw-medium text-primary dark:text-primary-200 mb-2">
                    Weight to Lose
                  </div>
                  <div className="h2 xl:h1 fw-bold text-primary dark:text-primary-200">
                    {results.weightToLose} kg
                  </div>
                  <div className="fs-6 text-primary dark:text-primary-200">
                    {results.weeklyLoss} kg per week
                  </div>
                </div>

                {/* BMI Comparison */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">BMI Comparison</h4>
                  <div className="vstack gap-3">
                    <div className="hstack justify-between">
                      <span className="fs-6 text-dark dark:text-white">Current BMI</span>
                      <div className="hstack gap-2">
                        <span className="fw-bold text-dark dark:text-white">{results.currentBMI}</span>
                        <span className={`badge bg-${currentBMICategory.color}-100 text-${currentBMICategory.color}`}>
                          {currentBMICategory.category}
                        </span>
                      </div>
                    </div>
                    <div className="hstack justify-between">
                      <span className="fs-6 text-dark dark:text-white">Target BMI</span>
                      <div className="hstack gap-2">
                        <span className="fw-bold text-dark dark:text-white">{results.targetBMI}</span>
                        <span className={`badge bg-${targetBMICategory.color}-100 text-${targetBMICategory.color}`}>
                          {targetBMICategory.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-info">Timeline</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between">
                      <span className="fs-6 text-info">Estimated Duration</span>
                      <span className="fw-bold text-info">{results.months} months</span>
                    </div>
                    <div className="hstack justify-between">
                      <span className="fs-6 text-info">GLP-1 Treatment</span>
                      <span className="fw-bold text-info">{results.glp1Timeline} weeks</span>
                    </div>
                  </div>
                </div>

                {/* GLP-1 Information */}
                <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-success">GLP-1 Treatment</h5>
                  <p className="fs-6 text-success dark:text-success-200 m-0">
                    With GLP-1 medications like Mounjaro, you may see significant weight loss 
                    within 12-16 weeks of treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Start Your Weight Loss Journey?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Get professional medical support to achieve your weight loss goals safely and effectively
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check GLP-1 Eligibility
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
