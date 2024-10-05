import React from 'react';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <div>
      <Logo />
      <Navigation />
    </div>
  );
};
