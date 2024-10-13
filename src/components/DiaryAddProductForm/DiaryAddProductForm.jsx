import { FormControl, Box } from '@chakra-ui/react';

import InputField from 'components/InputField/InputField';
import AddButton from 'components/Button/AddButton';

export default function DiaryAddProductForm() {
  const handleInputChange = e => {
    console.log(e);
  };
  return (
    <FormControl
      display={{ xs: 'none', md: 'flex' }}
      alignItems="center"
      gap={{ md: '22px', lg: '48px' }}
    >
      <Box w="240px">
        <InputField
          labelName="Enter product name"
          width="100%"
          handlerEvent={handleInputChange}
        />
      </Box>
      <Box w={{ md: '106px', lg: '107px' }}>
        <InputField
          labelName="Grams"
          width="100%"
          handlerEvent={handleInputChange}
        />
      </Box>
      <AddButton type="submit" />
    </FormControl>
  );
}
