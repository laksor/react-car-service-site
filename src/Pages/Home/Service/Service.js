import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="">
      <img src={img} alt='kaj'></img>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p><small>{description}</small></p>
      <button>Book</button>
      
    </div>
  );
};

export default Service;
