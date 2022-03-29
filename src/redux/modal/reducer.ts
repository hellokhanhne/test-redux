import { Payload, ModalActionTypes, Modal } from './types';

interface Actions {
  type: string;
  payload: Payload;
}

const initialState: Modal = {
  isOpen: false,
  selectedId: undefined,
};

const modalReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL_ADD:
      return {
        ...state,
        isOpen: true,
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        selectedId: action.payload,
      };
    case ModalActionTypes.SHOW_MODAL_EDIT:
      return {
        ...state,
        isOpen: true,
        selectedId: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
