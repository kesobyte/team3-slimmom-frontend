import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
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
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {isLoading && <Loader />}
    </form>
  );
};
