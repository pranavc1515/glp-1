"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';

export default function DiabetesRiskCalculatorPage() {
  const [age, setAge] = useState(45);
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(170);
  const [familyHistory, setFamilyHistory] = useState('none');
  const [physicalActivity, setPhysicalActivity] = useState('moderate');
  const [bloodPressure, setBloodPressure] = useState('normal');
  const [gestationalDiabetes, setGestationalDiabetes] = useState(false);
  const [polycysticOvaries, setPolycysticOvaries] = useState(false);
  const [ethnicBackground, setEthnicBackground] = useState('other');
  const [results, setResults] = useState({});

  useEffect(() => {
    // Calculate BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    // Calculate diabetes risk score using ADA Risk Test algorithm
    let riskScore = 0;
    
    // Age scoring
    if (age >= 40 && age < 50) riskScore += 1;
    else if (age >= 50 && age < 60) riskScore += 2;
    else if (age >= 60) riskScore += 3;
    
    // Gender (males have slightly higher risk)
    if (gender === 'male') riskScore += 1;
    
    // BMI scoring
    if (bmi >= 25 && bmi < 30) riskScore += 1;
    else if (bmi >= 30 && bmi < 35) riskScore += 2;
    else if (bmi >= 35) riskScore += 3;
    
    // Family history
    if (familyHistory === 'parent') riskScore += 1;
    else if (familyHistory === 'sibling') riskScore += 1;
    else if (familyHistory === 'both') riskScore += 2;
    
    // Physical activity
    if (physicalActivity === 'low') riskScore += 1;
    else if (physicalActivity === 'none') riskScore += 2;
    
    // High blood pressure
    if (bloodPressure === 'high') riskScore += 1;
    else if (bloodPressure === 'borderline') riskScore += 1;
    
    // Gestational diabetes (females only)
    if (gender === 'female' && gestationalDiabetes) riskScore += 1;
    
    // Polycystic ovaries (females only)
    if (gender === 'female' && polycysticOvaries) riskScore += 1;
    
    // Ethnic background (higher risk groups)
    if (['hispanic', 'african', 'native', 'asian', 'pacific'].includes(ethnicBackground)) {
      riskScore += 1;
    }
    
    // Determine risk level
    let riskLevel = '';
    let riskColor = '';
    let riskPercentage = 0;
    let recommendations = [];
    
    if (riskScore <= 2) {
      riskLevel = 'Low Risk';
      riskColor = 'success';
      riskPercentage = 5;
      recommendations = [
        'Maintain healthy lifestyle habits',
        'Continue regular physical activity',
        'Keep a balanced diet',
        'Get screened every 3 years after age 45'
      ];
    } else if (riskScore <= 4) {
      riskLevel = 'Moderate Risk';
      riskColor = 'warning';
      riskPercentage = 15;
      recommendations = [
        'Increase physical activity to 150+ minutes/week',
        'Focus on weight management if overweight',
        'Reduce refined carbohydrates and sugar',
        'Get screened annually',
        'Consider lifestyle intervention programs'
      ];
    } else if (riskScore <= 6) {
      riskLevel = 'High Risk';
      riskColor = 'danger';
      riskPercentage = 30;
      recommendations = [
        'Immediate lifestyle changes needed',
        'Consult healthcare provider for diabetes prevention',
        'Consider medication if lifestyle changes insufficient',
        'Regular blood glucose monitoring',
        'Weight loss of 5-10% if overweight'
      ];
    } else {
      riskLevel = 'Very High Risk';
      riskColor = 'danger';
      riskPercentage = 50;
      recommendations = [
        'Urgent medical consultation required',
        'Immediate comprehensive lifestyle intervention',
        'Consider diabetes prevention medications',
        'Regular monitoring with healthcare team',
        'Structured weight loss program if applicable'
      ];
    }
    
    // BMI category
    let bmiCategory = '';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi < 25) bmiCategory = 'Normal';
    else if (bmi < 30) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';
    
    setResults({
      riskScore,
      riskLevel,
      riskColor,
      riskPercentage,
      bmi: parseFloat(bmi.toFixed(1)),
      bmiCategory,
      recommendations
    });
  }, [age, gender, weight, height, familyHistory, physicalActivity, bloodPressure, gestationalDiabetes, polycysticOvaries, ethnicBackground]);

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
            <h1 className="h2 xl:h1 m-0">Diabetes Risk Calculator</h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mt-3">
              Assess your risk of developing type 2 diabetes based on key health factors
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

                {/* Family History */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Family History of Diabetes</label>
                  <select 
                    className="form-control"
                    value={familyHistory}
                    onChange={(e) => setFamilyHistory(e.target.value)}
                  >
                    <option value="none">No family history</option>
                    <option value="parent">Parent with diabetes</option>
                    <option value="sibling">Sibling with diabetes</option>
                    <option value="both">Both parent and sibling</option>
                  </select>
                </div>

                {/* Physical Activity */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Physical Activity Level</label>
                  <select 
                    className="form-control"
                    value={physicalActivity}
                    onChange={(e) => setPhysicalActivity(e.target.value)}
                  >
                    <option value="high">Regular exercise (150+ min/week)</option>
                    <option value="moderate">Some exercise (30-150 min/week)</option>
                    <option value="low">Little exercise (&lt;30 min/week)</option>
                    <option value="none">No regular exercise</option>
                  </select>
                </div>

                {/* Blood Pressure */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Blood Pressure Status</label>
                  <select 
                    className="form-control"
                    value={bloodPressure}
                    onChange={(e) => setBloodPressure(e.target.value)}
                  >
                    <option value="normal">Normal (&lt;120/80)</option>
                    <option value="borderline">Borderline (120-139/80-89)</option>
                    <option value="high">High (≥140/90)</option>
                  </select>
                </div>

                {/* Ethnic Background */}
                <div className="vstack gap-2">
                  <label className="fw-medium text-dark dark:text-white">Ethnic Background</label>
                  <select 
                    className="form-control"
                    value={ethnicBackground}
                    onChange={(e) => setEthnicBackground(e.target.value)}
                  >
                    <option value="other">Caucasian/Other</option>
                    <option value="hispanic">Hispanic/Latino</option>
                    <option value="african">African American</option>
                    <option value="native">Native American</option>
                    <option value="asian">Asian</option>
                    <option value="pacific">Pacific Islander</option>
                  </select>
                </div>

                {/* Female-specific questions */}
                {gender === 'female' && (
                  <>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gestationalDiabetes"
                        checked={gestationalDiabetes}
                        onChange={(e) => setGestationalDiabetes(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="gestationalDiabetes">
                        History of gestational diabetes
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="polycysticOvaries"
                        checked={polycysticOvaries}
                        onChange={(e) => setPolycysticOvaries(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="polycysticOvaries">
                        Polycystic ovary syndrome (PCOS)
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="panel vstack gap-4">
                
                {/* Risk Level Result */}
                <div className={`panel bg-${results.riskColor}-100 dark:bg-${results.riskColor}-900 rounded-2 p-4 text-center`}>
                  <div className={`fs-6 fw-medium text-${results.riskColor} dark:text-${results.riskColor}-200 mb-2`}>
                    Your Diabetes Risk
                  </div>
                  <div className={`h2 xl:h1 fw-bold text-${results.riskColor} dark:text-${results.riskColor}-200`}>
                    {results.riskLevel}
                  </div>
                  <div className={`fs-6 text-${results.riskColor} dark:text-${results.riskColor}-200`}>
                    ~{results.riskPercentage}% chance in next 10 years
                  </div>
                </div>

                {/* Risk Score Breakdown */}
                <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-dark dark:text-white">Risk Assessment</h4>
                  <div className="vstack gap-2">
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Risk Score</span>
                      <span className="fw-bold text-dark dark:text-white">{results.riskScore}/10+</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">BMI</span>
                      <span className="fw-bold text-dark dark:text-white">{results.bmi} ({results.bmiCategory})</span>
                    </div>
                    <div className="hstack justify-between py-1">
                      <span className="fs-6 text-dark dark:text-white">Age Factor</span>
                      <span className="fw-bold text-dark dark:text-white">{age >= 45 ? 'Higher Risk' : 'Lower Risk'}</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4">
                  <h4 className="h5 mb-3 text-info">Recommendations</h4>
                  <ul className="list-unstyled vstack gap-1">
                    {results.recommendations?.map((rec, index) => (
                      <li key={index} className="fs-6 text-info dark:text-info-200">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GLP-1 Information */}
                <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4">
                  <h5 className="h6 mb-2 text-success">GLP-1 for Diabetes Prevention</h5>
                  <p className="fs-6 text-success dark:text-success-200 m-0">
                    GLP-1 medications like Mounjaro can significantly reduce diabetes risk by improving 
                    insulin sensitivity and promoting weight loss in high-risk individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="row child-cols-12 lg:child-cols-3 col-match g-4 mt-6">
            <div className="col">
              <div className="panel bg-warning-50 dark:bg-warning-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-warning">Risk Factors</h5>
                <p className="fs-6 text-warning dark:text-warning-200 m-0">
                  Age, weight, family history, activity level, and ethnicity 
                  all contribute to diabetes risk.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-info-50 dark:bg-info-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-info">Prevention</h5>
                <p className="fs-6 text-info dark:text-info-200 m-0">
                  Weight loss, regular exercise, and healthy diet can reduce 
                  diabetes risk by up to 58%.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="panel bg-success-50 dark:bg-success-900 rounded-2 p-4 text-center">
                <h5 className="h6 mb-2 text-success">Early Detection</h5>
                <p className="fs-6 text-success dark:text-success-200 m-0">
                  Regular screening and early intervention can prevent or 
                  delay type 2 diabetes onset.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 xl:mt-10">
            <h3 className="h4 mb-3">Concerned About Your Diabetes Risk?</h3>
            <p className="fs-6 opacity-80 mb-4">
              Our medical team can help you reduce diabetes risk with personalized weight loss 
              and lifestyle interventions, including GLP-1 treatment when appropriate
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
                Consult Our Doctors
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
