import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between items-center  bg-lightgreen py-5 text-center px-10 mx-0 ">
        <div className="lg:my-0 my-5">
          <h1 className="font-semibold mb-3">Send Messege</h1>

          <input
            type="text"
            className=" rounded-sm px-3 py-1 outline-none placeholder:Send Messege"
          />
        </div>
        <div className="font-semibold  lg:my-0 my-5">
          All Rights Reserved by Izzah Frontend Developer
        </div>
        <div className="lg:my-0 my-5">
          <h1 className="">For Contact</h1>
          <hr className="border-t-2 mb-3  border-black" />
          <div className="flex justify-between space-x-4 items-center">
            <FaTwitter className="text-xl text-black" />
            <FaInstagramSquare className="text-xl text-black" />
            <FaSquareWhatsapp className="text-xl text-black" />
            <IoCall className="text-xl text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
