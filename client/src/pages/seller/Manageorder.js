import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

export default function Manageorder() {
  const token = localStorage.getItem("token");
  const [orderData, setOrderdata] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(8);
  useEffect(() => {
    axios
      .get("http://localhost:4000/seller/manageorder", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const data = response.data.data;
        setOrderdata(data);
      });
  }, []);

  const [status, setStatus] = useState("");
  const inputchange = (event) => {
    setStatus(event.target.value);
  };
  const submit = () => {
    axios
      .get(`http://localhost:4000/seller/filterorder/${status}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        const newdata = response.data.data;
        setOrderdata(newdata);
      });
  };

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = orderData.slice(firstPostindex, lastPostindex);
  return (
    <>
      <Header />

      <div class="row justify-content-center align-items-center g-0">
        {/* left column */}

        <div class="col col-lg-3">
          <div
            className="border "
            style={{ height: "550px", padding: "50px", backgroundColor: "white" }}
          >
            <div>
              <div>
                <div style={{ marginTop: "30px" }}>
                  <div className="border-bottom" style={{ paddingBottom: "10px" }}>
                    <h6 style={{ textAlign: "left" }}>Status</h6>
                  </div>

                  <div style={{ paddingTop: "10px", display: "flex", flexWrap: "wrap" }}>
                    <div class="form-check mt-2" style={{ width: "50%" }}>
                      <input
                        onChange={inputchange}
                        class="form-check-input"
                        type="radio"
                        value="0"
                        id="flexCheckChecked"
                        name="status"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Pending
                      </label>
                    </div>

                    <div class="form-check mt-2" style={{ width: "50%" }}>
                      <input
                        onChange={inputchange}
                        class="form-check-input"
                        type="radio"
                        value="1"
                        name="status"
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        processing
                      </label>
                    </div>

                    <div class="form-check mt-2" style={{ width: "50%" }}>
                      <input
                        onChange={inputchange}
                        class="form-check-input"
                        type="radio"
                        value="2"
                        name="status"
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        shipped
                      </label>
                    </div>

                    <div class="form-check mt-2" style={{ width: "50%" }}>
                      <input
                        onChange={inputchange}
                        class="form-check-input"
                        type="radio"
                        name="status"
                        value="3"
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        delivered
                      </label>
                    </div>
                  </div>
                  <div className="mt-5" style={{ width: "100%", textAlign: "center" }}>
                    <button onClick={submit} type="button" class="btn btn-primary">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order details list column */}

        <div class="col col-lg-9">
          <div style={{ height: "550px", backgroundColor: "white", padding: "10px" }}>
            <div class="table-responsive" style={{ minHeight: "480px" }}>
              <table class="border table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentPageposts.map((item) => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>online</td>
                      <td>{item.grandtotal}</td>
                      <td>{item.productname}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {item.status == "0" ? (
                          <span style={{ color: "red" }}>pending</span>
                        ) : item.status == "1" ? (
                          <span style={{ color: "green" }}>processing</span>
                        ) : item.status == "2" ? (
                          <span style={{ color: "blue" }}>shipped</span>
                        ) : item.status == "3" ? (
                          <span style={{ color: "black" }}>delivered</span>
                        ) : (
                          "null"
                        )}
                      </td>
                      <td>
                        <Link to={`/processorder/${item._id}`} className="btn btn-primary">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
