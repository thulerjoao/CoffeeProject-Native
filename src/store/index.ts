import {configureStore} from '@reduxjs/toolkit';

import productsReducer from './reduces/productsReducer';

export const store = configureStore({
  reducer: {productsReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
