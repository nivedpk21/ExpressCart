import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

export default function Admindashboard() {
  const [userData, setUserdata] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/totalusers")
      .then((response) => {
        console.log(response);
        const userdata = response.data.data;
        setUserdata(userdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [SellerData, setSellerdata] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/totalseller")
      .then((response) => {
        console.log(response);
        const sellerdata = response.data.data;
        setSellerdata(sellerdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [productData, setProductdata] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/totalproduct")
      .then((response) => {
        console.log(response);
        const productdata = response.data.data;
        setProductdata(productdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="p-5" style={{ backgroundColor: "white", height: "550px", marginBottom: "" }}>
        <div
          className=" "
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="border rounded-3 p-3"
            style={{ backgroundColor: "#fef7da",width:"100%", height: "100px" }}
          >
            <p>Total users</p>
            <p>{userData}</p>
          </div>

          <div
            className="border rounded-3 p-3"
            style={{ backgroundColor: "#e9fdfb",width:"100%", height: "100px" }}
          >
            <p>Total sellers</p>
            <p>{SellerData}</p>
          </div>

          <div
            className="border rounded-3 p-3"
            style={{ backgroundColor: "#feeced",width:"100%", height: "100px" }}
          >
            <p>Total products</p>
            <p>{productData}</p>
          </div>
        </div>
      </div>
    </>
  );
}
