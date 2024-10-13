import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import smallLogo from '../assets/logo/smallLogo.svg';

const SmallLogo = () => {
  return (
    <Link as={NavLink} to="/" mb="1" display={{ md: 'none' }}>
      <img src={smallLogo} alt="Logo" width="47px" height="44px" />
    </Link>
  );
};

export default SmallLogo;
