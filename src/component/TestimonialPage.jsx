import React from "react";
import table from "../assets/img/table.png";

const TestimonialPage = () => {
  return (
    <div className="md:my-40 my-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="flex justify-center items-center">
          <div className="bg-lightgreen rounded-md lg:w-80 lg:h-80  w-60 h-60 relative">
            <img
              src={table}
              alt=""
              className="absolute lg:left-24 left-14 top-6"
            />
          </div>
          <hr className="border-t-2 border-black" />
        </div>
        <div className="text-end">
          <h1 className="font-semibold lg:text-5xl text-3xl leading-tight">
            New Experience <br /> is Going to Unlock
          </h1>
          <p className="text-gray-800 text-sm mt-10">
            Indulge with Comfort and Style with our range of plush furniture and
            cozy accents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-40 ">
        <div className="bg-lightGray md:col-span-2 col-span-3 md:p-20 p-10">
          <h1 className="font-semibold lg:text-5xl md:text-3xl text-2xl leading-tight">
            Minimalism Actually <br /> meets the <br /> Functioanality{" "}
          </h1>
          <p className="text-gray-800 text-sm mt-10">
            Experience The ultimate relaxation with our collection of serene and
            tranquil spa inspired designs
          </p>
          <button className="bg-lightgreen py-2 md:px-5 px-3   md:text-xl text-sm rounded-md my-10">
            Shop Now
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/free-photo/light-bedside-accessories-lamp-fabric_1203-4649.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
