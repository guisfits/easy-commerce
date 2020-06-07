export interface Buyer {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
}

export interface Rating {
  id: string;
  productId: string;
  rate: number;
  comment: string;
}
