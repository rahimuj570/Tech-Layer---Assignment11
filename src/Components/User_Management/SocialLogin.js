import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <>
      <div className="mt-10 md:w-2/6 sm:w-3/6 w-5/6 mx-auto flex items-center justify-center">
        <div className="w-4/6 h-1 bg-sky-400"></div>
        <div className="mx-2 text-sky-400 text-4xl">OR</div>
        <div className="w-4/6 h-1 bg-sky-400"></div>
      </div>

      <div className="pb-10 md:w-2/6 sm:w-3/6 smax:w-6/6 mt-5 flex flex-col  mx-auto">
        <div className="hover:bg-slate-50 duration-300 py-2 px-1 rounded cursor-pointer shadow flex justify-center  items-center">
          <FcGoogle className="mr-2 basis-10  sm:text-4xl text-2xl" />
          <span className=" smax:text-xl text-2xl font-bold">
            Continue With Google
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
