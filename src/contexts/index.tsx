import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { ProductProvider } from './products';
import { CartProvider } from './cart';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CartProvider>
      <ProductProvider>
        <AuthProvider>{children}</AuthProvider>
      </ProductProvider>
    </CartProvider>
  );
};

export default Providers;
