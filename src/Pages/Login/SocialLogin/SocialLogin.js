import React from "react";
import { Button } from "react-bootstrap";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if(loading || loading1){
    return <Loading></Loading>
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true});
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <div className="px-3">OR</div>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="mt-4">
        <Button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block  mx-auto"
        >
          <img src={google} alt="" />
          <span className="px-2">Continue with Google</span>
        </Button>
      </div>

      <div className="mt-3">
        <Button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block  mx-auto"
        >
          <img src={github} alt="" />
          <span className="px-2">Continue with Github</span>
        </Button>
      </div>

      <div className="mt-3">
        <Button className="btn btn-info w-50 d-block  mx-auto">
          <img src={facebook} alt="" />
          <span className="px-2">Continue with Facebook</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
