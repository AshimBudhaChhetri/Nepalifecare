import React from "react";
import Navbar from "../Homepage/components/Navbar";
import Motiveheader from "./components/Motivheader.js";
import Motiveintro from "./components/Motiveintro.js";
import Past from "./components/Past.js";
import Pastheader from "./components/Pastheader.js";
import Footer from "../Homepage/components/Footer.js";
import Upcommingprog from "./components/upcommingprog.js";
const Motivation = () => {
  return (
    <div>
      <Navbar />
      <Motiveheader />
      <Motiveintro />
      <Pastheader />
      <Past />
      <Upcommingprog />
      <Footer />
    </div>
  );
};

export default Motivation;
