import React from "react";
import { Button } from "react-bootstrap";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <div className="px-3">OR</div>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="mt-4">
        <Button className="btn btn-info w-50 d-block  mx-auto">
          <img src={google} alt="" />
          <span className="px-2">Google Sign in</span>
        </Button>
      </div>

      <div className="mt-3">
        <Button className="btn btn-info w-50 d-block  mx-auto">
          <img src={github} alt="" />
          <span className="px-2">Github Sign in</span>
        </Button>
      </div>

      <div className="mt-3">
        <Button className="btn btn-info w-50 d-block  mx-auto">
          <img src={facebook} alt="" />
          <span className="px-2">Facebook Sign in</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
