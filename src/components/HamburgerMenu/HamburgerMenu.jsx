import { NavLink } from 'react-router-dom';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import textLogo from '../assets/logo/textLogo.svg';
import UserMenu from 'components/UserMenu/UserMenu';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      {!isOpen && (
        <IconButton
          bgColor="transparent"
          aria-label="Open Menu"
          size="sm"
          icon={<HamburgerIcon />}
          display={{ lg: 'none' }}
          onClick={() => {
            onOpen();
          }}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="full" motionPreset="none">
        <ModalContent>
          <ModalHeader
            pt="21px"
            fontWeight="normal"
            fontSize="16px"
            borderBottom="2px solid #E0E0E0"
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <NavLink to="/">
              <img src={textLogo} alt="logo" />
            </NavLink>
            <Flex>
              <Box display={{ xs: 'none', md: 'flex' }} mr="53px">
                <UserMenu />
              </Box>
              <IconButton
                aria-label="Close Button"
                bgColor="transparent"
                size="sm"
                icon={<CloseIcon />}
                onClick={() => {
                  onClose();
                }}
              />
            </Flex>
          </ModalHeader>
          <ModalBody bgColor="#264061">
            <Flex
              textAlign="center"
              flexDir="column"
              gap="5"
              mt={{ xs: '60px', md: '100px' }}
            >
              <Box>
                <Link
                  _hover={{ textDecor: 'none', color: '#9B9FAA' }}
                  fontFamily="-moz-initial"
                  fontSize="18px"
                  as={NavLink}
                  to="/calculator"
                  mr="16px"
                  color="#FFFFFF"
                  onClick={onClose}
                >
                  CALCULATOR
                </Link>
              </Box>
              <Box>
                <Link
                  _hover={{ textDecor: 'none', color: '#9B9FAA' }}
                  fontFamily="-moz-initial"
                  fontSize="18px"
                  as={NavLink}
                  to="/diary"
                  color="#FFFFFF"
                  onClick={onClose}
                >
                  DIARY
                </Link>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default HamburgerMenu;
