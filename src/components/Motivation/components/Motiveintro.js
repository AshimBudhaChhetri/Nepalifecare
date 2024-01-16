import React from "react";
import "./Motiveintro.css";
import socialintro from "../../../media/socialintro.jpg";

const Motiveintro = () => {
  return (
    <div className="motiveintro-main-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="motiveintro-header text-center">
              <span className="motiveintro-small-text ">
                Engagement Initiatives
              </span>
              <h2 className="motiveintro-title">
                Description Of Creative And Motivational Programs
              </h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-motiveintro ">
              <img src={socialintro} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="motiveintro-contents text-left">
              Creative and motivational programs are initiatives or activities
              designed to inspire and encourage individuals, teams, or
              communities by fostering creativity, positivity, and personal or
              professional development. These programs often aim to stimulate
              innovation, boost morale, and enhance overall well-being. These
              programs focus on nurturing creativity and innovation within
              individuals or teams. Workshops may include brainstorming
              sessions, design thinking exercises, and collaborative activities
              aimed at finding novel solutions to challenges. Inviting
              motivational speakers to share their experiences, insights, and
              motivational stories can inspire and energize participants. These
              speakers may come from various backgrounds, such as business,
              sports, entertainment, or personal development. Recognizing and
              rewarding employees for their achievements and contributions can
              boost morale and motivation. This may include awards,
              certificates, or other forms of acknowledgment to celebrate
              individual and team accomplishments. Providing training sessions
              and workshops that focus on personal and professional development
              can be highly motivational.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motiveintro;
