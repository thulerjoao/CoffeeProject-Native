import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Api from '../../services/api';
import { Product, ProductType } from '../../types/interface';

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductProviderData {
  products: Product[];
  updateProducts : () => void;
  productTypes: ProductType| undefined;
  updateProductTypes : () => void;

}

const ProductContext = createContext<ProductProviderData>({} as ProductProviderData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productTypes, setProductTypes] = useState<ProductType>();

  const updateProducts = () => {
    Api.get('/product').then((res) => {
      setProducts(res.data);
    }).catch(()=>{

    });
  };

  const updateProductTypes = () => {
    Api.get('/type').then((res) => {
      setProductTypes(res.data);
    }).catch(()=>{

    });
  };

  useEffect(()=>{
    updateProducts()
    updateProductTypes()
  },[])

  return (
    <ProductContext.Provider value={{ products, updateProducts, productTypes, updateProductTypes }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
