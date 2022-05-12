import { Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
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

  const navigateSignup = event =>{
    navigate(`/signup`);
  }

  return (
    <div className="container w-50">
      <h2 className="mt-5 text-primary fw-bold text-center">Login</h2>
      <Form
        className="py-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">New to Car service ? <span style={{cursor:'pointer'}} className="text-decoration-underline text-danger" onClick={navigateSignup}>Please Signup</span></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
