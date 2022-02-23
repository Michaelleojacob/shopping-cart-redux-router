import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import productSlice from '../slices/productsSlice';

export default configureStore({
  reducer: {
    cartStore: cartSlice.reducer,
    productsStore: productSlice.reducer,
  },
});
