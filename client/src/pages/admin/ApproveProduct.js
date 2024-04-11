import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/Pagination";
export default function ApproveProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/approveproduct")
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
      <div
        className="container-fluid border rounded"
        style={{ width: "70%", background: "white", minHeight: "550px", marginTop: "50px" }}
      >
        <div className="container-fluid" style={{ padding: "10px" }}>
          <div className="border-bottom " style={{ height: "50px", padding: "10px" }}>
            <h5 style={{ textAlign: "center" }}>Approve Product</h5>
          </div>

          <div className="row" style={{ marginTop: "20px", minHeight: "600px" }}>
            {currentPageposts.map((item) => (
              <>
                <div class="col col-lg-3 col-md-3 col-sm-6">
                  <div class="card rounded-0" style={{ height: "300px" }}>
                    <img
                      src="../images/iphone.jpg"
                      class="card-img-top"
                      alt="..."
                      style={{ minHeight: "200px" }}
                    />
                    <div class="card-body">
                      <div style={{ display: "flex" }}>
                        <Link to={`/viewproduct/${item._id}`} class="card-title">
                          {item.productname}
                        </Link>
                        <p className="border rounded " style={{ marginLeft: "auto" }}>
                          2.5*
                        </p>
                      </div>
                      <p style={{ marginTop: "0" }}>{item.price}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Pagination
            totalPosts={data.length}
            postsPerpage={postsPerpage}
            setCurrentPage={setCurrentpage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
