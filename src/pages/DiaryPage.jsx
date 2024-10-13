import React , { useState }from 'react';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm';
import  DiaryProductsList  from 'components/Diary/DiaryProductsList';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar';
import {
  Autocomplete,
  TextField,
  Fab,
  Box,
  InputAdornment,
  CircularProgress,
  Button,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { styled } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

const StyledFab = styled(Fab)({
  backgroundColor: '#FC842D',
  '&:hover': {
    backgroundColor: '#e67725',
  },
});

export const DiaryPage = () => {
  
  const [open ,setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleAddProduct = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:flex-row flex-col xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[0px] md:px-[32px] px-[20px] min-h-full">
          <div className="md:w-[55.5vw] w-full">
           {!open &&  <DiaryDateCalendar/>}
            {open && <DiaryAddProductForm handleClose={handleClose} />}
           {!open && <DiaryProductsList  />} 
           {!open && isMobile &&  <Box sx={{display:'flex',justifyContent:"center",alignItems:'center', width:"100%"}}>
            
            <StyledFab
          sx={{ display: isMobile ? '' : 'flex',mb:'50px',mt:'50px'}}
          size="small"
          onClick={handleAddProduct}
        >
          <AddIcon sx={{ color: 'white' }} />
        </StyledFab>
            </Box>}
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          </div>
          <div className="w-[30vw] hidden xl:block">
            <RightSideBar />
          </div>
        </div>
      </div>
      {/* Tablet / Mobile */}
      <div className="w-full xl:hidden bg-[#f0f1f3]">
        <RightSideBar />
      </div>
    </>
  );
};
