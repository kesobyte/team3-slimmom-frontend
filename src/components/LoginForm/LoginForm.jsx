import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BtnLoader } from 'components/BtnLoader/BtnLoader';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
            className="border-b-[1px] focus:border-orange outline-0 pb-[20px]"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email *"
          />
          <div className="relative">
            <input
              className="border-b-[1px] focus:border-orange outline-0 pb-[20px] w-full"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password *"
            />
            {/* Toggle button to show or hide password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-[15px] right-2 top-3 transform -translate-y-1/2 text-gray-500 hover:text-orange"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[32px] mt-[60px]">
          <button
            type="submit"
            className="flex w-[182px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange"
            disabled={isLoading}
          >
            {isLoading ? <BtnLoader color="#fff" /> : 'Login'}
          </button>
          <Link to="/register">
            <button
              type="button"
              className="flex w-[182px] py-[13px] px-[37px] bg-white items-center justify-center rounded-[30px] border-[2px] border-orange text-orange font-bold text-[14px] hover:bg-orange hover:text-white"
              disabled={isLoading}
            >
              Register
            </button>
          </Link>
        </div>
      </form>

      <div>
        <Link to="/verify">
          <p className="text-[12px] underline hover:text-orange cursor-pointer mt-[20px] flex justify-center md:justify-normal">
            Resend verification email
          </p>
        </Link>
      </div>
    </div>
  );
};
