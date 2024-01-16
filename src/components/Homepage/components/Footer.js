import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandshake,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const iconSize = "1x";
  return (
    <div className="main-footer-div">
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="title">NepaLifeCare</h3>
              <h2 className="text">
                121 King Street, Melbourne Victoria 3000 Australia
              </h2>
              <ul className="location">
                <li>
                  {" "}
                  <div className="icon-div">
                    <FontAwesomeIcon icon={faEnvelope} size={iconSize} />{" "}
                    Nepalifecare@gmail.com
                  </div>
                </li>
                <li>
                  <div className="icon-div">
                    <FontAwesomeIcon icon={faPhone} size={iconSize} /> +977
                    9827227272
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h3 className="colom-2">Opening Hours</h3>
              <h2 className="timing">
                Monday to Saturday: 10AM - 8PM <br />
                Sunday: Closed
              </h2>
              <div className="social-section">
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter-square"></i>
              </div>
            </div>

            <div className="col-md-3">
              <h3 className="link-title">Links</h3>
              <ul className="Menu-lists">
                <li>Home</li>
                <li>Programs</li>
                <li>About Us</li>
                <li>Contact Page</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="updated">Stay Updated</h3>
              <input
                className="email-form"
                type="text"
                placeholder="Email Address"
              />
              <br />
              <button className="submit-butan">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
