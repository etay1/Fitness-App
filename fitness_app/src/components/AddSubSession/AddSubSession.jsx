import React, { useState } from 'react';

export const AddSubSession = () => {
  const [isCardioActive, setCardioActive] = useState(true);

  const toggleComponent = () => {
    setCardioActive(!isCardioActive);
  };

  const customStyles = `
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff; 
      color: #ffffff; 
    }

    .subsession-container {
      text-align: center;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Toggle switch styles */
    .toggle-switch {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px; 
      margin-bottom: 20px;
    }

    .toggle-switch label {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #00cc44;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: relative;
      cursor: pointer;
      width: 90px;
      height: 34px;
      background-color: #00cc44; 
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #ffffff; 
      transition: .4s;
      border-radius: 50%;
      position: absolute;
    }

    input:checked + .slider {
      background-color: #00cc44; 
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    .workout-component {
        display: none;
        width: 600px; 
        margin: 0 auto; 
        background-color: #ffffff; 
        padding: 20px;
        border-radius: 15px;
        margin-top: 20px;
        position: relative; 
      }
    
      .workout-component.active {
        display: block;
      }
    
      /* Styles for the workout components */
      .cardio, .weight, .flexibility {
        border-radius: 10px;
        background-color: #ffffff; 
        position: relative; 
      }
    
      /* Header styles */
      h2 {
        color: #00cc44; 
      }
    
      /* Done button styles */
      .done-button, .add-another-button {
        background-color: #00cc44;
        color: #ffffff; 
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
      }
    
      .done-button:hover,
      .done-button:active,
      .add-another-button:hover,
      .add-another-button:active {
        transform: scale(1.1);
      }
    
      .workout-component.active .done-button,
      .workout-component.active .add-another-button {
        opacity: 1;
      }
    
      /* Weight component fields */
      .weight-fields, .cardio-fields {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
      }
    
      .weight-fields span, .cardio-fields span {
        margin: 10px;
        color: #00cc44; 
        font-weight: bold;
      }
      
      .button-container {
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 10px;
      }

      .number-field {
        width: 60px;
        padding: 8px;
        margin: 5px;
        border: 1px solid #00cc44;
        border-radius: 5px;
        color: #00cc44;
        background-color: #ffffff;
        text-align: center;
        font-weight: bold;
      }
  
      .number-input {
        width: 60px;
        padding: 8px;
        margin: 5px;
        border: 1px solid #00cc44;
        border-radius: 5px;
        color: #00cc44;
        background-color: #ffffff;
        text-align: center;
      }
  `;

  const cardioComponent = () => {

  }

  const weightComponent = () => {
  }

  return (

    <div className='page'>
        <div className='container'>

        <div style={{ position: 'relative' }}>
      <style>{customStyles}</style>
      <div className="subsession-container">
        
        <div className="toggle-switch">
          <label>
            <span><strong>Weight Exercise</strong></span>
            <input
              type="checkbox"
              id="toggleSwitch"
              onChange={toggleComponent}
              checked={isCardioActive}
            />
            <span className="slider"></span>
            <span><strong>Cardio Exercise</strong></span>
          </label>
        </div>

        {isCardioActive ? (
          <div id="cardio" className={`workout-component cardio active`}>
            <h2>Cardio Workout</h2>
            <div className="cardio-fields">
              <span>Cardio Exercise</span>
              <span>Start Time</span>
              <span>End Time</span>
            </div>
            <div className="button-container">
              <button className="done-button">Done</button>
              <button className="add-another-button">Add Another</button>
            </div>
          </div>
        ) : (
          <div id="weight" className={`workout-component weight active`}>
            <h2>Weight Workout</h2>
            <div className="weight-fields">
              <span>Weight Exercise</span>
              <span>Sets</span>
              <span>Reps/Set</span>
              <span>Start Time</span>
              <span>End Time</span>
            </div>
            <div className="button-container">
              <button className="done-button">Done</button>
              <button className="add-another-button">Add Another</button>
            </div>
          </div>
        )}
      </div>
    </div>

        </div>
    </div>
   
  );
};