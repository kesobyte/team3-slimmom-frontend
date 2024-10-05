import React, { useState } from 'react'


const CalculatorForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] =useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [DailyCalorie, setDailyCalorie] = useState('');

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
    setCurrentWeight(event.target.value);
  }
  const handleDesiredWeight = (event) => {
    setDesiredWeight(event.target.value);
  }

  const calculateBMR = (event) => {
    event.preventDefault();
    const caloriePerWeight= currentWeight*10;
    const caloriePerHeight= height*6.25;
    const caloriePerAge= age*5;
    const adjustCalorie= (desiredWeight-currentWeight)*10;
    const calculatedCalorie = caloriePerWeight + caloriePerHeight - caloriePerAge - 161 - adjustCalorie
    setDailyCalorie(calculatedCalorie);
  }

  return (
    <div>
      <form onSubmit={calculateBMR}>
        <ul>
          <li>
            <label htmlFor="userHeight">Height *
            </label><br/>
            <input type="text" id="userHeight" name="userHeight" onChange={handleHeightChange} value={height}/>
          </li>
          <li>
            <label htmlFor="desiredWeight">Desired weight *</label><br />
            <input type="text" id="desiredWeight" onChange={handleDesiredWeight} value={desiredWeight}/>
          </li>
          <li>
            <label htmlFor="age">Age *</label><br />
            <input type="text" id="age" onChange={handleAgeChange} value={age}/>
          </li>
          <li>
            <div>Blood type *<br />
              <input type="radio" name="blood" id="O" onChange={handleBloodTypeChange} value="1"/><label htmlFor="O">1 (O)</label>
              <input type="radio" name="blood" id="A" onChange={handleBloodTypeChange} value="2"/><label htmlFor="A">2 (A)</label>
              <input type="radio" name="blood" id="B" onChange={handleBloodTypeChange} value="3"/><label htmlFor="B">3 (B)</label>
              <input type="radio" name="blood" id="AB" onChange={handleBloodTypeChange} value="4"/><label htmlFor="AB">4 (AB)</label>
            </div>
          </li>
          <li>
            <label htmlFor="currentWeight">Current weight *</label><br />
            <input type="text" id="currentWeight" onChange={handleCurrentWeightChange} value={currentWeight}/>
          </li>
        </ul>
        <input type="submit" id="submit" />
      </form>
    </div>
  )
}

export default CalculatorForm