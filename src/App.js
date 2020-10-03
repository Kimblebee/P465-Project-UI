import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignInSide from "./Pages/SignInSide";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SignInSide} />
        <Route path="/sign-up" component={SignUp} />

        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
