import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

export default function Selleraccount() {
  const token = localStorage.getItem("token");
  const [profileData, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/seller/viewprofile", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div style={{ padding: "75px" }}>
        <div class="row justify-content-center align-items-center g-1">
          <div class="col col-sm-12 col-md-12 col-lg-3">
            <div className="rounded" style={{ backgroundColor: "white", height: "550px" }}>
              <div
                className=" border-bottom"
                style={{
                  height: "170px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>
                  <div
                    className="border "
                    style={{ borderRadius: "50%", width: "120px", height: "120px" }}
                  ></div>
                  <p style={{ textAlign: "center" }}>username</p>
                </div>
              </div>
              <div style={{ padding: "50px" }}>
                <p>Name:{profileData.name}</p>
                <p>PH:{profileData.phonenumber}</p>
                <p>Email:{profileData.email}</p>
              </div>
            </div>
          </div>

          <div class="col col-sm-12 col-lg-5 ">
            <div className="rounded" style={{ backgroundColor: "white", height: "550px" }}>
              <div className="border-bottom p-3">
                <h5>Address</h5>
              </div>
              <div style={{ padding: "50px", minHeight: "430px" }}>
                <div className="border rounded p-4">
                  <p>{profileData.housename}</p>
                  <p>{profileData.street}</p>
                  <p>
                    {profileData.town},{profileData.city}
                  </p>
                  <p>
                    {profileData.district},{profileData.state}
                  </p>
                  <p>{profileData.pincode}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col ">
            <div className="rounded" style={{ backgroundColor: "white", height: "550px" }}>
              <div className="border-bottom p-3">
                <h5>Payment </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
