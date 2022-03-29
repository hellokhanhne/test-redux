import { ChangeListType } from './types';

export const changeListTable = (name: any) => ({
  type: ChangeListType.CHANGE_LIST,
  payload: {
    name,
  },
});
