import { products } from '../../constants/mock-data';
import { Payload, ProductActionTypes } from './types';

interface Actions {
  type: string;
  payload: Payload;
}

const initState = {
  filter: '',
  products: [...products],
};

const productReducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case ProductActionTypes.FILTER_PRODUCT:
      return {
        ...state,
        filter: action.payload,
      };
    case ProductActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ProductActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((item) => item.id !== action.payload)],
      };
    case ProductActionTypes.EDIT_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.map((item) => (item.id === action.payload.id ? action.payload : item)),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;
