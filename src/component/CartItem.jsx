import React, { useState, useEffect } from "react";
import Data from "./Data";

const CartItem = ({ productId, quantity }) => {
  const [details, setDetails] = useState({}); // Initialize as an object

  useEffect(() => {
    const findDetails = Data.find((item) => item.id === productId); // Find the item by productId
    setDetails(findDetails || {}); // Set details or default to an empty object
  }, [productId]);

  return (
    <>
      <div>Hello</div>
      <div className="flex justify-between items-center bg-black text-white p-2 border-b-2 border-black gap-5 rounded-full">
        {details.image ? (
          <img src={details.image} alt={details.name} className="w-10 h-10" />
        ) : (
          <p>No Image Available</p>
        )}
        <p>{details.name} </p>
        {/* Display product name */}
        <p>Hello</p>
        <p>Quantity: {quantity}</p> {/* Display quantity */}
      </div>
    </>
  );
};

export default CartItem;
