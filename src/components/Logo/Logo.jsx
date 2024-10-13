import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import svg from '../../images/vector.svg';

export const Logo = () => {
  return (
    <div className="flex xl:pb-[10px] items-center">
      <Link to="/" className="flex">
        <img className="xl:w-[70px] w-[47px] m-0 p-0" src={logo} alt="logo" />

        <div className="md:flex xl:items-end items-center gap-[6px] xl:ml-[-12px] ml-[8px] hidden">
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
