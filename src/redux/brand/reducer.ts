import { brands } from '../../constants/mock-data';
import { BrandActionTypes, Payload } from './types';

interface Actions {
  type: string;
  payload: Payload;
}

const initState = {
  filter: '',
  brands: brands,
};

const brandReducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case BrandActionTypes.FILTER_BRAND:
      return {
        ...state,
        filter: action.payload,
      };

    case BrandActionTypes.ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };

    case BrandActionTypes.DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((b) => b.id !== action.payload),
      };

    case BrandActionTypes.EDIT_BRAND:
      return {
        ...state,
        brands: state.brands.map((b) => {
          if (b.id === action.payload.id) {
            return action.payload;
          }
          return b;
        }),
      };

    default:
      return state;
  }
};

export default brandReducer;
