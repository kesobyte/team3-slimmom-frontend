import React from 'react';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowUp } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
// Dependencies instaled = react-icons
// Redux
import { getToken } from 'redux/authSelectors';
import { getProducts, selectDate } from 'redux/productsSelectors';
import { setProducts } from 'redux/productsSlice';
// Component and util
import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { ThemeContext } from '../../utils/Context';
import { apiListMyProducts } from 'api';
// Styled
import { ProdList, ProductsContainer } from './DiaryProductsList.styled';
//
export const DiaryProductsList = () => {
  //
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const { isChristmas } = useContext(ThemeContext);
  const date = useSelector(selectDate);
  const products = useSelector(getProducts);
  //
  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await apiListMyProducts(date, token);
        if (result.length > 0) {
          dispatch(setProducts(result[0].productInfo));
        } else {
          dispatch(setProducts([]));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [date, dispatch, token]);
  //
  return (
    <ProdList className={products.length > 4 ? null : 'hidden'}>
      {products.length !== 0 ? (
        products.map(product => {
          return (
            <DiaryProductsListItem
              key={product._id}
              id={product._id}
              name={product.productName}
              grams={product.productWeight}
              calories={product.productCalories}
            />
          );
        })
      ) : (
        <ProductsContainer>
          {!mobile && (
            <HiArrowUp
              style={{
                width: '64px',
                height: '64px',
                color: `${isChristmas ? '#9B9FAA' : 'black'}`,
              }}
            />
          )}
          <p
            style={{
              color: `${isChristmas ? '#9B9FAA' : 'black'}`,
            }}
          >
            Add some products!
          </p>
          {mobile && (
            <HiArrowUp
              style={{
                width: '64px',
                height: '64px',
                color: `${isChristmas ? '#9B9FAA' : 'black'}`,
              }}
            />
          )}
        </ProductsContainer>
      )}
    </ProdList>
  );
};
