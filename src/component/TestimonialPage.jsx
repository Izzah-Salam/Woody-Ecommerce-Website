import React from "react";
import table from "../assets/img/table.png";

const TestimonialPage = () => {
  return (
    <div className="my-40">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="flex justify-center items-center">
          <div className="bg-lightgreen rounded-md w-80 h-80 relative">
            <img src={table} alt="" className="absolute left-24 top-6" />
          </div>
          <hr className="border-t-2 border-black" />
        </div>
        <div className="text-end">
          <h1 className="font-semibold text-5xl leading-tight">
            New Experience <br /> is Going to Unlock
          </h1>
          <p className="text-gray-800 text-sm mt-10">
            Indulge with Comfort and Style with our range of plush furniture and
            cozy accents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-40 ">
        <div className="bg-lightGray col-span-2 p-20">
          <h1 className="font-semibold text-5xl leading-tight">
            Minimalism Actually <br /> meets the <br /> Functioanality{" "}
          </h1>
          <p className="text-gray-800 text-sm mt-10">
            Experience the ultimate relaxation with our collection of serene and
            tranquil spa inspired designs
          </p>
          <button className="bg-lightgreen py-2 px-5 rounded-md my-10">
            Shop Now
          </button>
        </div>
        <div>
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
