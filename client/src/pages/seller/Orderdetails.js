import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Orderdetails() {
  const { ID } = useParams();
  useEffect(() => {
    axios
      .get(`https://expresscart.onrender.com/seller/orderdetails/${ID}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const processOrder = (orderid) => {
    axios
      .get(`https://expresscart.onrender.com/processorder/${orderid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const orderShipped = (orderid) => {
    axios
      .get(`https://expresscart.onrender.com/seller/shiporder/${orderid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const orderDelivered = (orderid) => {
    axios
      .get(`https://expresscart.onrender.com/seller/orderdelivered/${orderid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "550px" }}>
        <p>order details</p>

        <p>status:pending</p>
        <button onClick={processOrder(orderId)}>Process</button>
        <button onClick={orderShipped(orderId)}>Shipped</button>
        <button onClick={orderDelivered(orderId)}>Delivered</button>
      </div>
    </>
  );
}
