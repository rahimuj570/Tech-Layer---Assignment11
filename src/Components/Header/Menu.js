import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const hideMenuByBg = () => {
    setMenu(false);
  };

  return (
    <div className="sticky top-0 z-30">
      <div className="py-2 relative items-center flex justify-between bg-indigo-500 px-5 ">
        <h1 className="text-2xl text-white font-extrabold">Tech Layer</h1>
        <ul className="mb-0 text-white flex  duration-300">
          <div
            style={{ left: `${menu ? 0 : "-100%"}` }}
            className={`sm:flex sm:static  absolute top-12 bg-indigo-500 duration-300 smax:h-screen  smax:w-3/6 z-20`}
          >
            <li className="ml-3 sm:my-0 smax:my-3 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow">
              Home
            </li>
            <li className="ml-3 sm:my-0 smax:my-3 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow">
              Contact US
            </li>
            <li className="ml-3 sm:my-0 smax:my-3 py-2 rounded bg-white hover:bg-sky-200 text-slate-600 duration-300 cursor-pointer font-bold px-4">
              Login
            </li>
          </div>
          <li
            onClick={toggleMenu}
            className=" block sm:hidden rounded bg-white  text-slate-600 duration-300 cursor-pointer font-bold  py-1 px-4"
          >
            {!menu ? (
              <HiOutlineMenuAlt1 className="text-2xl" />
            ) : (
              <AiOutlineClose className="text-2xl" />
            )}
          </li>
        </ul>
      </div>
      <li
        onClick={hideMenuByBg}
        style={{ left: `${menu ? 0 : "-110%"}` }}
        className="absolute z-10 opacity-5  bg-slate-700 w-screen h-screen duration-300"
      ></li>
    </div>
  );
};

export default Menu;
