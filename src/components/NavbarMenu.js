import React from "react";
// import { FormControl, Navbar, Form, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <h3>Khorezm Food</h3>
        </li>

        <li style={{ float: "right" }}>
          <Link class="active" to="/cart">
            Cart
          </Link>
        </li>
        {/* <li style={{ float: "right" }}>
          <Link class="active" to="/news">
            News
          </Link>
        </li> */}
        <li style={{ float: "right" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/menu">Menu</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
