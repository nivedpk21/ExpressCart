import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./order.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

export default function Order() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  console.log(token);
  useEffect(() => {
    axios
      .get("http://localhost:4000/user/vieworder", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(8);

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = data.slice(firstPostindex, lastPostindex);
  return (
    <>
      <Header />

      <div className="container-fluid" style={{ height: "100%", backgroundColor: "" }}>
        <div class="row justify-content-center align-items-center g-0">
          <div class="col-12 col-sm-12">
            <div className=" " style={{ height: "auto", padding: "0px", backgroundColor: "white" }}>
              <div className="p-2 border-bottom mb-4">
                <h5 style={{ textAlign: "center" }}>Orders</h5>
              </div>
              <div class="row justify-content-center align-items-center g-2">
                {currentPageposts.map((item) => (
                  <div class="col col-lg-3 col-md-3 col-sm-6 p-4" style={{ minHeight: "500px" }}>
                    <div class="card rounded-0" style={{ height: "300px" }}>
                      <img
                        src="..."
                        class="card-img-top"
                        alt="..."
                        style={{ minHeight: "200px" }}
                      />
                      <div class="card-body">
                        <div style={{ display: "flex" }}>
                          <Link
                            style={{
                              textDecoration: "none",
                              fontFamily: "serif",
                              fontSize: "20px",
                            }}
                            to={`/viewuserorder/${item._id}`}
                            class="card-title"
                          >
                            {item.productname}
                          </Link>
                          <p className="border rounded " style={{ marginLeft: "auto" }}>
                            2.5*
                          </p>
                        </div>
                        <p style={{ marginTop: "0" }}>
                          {item.status == "0"
                            ? "Order placed"
                            : item.status == "1"
                            ? "order Processing"
                            : item.status == "2"
                            ? "Shipped"
                            : "Delivered"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <Pagination
                  totalPosts={data.length}
                  postsPerpage={postsPerpage}
                  setCurrentPage={setCurrentpage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
