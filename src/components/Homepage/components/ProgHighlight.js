import React from "react";
import "./ProgHighlight.css";
import { Link } from "react-router-dom";

import counsellingpic from "../../../media/counseling.jpg";
import coachingpic from "../../../media/coachingpic.jpg";
import socialpic from "../../../media/socialbuddy.jpg";
import motivationalpic from "../../../media/motivational.jpg";
import featuredtexts from "./homepage.json";
const ProgHighlight = () => {
  return (
    <div className="main-div-programs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="programs-header text-center">
              <span className="programs-title">We Love to Help Poor</span>
              <h2 className="programs-text">Our Featured Programs</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="programs-content">
              <div className="img-div">
                <div className="title-box">
                  <span>Counselling</span>
                </div>

                <img className="img-div" src={counsellingpic} />
              </div>
              <p className="featured-title">{featuredtexts.counsellingtitle}</p>
              <div className="content-section">
                <span className="featured-text">
                  {featuredtexts.counsellingtext}
                </span>
              </div>
              <button className="learn-more-but">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/Cgpage"
                >
                  <span>Learn More</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="programs-content">
              <div className="img-div">
                <div className="title-box-g">
                  <span>Coaching</span>
                </div>
                <img className="img-div" src={coachingpic} />
              </div>
              <p className="featured-title">{featuredtexts.coachingtitle}</p>
              <div className="content-section">
                <span className="featured-text">
                  {featuredtexts.coachingtext}
                </span>
              </div>
              <button className="learn-more-but">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/Cgpage"
                >
                  <span>Learn More</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="programs-content">
              <div className="img-div">
                <div className="title-box">
                  <span>Social buddy</span>
                </div>
                <img className="img-div" src={socialpic} />
              </div>
              <p className="featured-title">{featuredtexts.socialtitle}</p>
              <div className="content-section">
                <span className="featured-text">
                  {featuredtexts.socialtext}
                </span>
              </div>
              <button className="learn-more-but">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/Socialpage"
                >
                  <span>Learn More</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="col-md-3">
            <div className="programs-content">
              <div className="img-div">
                <div className="title-box-g">
                  <span>Motivation</span>
                </div>
                <img className="img-div" src={motivationalpic} />
              </div>
              <p className="featured-title">{featuredtexts.motivationtitle}</p>
              <div className="content-section">
                <span className="featured-text">
                  {featuredtexts.motivationtext}
                </span>
              </div>
              <button className="learn-more-but">
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/Motivationpage"
                >
                  <span>Learn More</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgHighlight;
