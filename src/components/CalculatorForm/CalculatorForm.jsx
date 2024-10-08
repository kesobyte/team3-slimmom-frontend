import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CalculatorForm = () => {
  // const dispatch=useDispatch();
  const [bloodType, setBloodType] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [cWeight, setCWeight] =useState('');
  const [dWeight, setDWeight] = useState('');

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

  const calculatedCalorie=()=> {
    return caloriePerWeight + caloriePerHeight - caloriePerAge - 161 - adjustCalorie
  }

  const caloriePerWeight= cWeight*10;
  const caloriePerHeight= height*6.25;
  const caloriePerAge= age*5;
  const adjustCalorie= (cWeight-dWeight)*10;
  
  const calculateBMR = (event) => {
    event.preventDefault();

    console.log(calculatedCalorie(), caloriePerWeight, caloriePerHeight, caloriePerAge, adjustCalorie);
  }

  return (
    <div>
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
              <input type="radio" name="blood" id="O" onChange={handleBloodTypeChange} value="1"/><label htmlFor="O">1 (O)</label>
              <input type="radio" name="blood" id="A" onChange={handleBloodTypeChange} value="2"/><label htmlFor="A">2 (A)</label>
              <input type="radio" name="blood" id="B" onChange={handleBloodTypeChange} value="3"/><label htmlFor="B">3 (B)</label>
              <input type="radio" name="blood" id="AB" onChange={handleBloodTypeChange} value="4"/><label htmlFor="AB">4 (AB)</label>
            </div>
          </li>
          <li>
            <label htmlFor="cWeight">Current weight(kg) *</label><br />
            <input type="text" id="cWeight" onChange={handleCurrentWeightChange} value={cWeight}/>
          </li>
        </ul>
        <input type="submit" id="submit" />
      </form>
    </div>
  )
}

export default CalculatorForm