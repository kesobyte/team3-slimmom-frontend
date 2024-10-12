import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const BtnLoader = ({ color }) => {
  return (
    <ThreeDots
      visible={true}
      height="20"
      width="45"
      color={color}
      ariaLabel="three-dots-loading"
    />
  );
};
