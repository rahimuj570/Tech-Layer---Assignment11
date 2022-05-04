import React from "react";

const Verify = () => {
  return (
    <div className="h-screen shadow-lg w-5/6 mx-auto my-20">
      <h1 className="px-5 pt-10 text-center text-red-400 font-bold text-2xl">
        Please Verify Your Email to Access This Page...{" "}
        <span className=" animate-bounce animate-spin">i</span>
      </h1>
    </div>
  );
};

export default Verify;
