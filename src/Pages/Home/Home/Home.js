import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Clients from "../Clients/Clients";
import Cta from "../Cta/Cta";
import E from "../E/E";
import Video from "../Video/Video";
import Features from "../Features/Features";
import Services from "../Services/Services";

import './Home.css';

const Home = () => {
  return (
    <>
    <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Features></Features>
      <Clients></Clients>
      <E></E>
      <Cta></Cta>
      <Video></Video>
      <Blogs></Blogs>
      
      </>
  );
};

export default Home;
