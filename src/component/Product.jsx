import React from "react";

const Product = ({ item }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:space-x-10 justify-center my-10">
        {item.map((data) => (
          <div
            key={data.id}
            className="relative flex bg-lightGray md:my-0 my-4  group flex-col items-center "
          >
            <img
              src={data.image}
              alt={data.title}
              className="md:w-60 md:h-72 w-52 h-60 transition duration-300 ease-in-out filter rounded-md  cursor-pointer group-hover:blur-[2px]  "
            />
            <div className="flex flex-col items-center">
              <h1 className="lg:text-xl font-semibold my-2">{data.name}</h1>
            </div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{
                background: "rgba(210, 238, 127, 0.5)",
                backdropFilter: "blur(4px)",
              }}
            >
              <button className="font-bold border border-lime-800 bg-transparent text-lime-800 rounded-md py-2 px-4 hover:bg-lime-800 hover:text-white transition duration-300 ease-in-out">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
