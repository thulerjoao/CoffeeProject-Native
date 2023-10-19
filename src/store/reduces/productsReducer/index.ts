/* eslint-disable @typescript-eslint/no-unused-vars */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CoffeeItem} from '../../../globalTypes';
import {producsData} from '../../../globalMoked';

interface productsType {
  list: CoffeeItem[];
}

const initialState: productsType = {
  list: producsData,
};

export const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialState,
  reducers: {
    setNameAction: (state, action: PayloadAction<productsType>) => {
      // state.list += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setNameAction} = productsSlice.actions;

export default productsSlice.reducer;
