import React from "react";
import Brand from "./Brand";
import Contact from "./Contact";
import Products from "./Products/Products";
import HeroSlider from "./Header/Slider/HeroSlider";
import Review from "./Review/Review";
import Loading from "./Loading";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Products />
      <Brand />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
