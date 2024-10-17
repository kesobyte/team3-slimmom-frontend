import React, { useState } from 'react';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryAddProductForm from 'components/Diary/DiaryAddProductForm';
import DiaryProductsList from 'components/Diary/DiaryProductsList';
import DiaryDateCalendar from 'components/Diary/DiaryDateCalendar';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Add as AddIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getProfileUser, getProfileLoading } from '../redux/profile/selectors';
import { useNavigate } from 'react-router-dom';
import image from '../images/leave-tab.png';
import { BtnLoader } from 'components/BtnLoader/BtnLoader';

const StyledFab = styled(Button)({
  backgroundColor: '#FC842D',
  '&:hover': {
    backgroundColor: '#e67725',
  },
  color: 'white',
  borderRadius: '50%',
  minWidth: 56,
  height: 56,
  padding: 0,
});

const StyledButton = styled(Button)({
  backgroundColor: '#FC842D',
  '&:hover': {
    backgroundColor: '#e67725',
  },
  color: 'white',
  width: '200px',
  padding: '10px 20px',
  boxShadow: '0px 4px 15px rgba(255, 107, 1, 0.5)',
  borderRadius: '30px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontFamily: 'Verdana',
  fontSize: '14px',
});

export const DiaryPage = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const userProfile = useSelector(getProfileUser);
  const navigate = useNavigate();
  const isProfileLoading = useSelector(getProfileLoading);

  const handleAddProduct = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isProfileSetup = userProfile ?? false;

  if (isProfileLoading) {
    return (
      <div className="h-[70vh] w-[100vw] flex justify-center items-center">
        <BtnLoader color="orange" />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:flex-row flex-col xl:pt-[160px] md:pt-[100px] pt-[32px] px-[20px] md:px-[32px] xl:px-[32px] min-h-full">
          <div className="md:w-[65vw] w-full">
            {!isProfileSetup ? (
              <Box display="flex" flexDirection="column" mb={4}>
                <Typography variant="standard" gutterBottom>
                  Profile is not yet created. Please calculate your recommended
                  calorie first.
                </Typography>
                <StyledButton
                  sx={{ mt: 2 }}
                  onClick={() => navigate('/calculator')}
                >
                  Set up profile
                </StyledButton>
              </Box>
            ) : (
              <Box>
                {!open && <DiaryDateCalendar />}
                {open && <DiaryAddProductForm handleClose={handleClose} />}
                <div className="hidden sm:block">
                  <DiaryAddProductForm />
                </div>
                {!open && <DiaryProductsList />}
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
            )}
          </div>
          <div className="w-[35vw] hidden xl:block">
            <RightSideBar />
          </div>
        </div>
      </div>
      {/* Tablet / Mobile */}
      <div
        className="w-full xl:hidden bg-[#f0f1f3] -z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '300px',
        }}
      >
        <RightSideBar />
      </div>
    </>
  );
};
