import React from 'react';

//Type
import { ButtonText, ButtonVariant } from '../../../constants/enum/button';
import { Message } from '../../../constants/enum/message';
import { Product } from '../../../constants/interface';

// redux
import { deleteProduct } from '../../../redux/product/actions';
import { useDispatch, useSelector } from 'react-redux';

//component
import ButtonPage from '../../Button';
import { getBrandNameFromId } from '../../../helpers/mapped-item';
import { allBrandSelector } from '../../../redux/brand/selector';

interface Props {
  product: Product;
  onEditProduct?: (id: number) => void;
}

const ProductRow = ({ product, onEditProduct }: Props) => {
  const { brandId, name, price, id } = product;
  const dispatch = useDispatch();

  const brands = useSelector(allBrandSelector);
  const brandName = getBrandNameFromId(brandId!, brands);

  const handleDelete = () => {
    if (window.confirm(Message.CONFIRM_DELETE)) dispatch(deleteProduct(id!));
  };

  const shouldUpdateTypeEdit = () => {
    return onEditProduct! ? onEditProduct(id!) : {};
  };
  return (
    <tr className="list-order">
      <td className="fw-bold col-3" scope="row">
        {brandName}
      </td>
      <td className="col-3">{name}</td>
      <td className="col-3">{price + ' $'}</td>
      <td className="col-3">
        <ButtonPage
          extraClass="mx-1"
          variant={ButtonVariant.DANGER}
          text={ButtonText.DELETE}
          onClick={handleDelete}
        />
        <ButtonPage
          extraClass="mx-1"
          variant={ButtonVariant.WARNING}
          text={ButtonText.EDIT_PRODUCTS}
          onClick={shouldUpdateTypeEdit}
        />
      </td>
    </tr>
  );
};

export default React.memo(ProductRow);
