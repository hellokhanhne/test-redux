import { Product } from "../../constants/interface";

export interface Payload {
  products : Product;
};

export interface Modal {
  isOpen: boolean;
  selectedId?: number
}

export enum ModalActionTypes {
  SHOW_MODAL_EDIT = 'SHOW_MODAL_EDIT',
  SHOW_MODAL_ADD = 'SHOW_MODAL_ADD',
  HIDE_MODAL = 'HIDE_MODAL',
}
