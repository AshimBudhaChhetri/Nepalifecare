import React, { useEffect } from "react";
import Navbar from "../Homepage/components/Navbar";
import Sheader from "../Socialpage/components/Sheader";
import Socialintro from "./components/Socialintro";
import Succestory from "./components/Succestory";
import Footer from "../Homepage/components/Footer";
import Socialinv from "./components/Socialinv";
const Socialpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Sheader />
      <Socialintro />
      <Succestory />
      <Socialinv />
      <Footer />
    </div>
  );
};

export default Socialpage;
