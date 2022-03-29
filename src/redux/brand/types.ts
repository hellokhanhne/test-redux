import { Brand } from 'constants/interface';

export enum BrandActionTypes {
  FILTER_BRAND = 'FILTER_BRAND',
  ADD_BRAND = 'ADD_BRAND',
  EDIT_BRAND = 'EDIT_BRAND',
  DELETE_BRAND = 'DELETE_BRAND',
}

export interface Payload {
  id?: number;
}

export interface InitState {
  filter: string;
  brands: Brand[];
}
