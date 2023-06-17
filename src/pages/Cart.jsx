import React from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
  // fetching item from local storage using key 'cartItems'
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // map cart items
  const cartMapping = () =>
    cartItems.map((item, index) => <CartItems item={item} index={index} />);

  const calculateTotal = () => {
    // calculate total
    let total = 0;
    for (let x of cartItems) {
      total += x.price;
    }
    // assign total
    console.log(total);
    const totalAmount = document.getElementById("totalAmount")

    
    // fixme uncomment after page loads and it works
    // document.getElementById("totalAmount").innerText = total
    // totalAmount.innerText = total
  };
  return (
    <>
      <div className="container-md">
        <div className="row shadow-sm mt-3 mb-3">
          <div className="col-1">
            <p>ID</p>
          </div>
          <div className="col-2">
            <p>Image</p>
          </div>
          <div className="col-5">
            <p>Name</p>
          </div>
          <div className="col-2">
            <p>Price</p>
          </div>
        </div>
        {cartMapping()}
        <div className="row grand-total shadow-sm mt-3 mb-3">
          <div className="col-8">
            <p className="text-center">Grand Total</p>
          </div>
          <div className="col-2">
            <p>
              Rs <span id="totalAmount">...</span>
            </p>
          </div>
        </div>
      </div>
      {calculateTotal()}
    </>
  );
};

export default Cart;
