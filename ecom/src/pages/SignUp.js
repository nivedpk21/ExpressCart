import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "./signup.css";

export default function SignUp() {
  const [active, setActive] = useState("user");
  const [form, setForm] = useState("user");
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
  return (
    <>
      <Header />
      <div>
        <div
          className="container-fluid border rounded"
          style={{ marginTop: "50px", height: "100%", background: "white", width: "30%", marginBottom: "50px" }}
        >
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
              <div style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}>
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
                    <button onClick={submit} type="submit" class="btn btn-primary" style={{ width: "100%" }}>
                      Sign Up
                    </button>
                  </div>
                  <div style={{ marginTop: "3px", textAlign: "center" }}>
                    <p style={{ color: "grey", fontFamily: "serif" }}>already registered ? </p>
                  </div>
                  <div style={{ marginTop: "10px", marginBottom: "15px" }}>
                    <button style={{ width: "100%" }} className="btn btn-outline-primary">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div
                  className="col col-sm-6 col-md-6 col-lg-6"
                  style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Username
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Buissness Name
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Phonenumber
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Email
                      </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className=" " style={{ marginTop: "35px" }}>
                      <button onClick={submit} type="submit" class="btn btn-primary" style={{ width: "100%" }}>
                        Sign Up
                      </button>
                    </div>
                    <div style={{ marginTop: "3px", textAlign: "center" }}>
                      <p style={{ color: "grey", fontFamily: "serif" }}>already registered ? </p>
                    </div>
                    <div style={{ marginTop: "10px", marginBottom: "15px" }}>
                      <button style={{ width: "100%" }} className="btn btn-outline-primary">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className="col col-sm-6 col-md-6 col-lg-6"
                  style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        address
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        street
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        town
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        city
                      </label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        district
                      </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        state
                      </label>
                      <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
