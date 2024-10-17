import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Autocomplete,
  TextField,
  Fab,
  Box,
  InputAdornment,
  CircularProgress,
  Button,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { styled } from '@mui/system';
import { addToDiary } from '../../redux/diary/diaryOperations';
import { searchProducts } from '../../redux/product/productOperation';
import { getProductLoading, getProducts } from '../../redux/product/selector';
import { toast } from 'react-toastify';
import { useMediaQuery, useTheme } from '@mui/material';
import debounce from 'lodash/debounce';

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiInputBase-root': {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.42)',
    '&:hover': {
      borderBottomColor: '#FC842D',
    },
    '&.Mui-focused': {
      borderBottomColor: '#FC842D',
    },
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none',
  },
  '& .MuiInputLabel-root': {
    color: '#FC842D',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FC842D',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.42)',
    '&:hover': {
      borderBottomColor: '#FC842D',
    },
    '&.Mui-focused': {
      borderBottomColor: '#FC842D',
    },
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none',
  },
  '& .MuiInputLabel-root': {
    color: '#FC842D',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FC842D',
  },
});

const StyledFab = styled(Fab)({
  backgroundColor: '#FC842D',
  '&:hover': {
    backgroundColor: '#e67725',
  },
});

const DiaryAddProductForm = ({ handleClose, disabled = false }) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [grams, setGrams] = useState('');
  const searchResults = useSelector(getProducts);
  const isLoading = useSelector(getProductLoading);
  const selectedDate = useSelector(state => state.diary.selectedDate);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle product search with debounce and cleanup
  const handleProductSearch = debounce((event, newInputValue) => {
    if (newInputValue.length > 2) {
      dispatch(searchProducts(newInputValue)).catch(error => {
        toast.error('Failed to search products');
      });
    }
  }, 500);

  // Cleanup the debounce function
  useEffect(() => {
    return () => {
      handleProductSearch.cancel(); // cleanup on unmount
    };
  }, [handleProductSearch]);

  // Handle adding product to the diary
  const handleAddProduct = () => {
    if (selectedProduct && grams) {
      dispatch(
        addToDiary({
          date: selectedDate,
          grams: parseInt(grams),
          product: selectedProduct,
        })
      )
        .unwrap()
        .then(() => {
          toast.success('Product added successfully!');
          setSelectedProduct(null);
          setGrams('');
        })
        .catch(error => {
          toast.error(`Failed to add product: ${error.message}`);
        });
    } else {
      toast.warn('Please select a product and enter the grams.');
    }
  };

  return (
    <Box
      display="flex"
      alignItems="flex-end"
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      width="100%"
      position="relative"
      pt={isMobile ? '50px' : 0}
    >
      {/* Back button for mobile */}
      {isMobile && (
        <Box
          display="flex"
          onClick={handleClose}
          alignItems="center"
          position={'absolute'}
          top={'-60px'}
          zIndex={99}
        >
          <KeyboardReturnIcon fontSize="medium" />
        </Box>
      )}

      {/* Product Search Autocomplete */}
      <StyledAutocomplete
        options={searchResults}
        getOptionLabel={option => option.title}
        renderOption={(props, option) => (
          <li {...props} key={option._id}>
            {option.title}
          </li>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Enter product name"
            variant="standard"
            sx={{ width: isTablet ? '100%' : '240px' }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        value={selectedProduct}
        onChange={(event, newValue) => {
          if (newValue !== selectedProduct) {
            setSelectedProduct(newValue); // Update only when necessary
          }
        }}
        onInputChange={(event, newInputValue) =>
          handleProductSearch(event, newInputValue)
        }
        sx={{ width: isTablet ? '100%' : '240px', mr: isTablet ? 3 : 6 }}
      />

      {/* Grams Input */}
      <Box
        display="flex"
        alignItems="flex-end"
        width={isTablet ? '100%' : 'auto'}
      >
        <StyledTextField
          label="Grams"
          variant="standard"
          value={grams}
          onChange={e => setGrams(e.target.value)}
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          }}
          sx={{
            width: isMobile ? '100%' : isTablet ? 'calc(100% - 56px)' : 100,
            mr: 2,
          }}
        />

        {/* Add Button */}
        {!isMobile && (
          <StyledFab
            size="small"
            onClick={handleAddProduct}
            disabled={disabled}
          >
            <AddIcon sx={{ color: 'white' }} />
          </StyledFab>
        )}
      </Box>

      {/* Add Button for mobile */}
      {isMobile && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: isMobile ? '100vh' : '0',
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FC842D',
              borderRadius: '30px',
              width: '176px',
              height: '44px',
              fontWeight: 'bold',
            }}
            disabled={disabled}
            onClick={handleAddProduct}
          >
            Add
          </Button>
        </Box>
      )}
    </Box>
  );
};

// PropTypes for validation
DiaryAddProductForm.propTypes = {
  handleClose: PropTypes.func,
  disabled: PropTypes.bool,
};

export default DiaryAddProductForm;
