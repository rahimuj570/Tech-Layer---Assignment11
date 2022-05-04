import React from "react";
import { useNavigate } from "react-router-dom";
import Verify from "../User_Management/Verify";
import NotFound from "./notFound.png";
const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Verify />
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          404 NOT FOUND
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>

      <div className="mb-20 sm:w-2/6 w-4/6 mx-auto">
        <img src={NotFound} alt="" />
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
