import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetHomeData from "../../Hooks/useGetHomeData";
import Product from "./Product";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-zinc-50 pb-10 mt-20 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-slate-700">
          OUR PRODUCTS
        </h1>
        <div className=" w-36 h-1 bg-slate-700 mx-auto rounded-lg" />
      </div>

      <div className="px-5 py-3 lg:px-20 rounded grid  lg:gap-x-20 sm:gap-5 gap-4 md:grid-cols-3 sm:grid-cols-2 smax: grid-cols-2 xsmax:grid-cols-1  bg-zinc-50">
        {useGetHomeData()[0]?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="bg-zinc-50 pb-20  text-center">
        <button
          onClick={() => navigate("/manage_products")}
          className="p-1 font-semibold hover:bg-indigo-400 hover:text-white duration-300 hover:border-white sm:w-2/6 w-5/6 bg-white border-indigo-400 border-4 text-indigo-400"
        >
          Manage Products
        </button>
      </div>
    </>
  );
};

export default Products;
