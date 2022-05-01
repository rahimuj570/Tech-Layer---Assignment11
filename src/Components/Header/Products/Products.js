import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="bg-pink-50 pb-10 mt-20 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-slate-700">
          OUR PRODUCTS
        </h1>
        <div className=" w-36 h-1 bg-slate-700 mx-auto rounded-lg" />
      </div>

      <div className="p-5 rounded grid  gap-2 md:grid-cols-4 sm:grid-cols-2 smax: grid-cols-2 xsmax:grid-cols-1  bg-pink-50">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="bg-pink-50 pb-20  text-center">
        <button className="p-1 font-semibold hover:bg-sky-400 hover:text-white duration-300 hover:border-white sm:w-2/6 w-5/6 bg-white border-sky-400 border-4 text-sky-400">
          Manage Products
        </button>
      </div>
    </>
  );
};

export default Products;
