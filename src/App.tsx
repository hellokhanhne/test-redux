import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListTypes } from './redux/change-list-table/types';
import { Reducers } from './redux/root-reducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Types
import { ListHeader } from '../src/constants/table-header';
//Style css
import './App.css';
//Components
import Layout from './components/Layout';
import { Brand, Product } from './constants/interface';
import { addBrand, searchChangeBrand } from './redux/brand/actions';
import { brandSelector } from './redux/brand/selector';
import { addProduct, searchChangeProduct } from './redux/product/actions';
// redux
import { productSelector } from './redux/product/selector';

function App() {
  const filterProducts = useSelector(productSelector);
  const filterBrands = useSelector(brandSelector);
  const activePage = useSelector((state: Reducers) => state.changeListReducer.activePage);

  const dispatch = useDispatch();

  const handleAddProduct = useCallback((newProduct: Product) => {
    dispatch(addProduct(newProduct));
  }, []);

  const handleAddBrand = useCallback((newBrand: Brand) => {
    dispatch(addBrand(newBrand));
  }, []);

  const handleAddItem = useCallback((data: Product | Brand) => {
    if (data.price || data.price === 0) {
      handleAddProduct(data);
    } else {
      handleAddBrand(data);
    }
  }, []);

  const handleChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, activePage: string) => {
      if (activePage === ListTypes.PRODUCT) {
        return dispatch(searchChangeProduct(event.target.value));
      }
      return dispatch(searchChangeBrand(event.target.value));
    },
    []
  );

  return (
    <Layout
      listHeader={ListHeader}
      listProduct={filterProducts}
      listBrand={filterBrands}
      onAddItem={handleAddItem}
      onChangeSearch={(e) => handleChangeSearch(e, activePage)}
    />
  );
}

export default App;
