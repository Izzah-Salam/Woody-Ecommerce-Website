import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="font-semibold lg:text-5xl md:text-3xl text-2xl leading-tight text-center md:mb-16 mb-6">
        Inspiring Interiors <br />
        Crafted with Passion
      </h1>
      <div className="grid md:grid-cols-2 gap-5 md:px-20 px-5">
        <div className="relative">
          <div className="mb-5">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794712.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt=""
              className="md:rounded-3xl rounded-xl"
            />
          </div>
          <div>
            {" "}
            <img
              src="https://img.freepik.com/premium-photo/minimalistic-modern-living-room-interior-clean-contemporary-design-concept_681147-18544.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt=""
              className="md:rounded-3xl rounded-xl"
            />
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/bedroom-with-bed-painting-picture-tree_1209947-349.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
            alt=""
            className="md:w-full md:h-full md:rounded-3xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
