import React, { useState } from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function Header() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("role");
    localStorage.clear("token");
    navigate("/");
  };
  const [active, setActive] = useState("");

  return (
    <>
      {/* header */}
      <div className="header-div container-fluid ">
        <div className="header-item brandname-div " style={{ width: "30%" }}>
          <h3 className="brand-name">Express Cart</h3>
        </div>

        <div style={{ width: "5%" }}></div>
        <SearchBox />
        <div style={{ width: "15%" }}></div>

        <div className="menu-div">
          {role == null ? ( // role -----------------------------------------------------------------
            <>
              <div style={{ width: "30%" }}></div>

              {/* <div style={{ width: "30%" }}></div> */}

              <a href="/signin" style={{ textDecoration: "none", width: "40%" }}>
                <div
                  className=" "
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="white"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <span className="menu-text">Signin</span>
                </div>
              </a>
            </>
          ) : role == "admin" ? (
            <div className="dropdown-center">
              <div
                className=" dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="white"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <span className="menu-text">Admin</span>
              </div>
              <ul class="dropdown-menu">
                {/* <li>
                  <a
                    class="dropdown-item"
                    href={
                      role === "user" ? "/profile" : role === "seller" ? "/selleraccount" : <></>
                    }
                  >
                    Profile
                  </a>
                </li> */}

                <li>
                  <a
                    onClick={logout}
                    class="dropdown-item"
                    href="#"
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    logout
                  </a>
                </li>
              </ul>
            </div>
          ) : role == "user" ? (
            <>
              <div>
                <div
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="white"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <span className="menu-text">Account</span>
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href={"/profile"}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href={"/order"}>
                      Orders
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={logout}
                      class="dropdown-item"
                      href="#"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      logout
                    </a>
                  </li>
                </ul>
              </div>
              <a href="/" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    fill="white"
                    class="bi bi-tags"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
                  </svg>
                  <span className="menu-text">Offers</span>
                </div>
              </a>

              <a href="/wishlist" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <span className="menu-text">Wishlist</span>
                </div>
              </a>
            </>
          ) : (
            <>
              <div className="dropdown-center">
                <div
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="white"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <span className="menu-text">Account</span>
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href={
                        role === "user" ? "/profile" : role === "seller" ? "/selleraccount" : <></>
                      }
                    >
                      Profile
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={logout}
                      class="dropdown-item"
                      href="#"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      {/* navigation */}
      <nav class="border navbar navbar-expand-sm ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {role == "admin" ? (
              <>
                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/admindashboard">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Seller
                    </a>
                    <ul class="dropdown-menu" style={{ background: "" }}>
                      <li>
                        <a class="dropdown-item" href="/approveseller">
                          Approve seller
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Produts
                    </a>
                    <ul class="dropdown-menu" style={{ background: "" }}>
                      <li>
                        <a class="dropdown-item" href="/approveproduct">
                          Approve products
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ) : // seller navigation -------------------------------------------------------------------------

            role == "seller" ? (
              <>
                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/addproduct">
                          Add Product
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/manageproducts">
                          Manage Products
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="/manageorder" aria-disabled=" ">
                      Orders
                    </a>
                  </li>
                </ul>
              </>
            ) : role == "user" ? ( // user nav --------------------------------------------------------------------------------
              <>
                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      onClick={() => {
                        setActive("home");
                      }}
                      style={{ color: active == "home" ? "red" : "black" }}
                      className="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      style={{ color: active === "category" ? "red" : "black" }}
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul className="dropdown-menu " style={{ marginTop: "17px" }}>
                      <li>
                        <a class="dropdown-item" href="#">
                          Smartphone
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          laptop
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Earphones
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => {
                        setActive("giftcards");
                      }}
                      style={{ color: active == "giftcards" ? "red" : "black" }}
                      className="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Giftcards
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => {
                        setActive("offers");
                      }}
                      style={{ color: active == "offers" ? "red" : "black" }}
                      className="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Offers
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      onClick={() => {
                        setActive("help");
                      }}
                      style={{ color: active == "help" ? "red" : "black" }}
                      class="nav-link "
                      aria-current="page"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              // guest ------------------nav------------------------------------------------------------------------------
              <>
                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      onClick={() => {
                        localStorage.setItem("active", "home");
                      }}
                      style={{ color: active === "home" ? "red" : "black" }}
                      className="nav-link"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      style={{ color: active === "category" ? "red" : "black" }}
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul className="dropdown-menu " style={{ marginTop: "17px" }}>
                      <li>
                        <a class="dropdown-item" href="#">
                          Smartphone
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          laptop
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Earphones
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">
                      Giftcards
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">
                      Offers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">
                      Help
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
