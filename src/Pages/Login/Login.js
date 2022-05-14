import { Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;

    if (error) {
     
      errorElement = <p className="text-danger mt-2">Error: {error.message}</p>
    }

  if (user) {
    navigate(from, { replace: true });
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const navigateSignup = (event) => {
    navigate(`/signup`);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }

  return (
    <div className="container py-3 w-50">
      <h2 className="mt-5 text-primary fw-bold text-center">Login</h2>
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
    </div>
  );
};

export default Login;
