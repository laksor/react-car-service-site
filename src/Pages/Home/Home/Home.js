import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Features from "../Features/Features";
import Services from "../Services/Services";
import './Home.css';

const Home = () => {
  return (
    <>
    <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <Experts></Experts>
      </>
  );
};

export default Home;
