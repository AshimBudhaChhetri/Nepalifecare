import React from "react";
import "./Sociallinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Sociallinks = () => {
  const iconSize = "3x";

  return (
    <div className="sociallink-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sociallink-header text-center">
              <h2 className="sociallink-title">Our Social Media Profiles</h2>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <div className="logo-social">
              <FontAwesomeIcon
                icon={faFacebook}
                size={iconSize}
                className="logoo-social"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size={iconSize}
                className="logoo-social"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                size={iconSize}
                className="logoo-social"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                size={iconSize}
                className="logoo-social"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sociallinks;
