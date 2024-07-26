import React, { useState } from "react";
import "./searchbox.css";
// import axios from "axios";
import "react-redux";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();

  const [searchterm, setSearchterm] = useState("");

  const inputchange = (event) => {
    setSearchterm(event.target.value);
  };

  const submit = () => {
    if (searchterm !== "") {
      navigate(`/searchresult/${searchterm}`);
    }
    // axios
    //   .post("http://localhost:4000/user/searchproduct", { searchterm: searchterm })
    //   .then((response) => {
    //     console.log(response);
    //     history.push({
    //       pathname: "/searchresult",
    //       state: { searchResults: response.data },
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  console.log(searchterm);

  return (
    <>
      <div className="container-fluid d-flex search-div">
        <input
          placeholder="search for products..."
          onChange={inputchange}
          type="text"
          className="search-box form-control"
          id="searchbox"
          aria-describedby="searchbox"
        />
        <button onClick={submit} className="search-button btn btn-primary">
          Search
        </button>
      </div>
    </>
  );
}
