import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <h1 className="service-h1">Service Details</h1>
      <PageTitle title="service details"></PageTitle>
      <div className="card mx-auto mb-5" style={{ width: "40rem" }}>
        <img className="card-img-top" src={service.img}></img>
        <div className="card-body text-center">
          <h3 className="card-title">{service.name}</h3>

          <p className="card-text">{service.description}</p>
          <p>Price : {service.price}</p>
          <Link to={`/checkout/${serviceId}`}>
            <Button className="btn btn-primary">Process checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
