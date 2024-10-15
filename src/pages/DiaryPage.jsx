import React, { useState } from 'react';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm';
import DiaryProductsList from 'components/Diary/DiaryProductsList';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Fab,
  Alert
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { styled } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getProfileUser } from '../redux/profile/selectors';
import { useNavigate } from 'react-router-dom';

const StyledFab = styled(Fab)({
  backgroundColor: '#FC842D',
  '&:hover': {
    backgroundColor: '#e67725',
  },
});

export const DiaryPage = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const userProfile = useSelector(getProfileUser);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const isProfileSetup = userProfile ?? false;

  const handleComponentClick = () => {
    if (!isProfileSetup) {
      setDialogOpen(true);
    }
  };
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:flex-row flex-col xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[0px] md:px-[32px] px-[20px] min-h-full">
          <div
            className={`md:w-[65vw] w-full ${!isProfileSetup ? 'opacity-50' : ''}`}
           
          >
            <Box  onClick={handleComponentClick}>
            {!open && <DiaryDateCalendar disabled={!isProfileSetup} />}
            {open && <DiaryAddProductForm disabled={!isProfileSetup} handleClose={handleClose} />}
            <div className="hidden md:block">
              <DiaryAddProductForm disabled={!isProfileSetup}/>
            </div>
            {!open && <DiaryProductsList disabled={!isProfileSetup}/>}
            {!open && isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <StyledFab
                  sx={{
                    display: isMobile ? '' : 'flex',
                    mb: '50px',
                    mt: '50px',
                  }}
                  size="small"
                  onClick={handleAddProduct}
                >
                  <AddIcon sx={{ color: 'white' }} />
                </StyledFab>
              </Box>
            )}
            
            </Box>
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
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
              <DialogTitle>Profile Not Set Up</DialogTitle>
              <DialogContent>
                <Alert severity="warning">Please set up your profile to access the Diary functionality.</Alert>
              </DialogContent>
              <DialogActions >
                <Button onClick={handleCloseDialog}>Close</Button>
                <Button
                   variant="contained"
                   sx={{ backgroundColor: '#FC842D' }}
                  onClick={() => {
                    navigate('/calculator');
                  }}
                >
                  Set Up Profile
                </Button>
              </DialogActions>
            </Dialog>

          </div>
          <div className="w-[35vw] hidden xl:block">
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
