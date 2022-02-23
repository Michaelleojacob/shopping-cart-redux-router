import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, item) => {
      const newArr = [...state.cart];
      newArr.push(item);
      state.cart = newArr;
    },
  },
});

export default cartSlice;

// cartSlice.actions to reach the reducers

// import cartSlice and use cartSlice.reducer in store
