import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { ToggleStatusTab } from "../store/cart";

const CartTab = () => {
  // Safely handle the state if cart.items is undefined
  const carts = useSelector((store) => store.cart?.items || []);
  const statusTab = useSelector((store) => store.cart.statusTab);

  // Check if carts is an array before proceeding
  if (!Array.isArray(carts)) {
    console.error("Carts is not an array", carts);
    return <div>Error: Cart data is not in the correct format</div>;
  }

  // handleCloseTab

  const dispatch = useDispatch();

  // cartTab Functionality

  const handleCloseTab = () => {
    dispatch(ToggleStatusTab());
  };

  return (
    <>
      <div
        className={`fixed bg-lightGray top-0 right-0 w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 
          ${statusTab === false ? "translate-x-full" : ""}
          `}
      >
        <h2 className="p-5 text-2xl">Shopping Cart</h2>

        <div className="p-5">
          {carts.length > 0 ? (
            carts.map((item, key) => (
              <CartItem
                key={key}
                productId={item.productId}
                quantity={item.quantity}
                price={item.price}
              />
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className="grid grid-cols-2">
          <button onClick={handleCloseTab} className="bg-black text-white">
            Close
          </button>
          <button className="bg-lightgreen">CheckOut</button>
        </div>
      </div>
    </>
  );
};

export default CartTab;
