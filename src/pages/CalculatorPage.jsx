import React from 'react';

export const CalculatorPage = () => {
  return (
    <div className="flex xl:flex-row flex-col justify-between xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[20px] md:px-[32px] px-[20px] min-h-screen">
      <div className="w-[800px]">
        <p>CalculatorPage</p>
      </div>
      <div className="bg-slate-500 w-[300px] h-full min-h-screen">
        <div className="w-full bg-slate-500">
          <p>RightSideBar</p>
        </div>
      </div>
    </div>
  );
};
