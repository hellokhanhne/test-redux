import React from 'react';
import iconUrl from '../../assets/search.png';
import '../../App.css';

interface SearchProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: SearchProps, ref: any) => {
  return (
    <div className="filter-search">
      <img src={iconUrl} className="search-icon" />
      <input
        type="search"
        placeholder="Search..."
        className="search-input py-1"
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
};

export default React.forwardRef(Search);
