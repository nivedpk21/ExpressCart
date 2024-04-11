import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

export default function Cart() {
  const [data, setData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(token);

    axios
      .get("http://localhost:4000/user/viewcart", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        console.log("aggg response", response);
        const data = response.data.data;
        setData(data);
        calculate(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculate = (item) => {
    let total = 0;
    item.forEach((item) => {
      total += item.quantity * item.price; //+ item.quantity * item.shipping
    });
    setSubtotal(total);
    calculateGst(total);
  };

  const calculateGst = (subtotal) => {
    const calculate = (subtotal / 100) * 18;
    setGst(calculate);
  };

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: "100%" }}>
        <div class="row justify-content-center align-items-center g-0">
          <div class="col col-lg-8 p-5">
            <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
              <div className="border-bottom " style={{ padding: "15px" }}>
                <h5>My Cart</h5>
              </div>
              <div style={{ marginTop: "25px" }}>
                {data.map((item) => (
                  <div className="border" style={{ height: "150px" }}>
                    <div style={{ display: "flex", padding: "5px", flexWrap: "wrap" }}>
                      <div
                        className=" "
                        style={{
                          width: "25%",
                          height: "140px",
                          padding: "5px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ width: "100%", height: "130px", backgroundColor: "grey" }}>
                          <p>image</p>
                        </div>
                      </div>
                      <div className=" " style={{ width: "35%", height: "140px" }}>
                        <div style={{ padding: "10px" }}>
                          <h6>{item.productname}</h6>
                          <p>{item.quantity}</p>
                        </div>
                      </div>
                      <div className=" " style={{ width: "20%", height: "140px" }}>
                        <div style={{ padding: "10px", textAlign: "center" }}>
                          <h6>Price</h6>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      <div className="border-left" style={{ width: "20%", height: "140px" }}>
                        <div style={{ padding: "10px", textAlign: "center" }}>
                          <h6>Total</h6>
                          <p>{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col col-lg-4 p-5">
            <div className="container-fluid" style={{ height: "550px", backgroundColor: "white" }}>
              <div className="border-bottom " style={{ padding: "15px", textAlign: "center" }}>
                <h5>Summary</h5>
              </div>
              <div>
                <p>Sub Total :{subtotal}</p>
                {/* <p>Shipping : 50</p> */}
                <p>GST (18%): {gst}</p>
              </div>
              <div>
                <h6>Grand Total :{subtotal + gst}</h6>
              </div>
              <div>
                <a href="/payment">
                  <button type="button" class="btn btn-primary">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
