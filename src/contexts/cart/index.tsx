import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Api from '../../services/api';

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
    totalValue: number,
    getTotalValue: ()=> void,

}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [totalValue, setTotalValue] = useState<number>(0);


  const getTotalValue = () => {
    Api.get('/cart/total-value').then((res) => {
        setTotalValue(res.data);
    }).catch(()=>{});
  };

  return (
    <CartContext.Provider value={{ totalValue, getTotalValue }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
