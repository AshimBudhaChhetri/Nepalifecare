import React from "react";
import "./Herosection1.css";
import sliderimg1 from "../../../media/sliderimg1.jpg";
import sliderimg2 from "../../../media/sliderimg2.jpg";
import sliderimg3 from "../../../media/sliderimg3.jpg";
const Herosection2 = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sliderimg1} className="d-block w-100" alt="..." />
            <img
              className="purplebg"
              src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
            />
            <div className="hero-content">
              <h3 className="hero-title">Welcome To NepaLifeCare</h3>
              <h2 className="hero-text">
                Empower Lives Join Our Cause for Lasting Change
              </h2>
              <button className="hero-button">
                <span>Read More</span>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderimg2} className="d-block w-100" alt="..." />
            <img
              className="purplebg"
              src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
            />
            <div className="hero-content">
              <h3 className="hero-title">Welcome To NepaLifeCare</h3>
              <h2 className="hero-text">Hello gaiz</h2>
              <button className="hero-button">
                <span>Read More</span>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderimg3} className="d-block w-100" alt="..." />
            <img
              className="purplebg"
              src="https://gaviaspreview.com/wp/oxpitan/wp-content/uploads/2015/12/layer-1.png"
            />
            <div className="hero-content">
              <h3 className="hero-title">Welcome To NepaLifeCare</h3>
              <h2 className="hero-text">
                Empower Lives Join Our Cause for Lasting Change
              </h2>
              <button className="hero-button">
                <span>Read More</span>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Herosection2;
