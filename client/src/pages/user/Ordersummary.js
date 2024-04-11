import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Ordersummary() {
  const token = localStorage.getItem("token");
  const [cartdata, setCartdata] = useState({});
  console.log("cartdata", cartdata);
  const [totalamount, setTotal] = useState(0);
  const [totalTax, setTax] = useState(0);
  const [profileData, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/viewcart", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log("response cartdata", response);
        const data = response.data.data; // cart data
        setCartdata(data);
        calculateTotal(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculateTotal = (item) => {
    let total = 0;
    item.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotal(total);
    calculateTax(total);
  };

  const calculateTax = (total) => {
    const calculate = (total / 100) * 18;
    setTax(calculate);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/viewprofile", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log("user data", response);
        const data = response.data.data;
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const placeOrder = () => {
    const orderData = {
      cartData: cartdata,
      grandTotal: totalamount + totalTax,
      paymentmethod: "card",
    };
    axios
      .post("http://localhost:4000/user/placeorder", orderData, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log("order placed", response);
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
        style={{ height: "100%", background: "white", width: "50%", marginTop: "50px" }}
      >
        <div className="border-bottom p-2">
          <h5>Shipping Address</h5>
        </div>
        <div className=" " style={{ height: "100%", padding: "20px" }}>
          <div className="border rounded p-3" style={{ height: "100%" }}>
            <p>{profileData.name}</p>
            <p>
              {profileData.housename},{profileData.street}
            </p>
            <p>
              {profileData.town},{profileData.city}
            </p>
            <p>
              {profileData.district},{profileData.state},{profileData.pincode}
            </p>
          </div>
        </div>

        <div className="border-bottom p-2 mt-2">
          <h5>Order summary</h5>
        </div>
        <div className=" " style={{ height: "", padding: "20px" }}>
          <div className="border rounded p-3" style={{ height: "100%" }}>
            <p>Total : {totalamount}</p>
            <p>Delivery :</p>
            <p>Tax : {totalTax}</p>
            <p>Order Total : {totalamount + totalTax},</p>
          </div>
        </div>

        <div className="border-bottom p-2 mt-2">
          <h5>Payment options</h5>
        </div>
        <div className=" " style={{ height: "100%", padding: "20px" }}>
          <div className="border rounded p-3" style={{ height: "130px" }}>
            <p>UPI</p>
            <p>Credit / Debit Card</p>
            <p>Net Banking</p>
          </div>
        </div>

        <div className="mt-3" style={{ height: "50px", textAlign: "center" }}>
          <button onClick={placeOrder} className="btn btn-primary">
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}
