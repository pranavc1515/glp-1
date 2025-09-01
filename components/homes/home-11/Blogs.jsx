"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Static blog data for weight loss and health
const weightLossBlogs = [
  {
    id: 1,
    imgSrc: "/assets/images/blog/post-4.jpg",
    title: "GLP-1 Injections: The Science Behind Weight Loss Success",
    excerpt: "Discover how GLP-1 receptor agonists work to suppress appetite and promote sustainable weight loss through medical supervision.",
    category: "Weight Loss",
    date: "Dec 15, 2024",
    author: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    imgSrc: "/assets/images/blog/post-5.jpg",
    title: "5 Proven Strategies for Long-term Weight Management",
    excerpt: "Learn evidence-based approaches to maintaining your weight loss results and building healthy habits that last a lifetime.",
    category: "Wellness",
    date: "Dec 12, 2024",
    author: "Dr. Michael Chen"
  },
  {
    id: 3,
    imgSrc: "/assets/images/blog/post-6.jpg",
    title: "Understanding Your Metabolism: Key to Weight Loss Success",
    excerpt: "Explore how your body's metabolic rate affects weight loss and discover ways to optimize it for better results.",
    category: "Health Science",
    date: "Dec 10, 2024",
    author: "Dr. Emily Rodriguez"
  },
  {
    id: 4,
    imgSrc: "/assets/images/blog/img-01.jpg",
    title: "The Role of Nutrition in Medical Weight Loss Programs",
    excerpt: "How proper nutrition complements medical weight loss treatments and accelerates your journey to a healthier you.",
    category: "Nutrition",
    date: "Dec 8, 2024",
    author: "Dr. James Wilson"
  },
  {
    id: 5,
    imgSrc: "/assets/images/blog/img-02.jpg",
    title: "Exercise and Medical Weight Loss: Finding the Right Balance",
    excerpt: "Discover the optimal exercise routines that work synergistically with medical weight loss treatments for maximum results.",
    category: "Fitness",
    date: "Dec 5, 2024",
    author: "Dr. Lisa Thompson"
  },
  {
    id: 6,
    imgSrc: "/assets/images/blog/img-03.jpg",
    title: "Success Stories: Real People, Real Results with GLP-1 Therapy",
    excerpt: "Inspiring transformations from patients who achieved their weight loss goals through our comprehensive medical program.",
    category: "Patient Stories",
    date: "Dec 3, 2024",
    author: "HealthFlexi Team"
  }
];

export default function Blogs() {
  return (
    <div
      id="blog_posts"
      className="blog-posts section panel overflow-hidden swiper-parent"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="row child-cols-12 g-4 sm:g-6 xl:g-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div>
                <div
                  className="heading vstack gap-2 justify-center items-center text-center panel"
                  data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="title h3 xl:h2 m-0">
                    Latest from{" "}
                    <span className="px-1 bg-tertiary text-primary d-block lg:d-inline-block">
                      weight loss experts
                    </span>
                  </h2>
                  <p className="subtitle fs-6 opacity-70 max-w-2xl mx-auto">
                    Stay informed with the latest insights, research, and success stories from our medical weight loss specialists and health experts.
                  </p>
                </div>
              </div>
              <div>
                <div className="content panel">
                  <Swiper
                    className="swiper p-2 swiper-match"
                    spaceBetween={16}
                    slidesPerView={1.1}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".sndbp1",
                      nextEl: ".sndbn1",
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2.3,
                        spaceBetween: 24,
                      },
                      768: {
                        slidesPerView: 3.22,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                      },
                    }}
                  >
                    {weightLossBlogs.map((blog) => (
                      <SwiperSlide key={blog.id}>
                        <article className="post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5">
                          <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden">
                            <Image
                              className="media-cover image uc-transition-scale-up uc-transition-opaque"
                              alt={blog.title}
                              src={blog.imgSrc}
                              width={768}
                              height={560}
                            />
                            <Link
                              href={`/blog-details/${blog.id}`}
                              className="position-cover"
                              data-caption={blog.title}
                            />
                          </figure>
                          <div className="panel vstack gap-1 p-2">
                            <div className="meta-info hstack gap-2 items-center text-xs opacity-70 mb-1">
                              <span className="category text-primary fw-bold">{blog.category}</span>
                              <span className="date">{blog.date}</span>
                            </div>
                            <Link
                              className="text-none"
                              href={`/blog-details/${blog.id}`}
                            >
                              <h3 className="post-title h5 m-0 ltr:pe-4 rtl:ps-4">
                                <span>{blog.title}</span>
                              </h3>
                            </Link>
                            <div className="content vstack justify-between gap-narrow">
                              <p className="post-excrept fs-6 opacity-70">
                                {blog.excerpt}
                              </p>
                              <div className="author-info hstack gap-2 items-center text-xs opacity-70 mt-1">
                                <span>By {blog.author}</span>
                              </div>
                              <Link
                                href={`/blog-details/${blog.id}`}
                                className="uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2"
                              >
                                <span>Read full article</span>
                                <i className="position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div>
                <div className="panel hstack justify-center items-center gap-2">
                  <div className="panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse">
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-prev btn w-40px sndbp1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-1"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-left" />
                    </a>
                    <a
                      href="#"
                      className="swiper-nav swiper-nav-next btn w-40px sndbn1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-2 rtl:order-0"
                    >
                      <span className="icon-1 xl:icon-2 unicon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link
                  href="/blog"
                  className="btn btn-primary btn-lg"
                >
                  View All Articles
                  <i className="icon unicon-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
