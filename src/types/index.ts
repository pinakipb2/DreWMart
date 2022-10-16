interface Highlights {
  desc: string;
}

export interface ProductResp {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  color: string;
  highlights: Highlights[];
  description: string;
  warrantyDuration: number;
  createdAt: string;
  updatedAt: string;
}

export interface ShopProps {
  productResp: ProductResp[];
}

export interface SingleProductProps {
  productResp: ProductResp;
}

export interface ProductDetailType {
  productResp: ProductResp;
  allProducts: ProductResp[];
}

export type Prod = ProductResp & { amount: number };

interface Retailer {
  id: string;
  name: string;
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
}

export interface Store {
  id: string;
  prodId: string;
  productId: string;
  retailerId: string | null;
  soldTo: string | null;
  soldAt: string | null;
  isWarrantyClaimed: boolean;
  createdAt: string;
  updatedAt: string;
  Product: ProductResp;
  Retailer: Retailer | null;
}
