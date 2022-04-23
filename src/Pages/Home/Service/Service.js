import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div>
      <img src={img} alt='kaj'></img>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Service;
