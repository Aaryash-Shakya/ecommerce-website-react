import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    setProduct(cartData);
  });
  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly my-4">
          {products.length === 0 ? (
            <h2 className="text-center">Your Cart is Empty</h2>
          ) : (
            <>
              <h2 className="text-center">Your Cart Items</h2>
              <div className="col-md-8 shadow">
                <hr />
                {products.map((item, i) => (
                  <Fragment key={i}>
                    <div className="row d-flex align-items-center">
                      <div className="col-2">
                        <img src={item.image} alt={item.title} width={"100"} />
                      </div>
                      <div className="col-3">
                        <span>
                          <strong>{item.title}</strong>
                        </span>
                      </div>
                      <div className="col-3 text-warning">${item.price}</div>
                      <div className="col-2">{item.quantity}</div>
                      <div className="col-2">
                        <button className="btn btn-danger">delete</button>
                      </div>
                    </div>
                    <hr />
                  </Fragment>
                ))}
              </div>
              <div className="col-md-3">
                <div className="shadow p-2">
                  <h5>Cart Summary</h5>
                  <hr />
                  <span>
                    <strong>Units: </strong>
                    {products.reduce(
                      (total, item) => total + Number(item.quantity),
                      0
                    )}
                  </span>
                  <br/>
                  <span>
                    <strong>Total: </strong>
                    {
                      products.reduce(
                        (total, item)=> total + (Number(item.quantity) * Number(item.price)),0
                      )
                    }
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
