import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div>
          <Link to="/diary">Diary</Link>
          <Link to="/calculator">Calculator</Link>
        </div>
      )}
    </div>
  );
};
