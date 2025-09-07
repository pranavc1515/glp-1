export const medicalQuestions = {
    // Basic Information
    personalInfo: [
        {
            id: "age",
            type: "number",
            question: "What is your age?",
            required: true,
            validation: { min: 18, max: 120 },
            disqualifiers: { min: 18, message: "You must be 18 or older to use Mounjaro." }
        },
        {
            id: "gender",
            type: "radio",
            question: "What is your biological sex?",
            required: true,
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" }
            ]
        },
        {
            id: "height",
            type: "number",
            question: "What is your height in inches?",
            required: true,
            validation: { min: 36, max: 96 }
        },
        {
            id: "weight",
            type: "number",
            question: "What is your current weight in pounds?",
            required: true,
            validation: { min: 80, max: 800 }
        }
    ],

    // Medical History - Critical Safety Questions
    medicalHistory: [
        {
            id: "pregnancy_status",
            type: "radio",
            question: "Are you currently pregnant, planning to become pregnant, or breastfeeding?",
            required: true,
            showIf: { gender: "female" },
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" }
            ],
            disqualifiers: {
                values: ["yes"],
                message: "Mounjaro is not recommended during pregnancy or while breastfeeding."
            }
        },
        {
            id: "thyroid_cancer_history",
            type: "radio",
            question: "Do you have a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            disqualifiers: {
                values: ["yes"],
                message: "Mounjaro is contraindicated for individuals with a history of MTC or MEN 2."
            }
        },
        {
            id: "diabetes_type1",
            type: "radio",
            question: "Do you have Type 1 diabetes?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            disqualifiers: {
                values: ["yes"],
                message: "Mounjaro is not approved for Type 1 diabetes treatment."
            }
        },
        {
            id: "pancreatitis_history",
            type: "radio",
            question: "Have you ever had pancreatitis?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            warnings: {
                values: ["yes", "unsure"],
                message: "Previous pancreatitis requires careful evaluation by a healthcare provider."
            }
        },
        {
            id: "diabetic_retinopathy",
            type: "radio",
            question: "Do you have diabetic retinopathy (diabetes-related eye problems)?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            warnings: {
                values: ["yes"],
                message: "Diabetic retinopathy requires close monitoring during treatment."
            }
        }
    ],

    // Current Health Status
    currentHealth: [
        {
            id: "diabetes_type2",
            type: "radio",
            question: "Have you been diagnosed with Type 2 diabetes?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" }
            ]
        },
        {
            id: "current_medications",
            type: "checkbox",
            question: "Are you currently taking any of the following medications?",
            required: false,
            options: [
                { value: "insulin", label: "Insulin" },
                { value: "sulfonylureas", label: "Sulfonylureas (glipizide, glyburide, etc.)" },
                { value: "glp1_agonists", label: "Other GLP-1 agonists (Ozempic, Trulicity, etc.)" },
                { value: "warfarin", label: "Warfarin (blood thinner)" },
                { value: "none", label: "None of the above" }
            ],
            warnings: {
                values: ["glp1_agonists"],
                message: "Taking multiple GLP-1 agonists simultaneously is not recommended."
            }
        },
        {
            id: "kidney_disease",
            type: "radio",
            question: "Do you have kidney disease or reduced kidney function?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            warnings: {
                values: ["yes"],
                message: "Kidney disease requires dose adjustment and careful monitoring."
            }
        },
        {
            id: "gastroparesis",
            type: "radio",
            question: "Do you have gastroparesis (delayed stomach emptying)?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            warnings: {
                values: ["yes"],
                message: "Gastroparesis may be worsened by Mounjaro and requires evaluation."
            }
        }
    ],

    // Weight Loss Goals and History
    weightHistory: [
        {
            id: "weight_loss_goal",
            type: "number",
            question: "How much weight would you like to lose (in pounds)?",
            required: true,
            validation: { min: 5, max: 200 }
        },
        {
            id: "previous_attempts",
            type: "checkbox",
            question: "What weight loss methods have you tried in the past?",
            required: false,
            options: [
                { value: "diet_exercise", label: "Diet and exercise" },
                { value: "prescription_meds", label: "Prescription weight loss medications" },
                { value: "otc_supplements", label: "Over-the-counter supplements" },
                { value: "surgery", label: "Weight loss surgery" },
                { value: "none", label: "This is my first serious weight loss attempt" }
            ]
        },
        {
            id: "commitment_level",
            type: "radio",
            question: "Are you committed to making lifestyle changes including diet and exercise while taking Mounjaro?",
            required: true,
            options: [
                { value: "very_committed", label: "Very committed - I'm ready to make significant changes" },
                { value: "somewhat_committed", label: "Somewhat committed - I'll try my best" },
                { value: "not_sure", label: "Not sure what changes I need to make" }
            ],
            warnings: {
                values: ["not_sure"],
                message: "Mounjaro works best when combined with lifestyle modifications."
            }
        }
    ],

    // Allergies and Side Effects
    allergiesAndSideEffects: [
        {
            id: "tirzepatide_allergy",
            type: "radio",
            question: "Have you ever had an allergic reaction to tirzepatide (Mounjaro) or similar medications?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "I'm not sure" }
            ],
            disqualifiers: {
                values: ["yes"],
                message: "Previous allergic reaction to tirzepatide is a contraindication."
            }
        },
        {
            id: "gi_tolerance",
            type: "radio",
            question: "How well do you typically tolerate medications that may cause nausea or stomach upset?",
            required: true,
            options: [
                { value: "well", label: "Very well - I rarely have stomach issues" },
                { value: "moderately", label: "Moderately well - I can manage mild side effects" },
                { value: "poorly", label: "Poorly - I'm very sensitive to stomach medications" }
            ],
            warnings: {
                values: ["poorly"],
                message: "Mounjaro commonly causes nausea and GI side effects, especially when starting."
            }
        }
    ],

    // Lifestyle and Support
    lifestyle: [
        {
            id: "healthcare_provider",
            type: "radio",
            question: "Do you have a regular healthcare provider who can monitor your progress?",
            required: true,
            options: [
                { value: "yes", label: "Yes, I have a regular doctor" },
                { value: "no", label: "No, I don't have a regular doctor" },
                { value: "telehealth", label: "I'm interested in telehealth monitoring" }
            ]
        },
        {
            id: "injection_comfort",
            type: "radio",
            question: "Are you comfortable with self-administering weekly injections?",
            required: true,
            options: [
                { value: "comfortable", label: "Very comfortable" },
                { value: "willing", label: "Willing to learn" },
                { value: "uncomfortable", label: "Very uncomfortable with injections" }
            ],
            warnings: {
                values: ["uncomfortable"],
                message: "Mounjaro requires weekly self-injections. Consider if this is right for you."
            }
        }
    ]
};

