import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Dependencies
// Redux
import { getToken } from 'redux/authSelectors';
import { selectDate } from 'redux/productsSelectors';
import { setProducts } from 'redux/productsSlice';
// utils
import { apiDeleteMyProduct } from 'api';
// styled-components
import CrossIcon from '../../Assets/images';
import { ProdListItem, Icon } from './DiaryproductsListItem.styled';

export const DiaryProductsListItem = ({ id, name, grams, calories }) => {
  //
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const date = useSelector(selectDate);
  //
  const handleDelete = async id => {
    try {
      const result = await apiDeleteMyProduct(id, token, date);
      dispatch(setProducts(result));
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <ProdListItem>
      <p className="product-item-name">{name}</p>
      <p className="product-item-grams">{grams} g</p>
      <p className="product-item-calories">
        {calories} <span>kcal</span>
      </p>
      <Icon
        src={CrossIcon}
        alt="delete product"
        onClick={() => {
          handleDelete(id);
        }}
      />
    </ProdListItem>
  );
};
