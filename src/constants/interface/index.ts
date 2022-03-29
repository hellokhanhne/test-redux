export interface Product {
  id?: number;
  name: string;
  price?: number;
  brandId?: number;
  brandName?: string;
}
export interface Brand extends Product {
  id?: number;
  name: string;
}