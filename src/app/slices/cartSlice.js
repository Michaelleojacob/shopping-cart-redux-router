import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newArr = [...state.cart];
      const item = action.payload;
      const { id, quantity } = item;
      const doesItemExist = newArr.some((cartItem) => cartItem.id === id);
      const updateItem = () => {
        const getItem = newArr.indexOf(
          newArr.find((cartItem) => cartItem.id === id),
        );
        return (newArr[getItem].quantity += quantity);
      };
      doesItemExist ? updateItem() : newArr.push(item);
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

//? useage:

// cartSlice.actions to reach the reducers

// import cartSlice and use cartSlice.reducer in store

// must use dispatch (useDispatch) ! when calling addToCart

// *

//? reminder:

// const findProduct = (identifier) => {
//   const arr = getProductList();
//   const item = arr.find((item) => item.id === identifier);
//   return arr.indexOf(item);
// };

// const thing = findProduct('22');
// console.log(thing);

// returns true/false if item exists
// const findProduct = (identifier) => {
//   const arr = getProductList();
//   return arr.some((item) => item.id === identifier);
// };

//returns arr item
// const findProduct = (identifier) => {
//   const arr = getProductList();
//   return arr.find((item) => item.id === identifier);
// };
