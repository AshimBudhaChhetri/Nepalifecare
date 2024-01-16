import React from "react";
import "./About.css";
import aboutimg from "../../../media/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import abouttexts from "../../../components/Homepage/components/homepage.json";

const About = () => {
  return (
    <div className="main-about-div">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="about-image">
              <img src={aboutimg} alt="About" />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="about-content">
              <h3 className="about-title">About Us</h3>
              <h2 className="about-text">{abouttexts.abouttitle}</h2>
              <p className="about-message-1">{abouttexts.aboutmessage1}</p>
              <p className="about-message-2">{abouttexts.aboutmessage2}</p>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#ef5f34", paddingRight: "20px" }}
                  />
                  {abouttexts.aboutpoint1}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#ef5f34", paddingRight: "20px" }}
                  />
                  {abouttexts.aboutpoint2}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#ef5f34", paddingRight: "20px" }}
                  />
                  {abouttexts.aboutpoint3}
                </li>
              </ul>
              <button className="about-button">
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
