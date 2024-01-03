/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CoffeeItem } from '../../../globalTypes';
import { productData } from '../../../globalMoked';

interface productsListType {
  productList: CoffeeItem[];
}

const initialState: productsListType = {
  productList: productData,
};

export const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialState,
  reducers: {
    // create function here to change inital state and export as well
    // setNameAction: (state, action: PayloadAction<productsListType>) => {
    //   state.list += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {setNameAction} = productsSlice.actions;

export default productsSlice.reducer;
