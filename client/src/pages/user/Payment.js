import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Payment() {
  const { id } = useParams();
  const { quantity } = useParams();

  const token = localStorage.getItem("token");
  const [profileData, setProfile] = useState({});
  const [productdata, setProductdata] = useState({});
  const [grandTotal, setGrandtotal] = useState(0);

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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/viewproduct/${id}`)
      .then((response) => {
        console.log("productdata", response);
        const data = response.data.data;
        setProductdata(data);
        const total = data.price * quantity + data.price * quantity * 0.18;
        setGrandtotal(total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const placeOrder = () => {
    const orderData = {
      productId: productdata._id,
      quantity: quantity,
      amount: grandTotal,
    };
    axios
      .post("http://localhost:4000/user/placeorder", orderData, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const message = response.data.message;
        toast.success(message);
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
            <p>Total : {productdata.price * quantity}</p>
            <p>Delivery :shipping * qntity</p>
            <p>Tax (18%): {((productdata.price * quantity) / 100) * 18}</p>
            <p>Order Total :{grandTotal}</p>
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
