"use client";
import { useState, useEffect } from "react";
import { medicalQuestions, eligibilityLogic } from "@/data/medical-questions";
import { useRouter } from "next/navigation";
import MedicalDisclaimer from "@/components/legal/MedicalDisclaimer";

export default function MounjaroAssessment() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [eligibilityResults, setEligibilityResults] = useState(null);
  
  const questionCategories = Object.entries(medicalQuestions);
  const totalSteps = questionCategories.length;
  
  const currentCategory = questionCategories[currentStep];
  const [categoryName, questions] = currentCategory || [null, []];
  
  // Filter questions based on conditional logic
  const getVisibleQuestions = (questions) => {
    return questions.filter(question => {
      if (!question.showIf) return true;
      
      return Object.entries(question.showIf).every(([key, value]) => {
        return answers[key] === value;
      });
    });
  };
  
  const visibleQuestions = getVisibleQuestions(questions);
  
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const handleCheckboxChange = (questionId, value, checked) => {
    setAnswers(prev => {
      const currentValues = prev[questionId] || [];
      if (checked) {
        return {
          ...prev,
          [questionId]: [...currentValues.filter(v => v !== "none"), value]
        };
      } else {
        return {
          ...prev,
          [questionId]: currentValues.filter(v => v !== value)
        };
      }
    });
  };
  
  const isStepComplete = () => {
    return visibleQuestions
      .filter(q => q.required)
      .every(q => answers[q.id] && answers[q.id] !== "");
  };
  
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Assessment complete, calculate results
      const results = eligibilityLogic.assessEligibility(answers);
      setEligibilityResults(results);
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleStartOver = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setEligibilityResults(null);
  };
  
  const handleProceedToConsultation = () => {
    // Store assessment results in localStorage for consultation booking
    localStorage.setItem('mounjaroAssessment', JSON.stringify({
      answers,
      results: eligibilityResults,
      timestamp: new Date().toISOString()
    }));
    
    router.push('/mounjaro-consultation');
  };
  
  const getCategoryTitle = (categoryName) => {
    const titles = {
      personalInfo: "Personal Information",
      medicalHistory: "Medical History",
      currentHealth: "Current Health Status", 
      weightHistory: "Weight Loss History",
      allergiesAndSideEffects: "Allergies & Side Effects",
      lifestyle: "Lifestyle & Support"
    };
    return titles[categoryName] || categoryName;
  };
  
  const renderQuestion = (question) => {
    const { id, type, question: questionText, options, validation } = question;
    const value = answers[id] || "";
    
    switch (type) {
      case "radio":
        return (
          <div className="form-group">
            <label className="form-label ft-tertiary fs-6 fw-bold mb-3">
              {questionText}
              {question.required && <sup className="text-danger ms-1">*</sup>}
            </label>
            <div className="vstack gap-2">
              {options.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={id}
                    id={`${id}_${option.value}`}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => handleAnswerChange(id, e.target.value)}
                  />
                  <label 
                    className="form-check-label" 
                    htmlFor={`${id}_${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "checkbox":
        return (
          <div className="form-group">
            <label className="form-label ft-tertiary fs-6 fw-bold mb-3">
              {questionText}
              {question.required && <sup className="text-danger ms-1">*</sup>}
            </label>
            <div className="vstack gap-2">
              {options.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`${id}_${option.value}`}
                    checked={(value || []).includes(option.value)}
                    onChange={(e) => handleCheckboxChange(id, option.value, e.target.checked)}
                  />
                  <label 
                    className="form-check-label" 
                    htmlFor={`${id}_${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
        
      case "number":
        return (
          <div className="form-group">
            <label className="form-label ft-tertiary fs-6 fw-bold" htmlFor={id}>
              {questionText}
              {question.required && <sup className="text-danger ms-1">*</sup>}
            </label>
            <input
              type="number"
              id={id}
              className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
              value={value}
              onChange={(e) => handleAnswerChange(id, e.target.value)}
              min={validation?.min}
              max={validation?.max}
              required={question.required}
              placeholder={question.placeholder}
            />
          </div>
        );
        
      case "text":
        return (
          <div className="form-group">
            <label className="form-label ft-tertiary fs-6 fw-bold" htmlFor={id}>
              {questionText}
              {question.required && <sup className="text-danger ms-1">*</sup>}
            </label>
            <input
              type="text"
              id={id}
              className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
              value={value}
              onChange={(e) => handleAnswerChange(id, e.target.value)}
              required={question.required}
              placeholder={question.placeholder}
            />
          </div>
        );
        
      case "tel":
        return (
          <div className="form-group">
            <label className="form-label ft-tertiary fs-6 fw-bold" htmlFor={id}>
              {questionText}
              {question.required && <sup className="text-danger ms-1">*</sup>}
            </label>
            <input
              type="tel"
              id={id}
              className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
              value={value}
              onChange={(e) => handleAnswerChange(id, e.target.value)}
              required={question.required}
              placeholder={question.placeholder}
            />
          </div>
        );
        
      default:
        return null;
    }
  };
  
  if (showResults) {
    return (
      <div className="section py-6 lg:py-8 xl:py-12">
        <div className="container max-w-3xl">
          <div className="panel vstack gap-6 lg:gap-8">
            <header className="text-center">
              <h1 className="h2 lg:h1 m-0">Assessment Results</h1>
              <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-2">
                Based on your responses, here's your eligibility assessment
              </p>
            </header>
            
            <div className="panel">
              {/* BMI Display */}
              <div className="alert alert-info mb-4">
                <h4 className="h5 mb-2">Your BMI: {eligibilityResults.bmi}</h4>
                <p className="mb-0">
                  BMI is calculated based on your height and weight. 
                  For weight loss treatment, a BMI ≥27 is typically required.
                </p>
              </div>
              
              {/* Eligibility Status */}
              <div className={`alert ${eligibilityResults.eligible ? 'alert-success' : 'alert-warning'} mb-4`}>
                <h4 className="h5 mb-2">
                  {eligibilityResults.eligible ? 
                    "✓ You may be eligible for Mounjaro" : 
                    "⚠ Additional evaluation needed"
                  }
                </h4>
              </div>
              
              {/* Disqualifiers */}
              {eligibilityResults.disqualifiers.length > 0 && (
                <div className="alert alert-danger mb-4">
                  <h5 className="h6 mb-2">Important Safety Considerations:</h5>
                  <ul className="mb-0">
                    {eligibilityResults.disqualifiers.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Warnings */}
              {eligibilityResults.warnings.length > 0 && (
                <div className="alert alert-warning mb-4">
                  <h5 className="h6 mb-2">Additional Considerations:</h5>
                  <ul className="mb-0">
                    {eligibilityResults.warnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Recommendations */}
              {eligibilityResults.recommendations.length > 0 && (
                <div className="alert alert-info mb-4">
                  <h5 className="h6 mb-2">Next Steps:</h5>
                  <ul className="mb-0">
                    {eligibilityResults.recommendations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Legal Disclaimer */}
              <div className="border rounded p-4 bg-gray-50 dark:bg-gray-800 mb-4">
                <h5 className="h6 mb-2">Important Legal Notice:</h5>
                <p className="fs-7 mb-2">
                  This assessment is for informational purposes only and does not constitute medical advice. 
                  Mounjaro requires a prescription from a licensed healthcare provider. 
                  All medical decisions should be made in consultation with qualified healthcare professionals.
                </p>
                <p className="fs-7 mb-0">
                  This platform facilitates consultations but does not prescribe medications directly. 
                  Prescriptions are issued only by licensed medical professionals after proper evaluation.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="hstack gap-3 justify-center flex-wrap">
                {eligibilityResults.eligible && (
                  <button
                    onClick={handleProceedToConsultation}
                    className="btn btn-lg btn-primary text-white"
                  >
                    Schedule Consultation
                  </button>
                )}
                
                <button
                  onClick={handleStartOver}
                  className="btn btn-lg btn-outline-gray"
                >
                  Retake Assessment
                </button>
                
                <button
                  onClick={() => router.push('/page-contact')}
                  className="btn btn-lg btn-outline-primary"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section py-6 lg:py-8 xl:py-12">
      <div className="container max-w-2xl">
        <div className="panel vstack gap-6 lg:gap-8">
          <header className="text-center mt-4 lg:mt-6">
            <h1 className="h2 lg:h1 m-0">Eligibility Assessment</h1>
            <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-2">
              Complete this medical questionnaire to determine if Mounjaro may be right for you
            </p>
          </header>
          
          {/* Progress Bar */}
          <div className="panel">
            <div className="hstack justify-between items-center mb-3">
              <span className="fs-7 fw-medium">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="fs-7 text-gray-500">
                {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="progress" style={{ height: '8px' }}>
              <div 
                className="progress-bar bg-primary" 
                style={{ 
                  width: `${((currentStep + 1) / totalSteps) * 100}%`,
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
          
          {/* Current Step */}
          <div className="panel bg-white dark:bg-gray-800 border rounded-3 p-4 lg:p-6">
            <h2 className="h4 mb-4">{getCategoryTitle(categoryName)}</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="vstack gap-4">
              {visibleQuestions.map((question) => (
                <div key={question.id}>
                  {renderQuestion(question)}
                </div>
              ))}
            </form>
          </div>
          
          {/* Navigation */}
          <div className="hstack justify-between gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="btn btn-lg btn-outline-gray"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="btn btn-lg btn-primary text-white"
            >
              {currentStep === totalSteps - 1 ? 'Complete Assessment' : 'Next'}
            </button>
          </div>
          
          {/* Legal Notice */}
          <MedicalDisclaimer variant="compact" />
        </div>
      </div>
    </div>
  );
}
