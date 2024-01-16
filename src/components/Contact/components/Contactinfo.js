import React from "react";
import "./Contactinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faLocationPinLock,
  faMailBulk,
  faMailForward,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contactinfo = () => {
  const iconSize = "2x";
  return (
    <div className="contact-info-div">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-infos text-center">
              <FontAwesomeIcon
                icon={faMapLocation}
                size={iconSize}
                className="icon-contact"
              />

              <h2 className="contact-title">Address</h2>
              <p className="contact-text">
                7 Green Lake Street CrawfordsVille <br /> Woolwich, England
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-infos text-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                size={iconSize}
                className="icon-contact"
              />
              <h2 className="contact-title">Email Us</h2>
              <p className="contact-text">
                Nepalifecare@gmail.com <br /> LifecareNepal@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="contact-infos">
              <FontAwesomeIcon
                icon={faPhone}
                size={iconSize}
                className="icon-contact"
              />
              <h2 className="contact-title">Call Now</h2>
              <p className="contact-text">
                {" "}
                +977 9869085555 <br /> +977 9838338383
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
