import React from "react";
import "./Cgtest.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import cgtestperson1 from "../../../media/propic1.jpg";
import cgtestperson2 from "../../../media/propic2.jpg";
import testtexts from "./Cgpage.json";
const Cgtest = () => {
  const isMobile = useMediaQuery({ maxWidth: 464 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
    <div className="Cg-test">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="Cgtest-header text-center">
              <span className="Cgtest-small-text ">Testimonials</span>
              <h2 className="Cgtest-title">Individuals Who have benefitted</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-section">
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
          <div className="team-box1">
            <div className="img-team-div1">
              <img src={cgtestperson1} />
            </div>
            <div className="info-test">
              <h2 className="team-name1">{testtexts.testname1}</h2>
              <h4 className="team-expertise1">{testtexts.testdesig1}</h4>
            </div>
            <span className="team-bio1">{testtexts.testtext1}</span>
          </div>
          <div className="team-box1">
            <div className="img-team-div1">
              <img src={cgtestperson1} />
            </div>
            <div className="info-test">
              <h2 className="team-name1">{testtexts.testname2}</h2>
              <h4 className="team-expertise1">{testtexts.testdesig2}</h4>
            </div>
            <span className="team-bio1">{testtexts.testtext2}</span>
          </div>
          <div className="team-box1">
            <div className="img-team-div1">
              <img src={cgtestperson1} />
            </div>
            <div className="info-test">
              <h2 className="team-name1">{testtexts.testname3}</h2>
              <h4 className="team-expertise1">{testtexts.testdesig3}</h4>
            </div>
            <span className="team-bio1">{testtexts.testtext3}</span>
          </div>
          <div className="team-box1">
            <div className="img-team-div1">
              <img src={cgtestperson1} />
            </div>
            <div className="info-test">
              <h2 className="team-name1">{testtexts.testname4}</h2>
              <h4 className="team-expertise1">{testtexts.testdesig4}</h4>
            </div>
            <span className="team-bio1">{testtexts.testtext4}</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Cgtest;
