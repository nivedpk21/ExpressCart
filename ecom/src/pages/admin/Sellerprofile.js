import React from "react";
import Header from "../../components/Header";

export default function Sellerprofile() {
  return (
    <>
      <Header />
      <div
        className="container-fluid border rounded"
        style={{
          width: "50%",
          height: "500px",
          backgroundColor: "white",
          marginTop: "50px",
          padding: "0",
          marginBottom: "50px",
        }}
      >
        <div
          className="container-fluid"
          style={{ width: "100%", height: "100px", backgroundColor: "grey", paddingTop: "50px", paddingLeft: "50px" }}
        >
          <div className="border rounded" style={{ width: "100px", height: "100px", backgroundColor: "white" }}></div>
        </div>
        <div className="  " style={{ width: "80%", height: "50px", marginLeft: "auto" }}>
          <h6 style={{ marginLeft: "10px", marginTop: "10px" }}>Retail Net</h6>
          <p style={{ marginLeft: "10px", marginTop: "-10px" }}>Electrical</p>
        </div>
        <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
          <div className="border rounded" style={{ height: "200px", marginTop: "20px" }}>
            <div className="row">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <p>Contact</p>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <p>Address</p>
              </div>
            </div>
          </div>
          <div
            className="border rounded "
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <button type="button" class="btn btn-success">
              Approve
            </button>
            <button type="button" class="btn btn-outline-danger">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
