import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="g-5 gx-5 col-sm-12 col-md-6 col-lg-4 text-center">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {description}
          </p>
          <p class="card-text">
            Price: {price}
          </p>
          <a href="#" class="btn btn-primary">
            Book {name}
          </a>
        </div>
      </div>
    </div>

  );
};

export default Service;
