import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Viewproduct() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/viewproduct/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const approve = (productId) => {
    console.log("hello");
    axios
      .get(`http://localhost:4000/admin/updateproductstatus/${productId}`)
      .then((response) => {
        console.log(response);
        const message = response.data.message;
        toast.success(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className="border rounded text-center" style={{ height: "320px" }}>
              <img
                src=".././images/iphone.jpg"
                class="img-fluid rounded-top"
                alt="image"
                style={{ width: "40%" }}
              />
            </div>
            <div className="border rounded" style={{ height: "160px", marginTop: "15px" }}></div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className="border rounded p-3" style={{ height: "400px" }}>
              <div>
                <h5>{data.productname}</h5>
              </div>
              <div className="-bottom">
                <p>4.5 *****</p>
              </div>
              <div className="border-bottom" style={{ textAlign: "justify", marginTop: "0px" }}>
                <h3>{data.price}</h3>
                <span style={{ backgroundColor: "red", color: "white" }}>25% OFF</span>
                <p>inclusive of all taxes</p>
              </div>

              <div>
                <h6 className="mt-2">Description</h6>
                <p>
                  this is a sample product description.Only for representational purpose only.This
                  is an excellent product with premium quality crafted with superiro technologhy
                  powered by ios most premium brand in the world
                </p>
              </div>
            </div>
            <div
              className="border rounded"
              style={{
                height: "80px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ marginTop: "auto", marginBottom: "20px" }}>
                <button
                  onClick={() => {
                    approve(data._id);
                  }}
                  type="button"
                  class="btn btn-success"
                >
                  Approve
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
