import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./vieworder.css";
import toast, { Toaster } from "react-hot-toast";


export default function Vieworder() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/orderdetails/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [reviewData, setReviewdata] = useState({
    rating: "",
    review: "",
  });
  console.log(reviewData);
  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReviewdata({ ...reviewData, [name]: value });
  };
  const submit = (Id) => {
    axios
      .post(`http://localhost:4000/user/savereview/${Id}`, reviewData, {
        headers: { Authorization: `bearer ${token}` },
      })
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

      <div className="container-fluid" style={{ height: "100%", backgroundColor: "white" }}>
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
            <div className="border rounded p-3" style={{ height: "310px" }}>
              <div>
                <h5>{data.productname}</h5>
              </div>
              <div className="-bottom">
                <p>4.5 *****</p>
              </div>
              <div className="border-bottom" style={{ textAlign: "justify", marginTop: "0px" }}>
                {/* <h3>{data.price}</h3>
                <span style={{ backgroundColor: "red", color: "white" }}>25% OFF</span>
                <p>inclusive of all taxes</p> */}
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
              className="border rounded p-3"
              style={{
                height: "170px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "50%" }}>
                <h6>Order Details</h6>
                <p>
                  {data.name}
                  <br />
                  {data.housename},{data.street}
                  <br />
                  {data.town},{data.city},{data.district}
                  <br />
                  {data.state}
                  <br />
                  {data.pincode}
                </p>
              </div>
              <div className=" " style={{ width: "50%" }}>
                <h6>Payment</h6>
                <p>
                  {data.grandtotal} Online <br />
                  {data.date}
                </p>

                <h6 style={{ marginTop: "-9px" }}>Status</h6>
                <p style={{ marginTop: "-10px", color: "blue" }}>
                  {data.status == "0" ? (
                    "pending"
                  ) : data.status == "1" ? (
                    "processing"
                  ) : data.status == "2" ? (
                    "shipped"
                  ) : data.status == "3" ? (
                    "delivered"
                  ) : (
                    <></>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded mb-5" style={{ height: "500px" }}>
          <div className="border-bottom p-3">
            <h5>Customer Reviews</h5>
          </div>
          <div className="p-3" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>4.5 *****</p>
              <p>566 Reviews</p>
            </div>
            {data.status == "3" ? (
              <>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add Review
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="p-3"
            style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
          >
            <div className="border rounded mb-3 p-2" style={{ height: "130px", width: "48%" }}>
              <p style={{ marginBottom: "0" }}>User Name</p>
              <p style={{}}>4.5 *****</p>
              <p>goodproduct</p>
            </div>
            <div className="border rounded mb-3 p-2" style={{ height: "130px", width: "48%" }}>
              <p style={{ marginBottom: "0" }}>User Name</p>
              <p style={{}}>4.5 *****</p>
              <p>goodproduct</p>
            </div>
            <div className="border rounded mb-3 p-2" style={{ height: "130px", width: "48%" }}>
              <p style={{ marginBottom: "0" }}>User Name</p>
              <p style={{}}>4.5 *****</p>
              <p>goodproduct</p>
            </div>
            <div className="border rounded mb-3 p-2" style={{ height: "130px", width: "48%" }}>
              <p style={{ marginBottom: "0" }}>User Name</p>
              <p style={{}}>4.5 *****</p>
              <p>goodproduct</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------------------- Modal -------------------------------------------------------------> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Write Review
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              {/* rating ---------------------------------- */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>Rating:</label>
                <div class="rating">
                  <input onChange={inputChange} value="5" name="rating" id="star5" type="radio" />
                  <label title="text" for="star5"></label>
                  <input onChange={inputChange} value="4" name="rating" id="star4" type="radio" />
                  <label title="text" for="star4"></label>
                  <input onChange={inputChange} value="3" name="rating" id="star3" type="radio" />
                  <label title="text" for="star3"></label>
                  <input onChange={inputChange} value="2" name="rating" id="star2" type="radio" />
                  <label title="text" for="star2"></label>
                  <input onChange={inputChange} value="1" name="rating" id="star1" type="radio" />
                  <label title="text" for="star1"></label>
                </div>
              </div>
              {/* text------------------------------------ */}
              <div>
                <div class="mb-3">
                  <label for="" class="form-label"></label>
                  <textarea
                    onChange={inputChange}
                    placeholder="write about the product..."
                    class="form-control"
                    name="review"
                    id=""
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                onClick={() => {
                  submit(data.productId);
                }}
                type="button"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
