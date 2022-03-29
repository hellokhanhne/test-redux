import { Modal } from "./types";

type State = {
  modalReducer: Modal;
};

export const modalIsOpen = (state: State) => state.modalReducer.isOpen;
export const modalItem = (state: State) => state.modalReducer.selectedId;

