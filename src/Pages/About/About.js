import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import GoogleMap from "./GoogleMap/GoogleMap";
import experts1 from "../../images/experts/expert-1.jpg";
import "./About.css";
import E from "../Home/E/E";
import Features from "../Home/Features/Features";

const About = () => {
  return (
    <div>
      <h1 className="about-h1">About Us</h1>
      <div className="d-flex container">
        <PageTitle title="About"></PageTitle>
        <div className="p-5">
          <GoogleMap></GoogleMap>
        </div>
        <div className="p-5">
          <img src={experts1} alt="mama"></img>
          <p className="mt-3">
            Welcome to Moms Mobile Oil Change, where our mission is to revolutionize the oil change industry. Since our establishment in 2013, we've been dedicated to making the oil change experience as convenient and enjoyable as possible for our customers. At Moms Mobile Oil Change, we live 
          </p>
        </div>
      </div>
      <Features></Features>
      <E></E>
    </div>
  );
};

export default About;
