import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import svg from '../../images/vector.svg';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:pt-[80px] justify-between border-b-[2px] xl:border-none px-0 xl:px-[32px]">
          <div className="flex w-full md:pl-[32px] md:py-[16px] md:pb-[8px] p-[20px] xl:p-0 justify-between xl:gap-[20px] xl:w-auto">
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

          {/* Tablet and desktop user info */}
          <div className="xl:items-end items-center md:flex hidden">
            <div className="xl:mr-0 mr-[32px]">
              {isLoggedIn ? <UserInfo /> : ''}
            </div>
            {isLoggedIn ? (
              <div className="flex items-center justify-center mr-[32px] xl:hidden">
                <button onClick={toggleMenu}>
                  <svg width={24} height={24}>
                    <use
                      href={`${svg}${
                        isMenuOpen ? '#close-icon' : '#burger-icon'
                      }`}
                    ></use>
                  </svg>
                </button>
              </div>
            ) : (
              ''
            )}
          </div>

          {/* Mobile burger menu */}
          {isLoggedIn ? (
            <div className="flex items-center justify-center mr-[20px] md:hidden">
              <button onClick={toggleMenu}>
                <svg width={24} height={24}>
                  <use
                    href={`${svg}${
                      isMenuOpen ? '#close-icon' : '#burger-icon'
                    }`}
                  ></use>
                </svg>
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* Mobile view user info below header */}
      <div className="md:hidden bg-[#EFF1F3] flex justify-end px-[15px]">
        {isLoggedIn ? <UserInfo /> : ''}
      </div>

      {/* BurgerMenu */}
      {isMenuOpen && (
        <div className="fixed md:top-[70px] top-[85px] left-0 w-full h-full bg-[#264061] animate-slideIn z-50">
          <div className="flex flex-col items-center gap-[24px] uppercase text-[24px] font-bold md:pt-[100px] pt-[60px]">
            <NavLink
              to="/diary"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-white' : ' text-[#9B9FAA]'
              }
            >
              Diary
            </NavLink>
            <NavLink
              to="/calculator"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-white' : ' text-[#9B9FAA]'
              }
            >
              Calculator
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
