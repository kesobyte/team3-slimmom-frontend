import React from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import svg from '../../images/vector.svg';

export const Header = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="flex xl:pt-[80px] justify-between">
      <div className="flex w-full px-[32px] py-[16px] xl:p-0 border-b-[2px] xl:border-none justify-between xl:gap-[20px] xl:w-auto">
        <Logo />
        <div className="hidden xl:flex xl:items-end">
          <svg width={2} height={32}>
            <use href={`${svg}#short-line`} />
          </svg>
        </div>
        <div className="flex items-center xl:items-end xl:pb-[10px]">
          <Navigation />
        </div>
      </div>
      <div className="flex items-end">{isLoggedIn ? <UserInfo /> : ''}</div>
    </div>
  );
};
