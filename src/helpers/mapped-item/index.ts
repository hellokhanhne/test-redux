import { Brand } from '../../constants/interface';

export const getBrandNameFromId = (brandId: number, listBrand: Brand[]) => {
  const mappedBrand = listBrand.find(item => item.id === brandId);
  return mappedBrand?.name || '';
};