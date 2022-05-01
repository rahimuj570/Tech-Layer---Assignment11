import React from "react";
import Brand from "./Brand";
import Menu from "./Header/Menu";
import Products from "./Header/Products/Products";
import HeroSlider from "./Header/Slider/HeroSlider";

const Home = () => {
  return (
    <>
      <Menu />
      <HeroSlider />
      <Products />
      <Brand />
    </>
  );
};

export default Home;
