import { ChangeList, ChangeListType, ListTypes } from './types';

interface Actions {
  type: string;
  payload: {
    name: string;
  };
}

const initialState: ChangeList = {
  activePage: ListTypes.PRODUCT,
  product: {
    filter: '',
    name: ListTypes.PRODUCT,
  },
  brand: {
    filter: '',
    name: ListTypes.BRAND,
  },
};

const changeListReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ChangeListType.CHANGE_LIST:
      console.log(action.payload.name);
      return { ...state, activePage: action.payload.name };
    default:
      return state;
  }
};
export default changeListReducer;
