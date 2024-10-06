import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="pb-[8px]" src={logo} alt="logo" width={167} />
      </Link>
    </div>
  );
};
