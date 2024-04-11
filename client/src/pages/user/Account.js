import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./account.css";
import axios from "axios";

export default function Account() {
  const token = localStorage.getItem("token");
  console.log(token);
  const [profileData, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("https://expresscart.onrender.com/user/viewprofile", {
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

  const [issubmit, setIssubmit] = useState(false);
  const [formerrors, setFormerrors] = useState({});
  const [data, setData] = useState({
    housename: "",
    street: "",
    town: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });
  console.log(data);

  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const validate = (values) => {
    var error = {};
    if (!values.housename) {
      error.housename = "enter housename";
    }
    if (!values.street) {
      error.street = "enter street";
    }
    if (!values.town) {
      error.town = "enter town";
    }
    if (!values.city) {
      error.city = "enter city";
    }
    if (!values.district) {
      error.district = "enter district";
    }
    if (!values.state) {
      error.state = "enter state";
    }
    if (!values.pincode) {
      error.pincode = "enter pincode";
    }
    return error;
  };

  const submit = (e) => {
    e.preventDefault();
    setIssubmit(true);
    setFormerrors(validate(data));
    if (Object.keys(formerrors).length == 0 && issubmit) {
      axios
        .post("http://localhost:4000/user/addaddress", data, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          if (response) {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
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
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{ width: "30%" }}
                >
                  Add
                </button>

                {/*------------------------------- modal content ---------------------------------------------------------*/}

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style={{ height: "520px" }}>
                      <div class="modal-header">
                        <h5 class="modal-title fs-5" id="staticBackdropLabel">
                          Add New Address
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div style={{ padding: "25px", textAlign: "start" }}>
                          <div class="mb-2" style={{}}>
                            <label for="" class="form-label">
                              Housename/no:
                            </label>
                            <span className="error-text">{formerrors.housename}</span>
                            <input
                              onChange={inputchange}
                              type="text"
                              class="form-control"
                              name="housename"
                              id=""
                              aria-describedby="helpId"
                              placeholder=""
                            />
                          </div>

                          <div style={{ display: "flex" }}>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                Street:
                              </label>
                              <span className="error-text">{formerrors.street}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="street"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                Town:
                              </label>
                              <span className="error-text">{formerrors.town}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="town"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div style={{ display: "flex" }}>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                City:
                              </label>
                              <span className="error-text">{formerrors.city}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="city"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                District:
                              </label>
                              <span className="error-text">{formerrors.district}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="district"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div style={{ display: "flex" }}>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                State:
                              </label>
                              <span className="error-text">{formerrors.state}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="state"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                            <div class="mb-2" style={{}}>
                              <label for="" class="form-label">
                                Pincode:
                              </label>
                              <span className="error-text">{formerrors.pincode}</span>
                              <input
                                onChange={inputchange}
                                type="text"
                                class="form-control"
                                name="pincode"
                                id=""
                                aria-describedby="helpId"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer ">
                        <div style={{}}>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button onClick={submit} type="button" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* modal end---------------------- */}
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
