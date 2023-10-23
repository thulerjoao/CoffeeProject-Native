import {useAppSelector} from '../../hooks';

export const useCartReducer = () => {
  //     const {productList} = useSelector(
  //     (state: RootState) => state.productsReducer,
  //   );

  const {cartList} = useAppSelector(state => state.cartReducer);

  //you can create functions here and export as well

  return {cartList};
};
