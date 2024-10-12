import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);

  return (
    <>
      <div className="fixed bg-lightGray top-0 right-0 w-96 h-full grid grid-rows-[60px_1fr_60px]">
        <h2 className="p-5 text-2xl">Shopping Cart</h2>
        <div className="p-5">
          {/* Make sure to return the JSX from the map function */}
          {carts.length > 0 ? (
            carts.map((item, key) => (
              <CartItem
                key={key}
                productId={item.productId}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>No items in the cart</p> // Show fallback message if no items
          )}
        </div>
        <div className="grid grid-cols-2">
          <button className="bg-black text-white">Close</button>
          <button className="bg-lightgreen">CheckOut</button>
        </div>
      </div>
    </>
  );
};

export default CartTab;
