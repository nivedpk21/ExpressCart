import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./manageproduct.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

export default function Manageproduct() {
  const token = localStorage.getItem("token");
  const [orderData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://expresscart.onrender.com/seller/manageproduct", {
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

  const [status, setStatus] = useState("");
  const inputChange = (event) => {
    setStatus(event.target.value);
  };
  console.log("status", status);
  const submit = () => {
    axios
      .get(`https://expresscart.onrender.com/seller/filterproducts/${status}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const newdata = response.data.data;
        setData(newdata);
      });
  };

  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(8);

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = orderData.slice(firstPostindex, lastPostindex);

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "100%", backgroundColor: "white" }}>
        <div class="row justify-content-center align-items-center g-0" style={{height:"100%"}}>
          {/* search filters */}

          <div class="col col-sm-3">
            <div
              className="border "
              style={{ minHeight: "550px", padding: "40px", backgroundColor: "white" }}
            >
              <div>
                <div>
                  <div style={{ marginTop: "30px" }}>
                    <div className="border-bottom" style={{ paddingBottom: "10px" }}>
                      <h6 style={{ textAlign: "left" }}>Status</h6>
                    </div>

                    <div
                      style={{
                        paddingTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <div class="form-check mt-2" style={{ width: "50%" }}>
                        <input
                          onChange={inputChange}
                          name="status"
                          class="form-check-input"
                          type="radio"
                          value="0"
                          id="status"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Pending
                        </label>
                      </div>

                      <div class="form-check mt-2" style={{ width: "50%" }}>
                        <input
                          onChange={inputChange}
                          name="status"
                          class="form-check-input"
                          type="radio"
                          value="2"
                          id="status"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          rejected
                        </label>
                      </div>

                      <div class="form-check mt-2" style={{ width: "50%" }}>
                        <input
                          onChange={inputChange}
                          name="status"
                          class="form-check-input"
                          type="radio"
                          value="1"
                          id="status"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          approved
                        </label>
                      </div>

                      <div class="form-check mt-2" style={{ width: "50%" }}>
                        <input
                          onChange={inputChange}
                          name="status"
                          class="form-check-input"
                          type="radio"
                          value="3"
                          id="status"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          unpublished
                        </label>
                      </div>

                      <div className=" mt-5" style={{ textAlign: "center", width: "100%" }}>
                        <button onClick={submit} type="button" class="btn btn-primary">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* product display */}

          <div class="col col-sm-9">
            <div className=" " style={{ minHeight: "550px", padding: "20px" }}>
              <div class="row justify-content-start align-items-center g-2">
                {currentPageposts.map((item) => (
                  <div class="col col-lg-3 col-md-3 col-sm-6">
                    <div class="card rounded-0" style={{ height: "300px" }}>
                      <img
                        src={`./public/images/${item.images}`}
                        class="card-img-top"
                        alt="image"
                        style={{ minHeight: "200px" }}
                      />
                      <div class="card-body">
                        <div style={{ display: "flex" }}>
                          <Link to={`/viewproductseller/${item._id}`} class="card-title">
                            {item.productname}
                          </Link>
                          <p className="border rounded " style={{ marginLeft: "auto" }}>
                            2.5*
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <p style={{ marginTop: "0" }}>{item.price}</p>
                          {item.status == "0" ? (
                            <>
                              <p style={{ marginLeft: "auto", color: "orange" }}>pending</p>
                            </>
                          ) : item.status == "1" ? (
                            <>
                              <p style={{ marginLeft: "auto", color: "green" }}>approved</p>
                            </>
                          ) : item.status == "2" ? (
                            <>
                              <p style={{ marginLeft: "auto", color: "red" }}>rejected</p>
                            </>
                          ) : (
                            <>
                              <p style={{ marginLeft: "auto", color: "blue" }}>Unpublished</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Pagination
              totalPosts={orderData.length}
              postsPerpage={postsPerpage}
              setCurrentPage={setCurrentpage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
