import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="about-area about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-title text-center">
              <h2 className="title fw-bold">Why Choose Us</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-bullhorn"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title">Exceptional Customer Service</h4>
                <p className="text">
                We strive to provide a positive and stress-free experience for every customer,
                leaving you confident in your choice to trust us with your vehicle.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-investment"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title">Efficiency & Percision</h4>
                <p className="text">
                From routine maintenance to complex repairs, our team works diligently to get the job done right the first time, 
                ensuring your vehicle is back on the road safely and swiftly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-handshake"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title">Transparent Communication</h4>
                <p className="text">
                We believe in building trust with our customers through transparent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
