import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Sellerprofile() {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://expresscart.onrender.com/admin/sellerprofile/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        console.log("data", data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const approve = (Id) => {
    axios.get(`https://expresscart.onrender.com/admin/approveseller/${Id}`).then((response) => {
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
        className="container-fluid border rounded"
        style={{
          width: "50%",
          height: "530px",
          backgroundColor: "white",
          marginTop: "50px",
          padding: "0",
          marginBottom: "50px",
        }}
      >
        <div
          className="container-fluid"
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "grey",
            paddingTop: "50px",
            paddingLeft: "50px",
          }}
        >
          <div
            className="border rounded"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <div className=" " style={{ paddingTop: "55px" }}>
          <div
            className="  "
            style={{
              width: " ",
              height: "50px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0px 50px 0px 50px",
            }}
          >
            <div className=" border rounded " style={{ paddingLeft: "15px" }}>
              <h5 style={{ marginLeft: "0px", marginTop: "0px", textAlign: "left" }}>
                {data.buissnessname}
              </h5>
              <p style={{ marginLeft: "0px", marginTop: "-10px", textAlign: "left" }}>
                {data.name}
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <div className="border rounded" style={{ height: "200px", marginTop: "20px" }}>
              <div className="row p-3">
                <div className="col col-sm-12 col-md-12 col-lg-6">
                  <h6>Contact</h6>
                  <p>
                    {data.address},{data.street}
                    <br />
                    {data.town},{data.city}
                  </p>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-6">
                  <h6>Address</h6>
                  <p>
                    {data.email}
                    <br />
                    {data.phonenumber}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="border rounded "
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => {
                  approve(data.loginId);
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
    </>
  );
}
