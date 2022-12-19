import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth);
  };
  const handleNavigateC = () =>{
    navigate(`/contact`);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
        className="p-4 shadow"

      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="service">Services</Nav.Link>
              <Nav.Link as={Link} to="experts">Experts</Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
             
              {user && (
                <>
                  <Nav.Link as={Link} to="addservice">
                    Add Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageservice">
                    Manage Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="orders">
                    Orders
                  </Nav.Link>
                </>
              )}
              {user ? (
                <> 
                <Button onClick={handleSignout} className="btn btn-danger rounded-pill">
                  Sign out
                </Button></>
                
                
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
                
              )}
              {!user && (<button className="btn btn-new rounded-pill mx-3" onClick={handleNavigateC}>Let's Talk</button>)}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
