
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: string;
  brideImage: string;
  groomImage: string;
  color: string;
  material: string;
  size: string;
  vendor: string;
  theme: string;
  type: 'set' | 'bride' | 'groom';
  images?: ProductImage[];
}

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  type: 'bride' | 'groom' | 'couple' | 'detail';
}

export type ProductType = 'set' | 'bride' | 'groom';
