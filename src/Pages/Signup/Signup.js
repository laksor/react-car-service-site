import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import './Signup.css';
import useToken from "../hooks/useToken";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const [token] = useToken(user);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/login");

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const navigateLogin = (event) => {
    navigate("/login");
  };

  
  if(loading || updating){
    return <Loading></Loading>
  }

  if (token) {
    navigate('/login');
  }

  return (
    <div>
    <PageTitle title="Signup"></PageTitle>
    <h2 className="signup-h1">Sign up</h2>
    <div className="container py-5 w-50">
   
    <Form
      className=""
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          onClick={() => setAgree(!agree)}
          type="checkbox"
          label="Accept terms and condition"
        />
      </Form.Group>
      <Button className="btn btn-primary" type="submit" disabled={!agree}>
        Signup
      </Button>
    </Form>

    <p className="text-center">
      Already have an account ?{" "}
      <span
        style={{ cursor: "pointer" }}
        className="text-decoration-underline text-danger"
        onClick={navigateLogin}
      >
        Please Login
      </span>
    </p>
    <SocialLogin></SocialLogin>
  </div>
    </div>
   
  );
};

export default Signup;
