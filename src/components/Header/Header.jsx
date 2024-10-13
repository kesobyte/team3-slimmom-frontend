import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Box, Flex, Link } from '@chakra-ui/react';

import { authSelectors } from 'redux/auth/authSelectors';
import SmallLogo from 'components/Logo/SmallLogo';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import GrayBar from 'components/GrayBar/GrayBar';

const Header = () => {
  const isLogin = useSelector(authSelectors.isLoggedIn);

  const getStyle = ({ isActive }) =>
    isActive ? { color: '#212121' } : { color: '#9B9FAA' };

  return (
    <>
      <Flex
        position="absolute"
        top="0"
        left="0"
        w="100%"
        p="20px"
        zIndex="100"
        justifyContent="space-between"
        borderBottom={{
          base: '2px solid #E0E0E0',
          lg: 'none',
        }}
      >
        {!isLogin ? (
          <Flex
            alignItems="center"
            gap="20px"
            w="100%"
            justifyContent={{ xs: 'space-between', lg: 'flex-start' }}
          >
            <Box>
              <Flex display={{ xs: 'none', md: 'flex' }}>
                <Logo />
              </Flex>
              <Flex display={{ xs: 'flex', md: 'none' }}>
                <SmallLogo />
              </Flex>
            </Box>
            <Flex gap="20px">
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/login"
                style={getStyle}
              >
                SIGIN IN
              </Link>
              <Link
                _hover={{ textDecor: 'none' }}
                fontFamily="-moz-initial"
                fontSize="14px"
                as={NavLink}
                to="/registration"
                style={getStyle}
              >
                REGISTRATION
              </Link>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" w="100%">
            <Flex alignItems="center" gap="20px">
              <Logo />
              <Flex display={{ xs: 'none', lg: 'flex' }} gap="16px">
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontFamily="-moz-initial"
                  fontSize="14px"
                  as={NavLink}
                  to="/calculator"
                  style={getStyle}
                >
                  CALCULATOR
                </Link>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontFamily="-moz-initial"
                  fontSize="14px"
                  as={NavLink}
                  to="/diary"
                  style={getStyle}
                >
                  DIARY
                </Link>
              </Flex>
            </Flex>

            <Flex display="flex" alignItems="center">
              <Box display={{ xs: 'none', md: 'flex' }} mr="53px">
                <UserMenu />
              </Box>
              <HamburgerMenu />
            </Flex>
          </Flex>
        )}
        <Box position="absolute" bottom="-42px" left="0" w="100%">
          <GrayBar />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
