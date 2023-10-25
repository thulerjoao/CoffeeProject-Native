import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../../../globalTypes';

interface cartListType {
  cartList: CartItem[];
}

// const cart: any = [
//   {
//     id: '1',
//     size: '227',
//     amount: 1,
//     productId: '1',
//     price: 9.9,
//   },
// ];

const initialState: cartListType = {
  cartList: [
    // {
    //   id: '1',
    //   imageSource: TopCup01,
    //   type: 'Tradicional',
    //   title: 'Irlandês',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '2',
    //   imageSource: TopCup02,
    //   type: 'Tradicional',
    //   title: 'Capuccino',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '3',
    //   imageSource: TopCup01,
    //   type: 'Tradicional',
    //   title: 'Irlandês',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '4',
    //   isFirst: true as true,
    //   imageSource: TopCup02,
    //   type: 'Tradicional',
    //   title: 'Capuccino',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '5',
    //   imageSource: TopCup01,
    //   type: 'Tradicional',
    //   title: 'Irlandês',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '6',
    //   imageSource: TopCup02,
    //   type: 'Tradicional',
    //   title: 'Capuccino',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
  ],
};

export const cartSlice = createSlice({
  name: 'cartReducer',
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

export default cartSlice.reducer;
