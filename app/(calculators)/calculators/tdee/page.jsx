"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function TDEECalculatorPage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);
  const [dailyCalories, setDailyCalories] = useState({});

  const activityLevels = [
    { key: 'sedentary', label: 'Sedentary', multiplier: 1.2, description: 'Little or no exercise' },
    { key: 'light', label: 'Light Exercise', multiplier: 1.375, description: 'Light exercise 1-3 days/week' },
    { key: 'moderate', label: 'Moderate Exercise', multiplier: 1.55, description: 'Moderate exercise 3-5 days/week' },
    { key: 'heavy', label: 'Heavy Exercise', multiplier: 1.725, description: 'Heavy exercise 6-7 days/week' },
    { key: 'extra', label: 'Extra Heavy', multiplier: 1.9, description: 'Very heavy physical work or training' }
  ];

  useEffect(() => {
    // Calculate BMR using Mifflin-St Jeor Equation
    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      calculatedBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    setBmr(Math.round(calculatedBMR));
    
    // Calculate TDEE for current activity level
    const currentMultiplier = activityLevels.find(level => level.key === activityLevel)?.multiplier || 1.55;
    const calculatedTDEE = calculatedBMR * currentMultiplier;
    setTdee(Math.round(calculatedTDEE));
    
    // Calculate TDEE for all activity levels
    const allCalories = {};
    activityLevels.forEach(level => {
      allCalories[level.key] = {
        calories: Math.round(calculatedBMR * level.multiplier),
        label: level.label,
        description: level.description
      };
    });
    setDailyCalories(allCalories);
  }, [weight, height, age, gender, activityLevel]);

  const getWeightGoalCalories = () => {
    return {
      weightLoss: Math.round(tdee - 500), // 500 calorie deficit for 1lb/week
      maintenance: tdee,
      weightGain: Math.round(tdee + 300) // 300 calorie surplus
    };
  };

  const goalCalories = getWeightGoalCalories();

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
            <h1 className="h2 xl:h1 m-0">TDEE Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your Total Daily Energy Expenditure for precise calorie planning
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

                {/* Activity Level */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Activity Level</label>
                  <div className="vstack gap-2">
                    {activityLevels.map((level) => (
                      <div key={level.key} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="activityLevel"
                          id={level.key}
                          value={level.key}
                          checked={activityLevel === level.key}
                          onChange={(e) => setActivityLevel(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor={level.key}>
                          <div className="vstack gap-1">
                            <span className="fw-bold">{level.label}</span>
                            <span className="fs-7 text-dark dark:text-white text-opacity-70">
                              {level.description}
                            </span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* TDEE Result */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4 text-center">
                  <div className="fs-6 fw-medium text-primary dark:text-primary-200 mb-2">
                    Your TDEE
                  </div>
                  <div className="h2 xl:h1 fw-bold text-primary dark:text-primary-200">
                    {tdee}
                  </div>
                  <div className="fs-6 text-primary dark:text-primary-200">
                    calories/day
                  </div>
                </div>

                {/* BMR Display */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Metabolic Breakdown</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">BMR (at rest)</span>
                      <span className="fw-bold text-dark dark:text-white">{bmr} cal</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Activity Multiplier</span>
                      <span className="fw-bold text-dark dark:text-white">
                        x{activityLevels.find(level => level.key === activityLevel)?.multiplier}
                      </span>
                    </div>
                    <hr className="my-2" />
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 fw-bold text-dark dark:text-white">Total TDEE</span>
                      <span className="fw-bold text-primary">{tdee} cal</span>
                    </div>
                  </div>
                </div>

                {/* Weight Goals */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-info">Calorie Goals</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-info">Weight Loss (1 lb/week)</span>
                      <span className="fw-bold text-info">{goalCalories.weightLoss} cal</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-info">Maintenance</span>
                      <span className="fw-bold text-info">{goalCalories.maintenance} cal</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-info">Weight Gain</span>
                      <span className="fw-bold text-info">{goalCalories.weightGain} cal</span>
                    </div>
                  </div>
                </div>

                {/* All Activity Levels */}
                <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4">
                  <h5 className="h6 mb-3 text-warning">TDEE by Activity Level</h5>
                  <div className="vstack gap-2">
                    {Object.entries(dailyCalories).map(([key, data]) => (
                      <div key={key} className="hstack justify-between py-1">
                        <span className="fs-7 text-warning">{data.label}</span>
                        <span className="fw-bold text-warning">{data.calories} cal</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="row child-cols-12 lg:child-cols-4 col-match g-4 mt-6">
            <div className="col">
              <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-success">What is TDEE?</h5>
                <p className="fs-6 text-success dark:text-success-200 m-0">
                  Total Daily Energy Expenditure is the total number of calories you burn in a day, 
                  including exercise and daily activities.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-info">Why It Matters</h5>
                <p className="fs-6 text-info dark:text-info-200 m-0">
                  TDEE helps you set precise calorie targets for weight loss, maintenance, 
                  or gain based on your actual energy expenditure.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-warning">GLP-1 Benefits</h5>
                <p className="fs-6 text-warning dark:text-warning-200 m-0">
                  GLP-1 medications help reduce appetite, making it easier to maintain 
                  the calorie deficit needed for weight loss.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Optimize Your Calorie Plan?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Use your TDEE calculation with professional medical guidance to create 
              an effective weight loss plan with GLP-1 treatment
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check GLP-1 Eligibility
              </Link>
              <Link 
                href="/calculators/calorie-deficit" 
                className="btn btn-outline-primary"
              >
                Calculate Calorie Deficit →
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
