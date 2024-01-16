import React from "react";
import "./Socialintro.css";
import socialintro from "../../../media/socialintro.jpg";
import socialtexts from "./Socialtexts.json";

const Socialintro = () => {
  return (
    <div className="socialintro-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="socialintro-header text-center">
              <span className="socialintro-small-text ">
                Combating Loneliness
              </span>
              <h2 className="socialintro-title">Our Social Buddy Program</h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-socialintro ">
              <img src={socialintro} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="socialintro-contents text-left">
              {socialtexts.socialtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialintro;
