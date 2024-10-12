import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BtnLoader } from 'components/BtnLoader/BtnLoader';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email.trim()) {
      toast.warning('Email is required');
      return;
    }
    if (!password.trim()) {
      toast.warning('Password is required');
      return;
    }

    dispatch(login({ email, password }));
  };

  return (
    <div>
      <ToastContainer />
      <p className="flex md:justify-start justify-center text-[14px] font-bold text-orange tracking-[0.56px] uppercase">
        Login
      </p>
      <form onSubmit={handleSubmit} className="mt-[60px]">
        <div className="flex flex-col gap-[40px] text-[14px] font-bold placeholder:text-textgray tracking-[0.56px] w-full md:max-w-[300px]">
          <input
            className="border-b-[1px] outline-0 pb-[20px]"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email *"
          />
          <input
            className="border-b-[1px] outline-0 pb-[20px]"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password *"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[32px] mt-[60px]">
          <button
            type="submit"
            className="flex w-[182px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange"
            disabled={isLoading}
          >
            {isLoading ? <BtnLoader color="#fff" /> : 'Login'}
          </button>
          <NavLink to="/register">
            <button
              type="submit"
              className="flex w-[182px] py-[13px] px-[37px] bg-white items-center justify-center rounded-[30px] border-[1px] border-orange text-orange font-bold text-[14px] hover:bg-orange hover:text-white"
              disabled={isLoading}
            >
              Register
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
