import React from "react";

const Brand = () => {
  return (
    <div className="bg-yellow-300">
      <div className="pt-20">
        <h1 className="text-4xl text-center font-extrabold text-slate-700">
          OUR TOP BRANDS
        </h1>
        <div className="mb-6 mt-2 w-36 h-1 bg-slate-700 mx-auto rounded-lg"></div>
      </div>
      <div className="pb-20 pt-5 grid sm:grid-cols-7 smax:grid-cols-3  justify-center items-center gap-5 p-5 ">
        <img className="w-28" src="images/brand/hp.png" alt="" />
        <img className="w-28" src="images/brand/nvidia.png" alt="" />
        <img className="w-28" src="images/brand/dell.png" alt="" />
        <img className="w-28" src="images/brand/ps5.JPG" alt="" />
        <img className="w-28" src="images/brand/asus.png" alt="" />
        <img className="w-28" src="images/brand/a4tech.png" alt="" />
        <img className="w-28" src="images/brand/lenovo.png" alt="" />
      </div>
    </div>
  );
};

export default Brand;
