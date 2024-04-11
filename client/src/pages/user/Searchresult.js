import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { fetchresult } from "../../reduxtoolkit/searchSlice";

export default function Searchresult() {
  const { searchterm } = useParams();
  const SEARCHTERM = searchterm;

  const searchData = useMemo(
    () => ({
      searchterm: SEARCHTERM,
    }),
    [SEARCHTERM]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchresult(searchData));
  }, [searchData]);

  const data = useSelector((state) => state.result.result);
  console.log("result redux data", data);

  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerpage, setPostsperpage] = useState(8);

  const lastPostindex = currentPage * postsPerpage;
  const firstPostindex = lastPostindex - postsPerpage;
  const currentPageposts = data.slice(firstPostindex, lastPostindex);

  const [filterData, setFilterdata] = useState({
    searchterm: SEARCHTERM,
    price: "",
    rating: "",
  });
  console.log("filterData", filterData);

  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFilterdata({ ...filterData, [name]: value });
  };

  const submit = () => {
    dispatch(fetchresult(filterData));
  };

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "100%", backgroundColor: "white" }}>
        <div class="row justify-content-center align-items-center g-0">
          <div class="col col-sm-3">
            <div className="border " style={{ height: "540px", padding: "50px" }}>
              {/* <div>
                <div className="border-bottom" style={{ paddingBottom: "10px" }}>
                  <h6 style={{ textAlign: "left" }}>Customer Ratings</h6>
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
                      onChange={inputchange}
                      class="form-check-input"
                      type="radio"
                      value="1"
                      id="rating"
                      name="rating"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      1★ & 2★
                    </label>
                  </div>
                  <div class="form-check mt-2" style={{ width: "50%" }}>
                    <input
                      onChange={inputchange}
                      class="form-check-input"
                      type="radio"
                      value="2"
                      id="rating"
                      name="rating"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      2★ & 3★
                    </label>
                  </div>
                  <div class="form-check mt-2" style={{ width: "50%" }}>
                    <input
                      onChange={inputchange}
                      class="form-check-input"
                      type="radio"
                      value="3"
                      id="rating"
                      name="rating"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      3★ to 4★
                    </label>
                  </div>
                  <div class="form-check mt-2" style={{ width: "50%" }}>
                    <input
                      onChange={inputchange}
                      class="form-check-input"
                      type="radio"
                      value="4"
                      id="rating"
                      name="rating"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      4★ & up
                    </label>
                  </div>
                </div>
              </div> */}

              <div style={{ marginTop: "30px" }}>
                <div className="border-bottom" style={{ paddingBottom: "10px" }}>
                  <h6 style={{ textAlign: "left" }}>Price</h6>
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <div class="form-check mt-2" style={{}}>
                  <input
                    onChange={inputchange}
                    class="form-check-input"
                    type="radio"
                    value="1000"
                    id="price"
                    name="price"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    under 1,000$
                  </label>
                </div>

                <div class="form-check mt-2" style={{}}>
                  <input
                    onChange={inputchange}
                    class="form-check-input"
                    type="radio"
                    value="5000"
                    id="price"
                    name="price"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    1,000$ - 5,000$
                  </label>
                </div>

                <div class="form-check mt-2" style={{}}>
                  <input
                    onChange={inputchange}
                    class="form-check-input"
                    type="radio"
                    value="10000"
                    id="price"
                    name="price"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    5,000$ - 10,000$
                  </label>
                </div>

                <div class="form-check mt-2" style={{}}>
                  <input
                    onChange={inputchange}
                    class="form-check-input"
                    type="radio"
                    value="10001"
                    id="price"
                    name="price"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    above 10,000$
                  </label>
                </div>

                <div className="mt-5" style={{ textAlign: "center" }}>
                  <button
                    style={{ width: "100%" }}
                    onClick={submit}
                    type="button"
                    class="btn btn-secondary"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col col-sm-9">
            <div className=" " style={{ height: "600px", padding: "20px" }}>
              <div
                class="row justify-content-start align-items-top g-2"
                style={{ minHeight: "500px" }}
              >
                {data.length == 0 ? (
                  <>
                    <div className="" style={{ height: "50px" }}>
                      <p style={{ textAlign: "center" }}>No matching results !</p>
                    </div>
                  </>
                ) : (
                  <>
                    {currentPageposts.map((item) => (
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
                              <Link
                                to={`/viewproductuser/${item._id}`}
                                style={{
                                  textDecoration: "none",
                                  fontFamily: "serif",
                                  fontSize: "20px",
                                }}
                                class="card-title"
                              >
                                {item.productname}
                              </Link>
                              <p
                                className="border rounded "
                                style={{ marginLeft: "auto", color: "orange" }}
                              >
                                {item.rating}★
                              </p>
                            </div>
                            <p style={{ padding: "0", margin: "0", fontSize: "15px" }}>
                              Rs{item.price}/-
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {/* page component */}
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
    </>
  );
}
