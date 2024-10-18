import React, { useState, useEffect } from "react";
import Data from "./Data";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

const CartItem = ({ productId, quantity }) => {
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetails = Data.find((item) => item.id === productId);
    setDetails(findDetails || {}); // Default to an empty object if not found
  }, [productId]);
  console.log(quantity);

  // Remove the dollar sign before converting to number
  const cleanedPrice = details?.price
    ? parseFloat(details.price.replace("$", ""))
    : 0;

  // Calculate total price
  const calculatedPrice = cleanedPrice * (quantity || 0);

  // Handle minus Quantity
  const handleMinusQunatity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  // Handle minus Quantity
  const handlePlusQunatity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300 gap-5 rounded-sm">
      {details?.image ? (
        <img src={details.image} alt={details.name} className="w-10 h-10" />
      ) : (
        <p>No Image Available</p>
      )}
      <p>{details?.name || "Unknown Product"}</p>
      <p>${calculatedPrice.toFixed(2)}</p> {/* Ensure two decimal points */}
      <div className="w-20 flex justify-between">
        <button
          onClick={handleMinusQunatity}
          className="bg-black rounded-full text-center text-white w-6 h-6 font-bold "
        >
          -
        </button>
        <span className="font-bold">{quantity}</span>
        <button
          onClick={handlePlusQunatity}
          className="bg-black rounded-full text-center text-white w-6 h-6  font-bold "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
