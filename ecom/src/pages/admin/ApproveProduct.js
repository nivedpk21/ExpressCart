import React from "react";
import Header from "../../components/Header";

export default function ApproveProduct() {
  return (
    <>
      <Header />
      <div
        className="container-fluid border rounded"
        style={{ width: "50%", background: "white", height: "500px", marginTop: "50px" }}
      >
        <div className="container-fluid" style={{ padding: "10px" }}>
          <div className="border-bottom " style={{ height: "50px", padding: "10px" }}>
            <h5 style={{ textAlign: "center" }}>Approve Product</h5>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col col-lg-4">
              <div class="card" style={{ height: "270px" }}>
                <img src="..." style={{ height: "200px" }} class="border rounded card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center">Card title</h6>
                  <a
                    href="/viewproduct"
                    class="btn btn-primary"
                    style={{ width: "100%", height: "29px", padding: "0", marginTop: "10px" }}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col col-lg-4">
              <div class="card" style={{ height: "270px" }}>
                <img src="..." style={{ height: "200px" }} class="border rounded card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center">Card title</h6>
                  <a
                    href="#"
                    class="btn btn-primary"
                    style={{ width: "100%", height: "29px", padding: "0", marginTop: "10px" }}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col col-lg-4">
              <div class="card" style={{ height: "270px" }}>
                <img src="..." style={{ height: "200px" }} class="border rounded card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title text-center ">Card title</h6>

                  <a
                    href="#"
                    class="btn btn-primary"
                    style={{ width: "100%", height: "29px", padding: "0", marginTop: "10px" }}
                  >
                    View
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
