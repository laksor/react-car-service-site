import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="service">
      <img src={img} alt='kaj'></img>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p><small>{description}</small></p>
      <button>Book {name}</button>
    </div>
  );
};

export default Service;
