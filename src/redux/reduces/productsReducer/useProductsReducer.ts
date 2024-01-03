import { useAppSelector } from '../../hooks';

export const useProductsReducer = () => {
  //     const {productList} = useSelector(
  //     (state: RootState) => state.productsReducer,
  //   );

  const { productList } = useAppSelector((state) => state.productsReducer);

  //you can create functions here and export as well

  return { productList };
};
