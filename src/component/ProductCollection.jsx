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
          <h1 className="lg:text-5xl text-3xl leading-tight font-semibold">
            Our new Exclusive <br /> Collection
          </h1>
          <p className="flex items-center md:my-0 my-5 text-sm font-semibold text-gray-800">
            Elevated your interiour with our curated selection of premium
            furniture and accessories
          </p>
        </div>
        <FilterButton
          categoryItems={categoryItems}
          filterItems={filterItems}
          setItem={setItem}
        />
        <Product item={item} id={Data.id} />
      </div>
    </div>
  );
};

export default ProductCollection;
