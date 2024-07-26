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
      {/*new Navbar*/}
      <nav className="navbar bg-primary navbar-expand-lg">
        <div className="container-fluid bg-primary">
          <Link className="navbar-brand text-light" to="#">
            ExpressCart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse bg-primary navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {role == "admin" ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/admindashboard"}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/approveproduct"}>
                      ApproveProducts
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/approveseller"}>
                      ApproveSeller
                    </NavLink>
                  </li>
                </>
              ) : role == "seller" ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/addproduct"}>
                      Addproduct
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/manageproducts"}>
                      Manageproduct
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/manageorder"}>
                      Manageorder
                    </NavLink>
                  </li>
                </>
              ) : role == "user" ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/products"}>
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/cart"}>
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/orders"}>
                      Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/orders"}>
                      Account
                    </NavLink>
                  </li>
                </>
              ) : (
                //guest
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/products"}>
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/offers"}>
                      Offers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/signin"}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/signup"}>
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
