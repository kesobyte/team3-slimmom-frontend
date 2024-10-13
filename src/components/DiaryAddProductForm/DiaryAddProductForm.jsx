import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { ContentDesignSup } from '../Common/ContentDesignSup';
// Added Dependencies =  formik, react-responsive, yup,
// Redux Imports
import { getToken, getUserInfo } from '../../redux/authSelectors';
import { selectDate } from '../../redux/productsSelectors';
import { setProducts } from '../../redux/productsSlice';

// API services
import {
  apiAddMyProducts,
  apiGetSearchProducts,
} from 'contact c/o joseph camacho /api/api';
// styled elements
import IconHere from '../../Assets/images/svg/add.svg';
import {
  InputProduct,
  ProductError,
  InputUnit,
  UnitError,
  FormHolder,
  ProdButton,
  SearchBox,
  SearchItemNotRecommended,
  SearchItem,
} from './DiaryAddProductForm.styled';

const schema = yup.object().shape({
  productName: yup.string().required('Name is required field'),
  productWeight: yup
    .number('Grams must be a number')
    .typeError('Grams must be a number')
    .required('Grams is required field'),
});

export const DiaryAddProductForm = ({ onClose, isModalOpened }) => {
  //
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const date = useSelector(selectDate);
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const [visible, setVisible] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const userInfo = useSelector(getUserInfo);
  const initialValues = {
    productName: '',
    productWeight: '',
  };
  //
  const search = async value => {
    try {
      const result = await apiGetSearchProducts(value);
      setSearchProducts(result);
    } catch (error) {
      setSearchProducts([]);
    }
  };
  // handleSubmit , handleCange, handleClick
  const handleSubmit = async (values, { resetForm }) => {
    schema.validate(values);
    const { productName, productWeight } = values;
    const body = { productName, productWeight: parseInt(productWeight), date };
    try {
      const result = await apiAddMyProducts(body, token, date);
      if (result.length > 0) {
        dispatch(setProducts(result));
      } else {
        dispatch(setProducts([]));
      }
    } catch (error) {
      alert('Product not found!');
    }
    mobile && onClose();
    resetForm();
  };
  //
  const handleChange = e => {
    const productName = e.target.value;
    if (e.target.name === 'productName') {
      if (productName !== '' && productName.length > 1) {
        search(productName);
        setVisible(true);
      } else {
        setVisible(false);
        setSearchProducts([]);
      }
    }
  };
  //
  const handleClick = (setFieldValue, title) => {
    setVisible(false);
    setFieldValue('productName', title);
  };
  //
  return (
    <ContentDesignSup position="relative" my="40px">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ formikProps, setFieldValue }) => (
          <ContentDesignSup>
            <FormHolder onChange={handleChange}>
              <InputProduct
                type="productName"
                placeholder="Enter product name"
                name="productName"
                autoComplete="off"
              />
              <ErrorMessage name="productName" component={ProductError} />
              <InputUnit
                type="productWeight"
                placeholder="Grams"
                name="productWeight"
                autoComplete="off"
              />
              <ErrorMessage name="productName" component={UnitError} />
              {mobile ? (
                <ProdButton type="submit">Add</ProdButton>
              ) : (
                <ProdButton type="submit">
                  <img src={IconHere} alt="add product" />
                </ProdButton>
              )}
            </FormHolder>
            <SearchBox className={visible ? 'visible' : null}>
              {searchProducts !== '' &&
                searchProducts.length !== 0 &&
                searchProducts.map(product => {
                  if (
                    userInfo.notAllowedProductsAll.find(
                      el => el === product.title
                    )
                  ) {
                    return (
                      <SearchItemNotRecommended
                        key={product._id}
                        onClick={() =>
                          handleClick(setFieldValue, product.title)
                        }
                      >
                        {product.title}
                      </SearchItemNotRecommended>
                    );
                  }
                  return (
                    <SearchItem
                      key={product._id}
                      onClick={() => handleClick(setFieldValue, product.title)}
                    >
                      {product.title}
                    </SearchItem>
                  );
                })}
            </SearchBox>
          </ContentDesignSup>
        )}
      </Formik>
    </ContentDesignSup>
  );
};
