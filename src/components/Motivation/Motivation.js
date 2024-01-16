import React from "react";
import Navbar from "../Homepage/components/Navbar";
import Motiveheader from "./components/Motivheader.js";
import Motiveintro from "./components/Motiveintro.js";
import Past from "./components/Past.js";
import Pastheader from "./components/Pastheader.js";
const Motivation = () => {
  return (
    <div>
      <Navbar />
      <Motiveheader />
      <Motiveintro />
      <Pastheader />
      <Past />
    </div>
  );
};

export default Motivation;
