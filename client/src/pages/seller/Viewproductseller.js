import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function Viewproductseller() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});

  const [issubmit, setIssubmit] = useState(false);
  const [formerrors, setFormerrors] = useState({});
  const [quantity, setQuantity] = useState({
    stockquantity: "",
  });
  const inputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setQuantity({ ...quantity, [name]: value });
  };
  const validation = (values) => {
    var error = {};
    if (!values.stockquantity) {
      return (error.stockquantity = "enter quantity");
    }
    return error;
  };

  const submit = (e) => {
    const productId = data._id;
    e.preventDefault();
    setIssubmit(true);
    setFormerrors(validation(quantity));

    if (Object.keys(formerrors).length === 0 && issubmit) {
      axios
        .post(`http://localhost:4000/seller/addquantity/${productId}`, quantity)
        .then((response) => {
          console.log(response);
          const message = response.data.message;
          toast.success(message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/seller/viewproduct/${id}`, {
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

  const deleteProduct = (product_id) => {
    console.log("product_id", product_id);
    axios
      .get(`http://localhost:4000/seller/deleteproduct/${product_id}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className="border rounded" style={{ height: "320px" }}></div>
            <div className="border rounded" style={{ height: "160px", marginTop: "15px" }}></div>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-6" style={{ padding: "15px" }}>
            <div className=" " style={{ height: "270px" }}>
              <div>
                <h5>{data.productname}</h5>
              </div>
              <div style={{ textAlign: "justify" }}>
                <h3>899RS</h3>
                <span style={{ backgroundColor: "red", color: "white" }}>25% OFF</span>
                <p>2.5*</p>
              </div>
              <div style={{ minHeight: "200px" }}>
                <p>description</p>
              </div>
            </div>
            <div className="border rounded" style={{ marginTop: "15px", height: "210px" }}>
              <div className="border-bottom" style={{ textAlign: "center", padding: "10px" }}>
                <div class="btn-group " role="group" aria-label="Basic outlined example">
                  <button type="button" class="btn btn-outline-primary">
                    Edit
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Unpublish
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(data._id);
                    }}
                    type="button"
                    class="btn btn-outline-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div style={{ padding: "10px" }}>
                <h6 style={{ textAlign: "center" }}>Manage inventry</h6>
                <p>Current Stock : {data.stockquantity}</p>
                <div class="mb-3" style={{ display: "flex", alignItems: "center" }}>
                  <label for="" class="form-label">
                    Add Quantity :
                  </label>
                  <input
                    style={{
                      width: "50%",
                      marginLeft: "5px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                    type="text"
                    class="form-control"
                    name="stockquantity"
                    onChange={inputchange}
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <span style={{ color: "red" }}>{formerrors.stockquantity}</span>
                  <button
                    onClick={submit}
                    type="button"
                    class="btn btn-primary"
                    style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
