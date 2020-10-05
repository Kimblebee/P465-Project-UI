import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import SignupButton from './signup-button';



const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/about-us"
      exact
      activeClassName="router-link-exact-active"
    >
      About Us
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/contact-us"
      exact
      activeClassName="router-link-exact-active"
    >
      Contact Us
    </Nav.Link>   
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } =useAuth0();

  return (
    <Nav className='nav navbar-nav navbar-right'>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
      <SignupButton/>      
    </Nav>
    
  )
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
