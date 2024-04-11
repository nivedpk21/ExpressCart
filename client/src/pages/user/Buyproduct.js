import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Buyproduct() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/viewproduct/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const increment = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Header />

      <div className="container-fluid" style={{ height: "100%" }}>
        <div class="row justify-content-center align-items-center g-0">
          <div class="col col-lg-8 p-5 col-md-12 col-sm-12">
            <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
              <div className="border-bottom " style={{ padding: "15px" }}>
                <h5>Buy Product</h5>
              </div>

              <div
                className="border mt-5"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className=" " style={{ width: " ", height: " ", backgroundColor: " " }}>
                  <img
                    style={{ width: "120px" }}
                    src=".././images/iphone.jpg"
                    class=" rounded-top"
                    alt=""
                  />
                </div>

                <div className="p-3" style={{ width: " " }}>
                  <h6>{data.productname}</h6>
                  <div className="mt-3">
                    <button
                      onClick={increment}
                      type="button"
                      class="btn btn-success"
                      style={{ paddingTop: "0px", borderRadius: "25px" }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          fill="white"
                          class="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </span>
                    </button>

                    <button
                      onClick={decrement}
                      type="button"
                      class="btn btn-danger"
                      style={{ paddingTop: "0px", borderRadius: "25px" }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          fill="white"
                          class="bi bi-dash-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                          />
                        </svg>
                      </span>
                    </button>

                    <p style={{ fontFamily: "serif" }}>Quantity:{quantity}</p>
                  </div>
                </div>

                <div className="p-3" style={{ width: " ", padding: "", textAlign: " " }}>
                  <h6>Price</h6>
                  <p>Rs{data.price}/-</p>
                </div>

                <div className="p-3" style={{ width: "20%", padding: "", textAlign: " " }}>
                  <h6>Total Price</h6>
                  <p>Rs{data.price * quantity}/-</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col col-lg-4 p-5">
            <div className="container-fluid" style={{ height: "550px", backgroundColor: " " }}>
              <div style={{ height: "410px", backgroundColor: "white" }}>
                <div className="border-bottom " style={{ padding: "15px", textAlign: "center" }}>
                  <h5>Summary</h5>
                </div>
                <div className="p-4">
                  <p style={{ fontFamily: "serif" }}>Sub Total : {data.price * quantity} </p>
                  <p style={{ fontFamily: "serif" }}>Shipping : 50</p>
                  <p style={{ fontFamily: "serif" }}>
                    GST (18%): {((data.price * quantity) / 100) * 18}
                  </p>
                </div>
                <hr />
                <div className="p-4">
                  {
                    <h6>
                      Grand Total : Rs{data.price * quantity + ((data.price * quantity) / 100) * 18}
                      /-
                    </h6>
                  }
                </div>
                <div className="p-4 text-center ">
                  <Link
                    to={`/payment/${data._id}/${quantity}`}
                    type="button"
                    class="btn btn-primary"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
