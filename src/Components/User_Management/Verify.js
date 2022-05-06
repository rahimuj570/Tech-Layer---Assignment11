import React from "react";
import { FcLockPortrait } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";

const Verify = () => {
  return (
    <>
      <UseTitle title={"Access Denied"} />
      <div className="text-center flex items-center justify-center h-screen shadow-lg w-5/6 mx-auto my-20">
        <div className="">
          <FcLockPortrait className="animate-ping ease-in-out text-9xl mx-auto" />
          <h1 className="mt-5 px-5 pt-10 text-center text-red-400 font-bold text-3xl">
            Please Verify Your Email to Access This Page...
          </h1>
          <p className="font-bold text-xl mt-2 px-1">
            Please Check Your Inbox or Spam Folder
          </p>
          <p className="font-bold text-green-400 text-xl mt-2 px-1">
            After Verify Reload The Page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="my-5 bg-sky-500 text-white px-2 py-1 rounded hover:bg-sky-600 duration-300"
          >
            Reload
          </button>
        </div>
      </div>
    </>
  );
};

export default Verify;
