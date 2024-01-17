import React from "react";
import "./upcommingprog.css";
import upcommingevent1 from "../../../media/upcomingevent1.jpg";
import coachingtexts from "../../Cgpage/components/Cgpage.json";
import youthcoaching from "../../../media/youthcoaching.png";
import womencoaching from "../../../media/womencoaching.jpg";
import singleparent from "../../../media/singleparent.avif";
const upcommingprog = () => {
  return (
    <div className="upcomming-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="upcomming-header text-center">
              <span className="upcomming-small-text ">
                Creative & Motivational Programs
              </span>
              <h2 className="upcomming-title">Upcoming Events</h2>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <h2>30</h2>
                  <span>Dec</span>
                </div>

                <img className="img-div" src={youthcoaching} />
              </div>
              <div className="internal-contents">
                <p className="overview-title">Awareness Program</p>
                <div className="overview-content-section">
                  <span className="featured-text">
                    Join us on December 30th for a transformative day of
                    awareness and enlightenment! Our carefully curated awareness
                    programs aim to inspire, educate.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <h2>30</h2>
                  <span>Nov</span>
                </div>

                <img className="img-div" src={singleparent} />
              </div>
              <div className="internal-contents">
                <p className="overview-title">Free Health Checkup</p>
                <div className="overview-content-section">
                  <span className="featured-text">
                    Embark on a journey towards a healthier you! We are excited
                    to invite you to a day of wellness and self-care with our
                    Free Health Checkup event on December 30th.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <h2>30</h2>
                  <span>Sept</span>
                </div>

                <img className="img-div" src={womencoaching} />
              </div>
              <div className="internal-contents">
                <p className="overview-title">Charity Football Game</p>
                <div className="overview-content-section">
                  <span className="featured-text">
                    Get ready to kick off compassion on December 30th as we host
                    a Charity Football Game that promises to unite communities
                    through the spirit of giving!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <h2>30</h2>
                  <span>Sept</span>
                </div>

                <img className="img-div" src={womencoaching} />
              </div>
              <div className="internal-contents">
                <p className="overview-title">Charity Football Game</p>
                <div className="overview-content-section">
                  <span className="featured-text">
                    Get ready to kick off compassion on December 30th as we host
                    a Charity Football Game that promises to unite communities
                    through the spirit of giving!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="overview-content">
              <div className="img-div">
                <div className="title-box">
                  <h2>30</h2>
                  <span>Sept</span>
                </div>

                <img className="img-div" src={womencoaching} />
              </div>
              <div className="internal-contents">
                <p className="overview-title">Charity Football Game</p>
                <div className="overview-content-section">
                  <span className="featured-text">
                    Get ready to kick off compassion on December 30th as we host
                    a Charity Football Game that promises to unite communities
                    through the spirit of giving!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default upcommingprog;
