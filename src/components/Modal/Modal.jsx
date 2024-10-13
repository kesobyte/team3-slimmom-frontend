import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';

import MainButton from 'components/Button/MainButton';
import LogoSmall from 'components/Logo/SmallLogo';

import {
  getDailyRate,
  getNotAllowedProducts,
} from 'redux/dailyRate/dailyRateSelectors';

import { BottomGradient, List, TopGradient } from './Modal.styled';
import { useNavigate } from 'react-router-dom/dist';
import GrayBar from 'components/GrayBar/GrayBar';

const ModalWindow = ({ overlay, isOpen, onClose }) => {
  const dailyRate = useSelector(getDailyRate);
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ xs: 'full', md: '2xl' }}
      >
        {overlay}
        <ModalContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="20px"
          >
            <LogoSmall />
            <Box display={{ md: 'none' }}>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/login"
                mr="16px"
              >
                SIGIN IN
              </Link>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/registration"
              >
                REGISTRATION
              </Link>
            </Box>
          </Box>
          {isOpen && <GrayBar onClick={onClose} />}
          <Box maxW="409px" mx="auto">
            <ModalHeader fontSize="26px" textAlign="center">
              Your recommended daily calorie intake is
            </ModalHeader>
          </Box>
          <ModalCloseButton size="sm" display={{ xs: 'none', md: 'block' }} />
          <ModalBody h="100%">
            <Box display="flex" justifyContent="center">
              <Text
                as="b"
                fontSize="48px"
                display="flex"
                alignItems="baseline"
                justifyContent="center"
                color="#264061"
              >
                {dailyRate}
                <Text fontSize="24px" ml="1">
                  kcal
                </Text>
              </Text>
            </Box>

            <Divider w={{ xs: 'none', md: '330px' }} mx="auto" />
            <Box
              position="relative"
              w={{ xs: 'none', md: '330px' }}
              mx="auto"
              display="flex"
              flexDirection="column"
              alignItems="start"
            >
              <Text
                as={'h3'}
                color="#212121"
                textAlign="center"
                w="100%"
                mt="12px"
                mb="20px"
              >
                Foods you should not eat
              </Text>
              <TopGradient />
              <List>
                {notAllowedProducts.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </List>
              <BottomGradient />
            </Box>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center" mb="81px">
            <MainButton text="Start losing weight" onClick={handleClick} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
