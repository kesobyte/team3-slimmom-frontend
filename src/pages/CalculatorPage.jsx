import React from 'react';
import CalculatorForm from 'components/CalculatorForm/CalculatorForm.jsx';

export const CalculatorPage = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:flex-row flex-col xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[0px] md:px-[32px] px-[20px] min-h-full">
          <div>
            <CalculatorForm/>
          </div>
          <div className="w-[30vw] hidden xl:block">
            <p>RightSideBar</p>
          </div>
        </div>
      </div>
      {/* Tablet / Mobile */}
      <div className="w-full md:px-[32px] px-[20px] xl:hidden bg-[#f0f1f3]">
        <p>RightSideBar</p>
      </div>
    </>
  );
};
