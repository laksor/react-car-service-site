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
                <h4 className="items-title">Trained Technicians</h4>
                <p className="text">
                  We use the latest diagnostic equipment to guarantee your
                  vehicle is serviced correctly.
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
                <h4 className="items-title">Efficiency & Speed</h4>
                <p className="text">
                  The car doctor is your best source for professional, reliable,
                  and efficient auto repair service.
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
                <h4 className="items-title">We Have the Technology</h4>
                <p className="text">
                  You can be sure that your car will be handled with the latest
                  diagnostic equipment.
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
