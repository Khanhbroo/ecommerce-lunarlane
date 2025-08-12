import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.images,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.itemList.find((item) => item.id === itemId);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
    removeAllFromCart(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.itemList.findIndex(
        (item) => item.id === itemId
      );

      if (existingItemIndex >= 0) {
        state.totalQuantity -= state.itemList[existingItemIndex].quantity;
        state.itemList.splice(existingItemIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
