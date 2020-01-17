import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/images/home.png";
import basketImg from "../assets/images/basket.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={homeImg} />
      </Link>
      <Link to="/basket">
        <img src={basketImg} />
      </Link>
    </div>
  );
};

export default Navbar;
