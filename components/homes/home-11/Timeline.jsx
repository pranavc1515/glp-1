"use client";
import { timelineData } from "@/data/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Timeline() {
  // Function to get news source based on index
  const getNewsSource = (index) => {
    const sources = [
      "Health Today",
      "The Indian Express", 
      "Reuters",
      "Business Standard",
      "Good Morning America",
      "Medical News Today"
    ];
    return sources[index] || "News Source";
  };

  return (
    <div
      id="about-timeline"
      className="about-timeline section panel overflow-hidden bg-secondary dark:bg-gray-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                The breakthrough in weight loss medication has hit the news big time
              </h2>
              <div
                style={{ width: "fit-content", maxWidth: "330px" }}
                className="panel swiper-parent"
              >
                <Swiper
                  className="swiper-timeline swiper swiper-container overflow-unset"
                  slidesPerView={1}
                  spaceBetween={0}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                >
                  {timelineData.map((item, index) => (
                    <SwiperSlide key={index} className="panel">
                      <div 
                        className="timeline-box group panel vstack items-center gap-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-3 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-primary"
                        onClick={() => {
                          // Add click animation
                          const element = document.querySelector(`[data-timeline-index="${index}"]`);
                          if (element) {
                            element.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                              element.style.transform = 'scale(1)';
                            }, 150);
                          }
                          
                          // Show alert for now (you can replace this with actual navigation later)
                          alert(`Opening news article: ${item.description}`);
                        }}
                        data-timeline-index={index}
                      >
                        <div className="image-wrap panel overflow-hidden w-150px relative">
                          {/* News Website Icon Placeholder */}
                          <div className="news-icon-overlay absolute top-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                            <i className="icon icon-1 unicon-link text-white"></i>
                          </div>
                          
                          <Image
                            className="image w-100 origin-bottom rounded-2 hover:opacity-90 transition-opacity"
                            src={item.src}
                            width={400}
                            height={400}
                            alt={item.alt}
                          />
                          
                          {/* News Source Badge */}
                          <div className="news-source-badge absolute bottom-2 left-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                            {getNewsSource(index)}
                          </div>
                        </div>
                        
                        <div className="content panel vstack items-center px-3 xl:px-6">
                          <div className="date-badge inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <time className="title h5 sm:h4 text-primary font-bold">
                              {item.year}
                            </time>
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                          </div>
                          
                          <p className="desc fs-6 xl:fs-5 opacity-80 dark:text-white hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                          
                          {/* Read More Button */}
                          <div className="read-more-btn mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                              <span>Read Full Article</span>
                              <i className="icon icon-0 unicon-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
