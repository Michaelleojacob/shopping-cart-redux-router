import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newArr = [...state.cart];
      newArr.push(action.payload);
      state.cart = newArr;
    },
    removeFromCart: (state, action) => {
      const newArr = [...state.cart];
      const findIndex = newArr.find((product) => product.id === action.payload);
      console.log(findIndex);
    },
  },
});

export default cartSlice;

// cartSlice.actions to reach the reducers

// import cartSlice and use cartSlice.reducer in store

// must use dispatch (useDispatch) ! when calling addToCart
