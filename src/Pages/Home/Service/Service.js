import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            Price: {price}
          </p>
          <a href="#" className="btn btn-primary">
            Book {name}
          </a>
        </div>
      </div>
    </div>

  );
};

export default Service;
