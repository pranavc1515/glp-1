import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header6 from '@/components/headers/Header6';
import Topbar from '@/components/headers/Topbar';
import Footer6 from '@/components/footers/Footer6';
import { posts } from '@/data/blogs';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata = {
  title: 'Health Insights & Blog | HealthFlexi Medical Weight Loss',
  description: 'Expert insights on medical weight loss, GLP-1 medications, nutrition, and healthy lifestyle tips from licensed healthcare providers.',
};

export default function InsightsPage() {

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
                      Health Insights & Blog
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      Expert insights on medical weight loss, GLP-1 medications, nutrition, and healthy 
                      lifestyle tips from our licensed healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Articles Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Latest Health Insights
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Stay informed with the latest research and expert advice on medical weight loss
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  {posts.slice(0, 6).map((blog, index) => (
                    <div
                      key={blog.id}
                      className="col"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="panel bg-white dark:bg-gray-800 rounded-2 overflow-hidden h-100">
                        <div className="panel w-100 overflow-hidden">
                          <Image
                            src={blog.image}
                            width={400}
                            height={250}
                            alt={blog.alt}
                            className="w-100 h-auto"
                          />
                        </div>
                        <div className="panel p-4 lg:p-6">
                          <div className="hstack gap-2 mb-3">
                            <span className="badge bg-primary-100 text-primary dark:bg-primary-900 dark:text-primary-200">
                              {blog.category}
                            </span>
                            <span className="fs-7 text-dark dark:text-white text-opacity-60">
                              {new Date().toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="h5 mb-3 text-dark dark:text-white">
                            {blog.title}
                          </h3>
                          <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                            {blog.excerpt}
                          </p>
                          <Link 
                            href={`/blog-details/${blog.id}`}
                            className="uc-link fw-bold hstack gap-narrow"
                          >
                            <span>Read More</span>
                            <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="section panel py-6 xl:py-9 bg-gray-50 dark:bg-gray-800">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Explore by Category
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Find articles tailored to your interests and health goals
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-4 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-syringe text-primary dark:text-primary-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">GLP-1 Medications</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        Learn about GLP-1 medications, how they work, and their benefits for weight loss
                      </p>
                      <Link 
                        href="/blog-category/GLP-1" 
                        className="btn btn-outline-primary btn-sm"
                      >
                        View Articles
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-apple text-success dark:text-success-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Nutrition & Diet</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        Expert nutrition advice and healthy eating tips for sustainable weight loss
                      </p>
                      <Link 
                        href="/blog-category/Nutrition" 
                        className="btn btn-outline-success btn-sm"
                      >
                        View Articles
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-dumbbell text-info dark:text-info-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Exercise & Fitness</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        Safe exercise routines and fitness tips for weight loss and overall health
                      </p>
                      <Link 
                        href="/blog-category/Exercise" 
                        className="btn btn-outline-info btn-sm"
                      >
                        View Articles
                      </Link>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-700 rounded-2 p-4 lg:p-6 text-center h-100">
                      <div className="w-64px h-64px bg-warning-100 dark:bg-warning-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-heart text-warning dark:text-warning-200"></i>
                      </div>
                      <h3 className="h5 mb-3 text-dark dark:text-white">Health & Wellness</h3>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                        General health tips, wellness strategies, and lifestyle improvements
                      </p>
                      <Link 
                        href="/blog-category/Wellness" 
                        className="btn btn-outline-warning btn-sm"
                      >
                        View Articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Authors Section */}
            <div className="section panel py-6 xl:py-9">
              <div className="container">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Our Expert Authors
                  </h2>
                  <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                    Content written by licensed healthcare providers and medical professionals
                  </p>
                </div>
                
                <div className="row child-cols-12 lg:child-cols-3 col-match g-4 lg:g-6">
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 text-center">
                      <div className="w-80px h-80px bg-primary-100 dark:bg-primary-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-primary dark:text-primary-200 icon-2"></i>
                      </div>
                      <h3 className="h5 mb-2 text-dark dark:text-white">Dr. Sarah Johnson</h3>
                      <p className="fs-6 text-primary dark:text-primary-200 mb-3">Endocrinologist</p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Board-certified endocrinologist specializing in diabetes and weight management
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 text-center">
                      <div className="w-80px h-80px bg-success-100 dark:bg-success-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-success dark:text-success-200 icon-2"></i>
                      </div>
                      <h3 className="h5 mb-2 text-dark dark:text-white">Dr. Michael Chen</h3>
                      <p className="fs-6 text-success dark:text-success-200 mb-3">Internal Medicine</p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Internal medicine physician with expertise in metabolic health and GLP-1 therapy
                      </p>
                    </div>
                  </div>
                  
                  <div className="col">
                    <div className="panel bg-white dark:bg-gray-800 rounded-2 p-4 lg:p-6 text-center">
                      <div className="w-80px h-80px bg-info-100 dark:bg-info-900 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                        <i className="icon unicon-user-md text-info dark:text-info-200 icon-2"></i>
                      </div>
                      <h3 className="h5 mb-2 text-dark dark:text-white">Dr. Emily Rodriguez</h3>
                      <p className="fs-6 text-info dark:text-info-200 mb-3">Nutritionist</p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70">
                        Registered dietitian and nutritionist specializing in weight loss and metabolic health
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup Section */}
            <div className="section panel py-6 xl:py-9 bg-primary-50 dark:bg-primary-900">
              <div className="container max-w-lg">
                <div
                  className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-primary dark:text-primary-200">
                    Stay Updated with Health Insights
                  </h2>
                  <p className="fs-6 sm:fs-5 text-primary dark:text-primary-200 text-opacity-80 mb-4">
                    Get the latest articles, research updates, and health tips delivered to your inbox
                  </p>
                  <NewsletterForm />
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
                      Ready to Start Your Weight Loss Journey?
                    </h2>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mb-4">
                      Put the knowledge you've gained into action with our medical weight loss program
                    </p>
                    <div className="hstack gap-3 justify-center flex-wrap">
                      <Link 
                        href="/mounjaro-assessment" 
                        className="btn btn-primary btn-lg"
                      >
                        Start Assessment
                      </Link>
                      <Link 
                        href="/calculators" 
                        className="btn btn-outline-primary btn-lg"
                      >
                        Health Calculators
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
