import React from "react";
import Navbar from "./Navbar";
import landing from "../assets/img/landing.avif";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="my-20 grid md:grid-cols-2 md:gap-x-20">
        <div className="flex flex-col justify-center ">
          <p className="my-5 text-5xl font-semibold ">
            Modern Furniture for <p className="my-5">minimalist lover</p>
          </p>
          <p className="text-sm">
            Experince the ulimate relaxation with our collection of serene and
            tranquil spa-inspired designs.
          </p>
          <div className=" flex space-x-10 my-10 font-semibold">
            <button className="bg-lightgreen py-2 px-5 rounded-md">
              Shop Now
            </button>
            <button>
              Shop reel <hr className="border-t-2 border-black" />
            </button>
          </div>
        </div>
        <div className="relative md:flex hidden justify-center group">
          <img
            src={landing}
            alt="Landing"
            className="rounded-2xl lg:w-[70%]  transition duration-300 ease-in-out filter  cursor-pointer group-hover:backdrop-blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer  bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <h2 className="text-white text-3xl mb-2">Book a Table</h2>
            <p className="text-white text-xl">Experience the Ultimate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
