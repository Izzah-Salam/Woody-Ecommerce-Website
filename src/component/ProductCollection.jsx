import React, { useState } from "react";
import Data from "./Data";
import Product from "./Product";
import FilterButton from "./FilterButton";

const ProductCollection = () => {
  const [item, setItem] = useState(Data);
  const categoryItems = [...new Set(Data.map((item) => item.Category))];
  const filterItems = (cat) => {
    const newItem = Data.filter((newValue) => newValue.Category === cat);
    setItem(newItem);
  };

  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2  md:gap-20 pt-10 ">
          <h1 className="text-5xl font-semibold">
            Our new Exclusive <p className="my-5">Collection</p>
          </h1>
          <p className="flex items-center  font-semibold text-gray-800">
            Elevated your interiour with our curated selection of premium
            furniture and accessories
          </p>
        </div>
        <FilterButton
          categoryItems={categoryItems}
          filterItems={filterItems}
          setItem={setItem}
        />
        <Product item={item} />
      </div>
    </div>
  );
};

export default ProductCollection;
