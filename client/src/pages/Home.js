import React from "react";
import Header from "../components/Header";
import "./home.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="first-section container-fluid rounded border  h-100">
          <div className="div-one container-fluid">
            <div className="row">
              {/* category col */}

              <div
                className="col-12 col-sm-12 col-md-12 col-lg-3 "
                style={{ height: "550px", padding: "10px" }}
              >
                <div
                  className="container rounded-3"
                  style={{ backgroundColor: "white", height: "530px" }}
                >
                  <div className="border-bottom" style={{ padding: "15px" }}>
                    <h6 style={{ textAlign: "center", color: "black" }}>SHOP BY CATEGORY</h6>
                  </div>
                  <div
                    style={{
                      padding: "15px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-phone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>smartphone</p>
                    </div>

                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-laptop"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>laptop</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-tv"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>television</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-earbuds"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.4 4.4 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.55.55 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563s-.561.994-.292 1.969.836 1.675 1.266 1.563m3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.4 4.4 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948m.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563s.561.994.292 1.969-.836 1.675-1.266 1.563"
                        />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>earbuds</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-smartwatch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z" />
                        <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>smartwatch</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-controller"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>gaming</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-gift"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>gift</p>
                    </div>
                    <div className="category-item border rounded text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="grey"
                        class="bi bi-house"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                      <p style={{ color: "grey", fontFamily: "serif" }}>essentials</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* main banner col */}

              <div
                class=" col-12 col-sm-12 col-md-12 col-lg-5"
                style={{ height: "auto", padding: "10px" }}
              >
                <div>
                  <img src="./images/home-20-slider-1.jpg" className="img-fluid" />
                </div>
              </div>

              {/* 4 banners */}

              <div
                class=" col-12 col-sm-12 col-md-12 col-lg-4"
                style={{ height: "550px", padding: "10px" }}
              >
                <div
                  className="fourbanner-div"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ width: "49%" }}>
                    <img src="./images/Home-20-slider-banner-1.avif" className="img-fluid" />
                  </div>
                  <div style={{ width: "49%" }}>
                    <img src="./images/Home-20-slider-banner-2.avif" className="img-fluid" />
                  </div>
                  <div style={{ width: "49%" }}>
                    <img src="./images/Home-20-slider-banner-3.avif" className="img-fluid" />
                  </div>
                  <div style={{ width: "49%" }}>
                    <img src="./images/Home-20-slider-banner-4.avif " className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="second-section container-fluid mt-4">
          <div className="text-center mb-5">
            <img
              src="./images/home-20-banner-large-1.webp"
              className="img-fluid rounded-top text-center"
              alt=""
            />
          </div>

          <div className="mb-4">
            <h5>Shop By Categories</h5>
            <div className="lap-div">
              <div className="text-center">
                <img src="./images/mobilephone.avif" class="img-fluid rounded-top" alt="" />
                <p>SmartPhone</p>
              </div>
              <div className="text-center">
                <img
                  src="./images/home-20-categories-1-2_170x.avif"
                  className="img-fluid rounded-top"
                  alt=""
                />
                <p>Laptop</p>
              </div>
              <div className="text-center">
                <img src="./images/television.avif" className="img-fluid rounded-top" alt="" />
                <p>Television</p>
              </div>
              <div className="text-center">
                <img src="./images/pc.avif" className="img-fluid rounded-top" alt="" />
                <p>Television</p>
              </div>
              <div className="text-center">
                <img src="./images/gaming.avif" className="img-fluid rounded-top" alt="" />
                <p>Gaming</p>
              </div>
              <div className="text-center">
                <img src="./images/audio.avif" className="img-fluid rounded-top" alt="" />
                <p>Audio</p>
              </div>
            </div>
          </div>

          {/* new release and featured  */}
          <div>
            <div className="row justify-content-center align-items-center g-2">
              <div className="colcol-sm-12 col-md-12 col-lg-6">
                <div style={{ backgroundColor: "white", height: "200px" }}></div>
              </div>

              <div className="colcol-sm-12 col-md-12 col-lg-6">
                <div style={{ backgroundColor: "white", height: "200px" }}></div>
              </div>
            </div>
          </div>

          {/* top brands */}
          <div className="mt-4">
            <h5>Top Brands</h5>
            <div className="mt-3" style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img src="./images/brand1.avif" className="img-fluid rounded-top" alt="" />
              </div>

              <div>
                <img src="./images/brand2.avif" className="img-fluid rounded-top" alt="" />
              </div>

              <div>
                <img src="./images/brand3.avif" className="img-fluid rounded-top" alt="" />
              </div>

              <div>
                <img src="./images/brand4.avif" className="img-fluid rounded-top" alt="" />
              </div>

              <div>
                <img src="./images/brand1.avif" className="img-fluid rounded-top" alt="" />
              </div>

              <div>
                <img src="./images/brand3.avif" className="img-fluid rounded-top" alt="" />
              </div>
            </div>
          </div>

          {/* top sellers  */}
          <div className="mt-5">
            <div style={{ backgroundColor: "white", height: "200px" }}></div>
          </div>

          {/* banner */}
          <div className="mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "2px" }}>
              <img src="./images/tvbanner.webp" className="img-fluid rounded-top" alt="" />
            </div>

            <div style={{ padding: "2px" }}>
              <img src="./images/machinebanner.webp" className="img-fluid rounded-top" alt="" />
            </div>
          </div>

          {/* top deals */}

          <div className="mt-5">
            <h5>Top Deals</h5>
            <div className="mt-3" style={{ display: "flex" }}>
              <div>
                <img src="./images/clothingoffer.webp" className="img-fluid rounded-top" alt="" />
              </div>
            </div>
          </div>

          {/* furniture banner */}
          <div className="mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "2px" }}>
              <img src="./images/chair1.avif" className="img-fluid rounded-top" alt="" />
            </div>

            <div style={{ padding: "2px" }}>
              <img src="./images/chair2.webp" className="img-fluid rounded-top" alt="" />
            </div>

            <div style={{ padding: "2px" }}>
              <img src="./images/chair3.avif" className="img-fluid rounded-top" alt="" />
            </div>
          </div>

          {/* why to shop with us */}
          <div className="mt-5 p-5 blue-div">
            <h4 className="mb-5" style={{ textAlign: "center", color: "white" }}>
              Why Shop With Us
            </h4>
            <div className="why-shop-main-div">
              <div className="rounded-3 p-4 blue-div-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="red"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <h6 className="mt-3">QUALITY AND SAVING</h6>
                <p>Comprehensive quality control and affordable prices</p>
              </div>

              <div className="rounded-3 p-4 blue-div-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="red"
                  class="bi bi-houses"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
                </svg>
                <h6 className="mt-3">GLOBAL WAREHOUSE</h6>
                <p>37 overseas warehouses</p>
              </div>

              <div className="rounded-3 p-4 blue-div-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="red"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <h6 className="mt-3">FAST SHIPPING</h6>
                <p>Fast and convenient door to door delivery</p>
              </div>

              <div className="rounded-3 p-4 blue-div-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="red"
                  class="bi bi-shield-shaded"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
                  />
                </svg>
                <h6 className="mt-3">PAYMENT SECURITY</h6>
                <p>More than 10 different secure payment methods</p>
              </div>

              <div className="rounded-3 p-4 blue-div-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="red"
                  class="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
                <h6 className="mt-3">HAVE QUESTIONS?</h6>
                <p>24/7 Customer Service - We’re here and happy to help!</p>
              </div>
            </div>
          </div>

          {/* section div 2 closing */}
        </div>
      </section>
      <Footer />
    </>
  );
}
