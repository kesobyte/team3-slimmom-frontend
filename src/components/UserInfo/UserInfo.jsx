import React from 'react';
import svg from '../../images/vector.svg';

export const UserInfo = () => {
  return (
    <div className="flex items-center gap-[20px] text-[14px] font-bold">
      <p className="">User</p>
      <svg height={32} width={2}>
        <use href={`${svg}#short-line`}></use>
      </svg>
      <button className="text-textgray hover:text-orange">Exit</button>
    </div>
  );
};
