import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ======= Import Slider Images =======
import watch from "./Img/watch.jpg";
import chair from "./Img/chair.jpg";
import set from "./Img/set.jpg";
import game3in1 from "./Img/game3in1.JPG";
import headphone from "./Img/headphone.jpg";
import ps5 from "./Img/ps5.jpg";

const HeroSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <>
      <div className="mt-16">
        <h1 className="text-4xl text-center font-extrabold text-slate-700">
          EID DHAMAKA !
        </h1>
        <div className="mb-6 mt-2 w-36 h-1 bg-slate-700 mx-auto rounded-lg" />
      </div>
      <div className="sm:w-4/6 w-6/6 sm:mx-auto shadow px-5 smax:mx-2 my-1">
        <Slider {...settings}>
          {/* ======= Slider Item 1 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2 className="text-4xl font-bold">
                  Meetion MT-CHR15 E-Sport Gaming Chair
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 20,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 10,000 TK
                </p>
              </div>
              <img
                className=" sm:order-2 basis-3/6  w-full h-full"
                src={chair}
                alt=""
              />
            </div>
          </div>
          {/* ======= Slider Item 2 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2 className="text-4xl font-bold">
                  Realme Watch S Global Version
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 5,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 2,000 TK
                </p>
              </div>
              <img
                className=" sm:order-2 basis-3/6  w-full h-full"
                src={watch}
                alt=""
              />
            </div>
          </div>
          {/* ======= Slider Item 3 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2
                  title="AMD Ryzen 5 5600X ASUS TUF GAMING B550M-E 16GB RAM 500GB SSD
                  RTX 3060 TI 8GB GRAPHICS CARD BUDGET PC"
                  className="text-4xl font-extrabold"
                >
                  Ryzen 5 Gaming Monster...
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 70,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 40,000 TK
                </p>
              </div>
              <img
                className=" sm:order-2 basis-3/6  w-full h-full"
                src={set}
                alt=""
              />
            </div>
          </div>
          {/* ======= Slider Item 4 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2 className="text-4xl font-bold">
                  Turtle Beach Recon 50 GAMING HEADSET
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 2,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 800 TK
                </p>
              </div>
              <img
                className=" sm:order-2 basis-3/6  w-full h-full"
                src={headphone}
                alt=""
              />
            </div>
          </div>
          {/* ======= Slider Item 5 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2 className="text-4xl font-bold">
                  Sony PlayStation 5 Gaming Console
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 80,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 40,000 TK
                </p>
              </div>
              <img
                className=" sm:order-2 basis-3/6  w-full h-full"
                src={ps5}
                alt=""
              />
            </div>
          </div>
          {/* ======= Slider Item 6 ======== */}
          <div className="w-full sm:h-70 ">
            <div className="smax:flex-col smax:py-5 px-10 h-full items-center flex justify-between sm:justify-evenly ">
              <div className="basis-3/6 sm:order-1 order-2 leading-10 ">
                <h2 className="text-4xl font-bold">
                  God of War, Elden Ring, Horizon
                </h2>
                <p className="text-red-400 font-bold">
                  Regular Price: 6,000 TK
                </p>
                <p className="text-green-500 font-bold text-2xl">
                  Eid Price: 2,000 TK
                </p>
              </div>
              <div className="h-60  sm:order-2">
                <img
                  className=" basis-3/6  w-full h-full"
                  src={game3in1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroSlider;
