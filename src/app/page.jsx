import React from "react";
import AboutIntellect from "./components/aboutIntellect/aboutIntellect";
import HeroSection from "./components/hero-section/hero-section";
import Reviews from "./components/reviews/reviews";
import Courses from "./components/courses/courses";
import TeachersSlider from "./components/teachers/teachers";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutIntellect />
      <Reviews />
      <Courses />
      <TeachersSlider/>
    <br /><br /><br />
    </div>
  );
};

export default page;
