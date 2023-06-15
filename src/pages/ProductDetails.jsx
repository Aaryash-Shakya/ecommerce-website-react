import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const{image,title,description,price,category} = product
    useEffect(() => {
        const id = params.product_id;
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);
    return(
        <>
        <div className="container my-5">
            <div className="row d-flex justify-content-evenly align-items-center">
                <div className="col-md-5">
                    <img src={image} alt={title} />
                </div>
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <h2>Rs {price}</h2>
                    <h3>Category: {category}</h3>
                    <p>{description}</p>
                    <div className="my-2">
                        <Link to="#" className="btn btn-warning">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ProductDetails;
