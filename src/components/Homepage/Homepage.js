import React from "react";
import About from "./components/About";
import Donation from "./components/Donation.js";
import Navbar from "./components/Navbar";
import ProgHighlight from "./components/ProgHighlight";
import Testimonial1 from "./components/Testimonial1.js";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer.js";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Donation />
      <About />
      <Testimonial1 />
      <ProgHighlight />
      <Footer />
    </div>
  );
};

export default Homepage;
