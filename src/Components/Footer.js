import React from "react";

const Footer = () => {
  return (
    <div className=" bg-indigo-500">
      <p className="p-2 text-center font-md text-white text-md">
        &copy; {`${new Date().getFullYear()}`} by Rahimuj570
      </p>
    </div>
  );
};

export default Footer;
