import { Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    console.log(email, pass);

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
    <div>
      <h2 className="mt-5 text-primary fw-bold text-center">LogIn</h2>
      <Form
        className="container py-5 w-50"
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
    </div>
  );
};

export default Login;
