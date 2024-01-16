import React from "react";
import "./Guideheader.css";
import youthcoaching from "../../../media/youthcoaching.png";
import womencoaching from "../../../media/womencoaching.jpg";
import singleparent from "../../../media/singleparent.avif";
import coachingtexts from "./Cgpage.json";
const Guideheader = () => {
  return (
    <div className="guide-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="guide-header text-center">
              <span className="guide-small-text ">What we Do</span>
              <h2 className="guide-title">Overview Of Our Coaching Programs</h2>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <span>For Youth</span>
                </div>

                <img className="img-div" src={youthcoaching} />
              </div>
              <p className="overview-title">{coachingtexts.youthtitle}</p>
              <div className="overview-content-section">
                <span className="featured-text">{coachingtexts.youthtext}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box-g">
                  <span>For Women</span>
                </div>

                <img className="img-div" src={womencoaching} />
              </div>
              <p className="overview-title">{coachingtexts.womentitle}</p>
              <div className="overview-content-section">
                <span className="featured-text">{coachingtexts.womentext}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <span>Single Parent</span>
                </div>

                <img className="img-div" src={singleparent} />
              </div>
              <p className="overview-title">{coachingtexts.singletitle}</p>
              <div className="overview-content-section">
                <span className="featured-text">
                  {coachingtexts.singletext}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guideheader;
