import React from 'react';
import css from './MainPage.module.css';
import { useState } from 'react';
import backArrow from './backArrow.png';

export const MainPage = () => {
const [bloodType, setBloodType] = useState('');
const [height, setHeight] = useState('');
const [age, setAge] = useState('');
const [cWeight, setCWeight] = useState('');
  const [dWeight, setDWeight] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [result, setResult] = useState();
  
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


  const handleModalClose = event => {
    setModalOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const dailyCalorieIntake =
      Math.ceil (10 * cWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (cWeight - dWeight));
    setResult(dailyCalorieIntake);
   setModalOpen(true);
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className={css.overlayWrapper}>
        {isModalOpen === true && (
          <div className={css.overlay}>
            <button className={css.overlayClose} onClick={handleModalClose}>
              <img src={backArrow} width="12px" height="7px" />
            </button>
            <div className={css.modal}>
              <div className={css.modalTitle}>
                Your recommended daily calorie intake is
              </div>
              <div className={css.modalValueWrapper}>
                <span className={css.modalValue}>{result}</span>
                <span className={css.modalValueUnit}>ккал</span>
              </div>
              <div className={css.modalHeading}>Foods you should not eat</div>
              <ul className={css.modalList}>
                <li>Flour products</li>
                <li>Milk</li>
                <li>Red meat</li>
                <li>Smoked meats</li>
              </ul>
              <button className={css.button}>Start losing weight</button>
            </div>
          </div>
        )}
        <div className={css.pageContainer}>
          <div className={css.formWrapper}>
            <form className={css.form} onSubmit={handleSubmit}>
              <span className={css.formTitle}>
                <span className={css.formTitleSection}>
                  Calculate your daily calorie
                </span>
                <span className={css.formTitleSection}>intake right now</span>
              </span>
              <div className={css.formInputs}>
                <div className={css.formSection}>
                  <label className={css.label}>
                    {height === '' && (
                      <span className={css.labelText}>
                        Height<span className={css.labelTextSmall}>(cm)</span> *
                      </span>
                    )}
                    <input
                      type="number"
                      name="height"
                      className={css.input}
                      title="Enter your height in Centimeters"
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
                      <span className={css.labelText}>
                        Current weight
                        <span className={css.labelTextSmall}>(kg)</span> *
                      </span>
                    )}
                    <input
                      type="number"
                      name="currentWeight"
                      className={css.input}
                      title="Enter your Current weight in Kilograms"
                      autoComplete="off"
                      required
                      onChange={handleCurrentWeightChange}
                    />
                  </label>
                </div>
                <div className={css.formSection}>
                  <label className={css.label}>
                    {dWeight === '' && (
                      <span className={css.labelText}>
                        Desired weight
                        <span className={css.labelTextSmall}>(kg)</span> *
                      </span>
                    )}
                    <input
                      type="number"
                      name="desiredWeight"
                      className={css.input}
                      title="Enter your Desired weight in Kilograms"
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
                          name="blood-type-1"
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
                          name="blood-type-2"
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
                          name="blood-type-3"
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
                          name="blood-type-4"
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
    </div>
  );
};
