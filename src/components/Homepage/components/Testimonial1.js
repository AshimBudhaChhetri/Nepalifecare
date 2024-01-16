import { useState } from "react";

import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import person1Image from "../../../media/propic1.jpg"; // Add your image paths
import person2Image from "../../../media/propic2.jpg";
import testimonialtexts from "./homepage.json";

function Testimonial1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main-div-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-header text-center">
              <h3 className="testimonial-title">Testimonials</h3>
              <h2 className="testimonial-text">What people say about us</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Carousel Slider */}
      <div className="testimonial-slider">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="testimonial-main-card">
              <div className="testimonial-card">
                <div className="img-carousel">
                  <img className="test-image" src={person1Image} />
                </div>
                <p className="test-text">{testimonialtexts.test1text}</p>
                <h2 className="test-name">{testimonialtexts.test1name}</h2>
                <h4 className="test-designation">
                  {testimonialtexts.test1designation}
                </h4>
              </div>
              <div className="testimonial-card">
                <div className="img-carousel">
                  <img className="test-image" src={person2Image} />
                </div>
                <p className="test-text">{testimonialtexts.test2text}</p>
                <h2 className="test-name">{testimonialtexts.test2name}</h2>
                <h4 className="test-designation">
                  {testimonialtexts.test2designation}
                </h4>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-main-card">
              <div className="testimonial-card">
                <div className="img-carousel">
                  <img className="test-image" src={person1Image} />
                </div>
                <p className="test-text">{testimonialtexts.test3text}</p>
                <h2 className="test-name">{testimonialtexts.test3name}</h2>
                <h4 className="test-designation">
                  {testimonialtexts.test3designation}
                </h4>
              </div>
              <div className="testimonial-card">
                <div className="img-carousel">
                  <img className="test-image" src={person1Image} />
                </div>
                <p className="test-text">{testimonialtexts.test4text}</p>
                <h2 className="test-name">{testimonialtexts.test4name}</h2>
                <h4 className="test-designation">
                  {testimonialtexts.test4designation}
                </h4>
              </div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional testimonials */}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial1;
