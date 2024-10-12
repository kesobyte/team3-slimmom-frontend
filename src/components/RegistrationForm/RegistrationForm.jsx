import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

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
    <div>
      <p className="text-[14px] font-bold text-orange tracking-[0.56px] uppercase">
        Register
      </p>
      <form onSubmit={handleSubmit} className=" mt-[60px]">
        <div className="flex flex-col gap-[40px] text-[14px] font-bold placeholder:text-textgray tracking-[0.56px] w-[250px]">
          <input
            className="border-b-[1px] outline-0 pb-[20px]"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name *"
            required
          />
          <input
            className="border-b-[1px] outline-0 pb-[20px]"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email *"
            required
          />
          <input
            className="border-b-[1px] outline-0 pb-[20px]"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password *"
            required
          />
        </div>
        <div className="flex gap-[32px] mt-[60px]">
          <button
            type="submit"
            className="flex w-[182px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
          <NavLink to="/login">
            <button
              type="submit"
              className="flex w-[182px] py-[13px] px-[37px] bg-white items-center justify-center rounded-[30px] border-[1px] border-orange text-orange font-bold text-[14px] hover:bg-orange hover:text-white"
              disabled={isLoading}
            >
              Login
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
