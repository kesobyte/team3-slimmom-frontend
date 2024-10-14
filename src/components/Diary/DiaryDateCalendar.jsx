import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarToday } from '@mui/icons-material';
import moment from 'moment';
import { setSelectedDate } from '../../redux/product/productsSlice';
import { fetchDiaryEntries } from '../../redux/product/productsOperations';
import { useMediaQuery, useTheme } from '@mui/material';
const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.products.selectedDate);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDateChange = newDate => {
    const formattedDate = moment(newDate).format('YYYY-MM-DD');
    dispatch(setSelectedDate(formattedDate));
    dispatch(fetchDiaryEntries(formattedDate));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          mb: isMobile ? 0 : 2,
          pt: isMobile ? 2 : 0,
          pb: isMobile ? 2 : 0,
        }}
      >
        <Typography
          // variant={isMobile ? 'h6' : 'h3'}
          fontWeight="bold"
          sx={{
            mr: 2,
            backgroundColor: 'white',
            fontFamily: 'Verdana, sans-serif',
            fontSize: isMobile ? '20px' : '36px',
          }}
        >
          {moment(selectedDate, 'YYYY-MM-DD').format('DD.MM.YYYY')}
        </Typography>
        <div className="relative bg-white">
          <IconButton onClick={() => setOpen(true)} size="medium">
            <CalendarToday />
          </IconButton>
          <div className="xl:block hidden absolute z-[-2] top-1">
            <DatePicker
              sx={{
                '& .MuiInputBase-root': {
                  width: '0px',
                  height: '0px',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '0px', // Calendar Icon (Default)
                },
              }}
              value={moment(selectedDate, 'YYYY-MM-DD')}
              onChange={handleDateChange}
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              format="DD.MM.YYYY"
            />
          </div>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default DiaryDateCalendar;
