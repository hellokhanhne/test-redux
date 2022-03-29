import { brands } from '../../constants/mock-data';
import { isIncludingText } from '../../helpers/including-text';
import { getBrandNameFromId } from '../../helpers/mapped-item';
import { InitState } from './types';

type State = {
  productReducer: InitState;
  id: number;
};

export const productSelector = (state: State) => {
  const filterList = state.productReducer.products.filter((data) => {
    return isIncludingText(data.name, state.productReducer.filter);
  });

  return filterList;
};

export const selectorItemById = (id: number) => {
  return (state: State) => state.productReducer.products.find((item) => item.id === id);
};
