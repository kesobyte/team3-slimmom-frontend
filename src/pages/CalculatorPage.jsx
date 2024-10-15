import React from 'react';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm.jsx';

export const CalculatorPage = () => {
  return (
    <>
      <div className="flex max-w-[1400px] mx-auto">
        <div className="w-full xl:w-[65vw]">
        <CalculatorForm/>
        </div>        
        <div className="w-[35vw] hidden xl:block">
          <RightSideBar />
        </div>
      </div>
      {/* Tablet / Mobile */}
      <div className="w-full xl:hidden bg-[#f0f1f3]">
        <RightSideBar />
      </div>
    </>
  );
};
