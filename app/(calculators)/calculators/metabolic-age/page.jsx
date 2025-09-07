"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function MetabolicAgeCalculatorPage() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(25);
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [muscleMass, setMuscleMass] = useState(30);
  const [results, setResults] = useState({});

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    extra: 1.9
  };

  useEffect(() => {
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    // Calculate lean body mass
    const leanBodyMass = weight * (1 - bodyFatPercentage / 100);
    
    // Calculate TDEE
    const tdee = bmr * activityMultipliers[activityLevel];

    // Calculate metabolic age using a comprehensive formula
    // This takes into account BMR efficiency, body composition, and fitness level
    
    // Base metabolic efficiency (compared to average for age)
    let expectedBMR;
    if (gender === 'male') {
      expectedBMR = 88.362 + (13.397 * 75) + (4.799 * 175) - (5.677 * age); // Average male
    } else {
      expectedBMR = 447.593 + (9.247 * 65) + (3.098 * 165) - (4.330 * age); // Average female
    }
    
    const bmrRatio = bmr / expectedBMR;
    
    // Body composition factor
    let idealBodyFat;
    if (gender === 'male') {
      idealBodyFat = 15; // Ideal for males
    } else {
      idealBodyFat = 22; // Ideal for females
    }
    
    const bodyFatFactor = bodyFatPercentage / idealBodyFat;
    
    // Activity level factor
    const activityFactor = activityMultipliers[activityLevel] / 1.55; // Moderate as baseline
    
    // Muscle mass factor (estimated)
    const expectedMuscleMass = gender === 'male' ? 40 : 30;
    const muscleFactor = muscleMass / expectedMuscleMass;
    
    // Calculate metabolic age
    // Lower is better (younger metabolic age)
    let metabolicAge = age;
    
    // Adjust for BMR efficiency
    metabolicAge = metabolicAge + ((1 - bmrRatio) * 10);
    
    // Adjust for body fat
    metabolicAge = metabolicAge + ((bodyFatFactor - 1) * 8);
    
    // Adjust for activity level
    metabolicAge = metabolicAge - ((activityFactor - 1) * 5);
    
    // Adjust for muscle mass
    metabolicAge = metabolicAge - ((muscleFactor - 1) * 6);
    
    // Ensure reasonable bounds
    metabolicAge = Math.max(18, Math.min(80, metabolicAge));
    
    const ageDifference = metabolicAge - age;
    
    // Determine metabolic health category
    let category = '';
    let categoryColor = '';
    let healthStatus = '';
    
    if (ageDifference <= -5) {
      category = 'Excellent';
      categoryColor = 'success';
      healthStatus = 'Your metabolism is significantly younger than your age!';
    } else if (ageDifference <= -2) {
      category = 'Very Good';
      categoryColor = 'success';
      healthStatus = 'Your metabolism is younger than your chronological age.';
    } else if (ageDifference <= 2) {
      category = 'Good';
      categoryColor = 'info';
      healthStatus = 'Your metabolic age matches your chronological age.';
    } else if (ageDifference <= 5) {
      category = 'Fair';
      categoryColor = 'warning';
      healthStatus = 'Your metabolism is slightly older than your age.';
    } else {
      category = 'Needs Improvement';
      categoryColor = 'danger';
      healthStatus = 'Your metabolism is significantly older than your age.';
    }
    
    // Generate recommendations
    let recommendations = [];
    
    if (ageDifference > 2) {
      recommendations.push('Increase physical activity to boost metabolism');
      recommendations.push('Focus on strength training to build muscle mass');
      recommendations.push('Reduce body fat through calorie deficit');
      recommendations.push('Consider GLP-1 treatment for metabolic improvement');
    } else if (ageDifference > -2) {
      recommendations.push('Maintain current activity level');
      recommendations.push('Continue strength training 2-3x per week');
      recommendations.push('Monitor body composition regularly');
    } else {
      recommendations.push('Excellent work! Maintain your current lifestyle');
      recommendations.push('Continue your fitness routine');
      recommendations.push('You can be a role model for metabolic health');
    }
    
    setResults({
      metabolicAge: parseFloat(metabolicAge.toFixed(1)),
      ageDifference: parseFloat(ageDifference.toFixed(1)),
      category,
      categoryColor,
      healthStatus,
      bmr: Math.round(bmr),
      bmi: parseFloat(bmi.toFixed(1)),
      leanBodyMass: parseFloat(leanBodyMass.toFixed(1)),
      tdee: Math.round(tdee),
      recommendations
    });
  }, [age, gender, weight, height, bodyFatPercentage, activityLevel, muscleMass]);

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
            <h1 className="h2 xl:h1 m-0">Metabolic Age Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Calculate your metabolic age based on body composition and fitness level
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
                
                {/* Chronological Age */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Chronological Age (years)</span>
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

                {/* Gender */}
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

                {/* Body Fat Percentage */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Body Fat Percentage (%)</span>
                    <span className="fw-bold text-dark dark:text-white">{bodyFatPercentage}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={bodyFatPercentage}
                    onChange={(e) => setBodyFatPercentage(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Use our Body Fat Calculator if unsure
                  </p>
                </div>

                {/* Muscle Mass Percentage */}
                <div className="vstack gap-2">
                  <div className="hstack justify-between">
                    <span className="fw-medium text-dark dark:text-white">Muscle Mass Percentage (%)</span>
                    <span className="fw-bold text-dark dark:text-white">{muscleMass}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    value={muscleMass}
                    onChange={(e) => setMuscleMass(parseInt(e.target.value))}
                    className="form-range w-100"
                  />
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Estimate based on fitness level and strength training
                  </p>
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
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Metabolic Age Result */}
                <div className={`panel bg-${results.categoryColor}-100 dark:bg-${results.categoryColor}-900 rounded-2 p-4 text-center`}>
                  <div className={`fs-6 fw-medium text-${results.categoryColor} dark:text-${results.categoryColor}-200 mb-2`}>
                    Your Metabolic Age
                  </div>
                  <div className={`h2 xl:h1 fw-bold text-${results.categoryColor} dark:text-${results.categoryColor}-200`}>
                    {results.metabolicAge} years
                  </div>
                  <div className={`fs-6 text-${results.categoryColor} dark:text-${results.categoryColor}-200`}>
                    {results.ageDifference > 0 ? '+' : ''}{results.ageDifference} years vs chronological age
                  </div>
                </div>

                {/* Health Status */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Metabolic Health Status</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Category</span>
                      <span className={`fw-bold text-${results.categoryColor}`}>{results.category}</span>
                    </div>
                    <div className="py-2">
                      <p className="fs-6 text-dark dark:text-white text-opacity-80 m-0">
                        {results.healthStatus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metabolic Metrics */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-info">Your Metabolic Profile</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">BMR (Basal Metabolic Rate)</span>
                      <span className="fw-bold text-info">{results.bmr} cal/day</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">TDEE (Total Daily Energy)</span>
                      <span className="fw-bold text-info">{results.tdee} cal/day</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">BMI</span>
                      <span className="fw-bold text-info">{results.bmi}</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-info">Lean Body Mass</span>
                      <span className="fw-bold text-info">{results.leanBodyMass} kg</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-success">Recommendations</h4>
                  <ul className="list-unstyled vstack gap-1">
                    {results.recommendations?.map((rec, index) => (
                      <li key={index} className="fs-6 text-success dark:text-success-200">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GLP-1 Information */}
                <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-warning">Metabolic Improvement with GLP-1</h5>
                  <p className="fs-6 text-warning dark:text-warning-200 m-0">
                    GLP-1 medications can improve metabolic age by reducing body fat, 
                    improving insulin sensitivity, and supporting muscle preservation during weight loss.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="row child-cols-12 lg:child-cols-3 col-match g-4 mt-6">
            <div className="col">
              <div className="panel bg-primary-50 dark:bg-primary-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-primary">What is Metabolic Age?</h5>
                <p className="fs-6 text-primary dark:text-primary-200 m-0">
                  Metabolic age compares your metabolism to the average for your 
                  chronological age group based on body composition and fitness.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-info">Factors That Matter</h5>
                <p className="fs-6 text-info dark:text-info-200 m-0">
                  Body fat percentage, muscle mass, activity level, and metabolic 
                  efficiency all contribute to your metabolic age.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-success">Improvement</h5>
                <p className="fs-6 text-success dark:text-success-200 m-0">
                  Regular exercise, strength training, and healthy body composition 
                  can significantly lower your metabolic age.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Want to Improve Your Metabolic Age?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Our medical team can help you optimize your metabolism with personalized 
              weight loss programs and GLP-1 treatment to achieve a younger metabolic age
            </p>
            <div className="hstack gap-2 justify-center">
              <Link 
                href="/mounjaro-assessment" 
                className="btn btn-primary"
              >
                Check Eligibility
              </Link>
              <Link 
                href="/calculators/body-fat" 
                className="btn btn-outline-primary"
              >
                Calculate Body Fat →
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
