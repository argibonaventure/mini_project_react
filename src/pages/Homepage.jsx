import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Body from "../components/Body";

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;
