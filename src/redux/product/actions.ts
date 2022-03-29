import { Product } from '../../constants/interface';
import { ProductActionTypes } from './types';

export const searchChangeProduct = (text: string) => {
  return {
    type: ProductActionTypes.FILTER_PRODUCT,
    payload: text,
  };
};

export const addProduct = (newProduct: Product) => {
  return {
    type: ProductActionTypes.ADD_PRODUCT,
    payload: newProduct,
  };
};

export const deleteProduct = (id: number) => {
  return {
    type: ProductActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const editProduct = (editProduct: Product) => {
  return {
    type: ProductActionTypes.EDIT_PRODUCT,
    payload: editProduct,
  };
};
