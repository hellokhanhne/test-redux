import { combineReducers } from 'redux';
import changeListReducer from '../change-list-table/reducer';
import brandReducer from '../brand/reducer';
import modalReducer from '../modal/reducer';
import productReducer from '../product/reducer';

export type Reducers = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  productReducer,
  brandReducer,
  modalReducer,
  changeListReducer,
});

export default rootReducer;
