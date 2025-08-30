import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-4xl">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0 text-primary dark:text-tertiary">Privacy Policy</h1>
              <p className="fs-6 text-gray-600 dark:text-gray-300 mt-2">
                For more information, please contact hello@healthflexi.com
              </p>
            </div>
          </header>
          
          <div className="page-content panel fs-6 md:fs-5">
            <div className="panel p-4 lg:p-6 bg-gray-25 dark:bg-gray-800 rounded-2 mb-6">
              <p className="fs-5 fw-medium text-dark dark:text-white">
                At HealthFlexi, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and share your personal and health-related information when you engage with our medicated weight loss services, including GLP-1 + GIP-based interventions (such as tirzepatide), teleconsultations, diagnostics, and lifestyle guidance.
              </p>
              <p className="mt-3">
                We are committed to protecting your data in accordance with Indian laws, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the applicable rules for Sensitive Personal Data or Information (SPDI).
              </p>
            </div>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              1. Information We Collect
            </h2>
            <p>When you use our services, we collect the following categories of data:</p>
            
            <h3 className="h5 md:h4 mt-4 mb-2">a. Personal Information</h3>
            <ul className="list list-bullets">
              <li>Full name, mobile number, email address, and residential address</li>
              <li>Gender, age, and date of birth</li>
              <li>Identity proof (if required for prescription validation)</li>
              <li>Payment method details and transaction history</li>
            </ul>

            <h3 className="h5 md:h4 mt-4 mb-2">b. Sensitive Personal Data or Information (SPDI)</h3>
            <ul className="list list-bullets">
              <li>Medical history and current health conditions</li>
              <li>Prescription details and medication usage (e.g., GLP-1 + GIP injections)</li>
              <li>Lifestyle data (e.g., diet, physical activity, sleep patterns)</li>
              <li>Body measurements (e.g., weight, BMI, waist circumference)</li>
              <li>Diagnostic test results from partner laboratories</li>
            </ul>

            <h3 className="h5 md:h4 mt-4 mb-2">c. Technical & Usage Data</h3>
            <ul className="list list-bullets">
              <li>Device identifiers, IP address</li>
              <li>Usage behavior on our website or mobile app</li>
              <li>Activity logs related to consultations and program engagement</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              2. Purpose of Data Collection
            </h2>
            <p>Your information helps us:</p>
            <ul className="list list-bullets">
              <li>Evaluate eligibility for weight loss medication and clinical protocols</li>
              <li>Schedule and manage teleconsultations with licensed doctors and nutritionists</li>
              <li>Create and personalize diet, fitness, and lifestyle plans</li>
              <li>Coordinate diagnostic tests and follow-up services</li>
              <li>Track progress and adjust your treatment plan</li>
              <li>Process payments and manage subscriptions</li>
              <li>Conduct anonymized internal research and analytics</li>
              <li>Comply with legal and medical record-keeping requirements</li>
            </ul>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              3. Sharing Your Information
            </h2>
            <p>We share your data only as necessary and with appropriate safeguards:</p>
            
            <div className="panel p-4 border-start border-primary bg-primary bg-opacity-5 dark:bg-opacity-10 my-4">
              <p className="fw-medium mb-2">We do not sell, rent, or trade your personal information to advertisers or third parties.</p>
            </div>

            <ul className="list list-bullets">
              <li><strong>Healthcare Providers:</strong> Licensed doctors, dietitians, and health coaches involved in your care</li>
              <li><strong>Diagnostic Partners:</strong> NABL-accredited labs for tests and reports</li>
              <li><strong>Technology Vendors:</strong> Secure platforms that host our software and communication tools</li>
              <li><strong>Payment Processors:</strong> For billing and subscription services</li>
              <li><strong>Regulatory Authorities:</strong> When required by Indian law, court order, or for public health compliance</li>
            </ul>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              4. Data Protection and Security
            </h2>
            <p>We follow industry-standard security practices including:</p>
            <ul className="list list-bullets">
              <li>End-to-end encryption for data transmission and storage</li>
              <li>HIPAA-compliant data storage systems</li>
              <li>Multi-factor authentication and access control</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure disposal of data when no longer needed</li>
            </ul>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              5. Your Rights as a User
            </h2>
            <p>As a user of HealthFlexi, you have the right to:</p>
            <ul className="list list-bullets">
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent at any time (may impact services)</li>
              <li>Request deletion of data, subject to retention obligations</li>
              <li>Data portability in commonly used formats</li>
            </ul>
            <p>To exercise these rights, please contact us at <strong>support@healthflexi.com</strong>.</p>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              6. Consent and Legal Basis
            </h2>
            <p>
              By signing up for our services, completing medical assessments, or participating in consultations, you give explicit consent for us to process your personal and health information.
            </p>
            <p>
              If you are using HealthFlexi on behalf of someone else (e.g., a minor or dependent), you confirm you have the authority to share their information.
            </p>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              7. Data Retention Policy
            </h2>
            <ul className="list list-bullets">
              <li><strong>Account data:</strong> Retained while your account is active or until consent is withdrawn</li>
              <li><strong>Health/medical data:</strong> Retained for at least 3 years post-interaction or program completion</li>
              <li><strong>Financial transaction data:</strong> Retained for 8 years per tax/company laws</li>
              <li><strong>Other data:</strong> Retained for 3 years post-interaction, unless required for legal purposes</li>
            </ul>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              8. Use of Cookies and Analytics
            </h2>
            <p>Our website and app may use cookies and third-party analytics tools to:</p>
            <ul className="list list-bullets">
              <li>Improve functionality and user experience</li>
              <li>Monitor engagement and performance</li>
              <li>Deliver personalized recommendations</li>
              <li>Remember your preferences and settings</li>
            </ul>
            <p>You may adjust your cookie settings in your browser at any time.</p>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              9. Children's Privacy
            </h2>
            <p>
              Our services are intended for individuals 18 years or older. We do not knowingly collect personal information from children under 18 without verifiable parental consent. If we discover that we have collected such information, we will delete it promptly.
            </p>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              10. Updates to This Policy
            </h2>
            <p>
              We may revise this Privacy Policy periodically. Any changes will be posted on our website with the updated effective date. Continued use of our services after changes implies your acceptance of the revised policy.
            </p>

            <h2 className="h4 md:h3 mt-6 lg:mt-8 mb-3 text-primary dark:text-tertiary">
              11. Contact Us
            </h2>
            <div className="panel p-4 lg:p-6 bg-gray-25 dark:bg-gray-800 rounded-2">
              <p className="fw-medium mb-3">For questions, concerns, or to report a privacy issue, contact us at:</p>
              <div className="vstack gap-2">
                <p><strong>HealthFlexi Technologies Pvt Ltd</strong></p>
                <p>Email: <a href="mailto:hello@healthflexi.com" className="text-primary dark:text-tertiary">hello@healthflexi.com</a></p>
                <p>Phone: <a href="tel:+918090809086" className="text-primary dark:text-tertiary">+91 8090 8090 86</a></p>
                <p>Website: <a href="https://www.healthflexi.com" className="text-primary dark:text-tertiary">www.healthflexi.com</a></p>
                <p>Registered Office: 4th Floor, 7/25A, Kirti Nagar Industrial Area, New Delhi - 110015</p>
              </div>
            </div>

            <div className="panel mt-6 p-4 bg-tertiary bg-opacity-10 dark:bg-opacity-20 rounded-2 border border-tertiary border-opacity-20">
              <h3 className="h5 mb-2 text-tertiary dark:text-tertiary">Grievance Officer</h3>
              <p>In accordance with the IT Act and the SPDI Rules:</p>
              <div className="vstack gap-1 mt-2">
                <p><strong>Name:</strong> Data Protection Officer</p>
                <p><strong>Email:</strong> <a href="mailto:dpo@healthflexi.com" className="text-tertiary">dpo@healthflexi.com</a></p>
                <p><strong>Address:</strong> 4th Floor, 7/25A, Kirti Nagar Industrial Area, New Delhi - 110015</p>
              </div>
            </div>
          </div>

          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
