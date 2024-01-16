import React from "react";
import "./Contactform.css";
const Contactform = () => {
  return (
    <div className="Social-team-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="Social-team-header text-center">
              <h2 className="Social-team-title">Have Any Questions?? </h2>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="input-boxes">
              <input className="enput" placeholder="Your Name *" /> <br />
              <input className="enput" placeholder="Your Phone *" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-boxes">
              <input className="enput" placeholder="Your Email *" /> <br />
              <input className="enput" placeholder="Subject *" />
            </div>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-12">
            <div className="input-message">
              <input placeholder="Write Your Message *" />
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button className="contact-button-form">
              <span className="button-form">Get In Touch</span>
            </button>
          </div>
          <div className="col-md-12">
            <div className="maps">
              <div>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lalitpur,%20kathmandu+(Nepalifecare)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">
                    Population Estimator map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
