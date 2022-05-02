import React from "react";

const Product = () => {
  return (
    <div className="mb-4 rounded bg-white shadow ">
      <div className="overflow-hidden w-4/6 h-48  shadow p-2 m-2 mx-auto ">
        <img
          className="hover:scale-110 duration-300 w-full h-full mx-auto"
          src="chrome://branding/content/about-logo.png"
          alt=""
        />
      </div>
      <p className="mb-3 text-2xl text-center font-bold ">Firefox Browser</p>
      <div className="font-signika bg-slate-50 p-2 text-base leading-7">
        <p className="mb-1">
          <span className="font-bold text-base">Supplier:</span> Firefox
        </p>
        <p className="mb-1" title="Per Product Price">
          <span className="font-bold text-base">Price: </span> 10tk
        </p>
        <p className="mb-1">
          <span className="font-bold text-base">Quantity: </span> 20
        </p>
        <p className="mb-1">
          <span className="font-bold text-base">Short Info: </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nihil at totam voluptatibus mollitia minus ratione veritatis
          praesentium fuga esse!
        </p>
      </div>
      <button className="bg-indigo-400 text-white  px-2 py-1 hover:bg-indigo-500 duration-300 font-bold w-full">
        Update
      </button>
    </div>
  );
};

export default Product;
