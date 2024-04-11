import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function Processorder() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://expresscart.onrender.com/seller/orderdetails/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [status, setStatus] = useState(0);
  console.log(status);
  const inputChange = (event) => {
    console.log(event);
    setStatus({ ...status, status: event.target.value });
  };

  const submit = (cartId) => {
    axios
      .post(`https://expresscart.onrender.com/seller/orderstatus/${cartId}`, status)
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

      <div
        className="container-fluid"
        style={{ width: "60%", height: "100%", backgroundColor: "white", marginTop: "50px" }}
      >
        <div className="p-3 text-center border-bottom" style={{}}>
          <h5>Order Details</h5>
        </div>
        <div className="p-3">
          <h6>Address</h6>
          <div className="border rounded mt-3 p-2" style={{ height: "150px" }}>
            <p>
              {data.name} <br /> {data.house},{data.street} <br /> {data.town},{data.city} <br />
              {data.district},{data.state} <br /> {data.pincode}
            </p>
          </div>

          <h6 className="mt-3">Product</h6>
          <div style={{ display: "flex" }}>
            <div className="border rounded mt-3 p-2" style={{ height: "150px", width: "50%" }}>
              <p>{data.productname}</p>
              <p>Quantity: {data.quantity}</p>
            </div>
            <div className="border rounded mt-3 p-2" style={{ height: "150px", width: "50%" }}>
              <p>Payment</p>
              <p>{data.grandtotal}</p>
            </div>
          </div>

          <h6 className="mt-3">Status</h6>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
            Update Status
          </button>
          <div className="border rounded mt-3 p-2" style={{ height: "150px" }}>
            <p>
              {data.status == "0"
                ? "pending"
                : data.status == "1"
                ? "processing"
                : data.status == "2"
                ? "shipped"
                : "delivered"}
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------modal ---------------------------------------------------------*/}

      <div class="modal fade " tabindex="-1" id="modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Status</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <select
                  onChange={inputChange}
                  class="form-select form-select-md"
                  name="status"
                  id=""
                >
                  <option selected>select status</option>
                  <option value="1">Processing</option>
                  <option value="2">Shipped</option>
                  <option value="3">Delivered</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                onClick={() => {
                  submit(data._id);
                }}
                type="button"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
