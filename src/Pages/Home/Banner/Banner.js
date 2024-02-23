import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Say Goodbye to Oil Change Stress</h3>
          <p>
          Tired of squeezing oil changes into your busy schedule? Say goodbye to the stress and hello to convenience with Moms Mobile Oil Change.
          </p>
          <a href="/experts"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="/#email"><button className="btn btn-warning rounded-pill">Get Discount</button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Don't let a busy schedule keep you from proper car care!</h3>
          <p>
              Imagine never having to wait in line for an oil change again.
          </p>
          <a href="/service"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="home#email"><button className="btn btn-warning rounded-pill">Get Discount</button></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-itemm">
        <img className="d-block w-100 h" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Enjoy more time for yourself while we take care of your car.</h3>
          <p>
              You can be sure that your car will be handled with the latest
            diagnostic equipment.
          </p>
          <a href="/services"><button className="btn btn-danger rounded-pill m-2">Our Services</button></a>
          <a href="home#email"><button className="btn btn-warning rounded-pill">Get Discount</button></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
