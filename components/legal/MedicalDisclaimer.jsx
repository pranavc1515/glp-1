"use client";

export default function MedicalDisclaimer({ variant = "full" }) {
  if (variant === "compact") {
    return (
      <div className="border rounded p-3 bg-gray-50 dark:bg-gray-800">
        <p className="fs-7 mb-0">
          <strong>Medical Disclaimer:</strong> This platform provides educational information only. 
          Consult healthcare providers for medical advice. Prescription required.
        </p>
      </div>
    );
  }

  return (
    <div className="panel border rounded p-4 bg-gray-50 dark:bg-gray-800">
      <h5 className="h6 mb-3">Important Medical & Legal Information</h5>
      
      <div className="vstack gap-3">
        <div>
          <h6 className="fs-7 fw-bold mb-1">Medical Disclaimer</h6>
          <p className="fs-7 mb-0">
            The information provided on this platform is for educational and informational purposes only. 
            It is not intended as medical advice, diagnosis, or treatment. Always seek advice from qualified 
            healthcare professionals regarding medical conditions and treatments.
          </p>
        </div>
        
        <div>
          <h6 className="fs-7 fw-bold mb-1">Prescription Requirement</h6>
          <p className="fs-7 mb-0">
            Mounjaro (tirzepatide) is a prescription medication that requires evaluation and prescription 
            by a licensed healthcare provider. This platform facilitates consultations but does not 
            prescribe medications directly.
          </p>
        </div>
        
        <div>
          <h6 className="fs-7 fw-bold mb-1">FDA Compliance</h6>
          <p className="fs-7 mb-0">
            This platform complies with FDA regulations regarding the sale and distribution of 
            prescription medications. All prescriptions are issued by licensed medical professionals 
            after proper evaluation.
          </p>
        </div>
        
        <div>
          <h6 className="fs-7 fw-bold mb-1">Privacy & Data Security</h6>
          <p className="fs-7 mb-0">
            Your personal health information is protected in accordance with HIPAA regulations. 
            We use secure, encrypted systems to protect your data and share information only with 
            authorized healthcare providers involved in your care.
          </p>
        </div>
        
        <div>
          <h6 className="fs-7 fw-bold mb-1">Risk Information</h6>
          <p className="fs-7 mb-0">
            Mounjaro may cause serious side effects including thyroid tumors, pancreatitis, and 
            severe allergic reactions. Discuss all risks and benefits with your healthcare provider 
            before starting treatment.
          </p>
        </div>
        
        <div>
          <h6 className="fs-7 fw-bold mb-1">No Guarantee</h6>
          <p className="fs-7 mb-0">
            Completion of the assessment and consultation does not guarantee a prescription. 
            Healthcare providers make independent medical decisions based on individual patient needs 
            and medical judgment.
          </p>
        </div>
      </div>
    </div>
  );
}
