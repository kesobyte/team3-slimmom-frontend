import { Button, Icon } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

export default function AddButton({ type, onClick }) {
  return (
    <Button
      display="flex"
      justifyContent="center"
      type={type}
      onClick={onClick}
      w="48px"
      h="48px"
      rounded="50%"
      background="#FC842D"
      boxShadow="0px 4px 10px rgba(252, 132, 45, 0.5)"
      _hover={{ background: '#c0580f' }}
    >
      <Icon w="23px" h="23px" color="#ffffff" as={BsPlus} />
    </Button>
  );
}
