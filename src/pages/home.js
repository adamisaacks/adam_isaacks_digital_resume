import React from "react";
import AboutMe from "../components/AboutMe";
import Development from "../components/Development";
import EngineeringResume from "../components/Experience";
import Education from "../components/Education";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <AboutMe />
      <Development />
      <EngineeringResume />
      <Education />
      <Footer />
    </>
  );
}

export default Home;
