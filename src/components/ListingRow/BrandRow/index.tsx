import { Message } from '../../../constants/enum/message';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBrand } from '../../../redux/brand/actions';
//Type
import { ButtonText, ButtonVariant } from '../../../constants/enum/button';
import { Brand } from '../../../constants/interface';
//component
import ButtonPage from '../../Button';
interface Props extends Brand {
  onEditBrand?: (id: number) => void;
}
const BrandRow = ({ id, name, onEditBrand }: Props) => {
  const dispatch = useDispatch();
  const handleDeleteBrand = () => {
    if (window.confirm(Message.CONFIRM_DELETE)) dispatch(deleteBrand(id!));
  };

  const shouldUpdateTypeEdit = () => {
    return onEditBrand! ? onEditBrand(id!) : {};
  };
  return (
    <tr>
      <td className="fw-bold col-3">{id}</td>
      <td className="col-3">{name}</td>
      <td className="col-3">
        <ButtonPage
          extraClass="mx-1"
          variant={ButtonVariant.DANGER}
          text={ButtonText.DELETE}
          onClick={() => handleDeleteBrand()}
        />
        <ButtonPage
          extraClass="mx-1"
          variant={ButtonVariant.WARNING}
          text={ButtonText.EDIT_BRAND}
          onClick={shouldUpdateTypeEdit}
        />
      </td>
    </tr>
  );
};

export default React.memo(BrandRow);
