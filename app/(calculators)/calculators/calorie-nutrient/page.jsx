"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function CalorieNutrientPage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 });

  useEffect(() => {
    // Calculate BMR
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
      extra: 1.9
    };

    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityMultipliers[activityLevel];
    
    // Adjust for goal
    let targetCalories;
    switch (goal) {
      case 'lose':
        targetCalories = tdee - 500; // 500 calorie deficit for 1lb/week loss
        break;
      case 'gain':
        targetCalories = tdee + 300; // 300 calorie surplus for gradual gain
        break;
      default:
        targetCalories = tdee;
    }

    setCalories(Math.round(targetCalories));

    // Calculate macros (40% carbs, 30% protein, 30% fat for weight loss)
    // Adjust ratios based on goal
    let proteinRatio, carbRatio, fatRatio;
    
    if (goal === 'lose') {
      proteinRatio = 0.35; // Higher protein for weight loss
      carbRatio = 0.35;
      fatRatio = 0.30;
    } else if (goal === 'gain') {
      proteinRatio = 0.25;
      carbRatio = 0.45; // Higher carbs for muscle gain
      fatRatio = 0.30;
    } else {
      proteinRatio = 0.30;
      carbRatio = 0.40;
      fatRatio = 0.30;
    }

    setMacros({
      protein: Math.round((targetCalories * proteinRatio) / 4), // 4 calories per gram
      carbs: Math.round((targetCalories * carbRatio) / 4), // 4 calories per gram
      fat: Math.round((targetCalories * fatRatio) / 9) // 9 calories per gram
    });

  }, [weight, height, age, gender, activityLevel, goal]);

  const activityOptions = [
    { value: 'sedentary', label: 'Sedentary', desc: 'Little to no exercise' },
    { value: 'light', label: 'Light', desc: 'Light exercise 1-3 days/week' },
    { value: 'moderate', label: 'Moderate', desc: 'Moderate exercise 3-5 days/week' },
    { value: 'heavy', label: 'Heavy', desc: 'Heavy exercise 6-7 days/week' },
    { value: 'extra', label: 'Extra Heavy', desc: 'Very heavy exercise & physical job' }
  ];

  const goalOptions = [
    { value: 'lose', label: 'Lose Weight', desc: 'Create calorie deficit' },
    { value: 'maintain', label: 'Maintain Weight', desc: 'Maintain current weight' },
    { value: 'gain', label: 'Gain Weight', desc: 'Create calorie surplus' }
  ];

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
            <h1 className="h2 xl:h1 m-0">Calorie & Nutrient Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your daily calorie needs and macro breakdown based on your goals
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

                {/* Weight, Height, Age Sliders */}
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
                  <select 
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="form-select"
                  >
                    {activityOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label} - {option.desc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Goal Selection */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Goal</label>
                  <div className="vstack gap-1">
                    {goalOptions.map(option => (
                      <button
                        key={option.value}
                        className={`btn text-start p-3 ${goal === option.value ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setGoal(option.value)}
                      >
                        <div className="fw-medium">{option.label}</div>
                        <div className="fs-7 opacity-80">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                {/* Calorie Result */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4 text-center">
                  <div className="fs-6 fw-medium text-primary dark:text-primary-200 mb-2">
                    Daily Calories
                  </div>
                  <div className="h2 xl:h1 fw-bold text-primary dark:text-primary-200">
                    {calories}
                  </div>
                  <div className="fs-6 text-primary dark:text-primary-200">
                    calories per day
                  </div>
                </div>

                {/* Macro Breakdown */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Macro Breakdown</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Protein</span>
                      <span className="fw-bold text-dark dark:text-white">{macros.protein}g</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Carbohydrates</span>
                      <span className="fw-bold text-dark dark:text-white">{macros.carbs}g</span>
                    </div>
                    <div className="hstack justify-between py-2">
                      <span className="fs-6 text-dark dark:text-white">Fat</span>
                      <span className="fw-bold text-dark dark:text-white">{macros.fat}g</span>
                    </div>
                  </div>
                </div>

                {/* Tips based on goal */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-info">Nutrition Tips</h5>
                  <div className="fs-6 text-info dark:text-info-200">
                    {goal === 'lose' && (
                      <p className="m-0">Focus on high-protein foods to preserve muscle mass during weight loss. Include plenty of vegetables and limit processed foods.</p>
                    )}
                    {goal === 'maintain' && (
                      <p className="m-0">Maintain a balanced diet with whole foods. Monitor your weight weekly and adjust portions as needed.</p>
                    )}
                    {goal === 'gain' && (
                      <p className="m-0">Add healthy calories through nuts, avocados, and complex carbs. Combine with strength training for muscle growth.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Need Professional Nutrition Guidance?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Get personalized meal plans and nutrition coaching from our experts
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-consultation" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/calculators/bmi" 
                className="btn btn-outline-primary"
              >
                ← Back to BMI Calculator
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
