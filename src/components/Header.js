import React from "react";
import { Link } from "react-router-dom";
import BasketCount from "./BasketCount";

const Header = ({ basketCount, ...props }) => {
  return (
    <div id="header">
      <h1>Media Store</h1>
      <div id="breadcrumb">
        <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
        <Link to="/basket" id="basketlink">
          Basket: <BasketCount basketCount={basketCount} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
