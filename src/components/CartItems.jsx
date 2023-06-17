import React from "react";

const CartItems = (props) => {
  const removeFromCart = () => {
    // dont use props coz props is a variable copy of local storage
    // fetching item from local storage using key 'cartItems'
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let i = 999;
    for (let x of cartItems) {
      if (x.id == props.item.id) {
        console.log(`xid = ${x.id} and props.item.id = ${props.item.id}`)
        // fixme this assigns the object instead of the index
        i = cartItems.find(item=> item == x)
        console.log(`x= ${x} and i=${i}`)
      }
    }
    if ((i = 999)) {
      alert("item not in cart");
    } else {
      cartItems.pop(i);
      localStorage.setItem("updatedCart", cartItems);
    }
  };
  return (
    <>
      <div className="row bg-body-secondary d-flex align-items-center p-2 shadow-sm mt-3 mb-3 rounded-2">
        <div className="col-1">
          <p>{props.item.id}</p>
        </div>
        <div className="col-2">
          <img
            style={{ height: "100px" }}
            src={props.item.image}
            alt={props.item.title}
          />
        </div>
        <div className="col-5">
          <p className="fs-5">{props.item.title}</p>
        </div>
        <div className="col-2">
          <p>Rs {props.item.price}</p>
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={removeFromCart}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
