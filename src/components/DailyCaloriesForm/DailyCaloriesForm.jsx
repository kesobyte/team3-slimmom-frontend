import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calorieIntake, setCalorieIntake] = useState(0);
  const [foodsToAvoid, setFoodsToAvoid] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!height || !age || !currentWeight || !desiredWeight) {
      toast.error('Please fill in all fields');
      return;
    }

    const recommendedCalorieIntake =
      10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight);
    setCalorieIntake(Math.round(recommendedCalorieIntake));

    // Dummy data for foods to avoid based on blood type
    const bloodTypeFoods = {
      1: ['Pork', 'Processed foods', 'Sugary drinks'],
      2: ['Red meat', 'Wheat', 'Dairy'],
      3: ['Chicken', 'Corn', 'Lentils'],
      4: ['Buckwheat', 'Corn', 'Kidney beans'],
    };
    setFoodsToAvoid(bloodTypeFoods[bloodType]);

    setIsModalOpen(true);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Your Daily Calorie Intake"
      >
        <DailyCalorieIntake
          calorieIntake={calorieIntake}
          foodsToAvoid={foodsToAvoid}
        />
      </Modal>
      <p className="text-[24px] font-bold text-dark text-center md:text-left">
        Calculate your daily calorie intake right now
      </p>
      <div>
        <form onSubmit={handleSubmit} className="mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] text-[14px] font-bold placeholder:text-textgray tracking-[0.56px] w-full md:max-w-[600px]">
            <input
              className="border-b-[1px] outline-0 pb-[10px]"
              type="number"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="Height (cm) *"
              required
            />
            <input
              className="border-b-[1px] outline-0 pb-[10px]"
              type="number"
              value={desiredWeight}
              onChange={e => setDesiredWeight(e.target.value)}
              placeholder="Desired weight (kg) *"
              required
            />
            <input
              className="border-b-[1px] outline-0 pb-[10px]"
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              placeholder="Age *"
              required
            />
            <div className="flex flex-col gap-[20px]">
              <label className="text-textgray">Blood type *</label>
              <div className="flex gap-[10px]">
                {[1, 2, 3, 4].map(type => (
                  <label key={type} className="flex items-center gap-[5px]">
                    <input
                      type="radio"
                      value={type}
                      checked={bloodType === type}
                      onChange={() => setBloodType(type)}
                      className="radio"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <input
              className="border-b-[1px] outline-0 pb-[10px]"
              type="number"
              value={currentWeight}
              onChange={e => setCurrentWeight(e.target.value)}
              placeholder="Current weight (kg) *"
              required
            />
          </div>
          <div className="flex justify-center md:justify-start mt-[60px]">
            <button
              type="submit"
              className="flex w-[250px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange"
            >
              Start losing weight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
