import EditAndAddProduct from '../../features/EditAndAddProduct';
import React from 'react';
//Bootstrap
import { Modal as ModalBootsrap } from 'react-bootstrap';
import { useSelector } from 'react-redux';
//Types
import { ButtonText } from '../../constants/enum/button';
import { TypeList, TypeModal } from '../../constants/enum/type-modal';
import { Brand, Product } from '../../constants/interface';
import EditAndAddBrands from '../../features/EditAndAddBrands';
import { modalItem } from '../../redux/modal/selector';
import { selectorItemById } from '../../redux/product/selector';
import { selectorBrandById } from '../../redux/brand/selector';

interface ModalProps {
  type: TypeModal;
  brand: Brand[];
  onAddItem: (data: Product | Brand) => void;
  onHide?: () => void;
  typeWork: TypeList;
}

const Modal = ({ onHide, type = TypeModal.EDIT, brand, onAddItem, typeWork }: ModalProps) => {
  const getItemId = useSelector(modalItem);
  const selectedItem = useSelector(selectorItemById(getItemId!));
  const brandSeletecd = useSelector(selectorBrandById(getItemId!));

  return (
    <ModalBootsrap
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <ModalBootsrap.Header closeButton>
        <ModalBootsrap.Title id="contained-modal-title-vcenter">
          {type === TypeModal.ADD ? ButtonText.ADD_PRODUCTS : ButtonText.EDIT_PRODUCTS}
        </ModalBootsrap.Title>
      </ModalBootsrap.Header>
      <ModalBootsrap.Body>
        {typeWork === TypeList.PRODUCT ? (
          <EditAndAddProduct
            type={type}
            brand={brand}
            defaultValue={selectedItem}
            onHide={onHide}
            onAddProduct={onAddItem}
          />
        ) : (
          <EditAndAddBrands
            type={type}
            defaultValue={brandSeletecd}
            onHide={onHide}
            onAddBrand={onAddItem}
          />
        )}
      </ModalBootsrap.Body>
    </ModalBootsrap>
  );
};

export default React.memo(Modal);
