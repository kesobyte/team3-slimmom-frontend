import React from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserInfo /> : ''}
    </div>
  );
};
