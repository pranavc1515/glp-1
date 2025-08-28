import { steps } from "@/data/process";
import Image from "next/image";
import React from "react";

export default function Process() {
  return (
    <div
      id="how_it_works"
      className="how-it-works section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Your Journey to Success
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We know your schedule is full – our job is to support, not overwhelm. Here's how we guide you through every step of your transformation with personalized care and ongoing support. ❤️
              </p>
            </div>
            <div className="panel vstack border rounded-3 overflow-hidden bg-secondary dark:bg-gray-300 dark:bg-opacity-15">
              <div
                className="row justify-center g-4 p-4 xl:p-6"
                data-uc-grid=""
              >
                {steps.map((step, index) => (
                  <div key={index} className="col-12 sm:col-6 lg:col-4">
                    <div className="panel vstack items-center gap-3 text-center p-4 xl:py-6 bg-white dark:bg-gray-900 rounded-2 shadow-sm h-100">
                      <div className="vstack items-center gap-1">
                        <span className="fs-7 fw-medium text-primary dark:text-tertiary opacity-80 text-uppercase tracking-wider">
                          {step.step}
                        </span>
                        <span className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-tertiary text-tertiary dark:text-primary fw-bold fs-5">
                          {step.number}
                        </span>
                      </div>
                      <Image
                        className="w-100 max-h-140px object-contain"
                        alt={`${step.step} - ${step.title}`}
                        src={step.imgSrc}
                        width={1200}
                        height={800}
                      />
                      <div className="vstack gap-2 items-center">
                        <h3 className="h5 lg:h4 m-0 text-center">{step.title}</h3>
                        <p className="fs-6 text-center opacity-80 max-w-280px">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="panel vstack p-6 xl:p-8 border-top">
                <div
                  className="vstack md:hstack justify-center gap-1 mb-1 lg:mb-3 sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 750;"
                >
                  <a
                    href="#"
                    className="btn btn-md btn-primary dark:bg-tertiary dark:text-primary px-3 w-auto border-0"
                  >
                    <i className="icon-narrow unicon-chat-launch fw-bold" />
                    <span>Get Started Today</span>
                  </a>
                  <a
                    href="#"
                    className="btn btn-md btn-link fw-bold text-none text-primary dark:text-white"
                  >
                    Free Consultation
                  </a>
                </div>
                <div
                  className="vstack sm:hstack items-center justify-center gap-1 fs-6 sm-flex-column"
                  data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 850;"
                >
                  <div className="hstack justify-center gap-2">
                    Excellent
                    <div className="rating panel">
                      <div className="hstack justify-center">
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                        <i className="icon-1 unicon-star-filled text-yellow" />
                      </div>
                    </div>
                  </div>
                  <span className="desc">Based on 10,250+ reviews.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
