import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import svg from '../../images/vector.svg';

export const Logo = () => {
  return (
    <div className="flex pb-[10px] items-center">
      <Link to="/" className="flex">
        <img className="w-[70px] m-0 p-0" src={logo} alt="logo" />

        <div className="flex items-end gap-[6px] ml-[-12px]">
          <svg width={49} height={17}>
            <use href={`${svg}#slim`}></use>
          </svg>
          <svg width={54} height={16}>
            <use href={`${svg}#mom`}></use>
          </svg>
        </div>
      </Link>
    </div>
  );
};
