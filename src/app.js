import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { Link, Route, Switch } from "react-router-dom";
import { AppContext } from "./libs/contextLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [authenticatedUser, setUser] = useState("");

  // logs the user out
  function handleLogout() {
    // set authentication to false
    userHasAuthenticated(false);

    //TODO get rid of stored user info
    alert("user is logged out");
  }

  return (
    <main>
      <div>
        <div>
          {isAuthenticated ? (
            <div>
              <Link to="/">Home </Link>

              <Link to="#" onClick={() => handleLogout()}>
                Log out
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/">Home </Link>

              <Link to="/login">Log In </Link>
              <Link to="/signup">Sign Up </Link>
            </div>
          )}
        </div>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />

            <Route component={Error} />
          </Switch>
        </AppContext.Provider>
      </div>
    </main>
  );
}

export default App;
