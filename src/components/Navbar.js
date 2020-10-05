import React from "react";
import { Link } from "react-router-dom";

import Home from "../Pages/Home";
import Error from "../Pages/Error";
import SignUp from "../Pages/SignUp";
import SignInSide from "../Pages/SignInSide";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/sign-in">Sign in </Link>
      <Link to="/sign-up">Sign Up </Link>
    </div>
  );
}

export default Navbar;
