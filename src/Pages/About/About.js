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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <Features></Features>
      <E></E>
    </div>
  );
};

export default About;
