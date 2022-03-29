import React from 'react';

//Types
import { Brand, Product } from '../../constants/interface';
import { BrandHeader } from '../../constants/table-header';
import { TypeList } from '../../constants/enum/type-modal';

//Components
import ListingHeader from '../ListingHeader/';
import ListingRow from '../ListingRow';
import { ListTypes } from '../../redux/change-list-table/types';

interface Props {
  listHeader: string[];
  listItem?: Product[] | Brand[];
  onOpenModalEdit: (id: number) => void;
  visibleList: string;
  typeList: TypeList;
}

const Listing = ({
  listHeader,
  listItem,
  onOpenModalEdit,
  visibleList,
  typeList,
}: Props): JSX.Element => {
  const openToEdit = (id: number) => {
    onOpenModalEdit(id);
  };

  return (
    <div className="shadow-lg bg-body rounded">
      <table className="table table-success table-borderless table-hover">
        <ListingHeader listHeader={visibleList === ListTypes.BRAND ? BrandHeader : listHeader} />
        <tbody>
          {listItem?.map((product) => (
            <ListingRow
              key={product.id}
              product={product}
              onEditProduct={openToEdit}
              onEditBrand={openToEdit}
              typeList={typeList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Listing);
