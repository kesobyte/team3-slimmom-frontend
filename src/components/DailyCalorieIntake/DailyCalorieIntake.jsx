import React from 'react';
import { Link } from 'react-router-dom';

export const DailyCalorieIntake = ({ calorieIntake, foodsToAvoid }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Recommended Calorie Intake</h3>
      <p className="text-base mb-4">
        Your daily recommended calorie intake is{' '}
        <strong>{calorieIntake} kcal</strong>.
      </p>
      <h4 className="text-md font-semibold mb-2">Foods to Avoid:</h4>
      <ul className="list-disc list-inside">
        {foodsToAvoid.map((food, index) => (
          <li key={index} className="text-sm mb-1">
            {food}
          </li>
        ))}
      </ul>
      <Link to="/login">
        <button>Start losing weight</button>
      </Link>
    </div>
  );
};

export default DailyCalorieIntake;
