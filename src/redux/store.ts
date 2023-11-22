import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './reduces/productsReducer';
import cartReducer from './reduces/cartReducer';

export const store = configureStore({
  reducer: { productsReducer, cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
