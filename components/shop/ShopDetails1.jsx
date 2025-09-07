"use client";
import FeaturedProducts from "./FeaturedProducts";
import Reviews from "./Reviews";
import Link from "next/link";
import ReviewForm from "./ReviewForm";
import ProductSlide from "./ProductSlide";
import { useState } from "react";
import { useContextElement } from "@/context/Context";
export default function ShopDetails1({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const {
    cartProducts,
    setCartProducts,

    isAddedToCartProducts,
    addProductToCart,
  } = useContextElement();
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.id == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  return (
    <article className="product type-product single product-single py-2 lg:py-6 xl:py-8">
      <div className="container max-w-xl">
        <header className="product-header panel">
          <div className="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
            <div>
              {/* <div className="product-gallery panel">
                            <figure className="featured-image m-0 rounded ratio ratio-1x1  uc-transition-toggle overflow-hidden">
    <Image className="media-cover image uc-transition-scale-up uc-transition-opaque"  alt="Disney Toys"    src="/assets/images/common/products/img-08.jpg" width="1280" height="1707" />
        </figure>
                        </div> */}
              <ProductSlide />
            </div>
            <div>
              <div
                className="product-details sticky-element panel vstack gap-1 xl:gap-2 max-w-500px mx-auto"
                data-uc-sticky="bottom: true; offset: 40;"
              >
                <h1 className="product-title h3 xl:h1 m-0">{product.name}</h1>
                <div className="hstack justify-between items-center gap-2">
                  <div className="product-price hstack gap-1 fs-5 xl:fs-4">
                    <span className="price-old text-line-through opacity-40">
                      $
                      {product.oldPrice
                        ? product.oldPrice.toFixed(2)
                        : (product.price + 20).toFixed(2)}
                    </span>
                    <span className="price">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="product-rating hstack gap-1">
                    <span className="hstack gap-narrow fs-7 opacity-60">
                      {product.rating}
                      <span className="d-none sm:d-inline-block">reviews</span>
                    </span>
                    <ul
                      className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                      title="Average 4 out of 5"
                    >
                      {[...Array(product.rating)].map((elm, i) => (
                        <li key={i}>
                          <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow" />
                        </li>
                      ))}
                      {[...Array(5 - product.rating)].map((elm, i) => (
                        <li key={i}>
                          <i className="icon fs-6 lg:fs-5 unicon-star-filled" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="product-desc fs-6 xl:fs-5 my-2">
                  {product.description || "Mounjaro (tirzepatide) injection is used along with diet and exercise to improve blood sugar control in adults with type 2 diabetes. It also helps with significant weight loss when combined with proper diet and exercise."}
                </p>
                <div className="mt-2">
                  <ul className="list-unstyled">
                    <li><strong>Manufacturer:</strong> {product.details?.manufacturer || "ELI LILLY AND COMPANY"}</li>
                    <li><strong>Country of Origin:</strong> {product.details?.countryOfOrigin || "United States of America"}</li>
                    <li><strong>Salt Composition:</strong> {product.details?.saltComposition || "TIRZEPATIDE"}</li>
                    <li><strong>Packaging:</strong> {product.details?.packaging || "1 Vial(s) Of 0.5ml"}</li>
                  </ul>
                </div>
                <div className="product-actions hstack gap-1 xl:mt-2">
                  {isAddedToCartProducts(product.id) ? (
                    <input
                      type="number"
                      className="form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step={1}
                      min={1}
                      max={99}
                      name="quantity"
                      value={
                        cartProducts.filter((elm) => elm.id == product.id)[0]
                          .quantity / 1
                      }
                      onChange={(e) =>
                        setQuantity(product.id, e.target.value / 1)
                      }
                      title="Qty"
                    />
                  ) : (
                    <input
                      type="number"
                      className="form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800"
                      step={1}
                      min={1}
                      max={99}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                      autoComplete="off"
                    />
                  )}
                  {isAddedToCartProducts(product.id) ? (
                    <Link
                      href={"/shop-cart"}
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                    >
                      View Cart
                    </Link>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
                <ul className="nav-y mt-2 xl:mt-4 ft-tertiary">
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      SKU:
                    </span>
                    <span>{product.details?.sku || `MNJ-${product.id}`}</span>
                  </li>
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      Categories:
                    </span>
                    <Link className="text-primary" href={`/shop-category/Medications`}>
                      Medications
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/Weight-Loss`}
                    >
                      Weight Loss
                    </Link>
                  </li>
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      Tags:
                    </span>
                    <Link
                      className="text-primary"
                      href={`/shop-category/Diabetes`}
                    >
                      Diabetes
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/Injection`}
                    >
                      Injection
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/GLP-1`}
                    >
                      GLP-1
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="product-tabs panel mt-8">
          <ul className="product-tabs-nav uc-tab nav-x justify-center ft-tertiary h6 pb-2 border-bottom">
            <li className={activeTab == "description" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("description")}>Description</a>
            </li>
            <li className={activeTab == "review" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("review")}>Reviews (5)</a>
            </li>
          </ul>
          <div className="product-tabs-content uc-switcher mt-4 max-w-lg mx-auto">
            {activeTab == "description" && (
              <div className="uc-active">
                <div
                  id="product-details"
                  className="product-details panel py-2 lg:py-4"
                >
                    <h4 className="mb-3">Introduction to Mounjaro Injection</h4>
                  <p>
                    Mounjaro Injection, an innovative medication, contains Tirzepatide as its active ingredient. It belongs to the pharmacological class of GLP-1 and GIP receptor agonists, a first-in-class dual-incretin therapy. This injection is primarily used to manage blood sugar levels in adults with type 2 diabetes mellitus who are unable to achieve adequate glycemic control through oral antidiabetic medications, diet, and exercise.
                  </p>
                  <p>
                    By mimicking the action of two natural incretin hormones—GLP-1 and GIP—Mounjaro enhances glucose-dependent insulin secretion, suppresses glucagon release, slows gastric emptying, and reduces appetite. These mechanisms help lower post-meal blood sugar levels and improve overall metabolic control.
                  </p>
                  
                  <h4 className="mb-3 mt-4">Uses of Mounjaro Injection</h4>
                  <ul>
                    <li>Used along with diet and exercise to improve glycemic control in type 2 diabetes.</li>
                    <li>Sometimes used off-label for weight management under medical supervision.</li>
                  </ul>
                  
                  <h4 className="mb-3 mt-4">Therapeutic Effects</h4>
                  <ul>
                    <li>Stimulates insulin secretion in response to food intake.</li>
                    <li>Suppresses glucagon production, reducing liver glucose output.</li>
                    <li>Slows down digestion to promote fullness and control calorie intake.</li>
                    <li>Supports overall blood sugar regulation and may lead to gradual weight loss.</li>
                  </ul>
                  
                  <h4 className="mb-3 mt-4">Storage Information</h4>
                  <ul>
                    <li>Store in a refrigerator (2°C–8°C).</li>
                    <li>Do not freeze. Keep away from direct light.</li>
                    <li>If a dose is missed, take it within 4 days. Otherwise, skip and wait for the next scheduled dose.</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab == "review" && (
              <div className="uc-active">
                <div
                  id="product-reviews"
                  className="product-reviews panel py-2 lg:py-4 overflow-hidden-x"
                >
                  <div className="row g-9 sep" data-uc-grid="">
                    <div className="col-12 lg:col-6">
                      <div className="panel vstack gap-1 lg:gap-2">
                        <h4 className="h5 lg:h4 m-0">Reviews (6)</h4>
                        <p className="text-dark dark:text-white text-opacity-70">
                          Customer reviews for Mounjaro Injection
                        </p>
                        <div className="reviews-wrap panel vstack gap-4 mt-6">
                          <div className="reviews-lisiting panel row child-cols-12 sep-x gy-9">
                            <Reviews />
                          </div>
                          <div className="reviews-loadmore" hidden="">
                            <a
                              href="#"
                              className="btn btn-sm btn-outline-gray-100 w-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                              Load more reviews
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="panel vstack gap-1 lg:gap-2"
                        data-uc-sticky="bottom: true; offset: 40;"
                      >
                        <h4 className="h5 lg:h4 m-0">Submit a review</h4>
                        <p className="text-dark dark:text-white text-opacity-70">
                          Your email address will not be published. Required
                          fields are marked <sup className="text-danger">*</sup>
                        </p>
                        <ReviewForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Products Related */}
        <FeaturedProducts />
      </div>
    </article>
  );
}
