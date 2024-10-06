import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="w-max uppercase text-[14px] font-bold leading-none">
      {!isLoggedIn ? (
        <div className="flex items-end gap-[24px]">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'text-black' : ' text-textgray'
            }
          >
            Log in
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'text-black' : ' text-textgray'
            }
          >
            Registration
          </NavLink>
        </div>
      ) : (
        <div className="flex items-end gap-[24px]">
          <NavLink
            to="/diary"
            className={({ isActive }) =>
              isActive ? 'text-black' : ' text-textgray'
            }
          >
            Diary
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              isActive ? 'text-black' : ' text-textgray'
            }
          >
            Calculator
          </NavLink>
        </div>
      )}
    </div>
  );
};
