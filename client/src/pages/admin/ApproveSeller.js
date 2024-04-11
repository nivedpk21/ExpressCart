import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchdetails } from "../../reduxtoolkit/sellerDetailsSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import "./approveseller.css";
import Pagination from "../../components/Pagination";
import toast, { Toaster } from "react-hot-toast";


export default function ApproveSeller() {
  // const sellerDetails = useSelector((state) => state.sellerdetails.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchdetails());
  // }, []);

  // console.log("sellerDetails", sellerDetails);

  const [data, setData] = useState([]);

  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(5);

  useEffect(() => {
    axios.get("http://localhost:4000/admin/sellerdetails").then((response) => {
      console.log(response);
      const data = response.data.data;
      setData(data);
    });
  }, []);

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = data.slice(firstPostindex, lastPostindex);

  return (
    <>
      <Header />

      <div
        className="main-one-div container-fluid border rounded "
        style={{
          backgroundColor: "white",
          height: "100%",
          marginTop: "50px",
        }}
      >
        <div className="container-fluid" style={{ padding: "10px" }}>
          <div className="border-bottom " style={{ height: "50px", padding: "10px" }}>
            <h5 style={{ textAlign: "center" }}>Approve Seller</h5>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col col-sm-12 col-md-12 col-lg-12">
              {currentPageposts.map((item) => (
                <div
                  className="container-fluid border rounded mb-2"
                  style={{
                    height: "120px",
                    padding: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="border rounded"
                    style={{
                      width: "20%",
                      height: "100%",
                      backgroundColor: "grey",
                    }}
                  ></div>
                  <div className=" " style={{ width: "30%", padding: "10px 0px 0px 20px" }}>
                    <h5 style={{ textAlign: "left", marginBottom: "0px" }}>{item.buissnessname}</h5>
                    <p
                      style={{
                        textAlign: "left",
                        marginTop: "0px",
                      }}
                    >
                      {item.buissnessname}
                      <br />
                      {item.city}
                    </p>
                  </div>
                  <div
                    className=" "
                    style={{
                      width: "20%",
                      marginLeft: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href="/sellerprofile">
                      <Link
                        to={`/sellerprofile/${item.loginId}`}
                        type="button"
                        class="btn btn-outline-primary"
                      >
                        View
                      </Link>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* page */}

        <Pagination
          totalPosts={data.length}
          postsPerpage={postsPerpage}
          setCurrentPage={setCurrentpage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
