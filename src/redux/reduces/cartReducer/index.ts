import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../../globalTypes';

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
  cartList: [],
};

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: initialState,
  reducers: {
    addProductCart: (state, action) => {
      const newProduct = action.payload;
      const highestId = state.cartList.reduce((maxId, product) => {
        const productId = +product.productId;
        return productId > maxId ? productId : maxId;
      }, 0);
      newProduct.id = (highestId + 1).toString();
      state.cartList.push(newProduct);
    },
    updateProductCartById: (state, action) => {
      const { id, size, amount, productId } = action.payload;
      const indexToUpdate = state.cartList.findIndex((item) => item.id === id);
      if (indexToUpdate !== -1) {
        // Atualize os valores do objeto
        state.cartList[indexToUpdate].size = size;
        state.cartList[indexToUpdate].amount = amount;
        state.cartList[indexToUpdate].productId = productId;
      }
    },
    deleteProductCartById: (state, action) => {
      const idToDelete = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== idToDelete);
    },
    cleanEntireCart: (state) => {
      state.cartList = [];
    },
  },
});

// Action creators are generated for each case reducer function
// export const {setNameAction} = productsSlice.actions;
export const { addProductCart, updateProductCartById, deleteProductCartById, cleanEntireCart } =
  cartSlice.actions;
export default cartSlice.reducer;
