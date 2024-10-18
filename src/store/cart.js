import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    statusTab: false, // Items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        // Update the quantity if the item already exists in the cart
        existingItem.quantity += quantity;
      } else {
        // Add new item to the cart
        state.items.push({ productId, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    ToggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, ToggleStatusTab, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
