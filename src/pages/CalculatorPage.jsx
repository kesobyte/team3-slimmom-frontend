import React from 'react';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

export const CalculatorPage = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex xl:flex-row flex-col xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[0px] md:px-[32px] px-[20px] min-h-full">
          <div className="w-[65vw]">
            <p>CalculatorPage</p>
          </div>
          <div className="w-[30vw] hidden xl:block">
            <RightSideBar />
          </div>
        </div>
      </div>
      {/* Tablet / Mobile */}
      <div className="w-full xl:hidden bg-[#f0f1f3]">
        <RightSideBar />
      </div>
    </>
  );
};
