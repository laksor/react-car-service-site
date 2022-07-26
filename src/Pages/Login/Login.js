import { Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin/SocialLogin";
import Loading from "../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/PageTitle/PageTitle";
import useToken from "../hooks/useToken";

const Login = () => {
  
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    let errorElement;

    if (error) {
     
      errorElement = <p className="text-danger mt-2">Error: {error.message}</p>
    }

  if (token) {
    navigate(from, { replace: true });
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    await signInWithEmailAndPassword(email, pass);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
  };

  if(loading || sending){
    return <Loading></Loading>
  }

  const navigateSignup = (event) => {
    navigate(`/signup`);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast('Email sented');
    }
    else{
      toast('Please enter your email address');
    }
  }

  return (
    <div className="container py-3 w-50">
    <PageTitle title="Login"></PageTitle>
      <h2 className="mt-5 text-primary fw-bold text-center">Log In</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p onClick={resetPassword} style={{ cursor: "pointer" }} className="text-decoration-underline text-danger">
        Forgot Password ?{" "}
      </p>
       
        <Button className="btn btn-primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      
      <p className="text-center">
        New to Car service ?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-decoration-underline text-danger"
          onClick={navigateSignup}
        >
          Please Signup
        </span>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
