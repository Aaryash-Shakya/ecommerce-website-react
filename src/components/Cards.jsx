import React from "react";
import { Link } from "react-router-dom";

//  note to pass data from parent component to child componenet use props
const Cards = (props) => {
  // const title = props.item.title
  // const price = props.item.price
  // note object destructuring
  const{title,image,price,id}=props.item
  // ! hw
  // const productDetails = () =>{
  //   props.item.map((props.item)=>{

  //   })
  // }

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">Rs {price}</h5>
          <Link to="#" className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
