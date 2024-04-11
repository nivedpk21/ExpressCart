import React, { useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import "./addproduct.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Addproduct() {
  const [file, setFile] = useState();
  const token = localStorage.getItem("token");
  const [issubmit, setIssubmit] = useState(false);
  const [formerrors, setFormerrors] = useState({});
  const navigate = useNavigate();

  const imageChange = (event) => {
    setproductData({ ...productData, image: event.target.files[0] });
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const [productData, setproductData] = useState({
    category: "",
    productname: "",
    description: "",
    price: "",
    shippingcharge: "",
    image: "",
  });
  console.log("productdata", productData);

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setproductData({ ...productData, [name]: value });
  };

  const validation = (values) => {
    var error = {};
    if (!values.category) {
      error.category = "select category";
    }
    if (!values.productname) {
      error.productname = "enter product name";
    }
    if (!values.description) {
      error.description = "enter description";
    }
    if (!values.price) {
      error.price = "enter price";
    }
    if (!values.shippingcharge) {
      error.shippingcharge = " enter shipping charge";
    }
    if (!values.image) {
      error.image = "upload image";
    }

    return error;
  };

  const submit = (e) => {
    e.preventDefault();
    setIssubmit(true);
    setFormerrors(validation(productData));

    if (Object.keys(formerrors).length === 0 && issubmit) {
      const formdata = new FormData();
      formdata.append("category", productData.category);
      formdata.append("productname", productData.productname);
      formdata.append("description", productData.description);
      formdata.append("price", productData.price);
      formdata.append("shippingcharge", productData.shippingcharge);
      formdata.append("image", productData.image);

      axios
        .post("http://localhost:4000/seller/addproduct", formdata, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          const message = response.data.message;
          toast.success(message);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="container-fluid rounded"
        style={{
          width: "70%",
          backgroundColor: "white",
          height: "100%",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className=" border-bottom text-center" style={{ height: "50px", padding: "12px" }}>
          <h5>Add Product</h5>
        </div>
        <div
          class=" row justify-content-center text-center align-items-center g-2"
          style={{ padding: "5px", marginTop: "15px" }}
        >
          <div class="col col-sm-6 col-lg-6 col-md-6">
            <div
              className="border rounded"
              style={{ height: "650px", padding: "15px", textAlign: "start" }}
            >
              <div class="mb-3">
                <label for="" class="form-label">
                  Category
                </label>
                <span className="formerror-text">{formerrors.category}</span>
                <select
                  onChange={inputChange}
                  class="form-select form-select-md"
                  name="category"
                  defaultValue={""}
                  id=""
                >
                  <option>Choose one</option>
                  <option value={"smartphone"}>Smartphone</option>
                  <option value={"laptop"}>Laptop</option>
                  <option value={"earphone"}>Earphone</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="" class="form-label text-start ">
                  Product Name
                </label>
                <span className="formerror-text">{formerrors.productname}</span>
                <input
                  onChange={inputChange}
                  name="productname"
                  type="text"
                  class="form-control"
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label text-start ">
                  Description
                </label>
                <span className="formerror-text">{formerrors.description}</span>
                <textarea
                  onChange={inputChange}
                  name="description"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{
                    height: "150px",
                    resize: "none",
                    overflowY: "hidden",
                  }}
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Price
                </label>
                <span className="formerror-text">{formerrors.price}</span>
                <input
                  onChange={inputChange}
                  type="text"
                  class="form-control"
                  name="price"
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Shipping Charge
                </label>
                <span className="formerror-text">{formerrors.shippingcharge}</span>
                <input
                  onChange={inputChange}
                  type="text"
                  class="form-control"
                  name="shippingcharge"
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div class="col col-sm-6 col-lg-6 col-md-6">
            <div
              className="border rounded"
              style={{ height: "650px", textAlign: "start", padding: "15px" }}
            >
              <div class="mb-3">
                <label for="" class="form-label">
                  Choose file
                </label>
                <span className="formerror-text">{formerrors.image}</span>
                <input
                  onChange={imageChange}
                  type="file"
                  class="form-control"
                  name="image"
                  id=""
                  placeholder=""
                  aria-describedby="fileHelpId"
                />
              </div>
              <div className="border rounded" style={{ height: "200px", padding: "5px" }}>
                <img src={file} class="img-fluid rounded-top" alt="image" />
              </div>

              <div
                className="border rounded text-center"
                style={{ height: "50px", padding: "5px" }}
              >
                <button onClick={submit} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
