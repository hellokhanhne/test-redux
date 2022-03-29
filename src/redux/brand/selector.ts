import { isIncludingText } from '../../helpers/including-text';
import { InitState } from './types';

type State = {
  brandReducer: InitState;
};

export const brandSelector = (state: State) => {
  return state.brandReducer.brands.filter((data) =>
    isIncludingText(data.name, state.brandReducer.filter)
  );
};

export const allBrandSelector = (state: State) => {
  return state.brandReducer.brands;
};

export const selectorBrandById = (id: number) => {
  return (state: State) => state.brandReducer.brands.find((item) => item.id === id);
};
