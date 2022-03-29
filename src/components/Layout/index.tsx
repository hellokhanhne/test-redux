import React, { RefObject, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Types
import { Brand, Product } from '../../constants/interface';
import { ButtonText, ButtonVariant } from '../../constants/enum/button';
import { TypeModal, TypeList } from '../../constants/enum/type-modal';

//Components
import Listing from '../Listing';
import ButtonPage from '../Button';
import Modal from '../Modal';
import Search from '../Search';

//redux
import { modalIsOpen } from '../../redux/modal/selector';
import { hideModal, showModalAdd, showModalEdit } from '../../redux/modal//actions';
import { changeListTable } from '../../redux/change-list-table/actions';
import { Reducers } from '../../redux/root-reducer';
import { searchChangeProduct } from '../../redux/product/actions';
import { searchChangeBrand } from '../../redux/brand/actions';
import { ListTypes } from '../../redux/change-list-table/types';

interface Props {
  listHeader: string[];
  listProduct: Product[];
  listBrand: Brand[];
  onAddItem: (data: Product | Brand) => void;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
}

const Layout = ({ listHeader, listProduct, listBrand, onAddItem, onChangeSearch }: Props) => {
  const [typeModal, setTypeModal] = useState<TypeModal>(TypeModal.ADD);
  const dispatch = useDispatch();
  const isOpen = useSelector(modalIsOpen);

  const searchRef = useRef<HTMLInputElement>();

  const visibleList = useSelector((state: Reducers) => state.changeListReducer.activePage);

  const resetSearch = (el: HTMLInputElement) => {
    el.value = '';
  };

  const handleChangeList = useCallback((visibleList: string, newVisibleList: string) => {
    resetSearch(searchRef.current!);

    if (visibleList === ListTypes.PRODUCT) {
      dispatch(searchChangeProduct(''));
    } else {
      dispatch(searchChangeBrand(''));
    }
    dispatch(changeListTable(newVisibleList));
  }, []);

  const handleOpenModalAdd = useCallback(() => {
    dispatch(showModalAdd());
    setTypeModal(TypeModal.ADD);
  }, []);

  const handleOpenModalEdit = useCallback((id: number) => {
    dispatch(showModalEdit(id));
    setTypeModal(TypeModal.EDIT);
  }, []);

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <div className="layout-page text-center">
        <h1 className="py-4">List Product Brand</h1>
        <div className="d-flex justify-content-between">
          <ButtonPage
            extraClass="mb-3"
            text={ButtonText.CHANGE_LIST}
            variant={ButtonVariant.PRIMARY}
            onClick={() =>
              handleChangeList(
                visibleList,
                visibleList === ListTypes.PRODUCT ? ListTypes.BRAND : ListTypes.PRODUCT
              )
            }
          />
          <Search onChange={onChangeSearch} ref={searchRef} />
          <ButtonPage
            extraClass="mb-3"
            variant={ButtonVariant.PRIMARY}
            text={
              visibleList === ListTypes.PRODUCT ? ButtonText.ADD_PRODUCTS : ButtonText.ADD_BRAND
            }
            onClick={handleOpenModalAdd}
          />
        </div>
        <Listing
          listHeader={listHeader}
          listItem={visibleList === ListTypes.PRODUCT ? listProduct : listBrand}
          onOpenModalEdit={handleOpenModalEdit}
          visibleList={visibleList}
          typeList={visibleList === ListTypes.PRODUCT ? TypeList.PRODUCT : TypeList.BRAND}
        />
      </div>
      {isOpen && (
        <Modal
          type={typeModal}
          brand={listBrand}
          onHide={handleCloseModal}
          onAddItem={onAddItem}
          typeWork={visibleList === ListTypes.PRODUCT ? TypeList.PRODUCT : TypeList.BRAND}
        />
      )}
    </>
  );
};

export default React.memo(Layout);
