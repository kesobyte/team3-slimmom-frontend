import React from 'react';
import css from './MainPage.module.css';
import { useState } from 'react';

export const MainPage = () => {
const [bloodType, setBloodType] = useState('');
const [height, setHeight] = useState('');
const [age, setAge] = useState('');
const [cWeight, setCWeight] = useState('');
const [dWeight, setDWeight] = useState('');
  
  const handleBloodTypeChange = event => {
    setBloodType(event.target.value);
  };
  const handleHeightChange = event => {
    setHeight(event.target.value);
  };
  const handleAgeChange = event => {
    setAge(event.target.value);
  };
  const handleCurrentWeightChange = event => {
    setCWeight(event.target.value);
  };
  const handleDesiredWeight = event => {
    setDWeight(event.target.value);
  };


  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="xl:pt-[160px] md:pt-[100px] pt-[32px] xl:px-[20px] md:px-[32px] px-[20px]">
        <div className={css.formWrapper}>
          <form className={css.form}>
            <span className={css.formTitle}>
              Calculate your daily calorie intake right now
            </span>
            <div className={css.formInputs}>
              <div className={css.formSections}>
                <label className={css.label}>
                  {height === '' && (
                    <span className={css.labelText}>Height *</span>
                  )}
                  <input
                    type="number"
                    name="height"
                    className={css.input}
                    title="Enter your height"
                    autoComplete="off"
                    required
                    onChange={handleHeightChange}
                  />
                </label>
                <label className={css.label}>
                  {age === '' && <span className={css.labelText}>Age *</span>}
                  <input
                    type="number"
                    name="age"
                    className={css.input}
                    title="Enter your age"
                    autoComplete="off"
                    required
                    onChange={handleAgeChange}
                  />
                </label>
                <label className={css.label}>
                  {cWeight === '' && (
                    <span className={css.labelText}>Current weight *</span>
                  )}
                  <input
                    type="number"
                    name="height"
                    className={css.input}
                    title="Enter your Current weight"
                    autoComplete="off"
                    required
                    onChange={handleCurrentWeightChange}
                  />
                </label>
              </div>
              <div className={css.formSections}>
                <label className={css.label}>
                  {dWeight === '' && (
                    <span className={css.labelText}>Desired weight *</span>
                  )}
                  <input
                    type="number"
                    name="height"
                    className={css.input}
                    title="Enter your Desired weight"
                    autoComplete="off"
                    required
                    onChange={handleDesiredWeight}
                  />
                </label>

                <div className={css.radioWrapper}>
                  <div className={css.radioTitleLabel}>Blood type *</div>
                  <div className={css.radioOptions}>
                    <div className={css.radioOptionsWrapper}>
                      <input
                        type="radio"
                        name="blood-type"
                        value="1"
                        className={`${css.radioArea} ${css.radioInput}`}
                        id="1"
                      />
                      <label className={css.radioLabelWrapper} for="1">
                        <span className={css.radioCircle}>
                          <span className={css.radioSelector}></span>
                        </span>
                        <span className={css.radioLabelText}>1</span>
                      </label>
                    </div>
                    <div className={css.radioOptionsWrapper}>
                      <input
                        type="radio"
                        name="blood-type"
                        value="2"
                        className={`${css.radioArea} ${css.radioInput}`}
                        id="2"
                      />
                      <label className={css.radioLabelWrapper} for="2">
                        <span className={css.radioCircle}>
                          <span className={css.radioSelector}></span>
                        </span>
                        <span className={css.radioLabelText}>2</span>
                      </label>
                    </div>
                    <div className={css.radioOptionsWrapper}>
                      <input
                        type="radio"
                        name="blood-type"
                        value="3"
                        className={`${css.radioArea} ${css.radioInput}`}
                        id="3"
                      />
                      <label className={css.radioLabelWrapper} for="3">
                        <span className={css.radioCircle}>
                          <span className={css.radioSelector}></span>
                        </span>
                        <span className={css.radioLabelText}>3</span>
                      </label>
                    </div>
                    <div className={css.radioOptionsWrapper}>
                      <input
                        type="radio"
                        name="blood-type"
                        value="4"
                        className={`${css.radioArea} ${css.radioInput}`}
                        id="4"
                      />
                      <label className={css.radioLabelWrapper} for="4">
                        <span className={css.radioCircle}>
                          <span className={css.radioSelector}></span>
                        </span>
                        <span className={css.radioLabelText}>4</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className={css.button}>Start losing weight</button>
          </form>
        </div>
      </div>
    </div>
  );
};
