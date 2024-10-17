import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography } from '@mui/material';
import DiaryProductsListItem from './DiaryProductsListItem';
import { styled } from '@mui/system';
import { fetchDiaryEntries } from '../../redux/diary/diaryOperations';
import { useMediaQuery, useTheme } from '@mui/material';
import { BtnLoader } from 'components/BtnLoader/BtnLoader';

const DiaryProductsList = ({ disabled = false }) => {
  const dispatch = useDispatch();
  const diaryEntries = useSelector(state => state.diary.diaryEntries);
  const selectedDate = useSelector(state => state.diary.selectedDate);
  const isLoading = useSelector(state => state.diary.isLoading);
  const error = useSelector(state => state.diary.error);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fetchDiaryEntries(selectedDate));
  }, [dispatch, selectedDate]);

  const StyledList = styled(List)({
    width: isMobile ? '100%' : '550px',
    maxHeight: '300px',
    marginTop: isMobile ? '10px' : '50px',
    marginBottom: isMobile ? '0' : '50px',
    overflowY: 'auto',
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
    return (
      <div className="flex mt-[50px] mb-[50px] justify-center xl:justify-normal">
        <BtnLoader color="orange" />
      </div>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (diaryEntries.length === 0) {
    return (
      <Typography sx={{ marginTop: '50px', marginBottom: '20px' }}>
        No entries for this date.
      </Typography>
    );
  }

  return (
    <StyledList disabled={disabled}>
      {diaryEntries.map(product => (
        <DiaryProductsListItem key={product._id} product={product} />
      ))}
    </StyledList>
  );
};

export default DiaryProductsList;
