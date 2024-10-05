import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="70"
      width="70"
      color="#fc842d"
      secondaryColor="#ffd59e"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
      strokeWidth="5"
    />
  );
};
