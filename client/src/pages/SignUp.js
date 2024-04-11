import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "./signup.css";

export default function SignUp() {
  const [active, setActive] = useState("user");
  const [form, setForm] = useState("user");

  // user form -------------------------------

  const [formerrors, setFormerrors] = useState({});
  const [issubmit, setIsSubmit] = useState(false);

  const [UserData, setUserData] = useState({
    name: "",
    username: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...UserData, [name]: value });
    console.log(UserData);
  };

  const validate = (values) => {
    var error = {};
    if (!values.name) {
      error.name = "enter name";
    }
    if (!values.username) {
      error.username = "enter username";
    }
    if (!values.email) {
      error.email = "enter email";
    }
    if (!values.phonenumber) {
      error.phonenumber = "enter phonenumber";
    }
    if (!values.password) {
      error.password = "enter password";
    }
    return error;
  };

  const submit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    setFormerrors(validate(UserData));

    if (Object.keys(formerrors).length === 0 && issubmit) {
      axios
        .post("http://localhost:4000/user/signup", UserData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          const errorMessage = error.response.data.message;
          console.log(errorMessage);
        });
    }
  };

  // seller form ---------------------------------------------
  const [sellerFormerrors, setSellerformerrors] = useState({});
  const [sellerData, setSellerData] = useState({
    name: "",
    username: "",
    buissnessname: "",
    phonenumber: "",
    email: "",
    password: "",
    image: "",
    address: "",
    street: "",
    town: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const sellerinputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSellerData({ ...sellerData, [name]: value });
  };

  const imageChange = (event) => {
    setSellerData({ ...sellerData, image: event.target.files[0] });
  };

  const sellervalidation = (values) => {
    var error = {};

    if (!values.name) {
      error.name = "enter name";
    }
    if (!values.username) {
      error.username = "enter username";
    }
    if (!values.buissnessname) {
      error.buissnessname = "enter buissnessname";
    }
    if (!values.phonenumber) {
      error.phonenumber = "enter phonenumber";
    }
    if (!values.email) {
      error.email = "enter email";
    }
    if (!values.password) {
      error.password = "enter password";
    }
    if (!values.image) {
      error.image = "upload image";
    }
    if (!values.address) {
      error.address = "enter address";
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

  const sellersubmit = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    setSellerformerrors(sellervalidation(sellerData));

    if (Object.keys(sellerFormerrors).length === 0 && issubmit) {
      const formdata = new FormData();
      formdata.append("name", sellerData.name);
      formdata.append("username", sellerData.username);
      formdata.append("buissnessname", sellerData.buissnessname);
      formdata.append("phonenumber", sellerData.phonenumber);
      formdata.append("email", sellerData.email);
      formdata.append("password", sellerData.password);
      formdata.append("image", sellerData.image);
      formdata.append("address", sellerData.address);
      formdata.append("street", sellerData.street);
      formdata.append("town", sellerData.town);
      formdata.append("city", sellerData.city);
      formdata.append("district", sellerData.district);
      formdata.append("state", sellerData.state);
      formdata.append("pincode", sellerData.pincode);
      console.log("formdata", formdata.name);
      console.log("sellerdata image", sellerData.image);

      axios
        .post("http://localhost:4000/seller/signup", formdata)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="main-div container-fluid border rounded">
        <div className="border-bottom" style={{ height: "65px", padding: "15px" }}>
          <h5 style={{ textAlign: "center" }}>Sign Up</h5>
        </div>

        <div className="text-center" style={{ padding: "10px" }}>
          <button
            type="button"
            className={active == "user" ? "btn btn-danger " : "btn btn-outline-primary"}
            onClick={() => {
              setActive("user");
              setForm("user");
            }}
          >
            User
          </button>
          <button
            type="button"
            className={active == "seller" ? "btn btn-danger " : "btn btn-outline-primary"}
            onClick={() => {
              setActive("seller");
              setForm("seller");
            }}
          >
            seller
          </button>
        </div>

        {form == "user" ? (
          <>
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <span className="formerror-text">{formerrors.name}</span>
                  <input
                    maxLength={10}
                    minLength={5}
                    name="name"
                    onChange={inputChange}
                    type="text"
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <span className="formerror-text">{formerrors.username}</span>
                  <input
                    maxLength={12}
                    // minLength={6}
                    name="username"
                    onChange={inputChange}
                    type="text"
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label for="phonenumber" class="form-label">
                    Phonenumber
                  </label>
                  <span className="formerror-text">{formerrors.phonenumber}</span>
                  <input
                    name="phonenumber"
                    onChange={inputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    maxLength={10}
                    minLength={10}
                  />
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <span className="formerror-text">{formerrors.email}</span>
                  <input
                    name="email"
                    onChange={inputChange}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    maxLength={30}
                    minLength={5}
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <span className="formerror-text">{formerrors.password}</span>
                  <input
                    name="password"
                    onChange={inputChange}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    maxLength={8}
                    // minLength={6}
                  />
                </div>
                <div className=" " style={{ marginTop: "35px" }}>
                  <button
                    onClick={submit}
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Sign Up
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "3px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "grey",
                      fontFamily: "serif",
                    }}
                  >
                    already registered ?
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <a href="/signin" style={{ width: "100%" }} className="btn btn-outline-primary">
                    Sign In
                  </a>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            {/*-------- seller----------------------------------------------------------------- */}

            <div className="row">
              <div
                className="col col-sm-6 col-md-6 col-lg-6"
                style={{
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <span className="formerror-text">{sellerFormerrors.name}</span>
                    <input
                      name="name"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Username
                    </label>
                    <span className="formerror-text">{sellerFormerrors.username}</span>
                    <input
                      name="username"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Buissness Name
                    </label>
                    <span className="formerror-text">{sellerFormerrors.buissnessname}</span>
                    <input
                      name="buissnessname"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Phonenumber
                    </label>
                    <span className="formerror-text">{sellerFormerrors.phonenumber}</span>
                    <input
                      name="phonenumber"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Email
                    </label>
                    <span className="formerror-text">{sellerFormerrors.email}</span>
                    <input
                      name="email"
                      onChange={sellerinputChange}
                      type="email"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <span className="formerror-text">{sellerFormerrors.password}</span>
                    <input
                      name="password"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Image
                    </label>
                    <span className="formerror-text">{sellerFormerrors.image}</span>
                    <input name="image" onChange={imageChange} type="file" class="form-control" />
                  </div>
                </form>
              </div>

              <div
                className="col col-sm-6 col-md-6 col-lg-6"
                style={{
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      address
                    </label>
                    <span className="formerror-text">{sellerFormerrors.address}</span>
                    <input
                      name="address"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      street
                    </label>
                    <span className="formerror-text">{sellerFormerrors.street}</span>
                    <input
                      name="street"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      town
                    </label>
                    <span className="formerror-text">{sellerFormerrors.town}</span>
                    <input
                      name="town"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      city
                    </label>
                    <span className="formerror-text">{sellerFormerrors.city}</span>
                    <input
                      name="city"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      district
                    </label>
                    <span className="formerror-text">{sellerFormerrors.district}</span>
                    <input
                      name="district"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      state
                    </label>
                    <span className="formerror-text">{sellerFormerrors.state}</span>

                    <input
                      name="state"
                      type="text"
                      onChange={sellerinputChange}
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="pincode" class="form-label">
                      pincode
                    </label>
                    <span className="formerror-text">{sellerFormerrors.pincode}</span>
                    <input
                      // maxLength={12}
                      // minLength={6}
                      name="pincode"
                      onChange={sellerinputChange}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </form>
              </div>
              <div>
                <div className=" " style={{ marginTop: "35px" }}>
                  <button
                    onClick={sellersubmit}
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Sign Up
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "3px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "grey",
                      fontFamily: "serif",
                    }}
                  >
                    already registered ?
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <button style={{ width: "100%" }} className="btn btn-outline-primary">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
