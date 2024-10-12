import React from 'react';
import { useDispatch } from 'react-redux';
import svg from '../../images/vector.svg';
import { logout } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    isLoggedIn && (
      <div className="flex items-center gap-[20px] text-[14px] font-bold">
        <p>{user?.name || 'User'}</p>
        <svg height={32} width={2}>
          <use href={`${svg}#short-line`}></use>
        </svg>
        <button
          className="text-textgray hover:text-orange"
          onClick={handleLogout}
        >
          Exit
        </button>
      </div>
    )
  );
};
