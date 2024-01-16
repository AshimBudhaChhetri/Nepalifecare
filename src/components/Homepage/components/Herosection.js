import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderimg1 from "../../../media/sliderimg1.jpg";
import sliderimg2 from "../../../media/sliderimg2.jpg";
import sliderimg3 from "../../../media/sliderimg3.jpg";
import textdata from "../components/homepage.json";
import "./Herosection1.css";
function Herosection() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={sliderimg1} />
        <img
          className="purplebg"
          src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
        />
        <div className="hero-content">
          <h3 className="hero-title">Welcome To NepaLifeCare</h3>
          <h2 className="hero-text">{textdata.slider1text}</h2>
          <button className="hero-button">
            <span>Read More</span>
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderimg2} />
        <img
          className="purplebg"
          src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
        />
        <div className="hero-content">
          <h3 className="hero-title">Welcome To NepaLifeCare</h3>
          <h2 className="hero-text">{textdata.slider2text}</h2>
          <button className="hero-button">
            <span>Read More</span>
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderimg3} />
        <img
          className="purplebg"
          src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
        />
        <div className="hero-content">
          <h3 className="hero-title">Welcome To NepaLifeCare</h3>
          <h2 className="hero-text">{textdata.slider3text}</h2>
          <button className="hero-button">
            <span>Read More</span>
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Herosection;
