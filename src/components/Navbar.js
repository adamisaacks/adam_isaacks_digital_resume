import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";

function Navi() {
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Link to="/" className="nav-link d-block d-sm-none">
          <b>Home</b>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center font-weight-bold"
        >
          <a href="#top" className="nav-link d-none d-md-block">
            Home
          </a>
          <a className="nav-link" href="#development">
            Development
          </a>
          <a className="nav-link" href="#engineering">
            Experience
          </a>
          <a className="nav-link" href="#education">
            Education
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;
