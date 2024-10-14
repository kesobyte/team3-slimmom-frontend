import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  List,
  CircularProgress,
  Typography
} from '@mui/material';
import DiaryProductsListItem from './DiaryProductsListItem';
import { styled } from '@mui/system';
import { fetchDiaryEntries } from '../../redux/product/productsOperations';
import { useMediaQuery, useTheme } from '@mui/material';


const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const diaryEntries = useSelector(state => state.products.diaryEntries);
  const selectedDate = useSelector(state => state.products.selectedDate);
  const isLoading = useSelector(state => state.products.isLoading);
  const error = useSelector(state => state.products.error);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  useEffect(() => {
    dispatch(fetchDiaryEntries(selectedDate));
  }, [dispatch, selectedDate]);

  const handleRemoveProduct = (productId) => {
    // Implement product removal logic here
    console.log('Remove product:', productId);
  };

  const StyledList = styled(List)({
    width: isMobile ? "100%":"590px",
    maxHeight: '400px',
    marginTop: isMobile  ? '10px' :'50px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#264061',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#1c2f47',
    },
  });
  

  if (isLoading) {
    return <CircularProgress sx={{  marginTop: '50px',}} />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (diaryEntries.length === 0) {
    return <Typography sx={{  marginTop: '50px',}}>No entries for this date.</Typography>;
  }
  

  return (
    <StyledList>
      {diaryEntries.map((product) => (
        <DiaryProductsListItem
          key={product._id}
          product={product}
          onRemove={handleRemoveProduct}
        />
      ))}
    </StyledList>
  );
};

export default DiaryProductsList;