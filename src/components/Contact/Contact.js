import React from "react";
import Navbar from "../Homepage/components/Navbar";
import Contactheader from "./components/Contactheader";
import Contactinfo from "./components/Contactinfo";
import Contactform from "./components/Contactform";
import Sociallinks from "./components/Sociallinks";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contactheader />
      <Contactinfo />
      <Sociallinks />
      <Contactform />
    </div>
  );
};

export default Contact;
