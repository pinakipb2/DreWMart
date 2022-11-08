import { PayloadAction } from '@reduxjs/toolkit';

import { Prod } from '../../types';

const { createSlice } = require('@reduxjs/toolkit');

interface cartInitialState {
  cartItems: Prod[];
  amount: number;
  total: number;
}

const initialState: cartInitialState = {
  cartItems: [] as Prod[],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => initialState,
    addToCart: (state: cartInitialState, action: PayloadAction<Prod>) => {
      // Insert if product is not in cart
      const isFound = state.cartItems.some((item) => {
        if (item.id === action.payload.id) {
          return true;
        }
        return false;
      });
      if (!isFound) {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    removeFromCart: (state: cartInitialState, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      // increase: (state: cartInitialState, { payload }: { payload: Prod }) => {
      //   const cartItem = state.cartItems.find((item) => item.id === payload.id) as Prod;
      //   cartItem.amount += 1;
      // },
      // decrease: (state: cartInitialState, { payload }: { payload: Prod }) => {
      //   const cartItem = state.cartItems.find((item) => item.id === payload.id) as Prod;
      //   cartItem.amount -= 1;
      //   // Check if amount is 0, remove element from cart
      //   // if (cartItem.amount === 0) {
      //   //   const newCart = state.cartItems.filter((item) => item.amount !== 0);
      //   //   state.cartItems = newCart;
      //   // }
    },
    updateItemAmount: (state: cartInitialState, { payload }: { payload: Prod }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id) as Prod;
      cartItem.amount = payload.amount;
    },
    calculateTotal: (state: cartInitialState) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = parseFloat(total.toFixed(2));
      state.amount = amount;
    },
  },
});

export const { clearCart, addToCart, removeFromCart, updateItemAmount, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
