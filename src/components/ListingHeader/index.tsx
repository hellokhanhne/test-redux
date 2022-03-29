import React from 'react';

interface Props {
  listHeader: string[];
}

const ListingHeader = ({ listHeader }: Props): JSX.Element => {
  return (
    <thead>
      <tr className="table-header">
        {listHeader.map((head, key) => <th scope="col" key={key}>{head}</th>)}
      </tr>
    </thead>
  );
};

export default React.memo(ListingHeader);
