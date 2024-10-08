import React from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';
import svg from '../../images/vector.svg';

export const Header = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:pt-[80px] justify-between border-b-[2px] xl:border-none">
          <div className="flex w-full md:px-[32px] md:pt-[16px] md:pb-[8px] p-[20px] xl:p-0  justify-between xl:gap-[20px] xl:w-auto">
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
          <div className="md:flex xl:items-end items-center xl:mr-0 mr-[100px] hidden">
            <div>{isLoggedIn ? <UserInfo /> : ''}</div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-[#EFF1F3] flex justify-end px-[15px]">
        <div>{isLoggedIn ? <UserInfo /> : ''}</div>
      </div>
    </>
  );
};
