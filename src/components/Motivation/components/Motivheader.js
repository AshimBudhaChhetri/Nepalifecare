import React from "react";
import "./Motiveheader.css";
const Motivheader = () => {
  return (
    <div className="Motivheader-main text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="Motivheadercontents">
              <h2 className="Motivheader-title">Motivation Program Page</h2>
              <button className="Motivheader-sub">
                <span>Our Featured Programs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivheader;
