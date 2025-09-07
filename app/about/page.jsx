import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';
import { teamMembers } from '@/data/team';

export const metadata = {
  title: 'About HealthFlexi | Medical Weight Loss Platform',
  description: 'Learn about HealthFlexi\'s mission to provide safe, effective medical weight loss with GLP-1 medications and licensed healthcare providers.',
};

export default function AboutPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header6 />
          <div id="wrapper" className="wrap">
            
            {/* Header Section */}
            <div className="section panel py-6 xl:py-9 bg-secondary dark:bg-gray-900">
              <div className="container max-w-lg">
                <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                  <div
                    className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <Link 
                      href="/" 
                      className="btn btn-sm btn-outline-primary mb-4"
                    >
                      ← Back to Home
                    </Link>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                      About HealthFlexi
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      We're revolutionizing medical weight loss by combining cutting-edge GLP-1 medications 
                      with personalized healthcare and expert medical supervision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-8">
                  <div className="col">
                    <div
                      className="panel vstack justify-center gap-4 h-100"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div>
                        <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 mb-4">
                          Our Mission
                        </h2>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                          HealthFlexi was founded with a simple yet powerful mission: to make safe, 
                          effective medical weight loss accessible to everyone. We believe that 
                          sustainable weight loss requires more than just willpower—it requires 
                          medical expertise, personalized care, and evidence-based treatments.
                        </p>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                          Our platform combines the latest advances in GLP-1 medications with 
                          comprehensive telehealth services, ensuring that every patient receives 
                          the highest quality of care from licensed healthcare providers.
                        </p>
                        <div className="hstack gap-3">
                          <Link 
                            href="/mounjaro-assessment" 
                            className="btn btn-primary"
                          >
                            Start Your Journey
                          </Link>
                          <Link 
                            href="/page-contact" 
                            className="btn btn-outline-primary"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="panel w-100 rounded lg:rounded-2 overflow-hidden"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                    >
                      <Image
                        src="/assets/images/about/health-team.jpg"
                        width={600}
                        height={500}
                        alt="HealthFlexi Medical Team"
                        className="w-100 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Our Core Values
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    The principles that guide everything we do at HealthFlexi
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-shield text-primary dark:text-primary-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Safety First</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Every treatment is medically supervised by licensed healthcare providers 
                        to ensure the highest standards of safety and care.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-checkmark text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Evidence-Based</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Our treatments are based on the latest medical research and FDA-approved 
                        medications with proven efficacy for weight loss.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Personalized Care</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Every patient receives individualized treatment plans tailored to their 
                        unique health needs, goals, and medical history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Meet Our Medical Team
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Board-certified healthcare providers dedicated to your weight loss success
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  {teamMembers.slice(0, 3).map((member, index) => (
                    <div
                      key={member.id}
                      className="col"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 text-center h-100">
                        <div className="w-100px h-100px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                          <Image
                            src={member.imgSrc}
                            width={100}
                            height={100}
                            alt={member.name}
                            className="w-100 h-100 rounded-circle object-cover"
                          />
                        </div>
                        <h3 className="h5 mb-2 text-dark dark:text-white">{member.name}</h3>
                        <p className="fs-6 text-primary dark:text-primary-200 mb-3">{member.position}</p>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="section panel py-6 xl:py-9 bg-primary-50 dark:bg-primary-900">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-primary dark:text-primary-200">
                    Our Impact
                  </h2>
                  <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80">
                    Transforming lives through medical weight loss
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-4 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel text-center">
                      <div className="h1 fw-bold text-primary dark:text-primary-200 mb-2">10,000+</div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                        Patients Successfully Treated
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel text-center">
                      <div className="h1 fw-bold text-primary dark:text-primary-200 mb-2">85%</div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                        Average Weight Loss Success Rate
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel text-center">
                      <div className="h1 fw-bold text-primary dark:text-primary-200 mb-2">50+</div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                        Licensed Healthcare Providers
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel text-center">
                      <div className="h1 fw-bold text-primary dark:text-primary-200 mb-2">4.9/5</div>
                      <p className="fs-6 text-primary dark:text-primary-200 text-opacity-80">
                        Patient Satisfaction Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div className="row child-cols-12 lg:child-cols-2 col-match g-4 lg:g-8">
                  <div className="col">
                    <div
                      className="panel w-100 rounded lg:rounded-2 overflow-hidden"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <Image
                        src="/assets/images/about/telehealth.jpg"
                        width={600}
                        height={500}
                        alt="HealthFlexi Telehealth Platform"
                        className="w-100 h-auto"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="panel vstack justify-center gap-4 h-100"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                    >
                      <div>
                        <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 mb-4">
                          Advanced Technology
                        </h2>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                          Our state-of-the-art telehealth platform makes it easy to connect with 
                          healthcare providers from anywhere. With secure video consultations, 
                          digital health tracking, and comprehensive health calculators, we've 
                          made medical weight loss more accessible than ever.
                        </p>
                        <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                          Our platform integrates seamlessly with your daily routine, providing 
                          real-time health insights and personalized recommendations to support 
                          your weight loss journey.
                        </p>
                        <div className="hstack gap-3">
                          <Link 
                            href="/calculators" 
                            className="btn btn-primary"
                          >
                            Try Our Tools
                          </Link>
                          <Link 
                            href="/mounjaro-consultation" 
                            className="btn btn-outline-primary"
                          >
                            Book Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container max-w-lg">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <div className="panel bg-secondary dark:bg-gray-800 rounded-2 p-6 lg:p-8 text-center">
                    <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-dark dark:text-white">
                      Ready to Join the HealthFlexi Family?
                    </h2>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mb-4">
                      Take the first step towards a healthier, happier you with our medical 
                      weight loss program designed for lasting success.
                    </p>
                    <div className="hstack gap-3 justify-center flex-wrap">
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-primary btn-lg"
                      >
                        Start Free Assessment
                      </Link>
                      <Link 
                        href="/page-contact" 
                        className="btn btn-outline-primary btn-lg"
                      >
                        Contact Our Team
                      </Link>
                    </div>
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
