import React from "react";
import "./Counselteam.css";
import counselperson1 from "../../../media/counselperson1.jpg";
import counselperson2 from "../../../media/counselperson2.jpg";
import counselperson3 from "../../../media/counselperson3.jpg";
import counselperson4 from "../../../media/counselperson4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import counselteam from "./Cgpage.json";

const Counselteam = () => {
  const isMobile = useMediaQuery({ maxWidth: 464 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="Counsel-team-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="counsel-team-header text-center">
              <span className="counsel-team-small-text">Expert Team</span>
              <h2 className="counsel-team-title">Meet Our Counseling Team</h2>
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
        autoPlaySpeed={1000}
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
        <div className="team-box">
          <div className="img-team-div">
            <img src={counselperson1} />
          </div>
          <h2 className="team-name">{counselteam.teamname1}</h2>
          <h4 className="team-expertise">{counselteam.teamdesig1}</h4>
          <span className="team-bio">{counselteam.teamtext1}</span>
        </div>
        <div className="team-box">
          <div className="img-team-div">
            <img src={counselperson2} />
          </div>
          <h2 className="team-name">{counselteam.teamname2}</h2>
          <h4 className="team-expertise">{counselteam.teamdesig2}</h4>
          <span className="team-bio">{counselteam.teamtext2}</span>
        </div>
        <div className="team-box">
          <div className="img-team-div">
            <img src={counselperson3} />
          </div>
          <h2 className="team-name">{counselteam.teamname3}</h2>
          <h4 className="team-expertise">{counselteam.teamdesig3}</h4>
          <span className="team-bio">{counselteam.teamtext3}</span>
        </div>
        <div className="team-box">
          <div className="img-team-div">
            <img src={counselperson4} />
          </div>
          <h2 className="team-name">{counselteam.teamname4}</h2>
          <h4 className="team-expertise">{counselteam.teamdesig4}</h4>
          <span className="team-bio">{counselteam.teamtext4}</span>
        </div>
      </Carousel>
    </div>
  );
};

export default Counselteam;