export const eligibilityLogic = {
    calculateBMI: (weight, height) => {
        return (weight / (height * height)) * 703;
    },

    assessEligibility: (answers) => {
        const disqualifiers = [];
        const warnings = [];
        const recommendations = [];

        // Validate input
        if (!answers || typeof answers !== 'object') {
            return {
                eligible: false,
                bmi: "0.0",
                disqualifiers: ["Invalid assessment data"],
                warnings: [],
                recommendations: []
            };
        }

        // Calculate BMI - add safety checks
        const weight = parseFloat(answers.weight) || 0;
        const height = parseFloat(answers.height) || 0;

        if (weight === 0 || height === 0) {
            disqualifiers.push("Valid weight and height are required");
        } else {
            const bmi = eligibilityLogic.calculateBMI(weight, height);

            // BMI Requirements
            if (bmi < 27) {
                disqualifiers.push("BMI must be ≥27 for weight loss treatment with Mounjaro");
            } else if (bmi >= 27 && bmi < 30) {
                warnings.push("BMI 27-30 typically requires additional weight-related conditions");
            }
        }

        // Check all question categories for disqualifiers and warnings
        Object.values(medicalQuestions).forEach(category => {
            if (Array.isArray(category)) {
                category.forEach(question => {
                    const answer = answers[question.id];

                    // Check disqualifiers
                    if (question.disqualifiers &&
                        question.disqualifiers.values &&
                        Array.isArray(question.disqualifiers.values) &&
                        answer) {
                        if (question.disqualifiers.values.includes(answer)) {
                            disqualifiers.push(question.disqualifiers.message);
                        }
                    }

                    // Check warnings
                    if (question.warnings &&
                        question.warnings.values &&
                        Array.isArray(question.warnings.values) &&
                        answer) {
                        const isWarning = Array.isArray(answer)
                            ? answer.some(val => question.warnings.values.includes(val))
                            : question.warnings.values.includes(answer);

                        if (isWarning) {
                            warnings.push(question.warnings.message);
                        }
                    }
                });
            }
        });

        // Generate recommendations
        if (disqualifiers.length === 0) {
            recommendations.push("You may be a candidate for Mounjaro weight loss treatment");
            recommendations.push("A healthcare provider consultation is required for prescription");

            if (answers.diabetes_type2 === "yes") {
                recommendations.push("Mounjaro may help with both weight loss and diabetes management");
            }

            if (warnings.length > 0) {
                recommendations.push("Additional medical evaluation needed due to your health history");
            }
        }

        const finalBmi = (weight && height) ? eligibilityLogic.calculateBMI(weight, height) : 0;

        return {
            eligible: disqualifiers.length === 0,
            bmi: finalBmi.toFixed(1),
            disqualifiers,
            warnings,
            recommendations
        };
    }
};
