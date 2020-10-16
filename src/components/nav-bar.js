import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import SignupButton from './signup-button';
import "../index.css"
import SearchBox from "./Search/search-box.js";


const url = "http://www.omdbapi.com/?apikey=c906bfc3"


const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/home"
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
    <SearchBox placeholder ="Enter movie name..." 
        handleChange = {
          (e) => {
            if (e.key==='Enter'){
              const newUrl = url +'&s=' + e.target.value
              fetch(newUrl)
              .then((res) => res.json())
              .then((data) =>{
                const results = data.Search
                console.log("Data", results)
              })
              .catch((error) => {
                console.log("Error",error)
              })
            }    
        }
        }/>   
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } =useAuth0();

  return (
    <Nav className='nav navbar-nav navbar-right '>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
      {isAuthenticated ? <p> </p>: <SignupButton/>}      
    </Nav>
    
  )
};

const NavBar = () => {
  return (
    <Navbar bg="light"  expand="md" >
      <Container>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
