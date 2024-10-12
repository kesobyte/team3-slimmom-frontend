import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CalculatorForm = () => {
  // const dispatch=useDispatch();
  const [bloodType, setBloodType] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [cWeight, setCWeight] =useState('');
  const [dWeight, setDWeight] = useState('');
  const [dailyCalorie, setDailyCalorie] = useState('');

  const handleBloodTypeChange = (event) => {
    setBloodType(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  const handleCurrentWeightChange = (event) => {
    setCWeight(event.target.value);
  }
  const handleDesiredWeight = (event) => {
    setDWeight(event.target.value);
  }
  
  const caloriePerWeight= cWeight*10;
  const caloriePerHeight= height*6.25;
  const caloriePerAge= age*5;
  const adjustCalorie= (cWeight-dWeight)*10;

  const calculatedCalorie=()=> {
    const calorieSum = caloriePerWeight + caloriePerHeight - caloriePerAge - 161 - adjustCalorie
    setDailyCalorie(calorieSum);
  }

  
  const calculateBMR = (event) => {
    event.preventDefault();


  }

  return (
    <div>
      <h1>Calculate your daily calorie intake right now</h1>
      <form onSubmit={calculateBMR}>
        <ul>
          <li>
            <label htmlFor="userHeight">Height(cm) *
            </label><br/>
            <input type="text" id="userHeight" name="userHeight" onChange={handleHeightChange} value={height}/>
          </li>
          <li>
            <label htmlFor="dWeight">Desired weight(kg) *</label><br />
            <input type="text" id="dWeight" onChange={handleDesiredWeight} value={dWeight}/>
          </li>
          <li>
            <label htmlFor="age">Age(years) *</label><br />
            <input type="text" id="age" onChange={handleAgeChange} value={age}/>
          </li>
          <li>
            <div>Blood type *<br />
              <input type="radio" name="blood" id="A" onChange={handleBloodTypeChange} value="1"/><label htmlFor="A">1 (A)</label>
              <input type="radio" name="blood" id="B" onChange={handleBloodTypeChange} value="2"/><label htmlFor="B">2 (B)</label>
              <input type="radio" name="blood" id="AB" onChange={handleBloodTypeChange} value="3"/><label htmlFor="AB">3 (AB)</label>
              <input type="radio" name="blood" id="O" onChange={handleBloodTypeChange} value="4"/><label htmlFor="O">4 (O)</label>
            </div>
          </li>
          <li>
            <label htmlFor="cWeight">Current weight(kg) *</label><br />
            <input type="text" id="cWeight" onChange={handleCurrentWeightChange} value={cWeight}/>
          </li>
        </ul>
        <button type="submit">Start losing weight</button>
      </form>
      <Modal bloodType={bloodType} age={age} height={height} cWeight={cWeight} dWeight={dWeight} dailyCalorie={dailyCalorie} isHidden/>
    </div>
  )
}

export default CalculatorForm