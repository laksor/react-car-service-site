import React from "react";
import sleep from "../../../images/sleep.jpg";
import PageTitle from "../PageTitle/PageTitle";
const NotFound = () => {
  return (
    <div>
    <PageTitle title="404"></PageTitle>
      <h1 className="text-center text-primary mt-5 mb-5"> 404 Not found</h1>
      <img className="img-fluid d-block mx-auto w-50 rounded" src={sleep} alt="404" />
    </div>
  );
};

export default NotFound;
