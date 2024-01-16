import { React, useEffect } from "react";
import Navbar from "../Homepage/components/Navbar.js";
import Cgheader from "./components/Cgheader.js";
import Counselservice from "./components/Counselservice.js";
import Counselteam from "./components/Counselteam.js";
import Guideheader from "./components/Guideheader.js";
import Cgtest from "./components/Cgtest.js";
import Footer from "../Homepage/components/Footer.js";

const Cgpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Cgheader />
      <Counselservice />
      <Counselteam />
      <Guideheader />
      <Cgtest />
      <Footer />
    </div>
  );
};

export default Cgpage;
