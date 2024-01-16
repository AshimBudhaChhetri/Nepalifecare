import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import logomain from "../../../media/logoo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-div-nav">
      <div
        className={`nav-bar-section ${scrolled ? "scrolled" : ""} fixed-top`}
      >
        <Navbar expand="lg">
          <div className="container">
            <div className="logo-div">
              <img src={logomain} alt="" />
            </div>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="ms-auto">
                <Nav.Link href="#" className="nav-link active">
                  <Link
                    className="navlink"
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <NavDropdown
                  className="navlink"
                  title="Programs"
                  id="basic-nav-dropdown"
                >
                  {/* Dropdown items */}
                  <NavDropdown.Item href="#">
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/Cgpage"
                    >
                      Conselling & Guidance
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#">
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/Socialpage"
                    >
                      Social Buddy
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/Motivationpage"
                    >
                      Motivation
                    </Link>
                  </NavDropdown.Item>
                  {/* Add other dropdown items as needed */}
                </NavDropdown>
                <Nav.Link href="#" className="nav-link">
                  <Link
                    className="navlink"
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/Aboutpage"
                  >
                    About Us
                  </Link>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <Link
                    className="navlink"
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/Involvedpage"
                  >
                    Get Involved
                  </Link>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <button>
                    <Link
                      className="navlink"
                      style={{ color: "inherit", textDecoration: "none" }}
                      to="/Contactpage"
                    >
                      Contact Us
                    </Link>
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
