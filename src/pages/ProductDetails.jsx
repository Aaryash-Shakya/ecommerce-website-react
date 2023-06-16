import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { image, title, description, price, category } = product;
  useEffect(() => {
    const id = params.product_id;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  // handling addToCart function
  const addToCart = () => {
    // fetching item from local storage using key 'cartItems'
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
      quantity: 1
    };
    // check if item is present in the cart or not
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      toast.error("Product Already in the cart");
      // toast.error('Product Already in the cart', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      // });
    } else {
      cartItems.push(productItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      toast.success(`${productItem.title} added Successfully`);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-right"/>
      <div className="container my-5">
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-5">
            <img src={image} alt={title} width={"500px"} />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <h2>Rs {price}</h2>
            <h3>Category: {category}</h3>
            <p>{description}</p>
            <div className="my-2">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
