interface Page {
  filter: string;
  name: string;
}

export interface ChangeList {
  activePage: string;
  product: Page;
  brand: Page;
}

export enum ListTypes {
  PRODUCT = 'PRODUCT',
  BRAND = 'BRAND',
}

export enum ChangeListType {
  CHANGE_LIST = 'CHANGE_LIST',
  CHANGE_LIST_PRODUCT = 'CHANGE_LIST_PRODUCT',
}
