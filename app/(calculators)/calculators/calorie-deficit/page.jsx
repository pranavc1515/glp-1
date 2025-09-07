"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function CalorieDeficitCalculatorPage() {
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goalWeight, setGoalWeight] = useState(70);
  const [timeframe, setTimeframe] = useState(12); // weeks
  const [results, setResults] = useState({});

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    extra: 1.9
  };

  useEffect(() => {
    // Calculate BMR
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate TDEE
    const tdee = bmr * activityMultipliers[activityLevel];

    // Calculate weight loss needed
    const weightLossNeeded = weight - goalWeight;
    const weightLossInLbs = weightLossNeeded * 2.205; // Convert kg to lbs

    // Calculate calories needed to burn (3500 calories = 1 lb)
    const totalCaloriesNeeded = weightLossInLbs * 3500;

    // Calculate daily calorie deficit needed
    const dailyDeficitNeeded = totalCaloriesNeeded / (timeframe * 7);

    // Calculate recommended daily calories
    const recommendedDailyCalories = Math.round(tdee - dailyDeficitNeeded);

    // Calculate weekly weight loss rate
    const weeklyWeightLoss = (dailyDeficitNeeded * 7) / 3500; // in lbs
    const weeklyWeightLossKg = weeklyWeightLoss / 2.205; // in kg

    // Safety checks
    const minCalories = gender === 'male' ? 1500 : 1200;
    const maxSafeDeficit = 1000; // max 1000 calorie deficit per day
    const maxWeeklyLoss = 2; // max 2 lbs per week

    const isSafeDeficit = dailyDeficitNeeded <= maxSafeDeficit;
    const isSafeCalories = recommendedDailyCalories >= minCalories;
    const isSafeRate = weeklyWeightLoss <= maxWeeklyLoss;

    // Alternative recommendations if not safe
    let safeRecommendations = {};
    if (!isSafeDeficit || !isSafeCalories || !isSafeRate) {
      const safeDeficit = Math.min(dailyDeficitNeeded, maxSafeDeficit);
      const safeCalories = Math.max(tdee - safeDeficit, minCalories);
      const actualDeficit = tdee - safeCalories;
      const safeWeeklyLoss = (actualDeficit * 7) / 3500;
      const safeTimeframe = Math.ceil(totalCaloriesNeeded / (actualDeficit * 7));

      safeRecommendations = {
        dailyCalories: Math.round(safeCalories),
        deficit: Math.round(actualDeficit),
        weeklyLoss: parseFloat(safeWeeklyLoss.toFixed(2)),
        timeframe: safeTimeframe
      };
    }

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      weightLossNeeded: parseFloat(weightLossNeeded.toFixed(1)),
      dailyDeficitNeeded: Math.round(dailyDeficitNeeded),
      recommendedDailyCalories,
      weeklyWeightLoss: parseFloat(weeklyWeightLoss.toFixed(2)),
      weeklyWeightLossKg: parseFloat(weeklyWeightLossKg.toFixed(2)),
      isSafeDeficit,
      isSafeCalories,
      isSafeRate,
      safeRecommendations,
      minCalories
    });
  }, [weight, height, age, gender, activityLevel, goalWeight, timeframe]);

  const getSafetyStatus = () => {
    if (results.isSafeDeficit && results.isSafeCalories && results.isSafeRate) {
      return { status: 'safe', color: 'success', message: 'Your plan is safe and achievable' };
    } else {
      return { status: 'unsafe', color: 'warning', message: 'Your plan may be too aggressive' };
    }
  };

  const safetyStatus = getSafetyStatus();

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
            <h1 className="h2 xl:h1 m-0">Calorie Deficit Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate the exact calorie deficit needed for safe and effective weight loss
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

                {/* Current Weight */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Current Weight (kg)</span>
                    <span className="fw-bold text-dark dark:text-white">{weight}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>

                {/* Goal Weight */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Goal Weight (kg)</span>
                    <span className="fw-bold text-dark dark:text-white">{goalWeight}</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={goalWeight}
                    onChange={(e) => setGoalWeight(parseInt(e.target.value))}
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

                {/* Activity Level */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Activity Level</label>
                  <select 
                    className="form-control"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                  >
                    <option value="sedentary">Sedentary (little/no exercise)</option>
                    <option value="light">Light (light exercise 1-3 days/week)</option>
                    <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                    <option value="heavy">Heavy (heavy exercise 6-7 days/week)</option>
                    <option value="extra">Extra Heavy (very heavy physical work)</option>
                  </select>
                </div>

                {/* Timeframe */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Timeframe (weeks)</span>
                    <span className="fw-bold text-dark dark:text-white">{timeframe}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="52"
                    value={timeframe}
                    onChange={(e) => setTimeframe(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Safety Status */}
                <div className={`panel bg-${safetyStatus.color}-100 dark:bg-${safetyStatus.color}-900 rounded-2 p-4 text-center`}>
                  <div className={`fs-6 fw-medium text-${safetyStatus.color} dark:text-${safetyStatus.color}-200 mb-2`}>
                    Plan Safety Status
                  </div>
                  <div className={`h4 fw-bold text-${safetyStatus.color} dark:text-${safetyStatus.color}-200`}>
                    {safetyStatus.message}
                  </div>
                </div>

                {/* Current Plan Results */}
                <div className="panel bg-primary-100 dark:bg-primary-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-primary dark:text-primary-200">Your Current Plan</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-primary dark:text-primary-200">Weight to lose</span>
                      <span className="fw-bold text-primary dark:text-primary-200">{results.weightLossNeeded} kg</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-primary dark:text-primary-200">Daily calories</span>
                      <span className="fw-bold text-primary dark:text-primary-200">{results.recommendedDailyCalories}</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-primary dark:text-primary-200">Daily deficit</span>
                      <span className="fw-bold text-primary dark:text-primary-200">{results.dailyDeficitNeeded} cal</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-primary dark:text-primary-200">Weekly loss</span>
                      <span className="fw-bold text-primary dark:text-primary-200">{results.weeklyWeightLossKg} kg</span>
                    </div>
                  </div>
                </div>

                {/* Safe Recommendations (if needed) */}
                {results.safeRecommendations && Object.keys(results.safeRecommendations).length > 0 && (
                  <div className="panel bg-success-100 dark:bg-success-900 rounded-2 p-4">
                    <h4 className="h5 mb-3 text-success dark:text-success-200">Safe Recommendation</h4>
                    <div className="vstack gap-2">
                      <div className="hstack justify-between py-1">
                        <span className="fs-6 text-success dark:text-success-200">Daily calories</span>
                        <span className="fw-bold text-success dark:text-success-200">{results.safeRecommendations.dailyCalories}</span>
                      </div>
                      <div className="hstack justify-between py-1">
                        <span className="fs-6 text-success dark:text-success-200">Daily deficit</span>
                        <span className="fw-bold text-success dark:text-success-200">{results.safeRecommendations.deficit} cal</span>
                      </div>
                      <div className="hstack justify-between py-1">
                        <span className="fs-6 text-success dark:text-success-200">Weekly loss</span>
                        <span className="fw-bold text-success dark:text-success-200">{results.safeRecommendations.weeklyLoss} lbs</span>
                      </div>
                      <div className="hstack justify-between py-1">
                        <span className="fs-6 text-success dark:text-success-200">New timeframe</span>
                        <span className="fw-bold text-success dark:text-success-200">{results.safeRecommendations.timeframe} weeks</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Metabolic Info */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Your Metabolism</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">BMR (at rest)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.bmr} cal</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">TDEE (total daily)</span>
                      <span className="fw-bold text-dark dark:text-white">{results.tdee} cal</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Minimum safe calories</span>
                      <span className="fw-bold text-dark dark:text-white">{results.minCalories} cal</span>
                    </div>
                  </div>
                </div>

                {/* GLP-1 Information */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-info">GLP-1 Treatment Benefits</h5>
                  <p className="fs-6 text-info dark:text-info-200 m-0">
                    GLP-1 medications like Mounjaro can help reduce appetite and make it easier 
                    to maintain your calorie deficit for sustainable weight loss.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Ready to Start Your Calorie Plan?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Get professional medical support to implement your calorie deficit plan safely 
              with GLP-1 treatment and regular monitoring
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
                Book Medical Consultation
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
