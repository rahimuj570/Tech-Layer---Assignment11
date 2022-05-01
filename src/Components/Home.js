import React from "react";
import Brand from "./Brand";
import Menu from "./Header/Menu";
import Products from "./Header/Products/Products";
import HeroSlider from "./Header/Slider/HeroSlider";
import Review from "./Review";

const Home = () => {
  return (
    <>
      <Menu />
      <HeroSlider />
      <Products />
      <Brand />
      <Review />
    </>
  );
};

export default Home;
