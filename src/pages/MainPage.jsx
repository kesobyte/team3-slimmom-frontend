import React from 'react';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

export const MainPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[20px] md:px-[32px] px-[20px]">
        <DailyCaloriesForm />
      </div>
    </div>
  );
};
