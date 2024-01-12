export interface ProductType{
    id?: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Product {
    id?: string;
    image: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    type: ProductType ;
    createdAt?: Date;
    updatedAt?: Date;
  }