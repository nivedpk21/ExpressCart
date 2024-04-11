import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/Pagination";
import toast, { Toaster } from "react-hot-toast";

export default function Viewproductuser() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/viewproduct/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/productreview/${id}`)
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setReviewData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const token = localStorage.getItem("token");
  const addwishlist = (productId) => {
    axios
      .post(`http://localhost:4000/user/addwishlist/${productId}`, null, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const message = response.data.message;
        toast.success(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // rating

  const ratingStar = "★★★★★☆☆☆☆☆";
  const total = 5;
  const currentrating = data.rating;

  const totalStars = ratingStar.slice(0, currentrating) + ratingStar.slice(5, 10 - currentrating);
  console.log("totalStars", totalStars);

  // pagination for review
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(6);

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = reviewData.slice(firstPostindex, lastPostindex);
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container-fluid" style={{ height: "100%", backgroundColor: "white" }}>
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className=" rounded text-center" style={{ height: "320px" }}>
              <img
                src=".././images/iphone.jpg"
                class="img-fluid rounded-top"
                alt="image"
                style={{ width: "40%" }}
              />
            </div>
            <div className=" rounded" style={{ height: "160px", marginTop: "15px" }}></div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className="border rounded p-3" style={{ height: "400px" }}>
              <div>
                <h5>{data.productname}</h5>
              </div>
              <div className="-bottom">
                <p style={{ color: "orange", fontSize: "22px", fontFamily: "initial" }}>
                  {data.rating}
                  {totalStars}
                </p>
              </div>
              <div className="border-bottom" style={{ textAlign: "justify", marginTop: "0px" }}>
                <h3>Rs{data.price}/-</h3>
                <span style={{ backgroundColor: "red", color: "white" }}>25% OFF</span>
                <p>inclusive of all taxes</p>
              </div>

              <div>
                <h6 className="mt-2">Description</h6>
                <p>
                  this is a sample product description.Only for representational purpose only.This
                  is an excellent product with premium quality crafted with superiro technologhy
                  powered by ios most premium brand in the world
                </p>
              </div>
            </div>
            <div
              className="border rounded"
              style={{
                height: "80px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ marginTop: "auto", marginBottom: "20px" }}>
                <button
                  style={{ marginRight: "3px" }}
                  onClick={() => {
                    addwishlist(data._id);
                  }}
                  type="button"
                  class="btn btn-success"
                >
                  Add Wishlist
                </button>
                <Link
                  to={`/buyproduct/${data._id}`}
                  type="button"
                  className={
                    data.stockquantity <= 0
                      ? "btn btn-outline-danger disabled"
                      : "btn btn-outline-danger"
                  }
                >
                  {data.stockquantity <= 0 ? "Out of stock" : "Buy"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded " style={{ height: "auto" }}>
          <div className="border-bottom p-3">
            <h5>Customer Reviews</h5>
          </div>
          <div className="p-3">
            <p style={{ color: "orange", fontSize: "22px", fontFamily: "initial" }}>
              {data.rating}
              {totalStars}
            </p>
            <p>Total {reviewData.length} Reviews</p>
          </div>
          <div
            className="p-3"
            style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
          >
            {currentPageposts.map((item) => (
              <div className="border rounded mb-3 p-2" style={{ height: "130px", width: "48%" }}>
                <p style={{ marginBottom: "0" }}>{item.name}</p>
                <p style={{ color: "orange" }}>{item.rating}★</p>
                <p>{item.review}</p>
              </div>
            ))}
          </div>
          <Pagination
            totalPosts={reviewData.length}
            postsPerpage={postsPerpage}
            setCurrentPage={setCurrentpage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
