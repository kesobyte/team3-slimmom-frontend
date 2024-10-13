import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider, Flex, Link } from '@chakra-ui/react';
import textLogo from '../assets/logo/textLogo.svg';

const Logo = () => {
  return (
    <Flex gap="20px" alignItems="center">
      <Link as={NavLink} to="/">
        <img src={textLogo} alt="Logo" width="166px" height="66px" />
      </Link>
      <Divider
        orientation="vertical"
        h="7"
        border="1px solid #9d9999"
        display={{ base: 'none', lg: 'block' }}
      />
    </Flex>
  );
};

export default Logo;
