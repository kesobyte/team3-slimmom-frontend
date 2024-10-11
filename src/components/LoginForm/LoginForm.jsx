// LoginForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {isLoading && <Loader />}
    </form>
  );
};
