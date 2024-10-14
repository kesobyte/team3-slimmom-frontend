import React, { useState } from 'react';
import {
  ListItem,
  TextField,
  IconButton,
  Box,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { deleteDiaryEntry } from '../../redux/product/productsOperations';
import { toast } from 'react-toastify';
import { useMediaQuery, useTheme } from '@mui/material';
const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'rgba(0, 0, 0, 0.42)',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'rgba(0, 0, 0, 0.87)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
});

// Styled ListItem with no left padding
const StyledListItem = styled(ListItem)({
  paddingLeft: 0,
});

const DiaryProductsListItem = ({ product }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    dispatch(deleteDiaryEntry(product._id))
      .unwrap()
      .then(() => {
        toast.success('Product deleted successfully');
        handleCloseDialog();
      })
      .catch(error => {
        toast.error(`Error deleting product: ${error.message}`);
        handleCloseDialog();
      });
  };
  return (
    <>
      <StyledListItem>
        <Box display="flex" alignItems="center" width="100%">
          <StyledTextField
            variant="standard"
            value={product.title}
            InputProps={{ readOnly: true }}
            sx={{
              width: isMobile ? '40%' : isTablet ? 'auto' : '240px',
              mr: isMobile ? 1 : isTablet ? 3 : 6,
              minWidth: isMobile ? '80px' : 'auto',
            }}
          />
          <StyledTextField
            variant="standard"
            value={product.grams}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
              inputProps: { style: { textAlign: 'right' } },
            }}
            sx={{
              width: isMobile ? '30%' : '100px',
              mr: isMobile ? 1 : isTablet ? 2 : 4,
              minWidth: isMobile ? '60px' : 'auto',
            }}
          />
          <StyledTextField
            variant="standard"
            value={product.calorieIntake}
            InputProps={{
              readOnly: true,

              endAdornment: (
                <InputAdornment position="end">kcal</InputAdornment>
              ),
              inputProps: { style: { textAlign: 'right' } },
            }}
            sx={{
              width: isMobile ? '30%' : '100px',
              mr: isMobile ? 0 : isTablet ? 1 : 2,
              minWidth: isMobile ? '70px' : 'auto',
            }}
          />
          <IconButton
            onClick={handleOpenDialog}
            size="small"
            sx={{
              ml: isMobile ? 1 : 'auto',
              minWidth: isMobile ? '24px' : 'auto',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </StyledListItem>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Deletion'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product from your diary?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="text">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{ backgroundColor: '#FC842D' }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DiaryProductsListItem;
