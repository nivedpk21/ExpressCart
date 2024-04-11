import React from "react";
import Header from "../../components/Header";

export default function Viewproduct() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className="border rounded" style={{ height: "320px" }}></div>
            <div className="border rounded" style={{ height: "160px", marginTop: "15px" }}></div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div>
              <h5>Product Name</h5>
            </div>
            <div style={{ textAlign: "justify" }}>
              <h3>899RS</h3>
              <span style={{ backgroundColor: "red", color: "white" }}>25% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
