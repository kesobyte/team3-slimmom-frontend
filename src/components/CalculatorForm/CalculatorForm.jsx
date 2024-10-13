
import React, { useEffect, useState } from 'react';
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
  
//   calculation of calorie
  useEffect(() => {
    const caloriePerWeight= cWeight*10;
    const caloriePerHeight= height*6.25;
    const caloriePerAge= age*5;
    const adjustCalorie= (cWeight-dWeight)*10;
    const calorieSum = caloriePerWeight + caloriePerHeight - caloriePerAge - 161 - adjustCalorie
    setDailyCalorie(calorieSum);
    return () => {
      return dailyCalorie;
    }
  }, [height,age,cWeight,dWeight,dailyCalorie])
  

//   submit details to backend
  const calculateBMR = (event) => {
    event.preventDefault();
    console.log(dailyCalorie)
  }

  return (
  <>
    <div className='w-[608px] max-md:hidden pb-[48px]' >
      <h1 className='text-4xl font-bold pb-[68px]'>Calculate your daily calorie <br /> intake right now</h1>
      <form className="text-sm font-bold"
      onSubmit={calculateBMR}>
        <ul className='flex flex-wrap gap-x-8 gap-y-10'>
          <li className='leading-3'>
            <label htmlFor="userHeight">Height(cm) *
            </label><br/><br/>
            <input type="text" className="border-b-2" id="userHeight" name="userHeight" onChange={handleHeightChange} value={height}/>
          </li>
          <li className='leading-3'>
            <label htmlFor="dWeight">Desired weight(kg) *</label><br /><br />
            <input type="text" className="border-b-2" id="dWeight" onChange={handleDesiredWeight} value={dWeight}/>
          </li>
          <li className='leading-3'>
            <label htmlFor="age">Age(years) *</label><br /><br />
            <input type="text" className="border-b-2" id="age" onChange={handleAgeChange} value={age}/>
          </li>
          <li className='leading-3'>
            <div>Blood type *<br /><br />
              <input type="radio" name="blood" id="A" onChange={handleBloodTypeChange} value="1"/><label className='pl-1 pr-2' htmlFor="A">1(A)</label>
              <input type="radio" name="blood" id="B" onChange={handleBloodTypeChange} value="2"/><label className='pl-1 pr-2' htmlFor="B">2(B)</label>
              <input type="radio" name="blood" id="AB" onChange={handleBloodTypeChange} value="3"/><label className='pl-1 pr-2' htmlFor="AB">3(AB)</label>
              <input type="radio" name="blood" id="O" onChange={handleBloodTypeChange} value="4"/><label className='pl-1 pr-2' htmlFor="O">4(O)</label>
            </div>
          </li>
          <li className='leading-3'>
            <label htmlFor="cWeight">Current weight(kg) *</label><br /><br />
            <input type="text" className="border-b-2" id="cWeight" onChange={handleCurrentWeightChange} value={cWeight}/>
          </li>
        </ul>
        <button className="flex rounded-[30px] bg-[#FC842D] mt-[60px] md:mx-0 xl:mx-auto py-[13px] px-[25px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)]" type="submit">Start losing weight</button>
      </form>
      {/* <Modal bloodType={bloodType} age={age} height={height} cWeight={cWeight} dWeight={dWeight} dailyCalorie={dailyCalorie} isHidden/> */}
    </div>

{/* mobile */}
    <div className='w-[280px] md:hidden pb-[48px]'>
      <h1 className='text-lg font-bold pb-[32px]'>Calculate your daily calorie<br/> intake right now</h1>
      <form className="text-sm font-bold" onSubmit={calculateBMR}>
        <ul className='flex flex-wrap gap-y-8'>
          <li className='leading-3'>
            <label htmlFor="userHeight">Height(cm) *
            </label><br/> <br />
            <input type="text" id="userHeight" className="border-b-2" name="userHeight" onChange={handleHeightChange} value={height}/>
          </li>
          <li className='leading-3'>
            <label htmlFor="age">Age(years) *</label><br /> <br />
            <input type="text" id="age" className="border-b-2" onChange={handleAgeChange} value={age}/>
          </li>
          <li className='leading-3'>
            <label htmlFor="cWeight">Current weight(kg) *</label><br /> <br />
            <input type="text" id="cWeight" className="border-b-2" onChange={handleCurrentWeightChange} value={cWeight}/>
          </li>
          <li className='leading-3'>
            <label htmlFor="dWeight">Desired weight(kg) *</label><br /> <br />
            <input type="text" id="dWeight" className="border-b-2" onChange={handleDesiredWeight} value={dWeight}/>
          </li>
          <li className='leading-3'>
          <div>Blood type *<br /><br />
              <input type="radio" name="blood" id="A" onChange={handleBloodTypeChange} value="1"/><label className='pl-1 pr-2' htmlFor="A">1(A)</label>
              <input type="radio" name="blood" id="B" onChange={handleBloodTypeChange} value="2"/><label className='pl-1 pr-2' htmlFor="B">2(B)</label>
              <input type="radio" name="blood" id="AB" onChange={handleBloodTypeChange} value="3"/><label className='pl-1 pr-2' htmlFor="AB">3(AB)</label>
              <input type="radio" name="blood" id="O" onChange={handleBloodTypeChange} value="4"/><label className='pl-1 pr-2' htmlFor="O">4(O)</label>
            </div>
          </li>
        </ul>
        <button className="flex rounded-[30px] bg-[#FC842D] mt-[40px] md:mx-0 xl:mx-auto py-[13px] px-[25px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)]" type="submit">Start losing weight</button>
      </form>
    </div>
  </>
  )
}

export default CalculatorForm