import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending] =
    useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div className="text-center mt-5 p-5">
        <h3 className="text-danger">Your email is not verified</h3>
        <h3 className="text-success">Please verify your email address</h3>
        <button
          className="btn btn-danger mt-3"
          onClick={async () => {
            await sendEmailVerification();
            toast("email sented");
          }}
        >
          Verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
