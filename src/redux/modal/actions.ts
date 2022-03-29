import { Product } from '../../constants/interface';
import { ModalActionTypes } from './types';

interface ModalAction {
  type: ModalActionTypes;
  payload?: number;
}

export const showModalEdit = (selectedId: number): ModalAction => ({
  type: ModalActionTypes.SHOW_MODAL_EDIT,
  payload: selectedId,
});

export const showModalAdd = (): ModalAction => ({
  type: ModalActionTypes.SHOW_MODAL_ADD,
});

export const hideModal = (): ModalAction => ({
  type: ModalActionTypes.HIDE_MODAL,
  payload: undefined,
});
