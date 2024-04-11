import React from "react";
import Header from "../components/Header";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="  rounded" style={{ backgroundColor: " ", height: "560px" }}>
          <div class="container-fluid" style={{ marginTop: "20px" }}>
            <div class="row">
              {/* category col */}

              <div class=" col col-sm-12 col-md-12 col-lg-3 " style={{ height: "550px", padding: "10px" }}>
                <div className="container rounded-3" style={{ backgroundColor: "white", height: "530px" }}>
                  <div className="border-bottom" style={{ padding: "15px" }}>
                    <h6 style={{ textAlign: "center", color: "black" }}>SHOP BY CATEGORY</h6>
                  </div>
                  <div style={{ padding: "15px", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                    <div className="border rounded" style={{ width: "50%", height: "100px" }}></div>
                  </div>
                </div>
              </div>

              {/* main banner col */}

              <div class=" col col-sm-12 col-md-12 col-lg-5" style={{ height: "550px", padding: "10px" }}>
                <div>
                  <img src="./images/home-20-slider-1.jpg" className="img-fluid" />
                </div>
              </div>

              {/* 4 banners */}

              <div class=" col col-sm-12 col-md-12 col-lg-4" style={{ height: "550px", padding: "10px" }}>
                <div className=" " style={{ display: "flex",flexDirection:"row", justifyContent: "space-between",alignItems:"center", flexWrap: "wrap",}}>
                  <div style={{ width: "49%" ,}}>
                    <img src="./images/Home-20-slider-banner-1.avif" className="img-fluid" />
                  </div>
                  <div style={{ width: "49%",}}>
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
        <div className="border" style={{ height: "550px" }}>
          <div style={{ marginTop: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <img src="./images/home-20-banner-large-1.webp" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
