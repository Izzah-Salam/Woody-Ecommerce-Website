import React from "react";
import img from "../assets/img/landing.avif";

const Projects = () => {
  return (
    <div>
      <div className=" border-b border-t-2 border-black py-5 flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:text-left text-center">
          <h1 className="text-3xl font-semibold">Refinded Elegance</h1>
          <p className="text-sm text-gray-600 font-semibold my-3">
            Indulge in Comfort and style <br /> with our range of plush
            furniture and cozy accents
          </p>
        </div>
        <div className="lg:my-0 my-10">
          <button className="bg-transparent border-2 border-lime-800 text-lime-800 py-2  md:px-4 px-2 text-sm rounded-md   ">
            View Project
          </button>
        </div>

        <img src={img} alt="" className="lg:w-60 lg:h-20 rounded-2xl mx-4" />
      </div>
      <div className=" border-b border-t  border-black py-5 flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:text-left text-center">
          <h1 className="text-3xl font-semibold">Artisctice Fusion</h1>
          <p className="text-sm text-gray-600 font-semibold my-3">
            Indulge in Comfort and style <br /> with our range of plush
            furniture and cozy accents
          </p>
        </div>
        <div className="lg:my-0 my-10">
          <button className="bg-transparent border-2 border-lime-800 text-lime-800 py-2  md:px-4 px-2 text-sm rounded-md   ">
            View Project
          </button>
        </div>

        <img src={img} alt="" className="lg:w-60 lg:h-20 rounded-2xl mx-4" />
      </div>
      <div className=" border-b-2 border-t  border-black py-5 flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:text-left text-center">
          <h1 className="text-3xl font-semibold">Harmonious Space</h1>
          <p className="text-sm text-gray-600 font-semibold my-3">
            Indulge in Comfort and style <br /> with our range of plush
            furniture and cozy accents
          </p>
        </div>
        <div className="lg:my-0 my-10">
          <button className="bg-transparent border-2 border-lime-800 text-lime-800 py-2 md:px-4 px-2 text-sm rounded-md   ">
            View Project
          </button>
        </div>

        <img src={img} alt="" className="lg:w-60 lg:h-20 rounded-2xl mx-4" />
      </div>
    </div>
  );
};

export default Projects;
