const Gallery = () => {
  return (
    <div>
      <h1 className="font-semibold lg:text-5xl md:text-3xl text-2xl leading-tight text-center md:mb-16 mb-6">
        Inspiring Interiors <br />
        Crafted with Passion
      </h1>
      <div className="grid md:grid-cols-2 gap-5 md:px-20 px-5">
        <div className="relative">
          <div className="mb-5 relative">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794712.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt=""
              className="md:rounded-3xl rounded-xl cursor-pointer"
            />
            <div className="absolute bottom-6 left-3 right-0  md:text-2xl text-xl flex justify-between font-semibold text-2xl text-white p-2 ">
              <h1>Comfortable Sofa</h1>
              <div className="md:w-10 md:h-10 w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://img.freepik.com/premium-photo/room-is-decorated-with-different-furniture_1270181-1509.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
              alt="Img"
              className="md:rounded-3xl rounded-xl cursor-pointer"
            />
            <div className="absolute bottom-6 left-3 right-0  md:text-2xl text-xl flex justify-between font-semibold  text-white p-2 ">
              <h1>Rounded Sofa</h1>
              <div className="md:w-10 md:h-10 w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/bedroom-with-bed-painting-picture-tree_1209947-349.jpg?ga=GA1.1.643566124.1719678713&semt=ais_hybrid"
            alt=""
            className="md:w-full md:h-full md:rounded-3xl rounded-xl cursor-pointer transition-all duration-300 ease-in-out"
          />
          <div className="absolute bottom-6 left-3 right-0  flex justify-between font-semibold md:text-2xl text-xl text-white p-2 ">
            <h1>luxurious Bed</h1>
            <div className="md:w-10 md:h-10 w-5 h-5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
