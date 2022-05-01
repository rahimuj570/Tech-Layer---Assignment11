import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div className="flex justify-between bg-sky-400 px-5 py-2">
      <h1 className="text-2xl text-white font-extrabold">Tech Layer</h1>
      <ul className="text-white flex duration-300 ">
        <div
          style={{ right: `${menu ? 0 : "-100%"}` }}
          className={`sm:flex sm:static  absolute top-12 bg-sky-400 p-2 duration-300 smax:h-screen  smax:w-3/6`}
        >
          <li className="ml-3 sm:my-0 my-2 rounded hover:bg-sky-300 duration-300 cursor-pointer font-semibold shadow p-1">
            Home
          </li>
          <li className="ml-3 sm:my-0 my-2 rounded hover:bg-sky-300 duration-300 cursor-pointer font-semibold shadow p-1">
            Contact US
          </li>
          <li className="ml-3 sm:my-0 my-2 rounded bg-white hover:bg-sky-200 text-slate-600 duration-300 cursor-pointer font-bold  py-1 px-4">
            Login
          </li>
        </div>
        <li
          onClick={toggleMenu}
          className="block sm:hidden ml-3 rounded bg-white hover:bg-sky-200 text-slate-600 duration-300 cursor-pointer font-bold  py-1 px-4"
        >
          <HiOutlineMenuAlt1 className="text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
