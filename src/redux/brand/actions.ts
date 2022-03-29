import { Brand } from 'constants/interface';
import { BrandActionTypes } from './types';

export const searchChangeBrand = (text: string) => {
  return {
    type: BrandActionTypes.FILTER_BRAND,
    payload: text,
  };
};

export const addBrand = (newBrand: Brand) => {
  return {
    type: BrandActionTypes.ADD_BRAND,
    payload: newBrand,
  };
};

export const deleteBrand = (id: number) => {
  return {
    type: BrandActionTypes.DELETE_BRAND,
    payload: id,
  };
};

export const editBrand = (editBrand: Brand) => ({
  type: BrandActionTypes.EDIT_BRAND,
  payload: editBrand,
});
