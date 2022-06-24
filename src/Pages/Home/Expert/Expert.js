import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-5 gx-5 mb-5 col-sm-12 col-md-6 col-lg-4 text-center">
      <div className="card  mx-auto" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expert;