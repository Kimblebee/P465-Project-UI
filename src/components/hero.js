import React from "react";
import logo from "../assets/logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="TicketFaster logo" width="120" />
    <h1 className="mb-4">Ticket Faster</h1>

    <p className="lead">
      A one-stop-shop to book tickets for all you favourite movies. 
    </p>
  </div>
);

export default Hero;
