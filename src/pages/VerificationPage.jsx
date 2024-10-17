import React from 'react';
import { VerificationForm } from 'components/VerificationForm/VerificationForm';

export const VerificationPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[32px] md:px-[32px] px-[20px]">
        <VerificationForm />
      </div>
    </div>
  );
};
