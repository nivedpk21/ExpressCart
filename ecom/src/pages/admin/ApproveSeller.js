import React from "react";
import Header from "../../components/Header";

export default function ApproveSeller() {
  return (
    <>
      <Header />
      <div
        className="container-fluid border rounded"
        style={{ backgroundColor: "white", width: "50%", height: "500px", marginTop: "50px" }}
      >
        <div className="container-fluid" style={{ padding: "10px" }}>
          <div className="border-bottom " style={{ height: "50px", padding: "10px" }}>
            <h5 style={{ textAlign: "center" }}>Approve Seller</h5>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col col-sm-12 col-md-12 col-lg-12">
              <div
                className="container-fluid border rounded"
                style={{ height: "120px", padding: "10px", display: "flex" }}
              >
                <div className="border rounded" style={{ width: "20%", height: "100%", backgroundColor: "grey" }}></div>
                <div className="border" style={{ width: "30%" }}>
                  <p style={{ textAlign: "center" }}>Retail net</p>
                  <p style={{ textAlign: "center", marginTop: "-10px" }}>John Mathews</p>
                  <p style={{ textAlign: "center", marginTop: "-10px" }}>Electronics</p>
                </div>
                <div
                  className=" "
                  style={{
                    width: "20%",
                    marginLeft: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a href="/sellerprofile">
                    <button type="button" class="btn btn-outline-primary">
                      View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
