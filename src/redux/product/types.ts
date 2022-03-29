import { Product } from '../../constants/interface';

export interface InitState {
  filter: string;
  products: Product[];
}

export interface Payload {
  id?: number;
}

export enum ProductActionTypes {
  FILTER_PRODUCT = 'FILTER_PRODUCT',
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
}
