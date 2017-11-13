import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home = () => (
  <div className="home">
    <h1> welcome to mars!</h1>

    <Link to="/register">
      <div className="enter_button" />
    </Link>

    <h2> Check In Now </h2>
  </div>
);

export default Home;
