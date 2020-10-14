import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile, AboutUs, ContactUs, ManDashboard, ViewData } from "./views";
import AddSnack from "./views/manager/addSnack";
import RemoveSnack from "./views/manager/removeSnack";
import AddShowing from "./views/manager/addShowing";
import RemoveShowing from "./views/manager/removeShowing";
import EditTheater from "./views/manager/editTheaterInfo";
import "./app.css";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/manager/dashboard" exact component={ManDashboard} />
          <Route path="/manager/addSnack" exact component={AddSnack} />
          <Route path="/manager/removeSnack" exact component={RemoveSnack} />
          <Route path="/manager/addShwoing" exact component={AddShowing} />
          <Route path="/manager/removeShowing" exact component={RemoveShowing} />
          <Route path="/manager/editTheaterInfo" exact component={EditTheater} />
          <Route path="/manager/viewData" exact component={ViewData} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;