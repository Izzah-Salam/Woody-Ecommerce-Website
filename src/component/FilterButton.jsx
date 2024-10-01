import React from "react";

import Data from "./Data";
const FilterButton = ({ categoryItems, setItem, filterItems }) => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap items-center my-10 md:space-x-10   font-semibold">
        <button
          onClick={() => setItem(Data)}
          className="py-2 px-7 md:m-0 m-2 rounded-full bg-lightgreen "
        >
          All
        </button>
        {categoryItems.map((val) => (
          <button
            key={val.id}
            className="py-2 md:m-0  m-2 px-7 rounded-full  bg-lightGray "
            onClick={() => filterItems(val)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;
