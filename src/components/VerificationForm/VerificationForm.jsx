import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resendVerifyEmail } from '../../redux/auth/authOperations';
import { getIsLoading } from '../../redux/auth/selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BtnLoader } from 'components/BtnLoader/BtnLoader';

export const VerificationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!email.trim()) {
      toast.warning('Email is required');
      return;
    }

    dispatch(resendVerifyEmail(email));
  };

  return (
    <div>
      <ToastContainer />
      <p className="flex md:justify-start justify-center text-[14px] font-bold text-orange tracking-[0.56px] uppercase">
        Resend Email Verification
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
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[32px] mt-[60px]">
          <button
            type="submit"
            className="flex w-[250px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange"
            disabled={isLoading}
          >
            {isLoading ? <BtnLoader color="#fff" /> : 'Resend Verification'}
          </button>
        </div>
      </form>
    </div>
  );
};
