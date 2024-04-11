import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("role");
    localStorage.clear("token");
    navigate("/");
  };

  return (
    <>
      {/* header */}
      <div className="header-div container-fluid ">
        <div className="header-item ">
          <h3 className="brand-name">Express Cart</h3>
        </div>

        <div className="header-item " style={{ display: "flex", width: "35%" }}>
          <input type="text" class="search-box form-control" id="searchbox" aria-describedby="searchbox" />
          <button className="search-button btn btn-primary">Search</button>
        </div>
        <div
          className="header-item "
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "19px" }}
        >
          <div style={{ margin: "10px", textAlign: "center" }}>
            <svg
              className="header-icon"
              width={33}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-gift"
              viewBox="0 0 16 16"
            >
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
            </svg>
            <p className="icon-name">Gift Card</p>
          </div>
          <div style={{ margin: "10px", textAlign: "center" }}>
            <svg
              className="header-icon"
              width={33}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-bag-heart"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
              />
            </svg>
            <p className="icon-name">Wishlist</p>
          </div>
          <div style={{ margin: "10px", textAlign: "center" }}>
            <a href="/signin" style={{ textDecorationLine: "none" }}>
              <svg
                className="header-icon"
                width={33}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p className="icon-name">Profile</p>
            </a>
          </div>
          <div style={{ margin: "10px", textAlign: "center" }}>
            <svg
              className="header-icon"
              width={33}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            <p className="icon-name">Cart</p>
          </div>
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
                    <a class="nav-link" href="#">
                      About
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
                      <li>
                        <a class="dropdown-item" href="#">
                          View seller
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="/signup" aria-disabled=" ">
                      Users
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
                      Produts
                    </a>
                    <ul class="dropdown-menu" style={{ background: "" }}>
                      <li>
                        <a class="dropdown-item" href="/approveproduct">
                          Approve products
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          View products
                        </a>
                      </li>
                    </ul>
                  </li>
                  <button type="button" class="btn btn-primary" onClick={logout}>
                    logout
                  </button>
                </ul>
              </>
            ) : role == "seller" ? (
              <></>
            ) : role == "user" ? (
              <>
                <button type="button" class="btn btn-primary" onClick={logout}>
                  logout
                </button>
              </>
            ) : (
              <>
                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/signin">
                      SignIn
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
                      Categories
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Crockery
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Electronics
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Clothing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="/signup" aria-disabled=" ">
                      Sign Up
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
