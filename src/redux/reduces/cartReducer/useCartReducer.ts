import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {CartItem} from '../../../globalTypes';
import {addProductCart, deleteProductCartById, updateProductCartById} from '.';

export const useCartReducer = () => {
  const dispatch = useDispatch();
  const {cartList} = useAppSelector(state => state.cartReducer);
  const addCart = (newCart: CartItem) => {
    dispatch(addProductCart(newCart));
  };
  const updateCart = (newCart: CartItem) => {
    dispatch(updateProductCartById(newCart));
  };
  const deleteCart = (id: CartItem) => {
    dispatch(deleteProductCartById(id));
  };

  return {cartList, addCart, updateCart, deleteCart};
};
