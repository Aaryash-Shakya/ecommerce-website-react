import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="container-fluid py-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card">
            <img src="/img/1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Link to='#' className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>  
        <div className="col">
          <div className="card">
            <img src="/img/2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Link to='#' className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/img/3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Link to='#' className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/img/1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Link to='#' className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
