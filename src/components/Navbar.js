import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function Navi() {
  return (
    <>
      <Navbar expand="lg">
        <Link to="/" className="nav-link">
          AI
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center justify-content-xs-center"
        >
          <Link className="nav-link" to="/About">
            About
          </Link>
          <Link className="nav-link" to="/Development">
            Development
          </Link>
          <Link className="nav-link" to="/Engineering">
            Engineering
          </Link>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;
