import React from "react";
import "./Counselservice.css";
import counselpic from "../../../media/counsel2.jpg";
import cgtexts from "./Cgpage.json";

const Counselservice = () => {
  return (
    <div className="counsel-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="counsel-header text-center">
              <span className="counsel-small-text ">What we Do</span>
              <h2 className="counsel-title">Our Counselling Services</h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-counsel ">
              <img src={counselpic} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="counsel-contents text-left">
              {cgtexts.counselheadertext}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselservice;
