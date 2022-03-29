import React from 'react';

//Types
import { Product } from '../../constants/interface';

//Components
import { TypeList } from '../../constants/enum/type-modal';
import BrandRow from './BrandRow';
import ProductRow from './ProductRow';

interface Props {
  product: Product;
  typeList: TypeList;
  onEditProduct?: (id: number) => void;
  onEditBrand?: (id: number) => void;
}

const ListingRow = ({ product, onEditProduct, typeList, onEditBrand }: Props) => {
  const { name, id } = product;
  return (
    <>
      {typeList === TypeList.PRODUCT ? (
        <ProductRow product={product} onEditProduct={onEditProduct} />
      ) : (
        <BrandRow id={id} name={name} onEditBrand={onEditBrand} />
      )}
    </>
  );
};

export default React.memo(ListingRow);
