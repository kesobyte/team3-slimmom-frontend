import { Button } from '@chakra-ui/react';

const MainButton = ({ type, id, onClick, text, isOpen }) => {
  return (
    <Button
      type={type}
      id={id}
      onClick={onClick}
      minW="181px"
      w="min-content"
      py="13px"
      px="25px"
      open={isOpen}
      background="#FC842D"
      color="#FFFFFF"
      boxShadow="0px 4px 10px rgba(252, 132, 45, 0.5)"
      rounded="30px"
      _hover={{ background: '#c0580f' }}
    >
      {text}
    </Button>
  );
};

export default MainButton;
