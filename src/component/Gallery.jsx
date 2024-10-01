import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="font-semibold text-5xl leading-tight text-center mb-16">
        Inspiring Interiors <br />
        Crafted with Passion
      </h1>
      <div className="grid grid-cols-2 gap-5 px-20">
        <div>
          <div className="mb-5">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794712.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div>
            {" "}
            <img
              src="https://img.freepik.com/premium-photo/minimalistic-modern-living-room-interior-clean-contemporary-design-concept_681147-18544.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/bedroom-with-bed-painting-picture-tree_1209947-349.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
