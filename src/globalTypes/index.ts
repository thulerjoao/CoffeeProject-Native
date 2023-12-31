export interface CoffeeItem {
  id: string;
  isFirst?: boolean;
  imageSource: string;
  type: string;
  title: string;
  description?: string;
  size?: string;
  price: string;
}

export interface CartItem {
  id?: string;
  size: string;
  amount: number;
  productId: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  cartId: string;
}


