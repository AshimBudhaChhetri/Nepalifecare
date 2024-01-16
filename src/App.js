import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Cgpage from "./components/Cgpage/Cgpage";
import Socialpage from "./components/Socialpage/Socialpage";
import Motivation from "./components/Motivation/Motivation";
import Aboutpage from "./components/Aboutus/Aboutus";
import Involved from "./components/Involved/Involved";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cgpage" element={<Cgpage />} />
        <Route path="/Socialpage" element={<Socialpage />} />
        <Route path="/Motivationpage" element={<Motivation />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Involvedpage" element={<Involved />} />
        <Route path="/Contactpage" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
