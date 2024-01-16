import React from "react";
import "./Succestory.css";
import counselperson1 from "../../../media/counselperson1.jpg";
import counselperson2 from "../../../media/counselperson2.jpg";
import counselperson3 from "../../../media/counselperson3.jpg";
import counselperson4 from "../../../media/counselperson4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import successtexts from "./Socialtexts.json";

const Succestory = () => {
  const isMobile = useMediaQuery({ maxWidth: 464 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="succestory-team-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="succestory-team-header text-center">
              <span className="succestory-team-small-text">
                Positive Impacts On The Mental Health
              </span>
              <h2 className="succestory-team-title">Success Stories</h2>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={
          isTablet || isMobile ? ["tablet", "mobile"] : []
        }
        deviceType={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="team-box-success">
          <div className="img-team-div2">
            <img src={counselperson1} />
          </div>
          <div className="content-sextion">
            <div className="content-info">
              {" "}
              <span className="team-bio2">{successtexts.successbio1}</span>
            </div>
            <h2 className="team-name2">{successtexts.successname1}</h2>
            <h4 className="team-expertise2">{successtexts.successdesig1}</h4>
          </div>
        </div>
        <div className="team-box-success">
          <div className="img-team-div2">
            <img src={counselperson2} />
          </div>
          <div className="content-sextion">
            <div className="content-info">
              {" "}
              <span className="team-bio2">{successtexts.successbio2}</span>
            </div>

            <h2 className="team-name2">{successtexts.successname2}</h2>
            <h4 className="team-expertise2">{successtexts.successdesig2}</h4>
          </div>
        </div>
        <div className="team-box-success">
          <div className="img-team-div2">
            <img src={counselperson3} />
          </div>
          <div className="content-sextion">
            <div className="content-info">
              {" "}
              <span className="team-bio2">{successtexts.successbio3}</span>
            </div>
            <div className="name-desig">
              <h2 className="team-name2">{successtexts.successname3}</h2>
              <h4 className="team-expertise2">{successtexts.successdesig3}</h4>
            </div>
          </div>
        </div>
        <div className="team-box-success">
          <div className="img-team-div2">
            <img src={counselperson4} />
          </div>
          <div className="content-sextion">
            <div className="content-info">
              <span className="team-bio2">{successtexts.successbio4}</span>
            </div>
            <h2 className="team-name2">{successtexts.successname4}</h2>
            <h4 className="team-expertise2">{successtexts.successdesig4}</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Succestory;
