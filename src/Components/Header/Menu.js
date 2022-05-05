import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.int";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const hideMenuByBg = () => {
    setMenu(false);
  };

  return (
    <div className="md:sticky top-0 z-30">
      <div className="py-2 items-center flex justify-between bg-indigo-500 px-5 ">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl text-white font-extrabold"
        >
          Tech Layer
        </h1>
        <ul className="mb-0 text-white flex  duration-300">
          <div
            style={{ left: `${menu ? 0 : "-100%"}` }}
            className={`flex md:static  absolute top-12 bg-indigo-500 duration-300 mdmax:h-screen mdmax:flex-col mdmax:w-4/6 z-20 mdmax:pt-5`}
          >
            <Link
              to={"/"}
              className="mx-3 md:my-0 mdmax:my-2 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to={"/manage_products"}
                  className="mx-3 md:my-0 mdmax:my-2 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow"
                >
                  Manage Items
                </Link>
                <Link
                  to={"/my_products"}
                  className="mx-3 md:my-0 mdmax:my-2 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow"
                >
                  My Items
                </Link>
                <Link
                  to={"/add"}
                  className="mx-3 md:my-0 mdmax:my-2 p-2 rounded hover:bg-indigo-400 duration-300 cursor-pointer font-semibold shadow"
                >
                  Add Items
                </Link>
                <li
                  onClick={() => signOut(auth)}
                  className="mx-3 md:my-0 mdmax:my-2 py-2 rounded bg-white hover:bg-sky-200 text-slate-600 duration-300 cursor-pointer font-bold px-4"
                >
                  Logout
                </li>
              </>
            ) : (
              <li
                onClick={() => navigate("/login")}
                className="mx-3 md:my-0 mdmax:my-2 py-2 rounded bg-white hover:bg-sky-200 text-slate-600 duration-300 cursor-pointer font-bold px-4"
              >
                Login
              </li>
            )}
          </div>
          <li
            onClick={toggleMenu}
            className=" block md:hidden rounded bg-white  text-slate-600 duration-300 cursor-pointer font-bold  py-1 px-4"
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
        className="absolute z-10 opacity-5  bg-slate-700 w-screen mdmax:h-screen duration-300"
      ></li>
    </div>
  );
};

export default Menu;
