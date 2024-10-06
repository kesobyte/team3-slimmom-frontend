import React from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import svg from '../../images/vector.svg';

export const Header = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="flex pt-[80px] justify-between">
      <div className="flex gap-[20px]">
        <Logo />
        <div className="flex items-end">
          <svg width={2} height={32}>
            <use href={`${svg}#short-line`} />
          </svg>
        </div>
        <div className="flex items-end pb-[10px]">
          <Navigation />
        </div>
      </div>
      <div className="flex items-end">{isLoggedIn ? <UserInfo /> : ''}</div>
    </div>
  );
};
