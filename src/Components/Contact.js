import React from "react";
import { toast } from "react-toastify";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" pb-20 bg-fuchsia-400">
      <div className=" pb-10  bg-fuchsia-400 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-white">
          Contact US
        </h1>
        <div className=" w-36 h-1 bg-white mx-auto rounded-lg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("We Will Contact You Soon...");
          e.target.reset();
        }}
        className="flex flex-col w-4/6 mx-auto"
      >
        <input
          required
          className="my-2 p-2 rounded w-full"
          type="text"
          placeholder="Your Name"
        />
        <input
          required
          className="my-2 p-2 rounded w-full"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          required
          className="my-2 p-2 rounded w-full"
          type="text"
          placeholder="Your Message"
        />
        <button className="my-2 px-2 py-1 rounded shadow-lg bg-white sm:w-1/6 w-2/6 mx-auto hover:text-fuchsia-500 text-base font-semibold duration-300 hover:border-indigo-500 border-2 flex items-center justify-center">
          <span>SEND</span> <MdOutgoingMail className="ml-1 text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
