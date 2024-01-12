import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { ProductProvider } from './products';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProductProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </ProductProvider>
  );
};

export default Providers;
