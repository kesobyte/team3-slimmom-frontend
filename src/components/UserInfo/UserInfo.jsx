import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import svg from '../../images/vector.svg';
import { logout } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import Notiflix from 'notiflix';
import { getIsLoading } from '../../redux/auth/selectors';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();
  const isLoading = useSelector(getIsLoading);

  // Customize Notiflix Prompt and Loading styles
  Notiflix.Confirm.init({
    titleColor: '#FC842D',
    okButtonBackground: '#FC842D',
    cancelButtonBackground: '#CCCCCC',
  });

  Notiflix.Loading.init({
    svgColor: '#FC842D',
  });

  useEffect(() => {
    if (!isLoading) {
      Notiflix.Loading.remove();
    }
  }, [isLoading]);

  const handleLogout = () => {
    Notiflix.Confirm.show(
      'Confirm Logout',
      'Are you sure you want to logout?',
      'Yes',
      'No',
      () => {
        Notiflix.Loading.standard('Logging out...');
        dispatch(logout())
          .then(() => {
            Notiflix.Loading.remove();
          })
          .catch(() => {
            Notiflix.Loading.remove();
          });
        dispatch(logout());
      }
    );
  };

  return (
    isLoggedIn && (
      <div className="flex items-center gap-[20px] text-[14px] font-bold cursor-default">
        <p className="text-nowrap">{user?.name || 'User'}</p>
        <svg height={32} width={2}>
          <use href={`${svg}#short-line`}></use>
        </svg>
        <button
          className="text-textgray hover:text-orange cursor-pointer"
          onClick={handleLogout}
          disabled={isLoading}
        >
          Exit
        </button>
      </div>
    )
  );
};
