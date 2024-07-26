import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  console.log(loginData);

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  const validate = (values) => {
    var error = {};
    if (!values.username) {
      error.username = "enter username";
    }
    if (!values.password) {
      error.password = "enter password";
    }
    return error;
  };

  const submit = (e) => {
    e.preventDefault();
    const newFormErrors = validate(loginData);
    setFormErrors(newFormErrors);

    if (Object.keys(newFormErrors).length === 0) {
      setLoading(true);
      axios
        .post("https://expresscart.onrender.com/user/signin", loginData)
        .then((response) => {
          setLoading(false);
          console.log(response);
          const data = response.data;
          const message = response.data.data.message;
          toast.success(message);
          if (data) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.data.role);
            navigate("/");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          const errormessage = error.response.data.message;
          toast.error(errormessage);
          console.log(errormessage);
        });
    }
  };
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="main-div container-fluid border rounded">
        <div className="border-bottom" style={{ height: "65px", padding: "15px" }}>
          <h5 style={{ textAlign: "center" }}>Sign In</h5>
        </div>

        <div style={{ paddingTop: "25px", paddingLeft: "20px", paddingRight: "20px" }}>
          <form>
            <div class="mb-3">
              <label class="form-label">Username</label>
              <span className="error-text">{formErrors.username}</span>
              <input
                placeholder="user/admin/seller"
                onChange={inputChange}
                name="username"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <span className="error-text">{formErrors.password}</span>
              <input
                placeholder="123"
                onChange={inputChange}
                name="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className=" " style={{ marginTop: "35px" }}>
              {loading ? (
                <>
                  <button
                    onClick={submit}
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Logging in...</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={submit}
                    type="submit"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
            <div style={{ marginTop: "3px", textAlign: "center" }}>
              <p style={{ color: "grey", fontFamily: "serif" }}>Forgot your password ? </p>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <a href="/signup" style={{ width: "100%" }} className="btn btn-outline-primary">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
