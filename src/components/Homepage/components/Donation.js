import React from "react";
import "./Donation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";

const Donation = () => {
  const iconSize = "2x";

  return (
    <div className="main-donation-div">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="donation-contents">
              <span>400+</span>
              <div className="icon-div">
                <FontAwesomeIcon icon={faHandshake} size={iconSize} />
              </div>
              <h2 className="name-donation"> Volunteers</h2>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="donation-contents">
              <span>400+</span>
              <div className="icon-div">
                <FontAwesomeIcon icon={faHandHoldingDollar} size={iconSize} />
              </div>
              <h2 className="name-donation"> Donations</h2>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="donation-contents">
              <span>400+</span>
              <div className="icon-div">
                <FontAwesomeIcon icon={faMoneyBill} size={iconSize} />
              </div>
              <h2 className="name-donation"> Fund Raised</h2>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="donation-contents">
              <span>400+</span>
              <div className="icon-div">
                <FontAwesomeIcon icon={faKitMedical} size={iconSize} />
              </div>
              <h2 className="name-donation"> Rescues</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
