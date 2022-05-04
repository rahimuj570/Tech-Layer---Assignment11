import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, quantity, price, image, supplier, info } = product;
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 flex flex-col justify-between mb-4 rounded  shadow ">
      <div className="">
        <div className="bg-white px-1 pt-1 pb-1">
          <div className=" overflow-hidden w-4/6 h-48  shadow p-2 m-2 mx-auto ">
            <img
              className="hover:scale-110 duration-300 w-full h-full mx-auto"
              src={image}
              alt={name}
            />
          </div>
          <p className="mb-3 text-2xl text-center font-bold ">{name}</p>
        </div>
        <div className="font-signika p-2 text-base leading-7">
          <p className="mb-1">
            <span className="font-bold text-base">Supplier:</span> {supplier}
          </p>
          <p className="mb-1" title="Per Product Price">
            <span className="font-bold text-base">Price: </span> {price}TK
          </p>
          <p className="mb-1">
            <span className="font-bold text-base">Quantity: </span> {quantity}
          </p>
          <p className="mb-1">
            <span className="font-bold text-base">Short Info: </span>
            {info}
          </p>
        </div>{" "}
      </div>
      <button
        onClick={() => navigate(`/update/${_id}`)}
        className="bg-indigo-400 text-white  px-2 py-1 hover:bg-indigo-500 duration-300 font-bold w-full"
      >
        Update
      </button>
    </div>
  );
};

export default Product;
