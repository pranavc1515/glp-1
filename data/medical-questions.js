export const medicalQuestions = {
    // Personal Information
    personalInfo: [
        {
            id: "firstName",
            type: "text",
            question: "First Name",
            required: true,
            placeholder: "Enter your first name"
        },
        {
            id: "lastName", 
            type: "text",
            question: "Last Name",
            required: true,
            placeholder: "Enter your last name"
        },
        {
            id: "phoneNumber",
            type: "tel",
            question: "Phone Number",
            required: true,
            placeholder: "Enter your phone number"
        },
        {
            id: "gender",
            type: "radio",
            question: "Gender",
            required: true,
            options: [
                { value: "male", label: "Male" },
                { value: "female", label: "Female" }
            ]
        },
        {
            id: "age",
            type: "number",
            question: "What is your Age?",
            required: true,
            validation: { min: 18, max: 120 }
        },
        {
            id: "height",
            type: "text",
            question: "What is your current height?",
            required: true,
            placeholder: "e.g., 5'6\" or 168 cm"
        },
        {
            id: "weight",
            type: "number",
            question: "What is your current weight?",
            required: true,
            validation: { min: 80, max: 800 },
            placeholder: "Weight in pounds"
        }
    ],

    // Medical History
    medicalHistory: [
        {
            id: "pregnancy_status",
            type: "radio",
            question: "Are you currently pregnant or breastfeeding?",
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
            id: "hormone_kidney_liver_conditions",
            type: "checkbox",
            question: "Do you have, or have you ever been diagnosed with, any of these hormone, kidney, or liver conditions?",
            required: true,
            options: [
                { value: "pcod", label: "PCOD" },
                { value: "thyroid_cancer", label: "Personal or family history of thyroid cancer" },
                { value: "chronic_kidney_disease", label: "Chronic kidney disease" },
                { value: "diabetes_insulin", label: "Diabetes requiring insulin" },
                { value: "hypothyroidism", label: "Hypothyroidism (low functioning thyroid)" },
                { value: "hyperthyroidism", label: "Hyperthyroidism (high thyroid function)" },
                { value: "other", label: "Other" },
                { value: "none", label: "No, I have not been diagnosed with any of these conditions" }
            ],
            disqualifiers: {
                values: ["thyroid_cancer"],
                message: "Personal or family history of thyroid cancer is a contraindication for Mounjaro."
            }
        },
        {
            id: "diabetes_type2",
            type: "radio",
            question: "Do you currently have or have you ever been diagnosed with type 2 diabetes?",
            required: true,
            options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "family_history", label: "No, but I have a parent or sibling with type 2 diabetes" }
            ]
        },
        {
            id: "current_medications",
            type: "text",
            question: "Do you take any medication?",
            required: false,
            placeholder: "List any current medications or 'No' if none"
        },
        {
            id: "other_medical_conditions",
            type: "text", 
            question: "Do you have any other medical condition?",
            required: false,
            placeholder: "List any other medical conditions or 'No' if none"
        }
    ]
};

export const eligibilityLogic = {
    calculateBMI: (weight, height) => {
        // Handle height in different formats (feet'inches" or cm)
        let heightInInches = height;
        
        // If height contains ' or ", assume it's in feet'inches" format
        if (typeof height === 'string' && (height.includes("'") || height.includes('"'))) {
            const parts = height.match(/(\d+)'(\d+)"/);
            if (parts) {
                const feet = parseInt(parts[1]);
                const inches = parseInt(parts[2]);
                heightInInches = feet * 12 + inches;
            }
        } else if (typeof height === 'string' && height.includes('cm')) {
            // Convert cm to inches
            const cm = parseFloat(height.replace('cm', ''));
            heightInInches = cm / 2.54;
        } else {
            // Assume it's already in inches
            heightInInches = parseFloat(height) || 0;
        }
        
        return (weight / (heightInInches * heightInInches)) * 703;
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
        const height = answers.height || "";

        if (weight === 0 || !height) {
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

        // Check pregnancy status
        if (answers.pregnancy_status === "yes") {
            disqualifiers.push("Mounjaro is not recommended during pregnancy or while breastfeeding");
        }

        // Check thyroid cancer history
        if (answers.hormone_kidney_liver_conditions && 
            Array.isArray(answers.hormone_kidney_liver_conditions) &&
            answers.hormone_kidney_liver_conditions.includes("thyroid_cancer")) {
            disqualifiers.push("Personal or family history of thyroid cancer is a contraindication for Mounjaro");
        }

        // Check for other conditions that need monitoring
        if (answers.hormone_kidney_liver_conditions && 
            Array.isArray(answers.hormone_kidney_liver_conditions)) {
            
            if (answers.hormone_kidney_liver_conditions.includes("chronic_kidney_disease")) {
                warnings.push("Chronic kidney disease requires dose adjustment and careful monitoring");
            }
            
            if (answers.hormone_kidney_liver_conditions.includes("diabetes_insulin")) {
                warnings.push("Diabetes requiring insulin needs careful monitoring during treatment");
            }
            
            if (answers.hormone_kidney_liver_conditions.includes("hypothyroidism") || 
                answers.hormone_kidney_liver_conditions.includes("hyperthyroidism")) {
                warnings.push("Thyroid conditions require monitoring during treatment");
            }
        }

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
